<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
    export let name: string = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

<a class={(ui?"ui ":"") + uiProps($$restProps)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup>
    <slot />
</a>