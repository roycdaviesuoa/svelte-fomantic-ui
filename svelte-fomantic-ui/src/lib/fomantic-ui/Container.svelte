<script lang="ts">
    export let style: string = "";
</script>

<div class={(ui?"ui ":"") + style + " container"}>
    <slot />
</div>