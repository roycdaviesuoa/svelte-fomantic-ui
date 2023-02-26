<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean = false;
    export let disabled: boolean = false;
    export let loading: boolean = false;
    export let small: boolean = false;
    export let medium: boolean = false;
    export let large: boolean = false;
    export let big: boolean = false;
    export let link: boolean = false;
    export let name: string="";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event if a link prop is used
    function doClick(event: any) {
        dispatch('click', {name: name, target: event.target});
    }
</script>

{#if link} 
    <em class = {(ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (link?"link ":"")} 
        data-emoji = {uiProps($$restProps)} on:click={doClick} on:keydown on:keyup on:keypress>
        <slot />
    </em>
{:else}
    <em class = {(ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (link?"link ":"")} 
        data-emoji = {uiProps($$restProps)}>
        <slot />
    </em>
{/if}
