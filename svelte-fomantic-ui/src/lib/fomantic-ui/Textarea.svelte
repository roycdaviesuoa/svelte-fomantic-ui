<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean=false;
    export let value: string="";
</script>

<textarea class={(ui?"ui":"") + uiProps($$restProps)} bind:value={value} {...otherProps($$restProps)}/>