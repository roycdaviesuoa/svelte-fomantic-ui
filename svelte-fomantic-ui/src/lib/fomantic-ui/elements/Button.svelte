<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"

    export let ui: boolean=false;
    export let toggle: boolean=false;
    export let name: string = "";
    export let active: boolean = false;
    export let on_style: string = "";
    export let off_style: string = "";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        dispatch('click', {name: name, target: event.target});
    }

    // Return a toggle event
    function doToggle(event: any) {
        active = !active;
        dispatch('toggle', {name: name, active: active, target: event.target})
    }
</script>

<!-- The Toggle button functionality -->
{#if toggle}
    <div on:click={doToggle} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " " + (active?on_style:off_style) + " button"} {...otherProps($$restProps)}>
        {#if active}
            <slot name="on"/>
        {:else}
            <slot name="off"/>
        {/if}
    </div>
{:else}
<!-- An ordinary, clickable button -->
    <div on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " button"} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}