<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************

TODO: support svg images
-->

<script lang="ts">
    import {serialize, classString, otherProps} from "../svelte-fomantic-ui"

    export let ui: boolean = false;
    export let alt: string = undefined;
    export let src: string = undefined;
    export let settings: object = undefined;
    export let popup: boolean = false;

    let mouseover = false;

</script>

{#if src}
    <img {src} class={classString(ui, $$restProps, "image")} {alt} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}/>
{:else}
    <div class={classString(ui, $$restProps, "image")} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)} on:mouseenter={()=>{mouseover=true;}} on:mouseleave={()=>{mouseover=false;}} on:focus>
        <slot {mouseover}/>
    </div>
{/if}