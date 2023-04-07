<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {classString, otherProps} from "../svelte-fomantic-ui"
    import { createEventDispatcher } from 'svelte';

    export let value: string="";
    export let checked: boolean=false;
    export let group: string="";
    export let id: string=undefined;
    export let ui: boolean=false;
    export let popup: boolean=false;

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

{#if ui}
    <div class={classString(ui, $$restProps, "input")} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else if otherProps($$restProps).hasOwnProperty("type") && otherProps($$restProps)["type"] == "checkbox"}
    <input type="checkbox" {id} class={classString(ui, $$restProps, "input")} bind:group bind:checked bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
{:else if otherProps($$restProps).hasOwnProperty("type") && otherProps($$restProps)["type"] == "radio"}
    <input type="radio" {id} class={classString(ui, $$restProps, "input")} bind:group bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
{:else}
    <input {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
{/if}
