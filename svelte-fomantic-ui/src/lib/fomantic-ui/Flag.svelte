<script lang="ts">
    export let style: string = "";
</script>

<i class={style + " flag"} {...$$restProps}>
    <slot />
</i>