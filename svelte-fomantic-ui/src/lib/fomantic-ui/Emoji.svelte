<script lang="ts">
    export let style: string = "";
    export let dataEmoji: string = "";
</script>

<em class={style} data-emoji={dataEmoji} {...$$restProps}>
    <slot />
</em>