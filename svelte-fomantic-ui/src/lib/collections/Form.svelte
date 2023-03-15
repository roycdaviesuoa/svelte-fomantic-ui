<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let settings: object={};
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " form"} data-module_type="form" data-settings={JSON.stringify(settings)} {...otherProps($$restProps)}>
    <slot />
</div>