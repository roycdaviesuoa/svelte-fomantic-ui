<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    import { createEventDispatcher } from 'svelte';

    export let value: string="";
    export let id: string="";

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

<input {id} disabled="" class={uiProps($$restProps) + " input"} bind:value={value} on:click={doClick} on:change on:keydown on:keypress on:keyup {...otherProps($$restProps)}/>
