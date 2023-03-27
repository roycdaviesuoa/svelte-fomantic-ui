<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************

TODO: support svg images
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean = false;
    export let alt: string = "";
    export let src: string = "";
    export let settings = {};
    export let popup: boolean = false;
</script>

{#if src !== ""}
    <img {src} class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {alt} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " image"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}