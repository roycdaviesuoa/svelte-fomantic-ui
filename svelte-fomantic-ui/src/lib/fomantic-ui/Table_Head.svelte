<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
</script>

<thead class={(ui?"ui ":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
    <slot />
</thead>