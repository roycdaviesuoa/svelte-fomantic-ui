<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';
    import { fade } from 'svelte/transition';

    export let ui: boolean=false;
    export let settings: object={};
    export let popup: boolean=false;

</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " message"} transition:fade data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
    <slot />
</div>