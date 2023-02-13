<script lang="ts">
    export let style: string = "";
</script>

<div class={"ui " + style + " form"}>
    <slot />
</div>