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
    export let settings: object=undefined;
    export let clientWidth: number=0;
    export let clientHeight: number=0;
    export let offsetWidth: number=0;
    export let offsetHeight: number=0;

</script>

<div class={classString(ui, $$restProps, "sidebar")} data-settings={serialize(settings)} data-module_type="sidebar" bind:clientWidth bind:clientHeight bind:offsetWidth bind:offsetHeight {...otherProps($$restProps)}>
    <slot />
</div>
