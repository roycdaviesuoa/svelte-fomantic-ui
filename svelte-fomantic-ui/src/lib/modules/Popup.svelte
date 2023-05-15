<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps, initialise, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let functions : object = undefined;

    import { onDestroy } from "svelte";
    const ID = initialise(id, functions);
    onDestroy(() => { decommission(ID, id, functions); });

    console.log(serialize("popup", {...functionize(ID, id, functions), ...settings}));

</script>

<div {id} class={classString(ui, $$restProps, "popup")} data-module={serialize("popup", {...functionize(ID, id, functions), ...settings})} {...otherProps($$restProps)}>
    <slot />
</div>