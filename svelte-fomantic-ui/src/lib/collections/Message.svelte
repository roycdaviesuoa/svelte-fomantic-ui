<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";
    import { fade } from 'svelte/transition';

    export let ui: boolean = false;
    export let popup: object | boolean = undefined;
    
</script>

<div class={classString(ui, $$restProps, "message")} transition:fade data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)}>
    <slot />
</div>