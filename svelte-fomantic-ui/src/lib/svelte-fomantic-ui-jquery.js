// @ts-ignore

// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
//
// Load the various modules required by Fomantic UI.
// ******************************************************************************************************************************************************
import loadCalendars from './modules/Calendar';
import loadAccordions from './modules/Accordion';
import loadDropdowns from './modules/Dropdown';
import loadCheckboxes from './inputs/Checkbox';
import loadForms from './collections/Form';
import loadEmbeds from './modules/Embed';
import loadProgresses from './modules/Progress';
import loadPopups from './modules/Popup';
import loadRatings from './modules/Rating';
import loadModals from './modules/Modal';

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Runs when the page is loaded to set up the items
// ------------------------------------------------------------------------------------------------------------------------------------------------------
$(() =>
{
    // THe ones that are not commented out have specific requirements for setting up, for example the calendar can pass in some special parameters
    // for linking start and end calendars, whilst the embed doesn't want to be started on page load as it will take too much memory.
    loadCalendars();
    // loadAccordions();
    // loadDropdowns();
    // loadCheckboxes();
    loadEmbeds();
    loadProgresses();
    // loadForms();
    // loadPopups();
    loadModals();

    $("[data-module_type]").each(function() {
        let moduleType = $(this).data("module_type");
        console.log($(this));
        switch (moduleType) {
            case "":
            case "calendar" :
            case "embed":
            case "progress":
            case "modal":
            // case "popup":
                break;
            default :
                let settings=$(this).data('settings');
                console.log ($(this));
                let jquery_command = "$(this)." + moduleType + '(' + (settings?JSON.stringify(settings):"") + ')';
                console.log(jquery_command);
                eval(jquery_command);
                // console.log(moduleType, settings);
                // if (settings)
                //     $(this)[moduleType](settings);
                // else
                //     $(this)[moduleType]();
                break;
        }
    });
});
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
    console.log("JQuery", jquery_command);
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
        console.log(returnvalue);
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
