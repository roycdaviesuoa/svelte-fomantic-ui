<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let settings: object = undefined;
    export let popup: object | boolean | undefined = undefined;

    console.log(settings);
    
</script>

<div class={classString(ui, $$restProps, "form")} data-module={rationalize([serialize("form", settings), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)}>
    <slot />
</div>