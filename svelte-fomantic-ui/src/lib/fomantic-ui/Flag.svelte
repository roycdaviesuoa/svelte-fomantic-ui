<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<i class={(ui?"ui":"") + uiProps($$restProps) + " flag"} {...otherProps($$restProps)}>
    <slot />
</i>