<script lang="ts">
    export let style: string = "";
</script>

<div class={style + " line"} {...$$restProps}>
    <slot />
</div>