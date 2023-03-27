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
    export let clientWidth: number=0;
    export let clientHeight: number=0;
    export let offsetWidth: number=0;
    export let offsetHeight: number=0;

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " sidebar"} data-settings={serialize(settings)} data-module_type="sidebar" bind:clientWidth bind:clientHeight bind:offsetWidth bind:offsetHeight {...otherProps($$restProps)}>
    <slot />
</div>
