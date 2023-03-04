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
</script>

{#if ui}
    <div class={"ui " + uiProps($$restProps) + " image"} {...otherProps($$restProps)}>
        <slot />
    </div>
{:else}
    <img class={uiProps($$restProps) + " image"} {alt} {...otherProps($$restProps)}/>
{/if}