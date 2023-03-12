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
    export let popup: boolean = false;
</script>

{#if src !== ""}
    <img {src} class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {alt} data-module_type={(popup?"popup":"")} {...otherProps($$restProps)}/>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " image"} data-module_type={(popup?"popup":"")} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}