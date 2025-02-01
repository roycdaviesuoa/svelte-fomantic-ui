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
    export let id: string | undefined = undefined;
    export let value: any = undefined;
    export let popup: object | boolean | undefined = undefined;
        
    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        if (event.target.attributes["data-value"]) {
            value = event.target.attributes["data-value"].value;
            dispatch('click', {id: id, target: event.target, value: value});
        }
        else {
            dispatch('click', {id: id, target: event.target});
        }
    }

</script>

{#if link}
    <i {id} role="link" tabindex={0} class={classString(ui, $$restProps, "icon")} on:click={doClick} on:keydown on:keypress on:keyup data-value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </i>
{:else}
    <i {id} class={classString(ui, $$restProps, "icon")} data-value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </i>
{/if}