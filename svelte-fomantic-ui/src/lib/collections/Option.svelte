<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let value: string = "";
</script>

<option class={(ui?"ui ":"") + uiProps($$restProps)} {value} {...otherProps($$restProps)}>
    <slot />
</option>