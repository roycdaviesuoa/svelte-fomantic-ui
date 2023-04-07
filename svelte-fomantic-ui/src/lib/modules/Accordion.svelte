<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';
    
    export let ui: boolean=false;
    export let selected: string = "";
    export let settings: object=undefined;

    function setSelected(e) {
        if (e.target.attributes["value"]) {
            selected = e.target.attributes["value"].value;
        }
    }

</script>

<div class={classString(ui, $$restProps, "accordion")} data-settings={serialize(settings)} data-module_type={(ui?"accordion":"")} {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>