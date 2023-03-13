<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    import { createEventDispatcher } from 'svelte';

    export let ui: boolean=false;
    export let link: boolean=false;
    export let id: string="";
    export let popup: boolean = false;

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {id: id, target: event.target});
    }

</script>

{#if link}
    <i {id} class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} on:click={doClick} on:keydown on:keypress on:keyup data-module_type={(popup?"popup":"")} {...otherProps($$restProps)}>
        <slot />
    </i>
{:else}
    <i {id} class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} data-module_type={(popup?"popup":"")} {...otherProps($$restProps)}>
        <slot />
    </i>
{/if}