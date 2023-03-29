<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';
    
    export let ui: boolean=false;
    export let id: string = "";
    export let settings: object={};
    export let selected: string = "";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function setSelected(e) {
        if (e.target.attributes["data-value"]) {
            selected = e.target.attributes["data-value"].value;
            dispatch('click', {id: id, target: e.target, value: selected});
        }
    }

</script>

<div {id} class={(ui?"ui ":"") + uiProps($$restProps) + " dropdown"} data-settings={serialize(settings)} data-module_type="dropdown" {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>
