<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    import { onMount, onDestroy } from "svelte";

    export let ui: boolean=false;
    export let value: string = "";
    export let selected: string = "";
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
    export let settings: object = undefined;
    export let multiple: boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // ----------------------------------------------------------------------------------------------------------------------------------------------
    // In order to be able to collate the items selected for a multiple selection, we have to know when a selection or deletion is made.
    // The onChange function of the dropdown settings does that nicely, and the value given is an array of the currently selected items.
    // Unfortunately, because the settings are serialised and then deserialised and run in a javascript function in a different context,
    // we have no access to the variables in this module.  The serialization process is necessary as Svelte can't deal with complex objects
    // passed as propse. Therefore, the current work-around is to create an eventlistener on an element
    // in the DOM that both parts of the code would know about (eg documemt), and use that as a way to communicate back from the function
    // to this module.

    // First, we create a truly random name for the event to listen to.  Because each <Select> module uses this code, we have to create a
    // unqiue event channel for each.
    const channelname = [...Array(12)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

    // Then set up the listener, first making sure we don't already have one (otherwise the event will fire more than once).
    onMount(() => {
        if (multiple) {
            document.removeEventListener(channelname, ()=>{});
            document.addEventListener(channelname, (newvalue) => { selected = newvalue["detail"]; value = selected; })
        }
    })

    // Remove the event listener when this module is destroyed.
    onDestroy(() => {
        if (multiple) {
            document.removeEventListener(channelname, ()=>{});
        }
    })

    // Set up the function for onChange.  Because we can't just put the value of channelname into the function as a variable because it is not
    // running in this context, we have to create the function from a string.
    const additionalSettings = {
        onChange: new Function("value", "text", "$choice", `document.dispatchEvent( new CustomEvent("` + channelname + `", { detail: value.join(",") } ) );`)
    };
    // ----------------------------------------------------------------------------------------------------------------------------------------------


    function doClick(e: any) {
        if (e.target.attributes["data-value"]) {
            value = e.target.attributes["data-value"].value;
            selected = value;
            if (id) {
                dispatch('change', {id: id, target: e.target, value: value});
            }
            else {
                dispatch('change', {target: e.target, value: value});
            }
        }
    }

    function doChange(e: any) {
        selected = e.target.value;
        value = selected;
        if (id) {
            dispatch('change', {id: id, target: e.target, value: value});
        }
        else {
            dispatch('change', {target: e.target, value: value});
        }
    }
</script>

{#if multiple}
    <select {id} multiple class={classString(ui, $$restProps, "")} on:change={doChange} on:click on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", {...settings, ...additionalSettings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{:else}
    <select {id} class={classString(ui, $$restProps, "")} bind:value on:change on:click={doClick} on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", {settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{/if}

