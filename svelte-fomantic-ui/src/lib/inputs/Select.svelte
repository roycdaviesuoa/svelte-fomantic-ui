<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"

    export let ui: boolean=false;
    export let value: string = "";
    export let id: string = "";
    export let popup: boolean=false;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {id: id, target:event.target})
    }
</script>

<select {id} class={(ui?"ui ":"") + uiProps($$restProps)} bind:value on:click={doClick} on:keydown on:keypress on:keyup data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot/>
</select>

