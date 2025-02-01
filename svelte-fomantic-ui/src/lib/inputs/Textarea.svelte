<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, April 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let value: string="";
    export let popup: object | boolean | undefined = undefined;
    
</script>

<textarea class={classString(ui, $$restProps, "")} bind:value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}></textarea>