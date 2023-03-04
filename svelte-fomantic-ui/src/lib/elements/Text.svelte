<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
</script>

<span class={(ui?"ui ":"") + uiProps($$restProps) + " text"} {...otherProps($$restProps)}>
    <slot />
</span>