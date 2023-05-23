<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let id: string = undefined;
    export let selected: any = undefined;
    export let value: any = undefined;
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
    export let values: boolean = false;
    export let callbacks : object = undefined;

    // If no ID is given, generate a 6 letter random one
    id=(id?id:Math.random().toString(36).substring(2, 6));

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

    function setSelected(e:any) {
        if (e.target.attributes.hasOwnProperty("data-value") || e.target.attributes.hasOwnProperty("value") || (!values && e.target.innerText)) {
            value = e.target.attributes.hasOwnProperty("data-value") ? e.target.attributes["data-value"].value : ( e.target.attributes.hasOwnProperty("value").value ? e.target.attributes["value"].value : ( values ? undefined : e.target.innerText.trim() ) );
            selected = value;
        }
    }
</script>

<div {id} class={classString(ui, $$restProps, "menu")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("menu", {...functionize(ID, id, callbacks), ...settings})])} {...otherProps($$restProps)} on:click={setSelected} on:change>
    <slot />
</div>
