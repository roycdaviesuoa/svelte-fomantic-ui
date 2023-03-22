<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let sortable: boolean = false;

    let the_class = (ui?"ui ":"") + uiProps($$restProps) + " table";
</script>

<table class={the_class===""?null:the_class} data-module_type={(sortable?"tablesort":null)} {...otherProps($$restProps)}>
    <slot />
</table>