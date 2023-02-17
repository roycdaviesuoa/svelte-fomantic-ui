<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<table class={(ui?"ui":"") + uiProps($$restProps) + " table"} {...otherProps($$restProps)}>
    <slot />
</table>