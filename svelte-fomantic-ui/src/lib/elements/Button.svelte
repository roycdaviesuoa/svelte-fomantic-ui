<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let toggle: boolean = false;
    export let id: string | undefined = undefined
    export let active: boolean = false;
    export let on_style: string = "";
    export let off_style: string = "";
    export let value: any = undefined;
    export let popup: object | boolean | undefined = undefined;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        if (event.target.attributes["data-value"]) {
            value = event.target.attributes["data-value"].value;
            dispatch('click', {id: id, target: event.target, value: value});
        }
        else {
            dispatch('click', {id: id, target: event.target});
        }
    }

    // Return a toggle event
    function doToggle(event: any) {
        active = !active;
        if (event.target.attributes["data-value"]) {
            value = event.target.attributes["data-value"].value;
            dispatch('toggle', {id: id, active: active, target: event.target, value: value})
        }
        else {
            value = active;
            dispatch('toggle', {id: id, active: active, target: event.target})
        }
    }
</script>

<!-- The Toggle button functionality -->
{#if toggle}
    <div {id} role="button" tabindex={0} on:click={doToggle} on:keydown on:keypress on:keyup class={classString(ui, $$restProps, (active?on_style:off_style) + " button")} data-value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        {#if active}
            <slot name="on"/>
        {:else}
            <slot name="off"/>
        {/if}
    </div>
{:else}
<!-- An ordinary, clickable button -->
    <div {id} role="button" tabindex={0}  on:click={doClick} on:keydown on:keypress on:keyup class={classString(ui, $$restProps, "button")} data-value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}