<script lang="ts">
    export let style: string = "";
</script>

<div class={"ui " + style + " loader"}>
    <slot />
</div>