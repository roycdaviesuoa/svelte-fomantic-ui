<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';

    export let ui: boolean=false;
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " accordion"} {...otherProps($$restProps)}>
    <slot />
</div>