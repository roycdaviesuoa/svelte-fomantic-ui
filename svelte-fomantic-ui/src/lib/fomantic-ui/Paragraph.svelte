<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " paragraph"} {...$$restProps}>
    <slot />
</div>