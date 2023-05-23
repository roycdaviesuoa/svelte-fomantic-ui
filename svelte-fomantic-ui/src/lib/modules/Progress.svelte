<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let activate: boolean = false;
    export let popup: object | boolean = undefined;
    export let callbacks : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

</script>

<div {id} class={classString(ui, $$restProps, "progress")} data-module={rationalize([serialize("progress", {...functionize(ID, id, callbacks), ...settings}, activate), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
    <slot />
</div>
