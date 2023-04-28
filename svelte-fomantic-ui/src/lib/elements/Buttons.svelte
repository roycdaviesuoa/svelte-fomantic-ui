<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui"

    export let ui: boolean = false;
    export let id: string = undefined;
    export let value: any = undefined;
    export let popup: object | boolean = undefined;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(event: any) {
        if (event.target.attributes["data-value"]) {
            value = event.target.attributes["data-value"].value;
            if (id) {
                dispatch('click', {id: id, target: event.target, value: value});
            }
            else {
                dispatch('click', {id: id, target: event.target});
            }
        }
    }
</script>

<div {id} on:click={doClick} on:keydown on:keypress on:keyup class={classString(ui, $$restProps, "buttons")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
    <slot />
</div>