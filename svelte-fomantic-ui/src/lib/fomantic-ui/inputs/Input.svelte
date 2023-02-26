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

    export let id: string="";

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

{#if password}
    <input {id} type="password" class={uiProps($$restProps)} bind:value={value} on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}/>
{:else}
    <input {id} type="text" class={uiProps($$restProps)} bind:value={value} on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}/>
{/if}