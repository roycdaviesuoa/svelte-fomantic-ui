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

    type returnType = {
        functions: object;
        non_functions: object;
    }

    function extract_functions(input_obj:any): returnType {
        let functions = {};
        let non_functions = {};
        if (input_obj && (typeof input_obj !== "boolean")) {
            for (let key in input_obj) {
                if ((typeof input_obj[key] === "object") && input_obj[key].hasOwnProperty("_"))
                {
                    functions[key] = input_obj[key];
                }
                else
                {
                    non_functions[key] = input_obj[key];
                }
            }
        }
        return {functions: functions, non_functions: non_functions};
    }
    
    let {functions: module_functions={}, non_functions: module_settings={}} = extract_functions(settings);
    let {functions: popup_functions={}, non_functions: popup_settings={}} = extract_functions(popup);

    console.log(module_functions, module_settings);


    import { onDestroy } from "svelte";
    const Module_ID = initialise(id, module_functions);
    const Popup_ID = initialise(id, popup_functions);
    onDestroy(() => { 
        decommission(Module_ID, id, module_functions); 
        decommission(Popup_ID, id, popup_functions); 
    });

    console.log({...functionize(Module_ID, id, module_functions), ...module_settings});


</script>

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
