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
    export let popup: object | boolean = undefined;
    export let functions : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, functions);
    onDestroy(() => { decommission(ID, id, functions); });

</script>

<div {id} class={classString(ui, $$restProps, "modal")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("modal", {...functionize(ID, id, functions), ...settings})])} {...otherProps($$restProps)}>
    <slot />
</div>
