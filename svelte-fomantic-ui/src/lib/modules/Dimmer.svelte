<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    import { fade } from 'svelte/transition';

    export let ui: boolean = false;
    export let settings: object = undefined;
    export let active: boolean = false;
    export let popup: object | boolean = undefined;
    
</script>

{#if active}
    <div transition:fade class={classString(ui, $$restProps, "active dimmer")} data-module={rationalize([serialize((popup?"popup":null), popup), serialize("dimmer", settings)])} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else}
    <div class={classString(ui, $$restProps, "dimmer")} data-module={rationalize([serialize((popup?"popup":null), popup), serialize("dimmer", settings)])} {...otherProps($$restProps)}>
        <slot/>
    </div>
{/if}
