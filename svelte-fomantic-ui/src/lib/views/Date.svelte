<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let date: string = null;
    export let ui: boolean=false;
</script>

<span data-date={date} class={(ui?"ui ":"") + uiProps($$restProps) + " date"} {...otherProps($$restProps)}>
    <slot />
</span>