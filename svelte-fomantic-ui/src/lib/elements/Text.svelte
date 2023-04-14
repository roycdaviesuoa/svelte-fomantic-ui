<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let popup: object | boolean = undefined;
    
</script>

{#if ui}
    <span class={classString(ui, $$restProps, "text")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </span>
{:else}
    <div class={classString(ui, $$restProps, "text")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}