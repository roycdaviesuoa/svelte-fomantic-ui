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

    $("[data-module_type]").each(function() {
        let moduleType = $(this).data("module_type");
        let serialized = $(this).attr('data-settings');
        let settings;

        if (moduleType === "menu"){
            settings=eval('('+serialized+')');
            console.log(moduleType, settings);
        }
        else
        {
            settings=deserialize(serialized);
        }
        switch (moduleType) {
            case "": break;
            case "calendar" :
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
            case "progress":
            case "embed":
                let activate = this.attributes.activate?JSON.parse(this.attributes.activate.value):false;
                if (activate) {
                    $(this)[moduleType](settings);
                }
                break;
            default :
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
    var jquery_command = "$";
    if (firstarg.hasOwnProperty("id")) {
        jquery_command += "(\'#" + firstarg.id + "\')";
    }
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
    jquery_command += ("." + theType + (firstarg.hasOwnProperty("settings")?"("+JSON.stringify(firstarg.settings)+")":"()"));
    firstarg.commands.forEach ((command) => {
        jquery_command += "." + theType + "(\'" + command + "\')";
    })

    return jquery_command;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Send a behaviour to an item, and optionally return a result
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export const behavior = function(...args) {
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
    return (eval('(' + serialized + ")"));

    // // Create a new object to hold the deserialized version
    // const obj = {};

    // // Iterate over the serialized object's properties
    // for (const key in serialized) {
    //     if (serialized.hasOwnProperty(key))
    //     {
    //         const val = serialized[key];
    //         if (typeof val === 'string' && (val.startsWith('function') || (val.startsWith('(') && (val.indexOf('=>') > -1)))) {
    //             // If the property is a function string, convert it back into a function
    //             obj[key] = eval('('+val+')');
    //         } else {
    //             // Otherwise, add the property to the deserialized object
    //             obj[key] = val;
    //         }
    //     }
    // }

    // // Return the deserialized object
    // return obj;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------