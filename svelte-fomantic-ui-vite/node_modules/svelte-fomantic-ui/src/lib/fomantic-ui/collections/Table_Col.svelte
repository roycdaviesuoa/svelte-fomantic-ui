<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
    export let head: boolean = false;
</script>

{#if head}
    <th class={(ui?"ui ":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
        <slot />
    </th>
{:else}
    <td class={(ui?"ui ":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
        <slot />
    </td>
{/if}
