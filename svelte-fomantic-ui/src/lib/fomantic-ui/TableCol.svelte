<script lang="ts">
    export let style: string = "";
    export let head: boolean = false;
</script>

{#if head}
    <th class={style} {...$$restProps}>
        <slot />
    </th>
{:else}
    <td class={style} {...$$restProps}>
        <slot />
    </td>
{/if}
