<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, April 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialise, functionise, decommission } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let id: string = "";
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
    export let functions : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialise(id, functions);
    onDestroy(() => { decommission(ID, id, functions); });

</script>

<div {id} class={classString(ui, $$restProps, "rating")} data-module={rationalize([serialize("rating", {...functionise(ID, id, functions), ...settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
    <slot />
</div>