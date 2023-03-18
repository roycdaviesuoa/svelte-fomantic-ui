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
    export let settings: object=null;
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " popup"} data-settings={settings===null?null:JSON.stringify(settings)} data-module_type="popup" {...otherProps($$restProps)}>
    <slot />
</div>
