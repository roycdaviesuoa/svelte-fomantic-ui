<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let selection: boolean=false;
    export let id: string=undefined;
    export let popup: object | boolean = undefined;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        dispatch('click', {id: id, target: event.target});
    }
</script>

{#if selection}
    <div {id} class={classString(ui, $$restProps, "list")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup >
        <slot />
    </div>
{:else}
    <div {id} class={classString(ui, $$restProps, "list")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}