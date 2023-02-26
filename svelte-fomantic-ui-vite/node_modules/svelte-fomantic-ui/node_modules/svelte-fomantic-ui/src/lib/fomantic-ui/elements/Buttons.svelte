<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"

    export let ui: boolean=false;
    export let name: string="";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        dispatch('click', {name: name, target: event.target});
    }
</script>

<div on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " buttons"} {...otherProps($$restProps)}>
    <slot />
</div>