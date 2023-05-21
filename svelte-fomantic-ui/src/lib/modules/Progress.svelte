<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, categorize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    import { onDestroy } from "svelte";

    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let activate: boolean = false;
    export let popup: object | boolean = undefined;
    
    let {f: module_functions, s: module_settings} = categorize(settings);
    let {f: popup_functions, s: popup_settings} = categorize(popup);

    const Module_ID = initialize(id, module_functions);
    const Popup_ID = initialize(id, popup_functions);
    onDestroy(() => { decommission(Module_ID, id, module_functions); decommission(Popup_ID, id, popup_functions); });

    console.log("PROGRESS ", {...functionize(Module_ID, id, module_functions), ...module_settings});
    console.log("POPUP ", {...functionize(Popup_ID, id, popup_functions), ...popup_settings});

    console.log( rationalize([
                serialize("progress", {...functionize(Module_ID, id, module_functions), ...module_settings}, activate), 
                serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:{...functionize(Popup_ID, id, popup_functions), ...popup_settings})
            ]));
</script>

{#if ui}
    <div {id} 
        class={classString(ui, $$restProps, "progress")} 
        data-module={
            rationalize([
                serialize("progress", {...functionize(Module_ID, id, module_functions), ...module_settings}, activate), 
                serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:{...functionize(Popup_ID, id, popup_functions), ...popup_settings})
            ])
        } 
        {...otherProps($$restProps)}>
        <slot />
    </div>
{:else}
    <div {id} class="progress"/>
{/if}
