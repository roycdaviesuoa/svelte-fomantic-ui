// @ts-ignore

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

    // $("[data-module]").each(function() {
    //     let module = $(this).data("module");
    //     if (module)
    //     {
    //         let array = Object.keys(module).filter(function(value, index, arr){
    //             return value !== "activate";
    //         });

    //         let moduleType = array[0];
    //         if (moduleType) {
    //             let serialized = $(this).attr('data-module');
    //             let settings = deserialize(serialized)[moduleType];
    //             console.log(moduleType, settings);

    //             switch (moduleType) {
    //                 case "": break; // Sometimes, there may be elements with blank module names
    //                 case "calendar" : // We have to do something special for calendar
    //                     if (typeof settings === 'object' && (settings)) {
    //                         if (settings.hasOwnProperty("startCalendar")) {
    //                             settings.startCalendar = $("#"+settings.startCalendar);
    //                         }
    //                         if (settings.hasOwnProperty("endCalendar")) {
    //                             settings.endCalendar = $("#"+settings.endCalendar);
    //                         }
    //                     }
    //                     $(this)[moduleType](settings);
    //                     break;
    //                 case "progress": // Progress and Embed have the ability to activate on load
    //                 case "embed":
    //                     let activate = settings.hasOwnProperty("activate")?settings.activate:false;
    //                     if (activate) {
    //                         $(this)[moduleType](settings);
    //                     }
    //                     break;
    //                 default : // Everything else
    //                     $(this)[moduleType](settings);
    //                     break;
    //             }
    //         }
    //     }
    // });

    // Find each element that has a dete-module_type value - these are all the ones that need initialising
    $("[data-module_type]").each(function() {
        // Grab the module type
        let moduleType = $(this).data("module_type");
        // Grab the settings, if there are any
        let serialized = $(this).attr('data-settings');
        // Deserialize the settings
        let settings = deserialize(serialized);

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
                let activate = this.attributes.activate?JSON.parse(this.attributes.activate.value):false;
                if (activate) {
                    $(this)[moduleType](settings);
                }
                break;
            default : // Everything else
                $(this)[moduleType](settings);
                break;
        }
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
    // Jquery commands always begin with a $
    var jquery_command = "$";

    // If there is an id parameter, then the jquery command is for a specific element.  Sometime, though it is a general setup,
    // in which case there is no id
    if (firstarg.hasOwnProperty("id")) {
        jquery_command += "(\'#" + firstarg.id + "\')";
    }

    // Now we need to find the type, ie the sort of element, eg modal or accordion
    let theType = "";
    if (firstarg.hasOwnProperty("id")) {
        theType = $("#"+firstarg.id).data("module_type");
        if (!theType) {
            theType = firstarg.type;
        }
    }
    else {
        theType = firstarg.type;
    }

    // If there is a settings parameter, use that as the settings to send in, otherwise empty brackets.
    jquery_command += ("." + theType + (firstarg.hasOwnProperty("settings")?"("+JSON.stringify(firstarg.settings)+")":"()"));

    // If there are additional commands, add those to the end.
    firstarg.commands.forEach ((command) => {
        jquery_command += "." + theType + "(\'" + command + "\')";
    })

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
        returnvalue = eval (construct_jquery_command(firstarg));
    }
    else {
        let id = firstarg;
        let command = $("#"+id).data("module_type");
        if (command && id && ($("#"+id)[command])) {
            returnvalue = $("#"+id)[command](...args);
        }
    }
    return returnvalue;
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
                obj[key] = eval('('+val+')');
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