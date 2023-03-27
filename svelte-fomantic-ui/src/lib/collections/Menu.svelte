<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { uiProps, otherProps } from "../svelte-fomantic-ui"
    import { encode, decode } from 'msgpack-javascript';
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';

    import serialize from 'serialize-javascript';

    export let ui: boolean=false;
    export let selected: string = "";
    export let settings: object={};
    export let popup: boolean = false;

    function setSelected(e) {
        if (e.target.attributes["value"]) {
            selected = e.target.attributes["value"].value;
        }
    }
</script>

<div class={(ui?"ui ":"") + uiProps($$restProps) + " menu"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)} on:click={setSelected} on:change>
    <slot />
</div>