<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, April 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let popup: object | boolean | undefined = undefined;
    
</script>

<div class={classString(ui, $$restProps, "segment")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
    <slot />
</div>