<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
</script>

<tfoot class={classString(ui, $$restProps, "")} {...otherProps($$restProps)}>
    <slot />
</tfoot>