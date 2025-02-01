<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean=false;
    export let id: any = undefined;
    export let selected: any = undefined;
    export let value: any = undefined;
    export let settings: object | undefined = undefined;
    export let popup: object | boolean | undefined = undefined;
    export let callbacks : any = undefined;

    import { onDestroy } from "svelte";
    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

    function setSelected(e: any) {
        if (e.target.attributes.hasOwnProperty("data-value") || e.target.attributes.hasOwnProperty("value") || e.target.innerText) {
            value = e.target.attributes.hasOwnProperty("data-value") ? e.target.attributes["data-value"].value : ( e.target.attributes.hasOwnProperty("value").value ? e.target.attributes["value"].value : e.target.innerText.trim() );
            selected = value;
        }
    }

</script>

<div role="link" tabindex={0} {id} class={classString(ui, $$restProps, "accordion")} data-value={value} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize((ui?"accordion":null), {...functionize(ID, id, callbacks), ...settings})])} {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>