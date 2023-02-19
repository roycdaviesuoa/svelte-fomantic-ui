<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    import { createEventDispatcher } from 'svelte';

    export let value: string="";
    export let password: boolean=false;

    export let name: string="";

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {name: name, target: event.target});
    }
</script>

{#if password}
    <input type="password" class={uiProps($$restProps)} bind:value={value} on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}/>
{:else}
    <input type="text" class={uiProps($$restProps)} bind:value={value} on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}/>
{/if}