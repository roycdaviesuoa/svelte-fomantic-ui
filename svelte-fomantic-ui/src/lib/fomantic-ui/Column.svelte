<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " column"} {...$$restProps}>
    <slot />
</div>