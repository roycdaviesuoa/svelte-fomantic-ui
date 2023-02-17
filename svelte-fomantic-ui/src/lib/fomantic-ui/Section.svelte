<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " section"} {...$$restProps}>
    <slot />
</div>