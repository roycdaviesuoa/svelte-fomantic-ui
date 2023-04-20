<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let value: string = "";
    export let selected: string = "";
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
    export let settings: object = undefined;
    export let multiple: boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

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
    <select {id} multiple class={classString(ui, $$restProps, "")} bind:value on:change={doChange} on:click on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", settings), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{:else}
    <select {id} class={classString(ui, $$restProps, "")} bind:value on:change on:click={doClick} on:keydown on:keypress on:keyup data-module={rationalize([serialize("dropdown", settings), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
        <slot/>
    </select>
{/if}

