<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    export let value: string = null;
    export let ui: boolean=false;
    export let settings={};
    export let popup: boolean = false;
</script>

<div data-value={value} class={(ui?"ui ":"") + uiProps($$restProps) + " card"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot />
</div>