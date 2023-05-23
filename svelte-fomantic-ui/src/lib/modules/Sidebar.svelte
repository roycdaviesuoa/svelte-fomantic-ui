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
        
    export let clientWidth: number=0;
    export let clientHeight: number=0;
    export let offsetWidth: number=0;
    export let offsetHeight: number=0;

    export let callbacks : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

</script>

<div {id} class={classString(ui, $$restProps, "sidebar")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("sidebar", {...functionize(ID, id, callbacks), ...settings})])} bind:clientWidth bind:clientHeight bind:offsetWidth bind:offsetHeight {...otherProps($$restProps)}>
    <slot />
</div>
