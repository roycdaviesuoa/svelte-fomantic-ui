<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean=false;
    export let head: boolean = false;
    export let popup: object | boolean = undefined;
    
</script>

{#if head}
    <th class={classString(ui, $$restProps, "")} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
        <slot />
    </th>
{:else}
    <td class={classString(ui, $$restProps, "")} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
        <slot />
    </td>
{/if}
