<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let value: string = "";
    export let ui: boolean=false;
</script>

<div data-value={value} class={(ui?"ui ":"") + uiProps($$restProps) + " item"} {...otherProps($$restProps)}>
    <slot />
</div>