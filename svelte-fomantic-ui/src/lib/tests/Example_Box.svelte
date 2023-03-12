<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Image } from "../svelte-fomantic-ui.svelte";
    export let image: boolean = false;
    export let simple: boolean = false;
    export let double_height: boolean = false;
</script>

{#if image}
    <Image src = "/images/square-image.png"/>
{:else if simple}
    {#if double_height}
        <div class="simple double"><slot /></div>
    {:else}
        <div class="simple"><slot /></div>
    {/if}
{:else}
    {#if double_height}
        <div class="box double"><slot /></div>
    {:else}
        <div class="box"><slot /></div>
    {/if}
{/if}

<style>
    .box {
        background-color: rgba(86, 61, 124, .1);
        box-shadow: 0 0 0 1px rgba(86, 61, 124, 0.2) inset;
        content: "";
        display: block;
        min-height: 50px;
        padding-top: 2em;
        padding-bottom: 2em;
    }
    .double {
        min-height: 100px;
    }
    .simple {
        content: "";
        display: block;
        min-height: 50px;
        padding-top: 2em;
        padding-bottom: 2em;
    }
</style>
