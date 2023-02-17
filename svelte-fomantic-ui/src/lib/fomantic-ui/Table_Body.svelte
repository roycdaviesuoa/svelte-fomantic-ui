<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<tbody class={(ui?"ui":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
    <slot />
</tbody>