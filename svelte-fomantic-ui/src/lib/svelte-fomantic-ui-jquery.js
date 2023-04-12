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
            let moduleType = module["type"];
            let activate = module["activate"];
    
            if (moduleType) {
                let settings = module["settings"]?module["settings"]:{};
    
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
function construct_jquery_command(firstarg) {
    console.log(firstarg);
    // Jquery commands always begin with a $
    var jquery_command = "$";

    // If there is an id parameter, then the jquery command is for a specific element.  Sometimes, though it is a general setup,
    // in which case there is no id, unles there is a class.
    if (firstarg.hasOwnProperty("id")) {
        jquery_command += "(\'#" + firstarg.id + "\')";
    }
    else if(firstarg.hasOwnProperty("class")) {
        jquery_command += "(\'." + firstarg.class + "\')";
    }

    // Now we need to find the type, ie the sort of element, eg modal or accordion
    let theType = "";
    if (firstarg.hasOwnProperty("id")) {
        // First, let's see if this is a module
        let settings = get_settings($("#"+firstarg.id).data("module"));
        console.log(settings);
        
        let theType = extract_module_type_from_settings(settings);
        if (!theType) {
            theType = firstarg.type;
        }
    }
    else {
        theType = firstarg.type;
    }
    console.log("the Type", theType);

    // If there is a settings parameter, use that as the settings to send in, otherwise empty brackets.
    jquery_command += ("." + theType + (firstarg.hasOwnProperty("settings")?"("+JSON.stringify(firstarg.settings)+")":"()"));

    // If there are additional commands, add those to the end.
    firstarg.commands.forEach ((command) => {
        jquery_command += "." + theType + "(\'" + command + "\')";
    })

    console.log(jquery_command);

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
        // returnvalue = eval (construct_jquery_command(firstarg));
        let newFunction = new Function(construct_jquery_command(firstarg));
        returnvalue = newFunction();
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
    if (Array.isArray(settings)) {
        settings.forEach((setting) => {
            if (setting["type"] !== "popup")
            {
                command = setting["type"];
            }
        });
        // The module is the popup module, not one with popup added
        if (!command && (settings.length>0))
        {
            command = "popup";
        }
    }
    else
    {
        command = settings["type"];
    }
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
// This is called above when getting the settings.  Note that the Svelte parameter passing process has already converted it bcak from serialised object
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
            if (typeof val === 'string' && (val.startsWith('function') || (val.startsWith('(') && (val.indexOf('=>') > -1)))) {
                // If the property is a function string, convert it back into a function
                // obj[key] = eval('('+val+')');
                obj[key] = new Function(val);
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