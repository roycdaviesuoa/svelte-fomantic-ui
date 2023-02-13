<script lang="ts">
    export let style: string = "";
    export let value: string = "";
</script>

<div data-value={value} class={style + " item"}>
    <slot />
</div>