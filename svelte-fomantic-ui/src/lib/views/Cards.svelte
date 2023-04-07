<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {classString, otherProps} from "../svelte-fomantic-ui"
    export let value: string = null;
    export let ui: boolean=false;
</script>

<div data-value={value} class={classString(ui, $$restProps, "cards")} {...otherProps($$restProps)}>
    <slot />
</div>