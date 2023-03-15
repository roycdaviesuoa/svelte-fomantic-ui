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
    export let activate: boolean = false;

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " progress"}  data-settings={JSON.stringify(settings)} data-module_type="progress" {activate} {...otherProps($$restProps)}>
    <slot />
</div>
