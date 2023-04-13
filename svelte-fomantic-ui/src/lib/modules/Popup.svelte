<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let settings: object = undefined;
</script>

<div class={classString(ui, $$restProps, "popup")} data-module={serialize("popup", settings)} {...otherProps($$restProps)}>
    <slot />
</div>
