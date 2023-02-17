<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<tr class={(ui?"ui":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
    <slot />
</tr>
