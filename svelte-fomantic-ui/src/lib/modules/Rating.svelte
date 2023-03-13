<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';

    export let ui: boolean=false;
    export let settings: object={};

    let params = JSON.stringify(settings);

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " rating"} {params} data-module_type="rating" {...otherProps($$restProps)}>
    <slot />
</div>
