<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " step"} {...$$restProps}>
    <slot />
</div>