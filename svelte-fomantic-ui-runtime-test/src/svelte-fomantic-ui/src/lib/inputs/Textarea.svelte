<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let value: string="";
</script>

{#if value !== ""}
    <textarea class={(ui?"ui ":"") + uiProps($$restProps)} bind:value={value} {...otherProps($$restProps)}/>
{:else}
    <textarea class={(ui?"ui ":"") + uiProps($$restProps)} {...otherProps($$restProps)}>
        <slot />
    </textarea>
{/if}