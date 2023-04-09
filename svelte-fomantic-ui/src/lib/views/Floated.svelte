<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, April 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let popup: object | boolean = undefined;
    
</script>

<span class={classString(ui, $$restProps, "floated")} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
    <slot />
</span>