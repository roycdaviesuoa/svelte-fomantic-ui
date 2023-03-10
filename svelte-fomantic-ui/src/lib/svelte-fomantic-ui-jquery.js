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
import loadEmbeds from './modules/Embed';

$(() =>
{
    loadCalendars();
    loadAccordions();
    loadDropdowns();
    loadMenus();
    loadCheckboxes();
    loadEmbeds();
});