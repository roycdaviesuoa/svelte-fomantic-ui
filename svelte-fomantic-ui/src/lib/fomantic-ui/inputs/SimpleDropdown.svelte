<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"

    // NOT YET COMPLETE
    export let ui: boolean=false;
    export let value: string = "";
    export let name: string = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

<select class={(ui?"ui ":"") + uiProps($$restProps) + " dropdown"} bind:value on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}>
    <slot/>
</select>

