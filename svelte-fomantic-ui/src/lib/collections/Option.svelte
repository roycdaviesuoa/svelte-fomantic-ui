<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let popup: object | boolean = undefined;
    export let value: string = "";
    
</script>

<option class={classString(ui, $$restProps, "")} {value} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
    <slot />
</option>