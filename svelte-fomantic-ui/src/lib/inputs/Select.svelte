<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let value: string = "";
    // export let selected: string = "";
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
    export let multiple: boolean = false;

    // import { createEventDispatcher } from 'svelte';

    // const dispatch = createEventDispatcher();

    // function doChange(e: any) {
    //     if (e.target.attributes["data-value"]) {
    //         selected = e.target.attributes["data-value"].value;
    //         value = e.target.attributes["data-value"].value;
    //         if (id) {
    //             dispatch('change', {id: id, target: e.target, value: selected});
    //         }
    //         else {
    //             dispatch('change', {target: e.target, value: selected});
    //         }
    //     }
    //     else {
    //         if (id) {
    //             dispatch('change', {id: id, target: e.target});
    //         }
    //         else {
    //             dispatch('change', {target: e.target});
    //         }
    //     }
    // }
</script>

{#if multiple}
    <select {id} multiple class={classString(ui, $$restProps, "")} bind:value on:change on:click on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot/>
    </select>
{:else}
    <select {id} class={classString(ui, $$restProps, "")} bind:value on:change on:click on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot/>
    </select>
{/if}

