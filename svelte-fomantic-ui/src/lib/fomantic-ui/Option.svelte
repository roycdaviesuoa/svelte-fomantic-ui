<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
    export let value: string = "";
</script>

<option class={(ui?"ui":"") + uiProps($$restProps)} {value} {...otherProps($$restProps)}>
    <slot />
</option>