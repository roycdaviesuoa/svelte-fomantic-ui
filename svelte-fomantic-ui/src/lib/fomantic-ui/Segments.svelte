<script lang="ts">
    export let style: string = "";
</script>

<div class={"ui " + style + " segments"}>
    <slot />
</div>