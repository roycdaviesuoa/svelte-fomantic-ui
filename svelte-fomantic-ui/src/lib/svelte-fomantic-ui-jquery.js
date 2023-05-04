// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
//
// Load the various modules required by Fomantic UI.
// ******************************************************************************************************************************************************
import { tableSort } from './collections/Tablesort';
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Runs when the page is loaded to set up the items
// ------------------------------------------------------------------------------------------------------------------------------------------------------
$(() =>
{
    reload();
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// (Re)load the modules, which mostly is required to initialise each of the modules once the page is loaded.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export const reload = function()
{
    // Initialise the Tablesort code
    tableSort();

    // Go through each of the modules
    $("[data-module]").each(function() {
        let modules = get_settings($(this).data("module"));

        $.each(modules, (_, module) => 
        {
            if (module.hasOwnProperty("type")) {
                let moduleType = module["type"];
                let activate = module.hasOwnProperty("activate")?module["activate"]:false;
                let settings = module.hasOwnProperty("settings")?(module["settings"].hasOwnProperty("settings")?module["settings"]["settings"]:module["settings"]):{};
    
                switch (moduleType) {
                    case "": break; // Sometimes, there may be elements with blank module names
                    case "calendar" : // We have to do something special for calendar
                        if (typeof settings === 'object' && (settings)) {
                            if (settings.hasOwnProperty("startCalendar")) {
                                settings.startCalendar = $("#"+settings.startCalendar);
                            }
                            if (settings.hasOwnProperty("endCalendar")) {
                                settings.endCalendar = $("#"+settings.endCalendar);
                            }
                        }
                        $(this)[moduleType](settings);
                        break;
                    case "nag":
                        $(this)[moduleType](settings);
                        break;
                    case "popup":
                        const extraSettings = { delay: { show: 100, hide: 300 } };
                        $(this)[moduleType]({...extraSettings, ...settings});
                        break;
                    case "dropdown":
                        // console.log(settings);
                        $(this)[moduleType](settings);
                        break;
                    case "progress": // Progress and Embed have the ability to activate on load
                    case "embed":
                        if (activate) {
                            $(this)[moduleType](settings);
                        }
                        break;
                    default : // Everything else
                        $(this)[moduleType](settings);
                        break;
                }
            }
        });
    });
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Create a JQuery command from the parameters object
// The commands can be one of two types, either referring to a specific HTML element, or a general jquery behaviour command.  For exmaple:
// $.modal({ ... various parameters ... }).modal('show');
// $("#example1").modal('show');
// These are constructed from an object of data sent in as the first argument, for example:
// {commands:['show'], settings:{ ... various parameters ...}}
// {id: "example1", commands: ['show'], settings:{ ... various parameters ...}}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function construct_jquery_command(params) {
    var jquery_command = "";

    // First, find the element type, eg modal or accordion
    let element = "";
    if (params.hasOwnProperty("id")) {
        // First, let's see if the DOM element being refered to is a module wih settings
        let settings = get_settings($("#"+params.id).data("module"));

        // Extract the module type / name
        element = extract_module_type_from_settings(settings);

        // If there wasn't one, grab it from the object parameter
        if (!element || (element === "")) { element = params.type; }
    }
    else {
        // Otherwise, we have to include that in the object parameter explicitly
        element = params.type;
    }

    if (element !== "")
    {
        // Jquery commands always begin with a $
        jquery_command += "$";
    
        // If there is an id parameter, then the jquery command is for a specific element.  Sometimes, though it is a general setup,
        // in which case there is no id, unles there is a class.
        if (params.hasOwnProperty("id")) {
            jquery_command += "(\'#" + params.id + "\')";
        }
        else if(params.hasOwnProperty("class")) {
            jquery_command += "(\'." + params.class + "\')";
        }
    
        // If there is a settings parameter, use that as the settings to send in, otherwise empty brackets.
        if (params.hasOwnProperty("settings")) {
            jquery_command += ("." + element + "(" + JSON.stringify(params.settings) + ")");
        }
    
        if (params.hasOwnProperty("commands")) {
            // If there are additional commands, add those to the end.
            params.commands.forEach ((command) => {
                jquery_command += "." + element + "(\'" + command + "\')";
            })
        } else {
            jquery_command += "." + element + "()";
        }
    }

    // Finally, return the completed jquery command as a string
    return jquery_command;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Send a behaviour to an item, and optionally return a result
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export const behavior = function(...args) {
    // Grab the first argument - this should either be an object with settings, or the first of an array of string, being the ID of the element the
    // commands are for.
    let firstarg = args.shift();
    let returnvalue;
    if (typeof firstarg === 'object')
    {
        // Data sent in is in the form of an object
        returnvalue = eval(construct_jquery_command(firstarg));
    }
    else
    {
        // Data sent in is in the form of several parameters which args puts into an array
        // The first is always the id of the item to be worked with
        let id = firstarg;
        // Now, let's find out the data on the module itself
        // let settings = $("#"+id).data("module");
        let settings = get_settings($("#"+id).data("module"));
        let command = extract_module_type_from_settings(settings);
        if (command && id && ($("#"+id)[command])) {
            returnvalue = $("#"+id)[command](...args);
        }
        else {
            return null;
        }
    }

    return returnvalue;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Given the data-module info, give back a deserialized array of objects
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function get_settings(settings)
{
    let return_settings = [];
    if (settings) {
        if (Array.isArray(settings))
        {
            settings.forEach((setting) => {
                if (typeof(setting) === "string")
                {
                    return_settings.push(deserialize(setting));
                }
                else
                {
                    return_settings.push(setting);
                }
            });
        }
        else
        {
            return_settings.push(settings);
        }
    }
    return return_settings;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Give an array of settings or a single setting, find the module name
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function extract_module_type_from_settings(settings) {
    let command = undefined;

    if (settings.hasOwnProperty("type")) {
        command = settings["type"];
    } else {
        settings.forEach((setting) => {
            if (setting["type"] !== "popup")
            {
                command = setting["type"];
            }

            // The module is the popup module, not one with popup added
            if (!command && (settings.length>0))
            {
                command = "popup";
            }
        });
    };

    return command;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Send an update to an item
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export const update = function (...args) {
    behavior(...args);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// This is called above when getting the settings.  Note that the Svelte parameter passing process has already converted it back from serialised object
// to an object, but we still have to reconvert back the functions.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function deserialize(serialized)
{
    let deserialized = {};

    try {
        deserialized = JSON.parse(serialized);
    } catch (e) {
      // Oh well, but whatever...
    }

    // Create a new object to hold the deserialized version
    const obj = {};

    // Iterate over the serialized object's properties
    for (const key in deserialized) {
        if (deserialized.hasOwnProperty(key))
        {
            const val = deserialized[key];

            if (key === "settings")
            {
                obj["settings"] = {};

                for (const key2 in val)
                {
                    const val2 = val[key2];
                    if (typeof val2 === 'string' && (val2.startsWith('function') || val2.indexOf('=>') > -1)) {
                        // If the property is a function string, convert it back into a function
                        obj["settings"][key2] = eval('('+val2+')');
                        // obj[key] = new Function(val);
                    } else {
                        // Otherwise, add the property to the deserialized object
                        obj["settings"][key2] = val2;
                    }
                }
            }
            else if (typeof val === 'string' && (val.startsWith('function') || val.indexOf('=>') > -1)) {
                // If the property is a function string, convert it back into a function
                obj[key] = eval('('+val+')');
                // obj[key] = new Function(val);
            } else {
                // Otherwise, add the property to the deserialized object
                obj[key] = val;
            }
        }
    }
    
    // Return the deserialized object
    return obj;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------