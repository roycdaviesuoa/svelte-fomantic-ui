<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';

    export let ui: boolean=false;
    export let settings: object={};
    export let selected: string = "";

    let params = JSON.stringify(settings);

    function setSelected(e) {
        if (e.target.attributes["data-value"]) {
            selected = e.target.attributes["data-value"].value;
        }
    }

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " dropdown"} {params} data-module_type="dropdown" {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>
