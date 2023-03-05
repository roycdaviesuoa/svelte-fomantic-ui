<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"

    export let ui: boolean=false;
    export let id: string="";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

<div {id} on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " buttons"} {...otherProps($$restProps)}>
    <slot />
</div>