<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialise, functionize, decommission } from "../svelte-fomantic-ui";
    import { fade } from 'svelte/transition';

    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let active: boolean = false;
    export let popup: object | boolean = undefined;
    export let functions : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialise(id, functions);
    onDestroy(() => { decommission(ID, id, functions); });

</script>

{#if active}
    <div {id} transition:fade class={classString(ui, $$restProps, "active dimmer")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("dimmer", {...functionize(ID, id, functions), ...settings})])} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else}
    <div {id} class={classString(ui, $$restProps, "dimmer")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("dimmer", {...functionize(ID, id, functions), ...settings})])} {...otherProps($$restProps)}>
        <slot/>
    </div>
{/if}
