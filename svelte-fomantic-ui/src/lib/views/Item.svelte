<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let value: string = null;
    export let ui: boolean=false;
    export let popup: boolean = false;
</script>

<div data-value={value} class={(ui?"ui ":"") + (popup?"popup ":"") + uiProps($$restProps) + " item"} data-module_type={(popup?"popup":null)} on:change on:click {...otherProps($$restProps)}>
    <slot />
</div>
