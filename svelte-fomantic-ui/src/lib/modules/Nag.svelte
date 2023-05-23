<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
    export let callbacks : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

</script>

<div {id} class={classString(ui, $$restProps, "nag")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("nag", {...functionize(ID, id, callbacks), ...settings})])} {...otherProps($$restProps)}>
    <slot />
</div>
