<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let checkbox: boolean = false;
    export let _for: string="";
    export let popup: boolean=false;
</script>

{#if _for}
    <label class={(ui?"ui ":"") + uiProps($$restProps) + " label"} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)} for={_for}>
        <slot />
    </label>
{:else if checkbox}
    <!-- Used with Checkbox -->
    <label>
        <slot />
    </label>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " label"} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}