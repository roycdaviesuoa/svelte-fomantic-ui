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
    export let selected: string = "";
    export let settings: object={};

    function setSelected(e) {
        if (e.target.value) {
            selected = e.target.value;
        }
    }

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " calendar"} data-settings={JSON.stringify(settings)} data-module_type="calendar" {...otherProps($$restProps)} on:change={setSelected}>
    <slot />
</div>