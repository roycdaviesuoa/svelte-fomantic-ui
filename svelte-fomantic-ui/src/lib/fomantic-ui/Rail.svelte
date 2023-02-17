<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<div class={(ui?"ui":"") + uiProps($$restProps) + " rail"} {...otherProps($$restProps)}>
    <slot />
</div>