<script lang="ts">
    export let style: string = "";
</script>

<tr class={style} {...$$restProps}>
    <slot />
</tr>
