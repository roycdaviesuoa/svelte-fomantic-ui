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

<div class={classString(ui, $$restProps, "search")} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
    <slot />
</div>