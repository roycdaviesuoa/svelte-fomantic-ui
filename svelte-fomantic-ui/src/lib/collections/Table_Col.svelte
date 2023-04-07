<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {classString, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let head: boolean = false;
</script>

{#if head}
    <th class={classString(ui, $$restProps, "")} {...otherProps($$restProps)}>
        <slot />
    </th>
{:else}
    <td class={classString(ui, $$restProps, "")} {...otherProps($$restProps)}>
        <slot />
    </td>
{/if}
