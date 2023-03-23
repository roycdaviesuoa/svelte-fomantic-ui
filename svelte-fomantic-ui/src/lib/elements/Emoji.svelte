<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let disabled: boolean = false;
    export let loading: boolean = false;
    export let small: boolean = false;
    export let medium: boolean = false;
    export let large: boolean = false;
    export let big: boolean = false;
    export let link: boolean = false;
    export let id: string="";
    export let popup: boolean=false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event if a link prop is used
    function doClick(event: any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

{#if link} 
    <em {id} class = {(ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (link?"link ":"")} 
        data-emoji = {uiProps($$restProps)} on:click={doClick} on:keydown on:keyup on:keypress data-module_type={(popup?"popup":null)}> 
        <slot />
    </em>
{:else}
    <em {id} class = {(ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (link?"link ":"")} 
        data-emoji = {uiProps($$restProps)} data-module_type={(popup?"popup":null)}> 
        <slot />
    </em>
{/if}
