<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: any = undefined;
    export let settings: object | undefined = undefined;
    export let callbacks : any = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

</script>

<div {id} class={classString(ui, $$restProps, "popup")} data-module={serialize("popup", {...functionize(ID, id, callbacks), ...settings})} {...otherProps($$restProps)}>
    <slot />
</div>