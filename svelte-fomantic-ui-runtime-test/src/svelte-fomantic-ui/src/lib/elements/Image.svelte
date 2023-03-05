<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************

TODO: support svg images
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let alt: string = "";
    export let src: string = "";
</script>

{#if src !== ""}
    <img {src} class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {alt} {...otherProps($$restProps)}/>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}