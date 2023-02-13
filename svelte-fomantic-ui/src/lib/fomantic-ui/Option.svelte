<script lang="ts">
    export let style: string = "";
    export let value: string = "";
</script>

<option class={style} {value}>
    <slot />
</option>