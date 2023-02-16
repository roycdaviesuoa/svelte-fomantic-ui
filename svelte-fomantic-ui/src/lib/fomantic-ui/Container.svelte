<script lang="ts">
    export let style: string = "";
    export let ui: boolean=false;
</script>

<div class={(ui?"ui ":"") + style + " container"} {...$$restProps}>
    <slot />
</div>