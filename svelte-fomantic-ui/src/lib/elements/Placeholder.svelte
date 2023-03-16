<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let popup: boolean=false;
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " placeholder"} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot />
</div>