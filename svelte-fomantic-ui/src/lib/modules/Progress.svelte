<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialise, functionize, decommission } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let activate: boolean = false;
    export let popup: object | boolean = undefined;

    let module_functions = settings?(settings.hasOwnProperty("callbacks")?settings["callbacks"]:{}):{};
    let popup_functions = (typeof(popup) === "boolean")?{}:(popup?(popup.hasOwnProperty("callbacks")?popup["callbacks"]:{}):{});

    import { onDestroy } from "svelte";
    const Module_ID = initialise(id, module_functions);
    const Popup_ID = initialise(id, popup_functions);
    onDestroy(() => { 
        decommission(Module_ID, id, module_functions); 
        decommission(Popup_ID, id, popup_functions); 
    });

</script>

<div {id} 
    class={classString(ui, $$restProps, "progress")} 
    data-module={
        rationalize([
            serialize("progress", {...functionize(Module_ID, id, module_functions), ...settings}, activate), 
            serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:{...functionize(Popup_ID, id, popup_functions), ...popup})
        ])
    } 
    {...otherProps($$restProps)}>
    <slot />
</div>
