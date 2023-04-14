<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps, rationalize } from "../svelte-fomantic-ui";
    import './Tablesort.css';

    export let ui: boolean=false;
    export let sortable: boolean = false;
    export let popup: object | boolean = undefined;

</script>

<table class={classString(ui, $$restProps, "table")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize((sortable?"tablesort":null))])} {...otherProps($$restProps)}>
        <slot />
</table>