<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " grid"} {...otherProps($$restProps)} on:click on:change>
    <slot />
</div>