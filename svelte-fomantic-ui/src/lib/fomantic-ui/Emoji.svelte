<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean = false;
    export let dataEmoji: string = "";
</script>

<em class={(ui?"ui":"") + uiProps($$restProps)} data-emoji={dataEmoji} {...otherProps($$restProps)}>
    <slot />
</em>