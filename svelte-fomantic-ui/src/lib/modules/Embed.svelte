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
    export let settings: object={};
    export let activate: boolean = false;
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " embed"} data-settings={serialize(settings)} data-module_type="embed" {activate} {...otherProps($$restProps)}>
    <slot />
</div>
