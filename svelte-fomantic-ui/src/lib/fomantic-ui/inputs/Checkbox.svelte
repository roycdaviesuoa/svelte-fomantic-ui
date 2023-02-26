<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let id: string="";
    export let value: string="";
    export let checked: boolean=false;
    export let ui:boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {     
        dispatch('click', {id: event.target.id, value: event.target.value, checked: event.target.checked, target: event.target});
    }
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " checkbox"}>
    <input type="checkbox" {id} bind:checked bind:value on:click={doClick} {...otherProps($$restProps)}>
    <slot/>
</div>

