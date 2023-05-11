<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialise, functionize, decommission } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let selected: any = undefined;
    export let value: any = undefined;
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
    export let settings: object = undefined;
    export let multiple: boolean = false;
    export let values: boolean = false;
    export let functions : object = undefined;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const moreFunctions = {
        onChange: {
            value: null,
            text: null,
            $choice: null,

            _: (data) => { selected = data.value; value = selected; }
        }
    };

    import { onDestroy } from "svelte";
    const ID = initialise(id, functions);
    onDestroy(() => { decommission(ID, id, functions); });


    function doClick(e: any) {
        if (e.target.attributes.hasOwnProperty("data-value") || e.target.attributes.hasOwnProperty("value") || (!values && e.target.innerText)) {
            value = e.target.attributes.hasOwnProperty("data-value") ? e.target.attributes["data-value"].value : ( e.target.attributes.hasOwnProperty("value").value ? e.target.attributes["value"].value : ( values ? undefined : e.target.innerText.trim() ) );
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
    <select {id} multiple class={classString(ui, $$restProps, "")} on:change={doChange} on:click on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", {...functionize(ID, id, {...functions, ...moreFunctions}), ...settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{:else}
    <select {id} class={classString(ui, $$restProps, "")} bind:value on:change on:click={doClick} on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", {...functionize(ID, id, functions), ...settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{/if}

