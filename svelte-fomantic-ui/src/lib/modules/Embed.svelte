<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: any = undefined;
    export let settings: object | undefined = undefined;
    export let activate: boolean = false;
    export let popup: object | boolean | undefined = undefined;
    export let callbacks : any = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

</script>

<div {id} class={classString(ui, $$restProps, "embed")} data-module={rationalize([serialize("embed", {...functionize(ID, id, callbacks), ...settings}, activate), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
    <slot />
</div>
