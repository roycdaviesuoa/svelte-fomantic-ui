<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let checkbox: boolean = false;
    export let input: boolean = false;
    export let radio: boolean = false;
    export let _for: string = "";
    export let popup: object | boolean = undefined;
    
</script>

{#if _for}
    <label class={classString(ui, $$restProps, "label")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} for={_for}>
        <slot />
    </label>
{:else if checkbox || input || radio}
    <!-- Used with Checkbox -->
    <label>
        <slot />
    </label>
{:else}
    <div class={classString(ui, $$restProps, "label")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}