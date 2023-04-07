<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let settings: object=undefined;
    export let popup: boolean=false;
</script>

{#if ui}
    <span class={classString(ui, $$restProps, "text")} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </span>
{:else}
    <div class={classString(ui, $$restProps, "text")} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}