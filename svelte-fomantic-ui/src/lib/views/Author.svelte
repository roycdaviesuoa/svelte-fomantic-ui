<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    export let date: string = null;
    export let ui: boolean=false;
    export let settings: object=undefined;
    export let popup: boolean=false;
</script>

<div data-date={date} class={classString(ui, $$restProps, "author")} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot />
</div>