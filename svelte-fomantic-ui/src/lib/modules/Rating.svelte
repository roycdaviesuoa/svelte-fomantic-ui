<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';
    
    export let ui: boolean=false;
    export let settings: object=undefined;

</script>

<div class={classString(ui, $$restProps, "rating")} data-settings={serialize(settings)} data-module_type="rating" {...otherProps($$restProps)}>
    <slot />
</div>
