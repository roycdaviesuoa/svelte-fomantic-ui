<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"

    export let ui: boolean=false;

    console.log($$restProps);
</script>

<i class={(ui?"ui":"") + uiProps($$restProps) + " icon"} {...otherProps($$restProps)}>
    <slot />
</i>