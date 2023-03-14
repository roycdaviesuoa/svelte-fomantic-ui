// @ts-ignore

// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
//
// Load the various modules required by Fomantic UI.
// ******************************************************************************************************************************************************
import loadCalendars from './modules/Calendar';
import loadAccordions from './modules/Accordion';
import loadDropdowns from './modules/Dropdown';
import loadMenus from './collections/Menu';
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
    loadCalendars();
    // loadAccordions();
    // loadDropdowns();
    // loadMenus();
    // loadCheckboxes();
    loadEmbeds();
    loadProgresses();
    // loadForms();
    // loadPopups();
    loadModals();

    $("[data-module_type]").each(function() {
        let moduleType = $(this).data("module_type");
        switch (moduleType) {
            case "":
            case "calendar" :
            case "embed":
            case "progress":
            case "menu":
            case "modal":
                break;
            default :
            console.log(moduleType);
                $(this)[moduleType](); break;
        }
    });
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Create a JQuery command from the parameters object
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function construct_jquery_command(firstarg, ...args) {
    var jquery_command = "$";
    if (firstarg.hasOwnProperty("id")) {
        jquery_command += "(\'#" + firstarg.id + "\')";
    }
    jquery_command += ("." + firstarg.type + (firstarg.hasOwnProperty("settings")?"("+JSON.stringify(firstarg.settings)+")":"()"));
    firstarg.commands.forEach ((command) => {
        jquery_command += "." + firstarg.type + "(\'" + command + "\')";
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
        returnvalue = eval (construct_jquery_command(firstarg, ...args));
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
    let id = args.shift();
    if (typeof firstarg === 'object')
    {
        eval (construct_jquery_command(firstarg, ...args));
    }
    else {
        let id = firstarg;
        let command = $("#"+id).data("module_type");
        
        if (command && id && ($("#"+id)[command])) {
            $("#"+id)[command](...args);
        }
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
