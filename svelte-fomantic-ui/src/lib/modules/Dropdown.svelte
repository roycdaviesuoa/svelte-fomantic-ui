<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let selected: any = null;
    export let value: any = null;
    export let popup: object | boolean = undefined;
    export let multiple: boolean = false;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function doClick(e: any) {
        if (e.target.attributes["data-value"]) {
            value = e.target.attributes["data-value"].value;
            selected = value;
            if (id) {
                dispatch('change', {id: id, target: e.target, value: value});
            }
            else {
                dispatch('change', {target: e.target, value: value});
            }
        }
    }

    function doChange(e: any) {
        selected = e.target.value;
        value = selected;
        if (id) {
            dispatch('change', {id: id, target: e.target, value: value});
        }
        else {
            dispatch('change', {target: e.target, value: value});
        }
    }
</script>

{#if multiple}
    <div {id} class={classString(ui, $$restProps, "multiple dropdown")} data-selected={selected} data-module={rationalize([serialize("dropdown", {settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)} on:change={doChange}>
        <slot />
    </div>
{:else}
    <div {id} class={classString(ui, $$restProps, "dropdown")} data-module={rationalize([serialize("dropdown", {settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)} on:click={doClick}>
        <slot />
    </div>
{/if}

