<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let id: string = undefined;
    export let settings: object = undefined;
    export let selected: any = null;
    export let value: any = null;
    export let popup: object | boolean = undefined;

    function changed (e) {
        console.log(e);
    }
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // const multiple = $$restProps["multiple"];

    function setSelected(e: any) {
        if (e.target.attributes["data-value"]) {
            selected = e.target.attributes["data-value"].value;
            value = e.target.attributes["data-value"].value;
            if (id) {
                dispatch('change', {id: id, target: e.target, value: selected});
            }
            else {
                dispatch('change', {target: e.target, value: selected});
            }
        }
        else {
            if (id) {
                dispatch('change', {id: id, target: e.target});
            }
            else {
                dispatch('change', {target: e.target});
            }
        }
    }

    // function toggleSelection(e) {
    //     console.log(inputDiv);
    //     if (e.target.attributes["data-value"]) {
    //         let value:string = e.target.attributes["data-value"].value;
    //         console.log(value);
    //         if (Array.isArray(selected)) {
    //             if (selected.includes(value)) {
    //                 selected = selected.filter(f => f !== value);
    //             } else {
    //                 selected = [...selected, value];
    //             }
    //         }
    //         else {
    //             selected = value;
    //         }
    //     }
    // }

</script>

<div {id} class={classString(ui, $$restProps, "dropdown")} data-module={rationalize([serialize("dropdown", settings), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>

