<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let meta: string = null;
    export let ui: boolean=false;
</script>

<span data-meta={meta} class={(ui?"ui ":"") + uiProps($$restProps) + " floated"} {...otherProps($$restProps)}>
    <slot />
</span>