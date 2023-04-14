<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";
    import { createEventDispatcher } from 'svelte';

    export let ui: boolean = false;
    export let link: boolean = false;
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
        
    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        dispatch('click', {id: id, target: event.target});
    }

</script>

{#if link}
    <i {id} class={classString(ui, $$restProps, "icon")} on:click={doClick} on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </i>
{:else}
    <i {id} class={classString(ui, $$restProps, "icon")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </i>
{/if}