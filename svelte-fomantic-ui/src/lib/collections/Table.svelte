<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import './Tablesort.css';
    import {classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let sortable: boolean = false;
</script>

<table class={classString(ui, $$restProps, "table")} data-module_type={(sortable?"tablesort":null)} {...otherProps($$restProps)}>
        <slot />
</table>