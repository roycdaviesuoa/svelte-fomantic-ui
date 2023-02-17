<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " row"} {...$$restProps}>
    <slot />
</div>