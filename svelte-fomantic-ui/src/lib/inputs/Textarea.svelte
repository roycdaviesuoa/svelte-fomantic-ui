<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let value: string="";
    export let popup: boolean=false;
</script>

<textarea class={classString(ui, $$restProps, "")} bind:value={value} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
