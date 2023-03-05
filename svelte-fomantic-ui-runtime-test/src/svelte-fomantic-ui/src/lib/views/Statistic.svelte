<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let value: string = "";
    export let ui: boolean=false;
</script>

<div data-value={value} class={(ui?"ui ":"") + uiProps($$restProps) + " item"} {...otherProps($$restProps)}>
    <slot />
</div>