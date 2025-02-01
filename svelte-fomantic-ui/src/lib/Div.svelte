<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "./svelte-fomantic-ui"
    export let value: string | null = null;
    export let ui: boolean=false;
    export let popup: object | boolean | undefined = undefined;
    export let name: string = "";
</script>

<div data-value={value} class={classString(ui, $$restProps, name)} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
    <slot />
</div>