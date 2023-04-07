<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"
    import { fade } from 'svelte/transition';

    export let ui: boolean=false;
    export let settings: object=undefined;
    export let active: boolean = false;

</script>

{#if active}
    <div transition:fade>
        <div class={classString(ui, $$restProps, "active dimmer")} data-settings={serialize(settings)} data-module_type="dimmer" {...otherProps($$restProps)}>
            <slot/>
        </div>
    </div>
{/if}
