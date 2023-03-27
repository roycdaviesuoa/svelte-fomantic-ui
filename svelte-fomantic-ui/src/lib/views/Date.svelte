<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    export let date: string = null;
    export let ui: boolean=false;
    export let settings={};
    export let popup: boolean=false;
</script>

<span data-date={date} class={(ui?"ui ":"") + uiProps($$restProps) + " date"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot />
</span>