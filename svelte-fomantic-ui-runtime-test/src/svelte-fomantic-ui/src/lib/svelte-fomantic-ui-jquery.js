// @ts-ignore

// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
//
// Load the various modules required by Fomantic UI.
// ******************************************************************************************************************************************************
import loadCalendars from 'svelte-fomantic-ui/src/lib/modules/Calendar';
import loadAccordions from 'svelte-fomantic-ui/src/lib/modules/Accordion';
import loadDropdowns from 'svelte-fomantic-ui/src/lib/modules/Dropdown';
import loadMenus from 'svelte-fomantic-ui/src/lib/collections/Menu';
import loadCheckboxes from 'svelte-fomantic-ui/src/lib/inputs/Checkbox';

// eslint-disable-next-line
$(() =>
{
    loadCalendars();
    loadAccordions();
    loadDropdowns();
    loadMenus();
    loadCheckboxes();
});