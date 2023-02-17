<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;

</script>

<table class={"_table " + (ui?"ui ":"") + style + " table"} {...$$restProps}>
    <slot />
</table>