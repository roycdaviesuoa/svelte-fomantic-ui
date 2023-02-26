<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    import { createEventDispatcher } from 'svelte';

    export let ui: boolean=false;
    export let link: boolean=false;
    export let name: string="";

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {name: name, target: event.target});
    }

</script>

{#if link}
    <i class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} on:click={doClick} on:keydown on:keypress on:keyup {...otherProps($$restProps)}>
        <slot />
    </i>
{:else}
    <i class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} {...otherProps($$restProps)}>
        <slot />
    </i>
{/if}