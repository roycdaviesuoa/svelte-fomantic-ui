<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialise, functionize, decommission } from "../svelte-fomantic-ui";
    import { update } from "../svelte-fomantic-ui.svelte";

    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
    export let functions : object = undefined;
    export let value: any = undefined;
    export let selected: any = undefined;

    let prevValue: any = value;

    // If no ID is given, generate a 6 letter random one
    id=(id?id:Math.random().toString(36).substring(2, 6));

    $: {
        if (prevValue != value) {
            prevValue = value;
            update(id, "set value", value, false);
        }
    }

    const moreSettings = {
        start:  value
    }

    const moreFunctions = {
        onChange : {
            value: null,

            _: (data) => {value=data.value; selected=data.value;}
        }
    }

    let allFunctions = {...functions, ...moreFunctions};

    import { onDestroy } from "svelte";
    const ID = initialise(id, allFunctions);
    onDestroy(() => { decommission(ID, id, allFunctions); });

</script>

<div {id} class={classString(ui, $$restProps, "slider")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("slider", {...functionize(ID, id, allFunctions), ...settings, ...moreSettings})])} {...otherProps($$restProps)}>
    <slot />
</div>
