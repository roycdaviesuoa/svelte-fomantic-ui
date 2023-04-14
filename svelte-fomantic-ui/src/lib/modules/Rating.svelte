<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, April 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
    
</script>

<div class={classString(ui, $$restProps, "rating")} data-module={rationalize([serialize("rating", settings), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
    <slot />
</div>