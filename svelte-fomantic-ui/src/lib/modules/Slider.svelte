<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    import { behavior } from "../svelte-fomantic-ui.svelte";

    export let ui: boolean = false;
    export let id: any = undefined;
    export let settings: object | undefined = undefined;
    export let popup: object | boolean | undefined = undefined;
    export let callbacks : any = undefined;
    export let range: boolean | undefined = undefined;
    export let value: any = undefined;
    export let selected: any = undefined;
    let prevValue: any = value;

    // If no ID is given, generate a 6 letter random one
    id=(id?id:Math.random().toString(36).substring(2, 6));

    $: {
        if ((prevValue != value) && !range) {
            prevValue = value;
            behavior(id, "set value", value, false);
        }
    }

    const moreSettings = {
        start:  value
    }

    const singleValue = {
        onChange : {
            value: null,

            _: (data:any) => {value=data.value; selected=data.value;}
        }
    }

    const rangeValues = {
        onChange : {
            length: null,
            start: null,
            end: null,

            _: (data:any) => {value = data; selected = data;}
        }
    }

    let allFunctions = range ? {...callbacks, ...rangeValues} : {...callbacks, ...singleValue};

    import { onDestroy } from "svelte";
    const ID = initialize(id, allFunctions);
    onDestroy(() => { decommission(ID, id, allFunctions); });

</script>

{#if range}
    <div {id} class={classString(ui, $$restProps, "range slider")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("slider", {...functionize(ID, id, allFunctions), ...settings})])} {...otherProps($$restProps)}>
        <slot />
    </div>
{:else}
    <div {id} class={classString(ui, $$restProps, "slider")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("slider", {...functionize(ID, id, allFunctions), ...settings, ...moreSettings})])} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}
