<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    let the_class = (ui?"ui ":"") + uiProps($$restProps);
</script>

<tfoot class={the_class===""?null:the_class} {...otherProps($$restProps)}>
    <slot />
</tfoot>