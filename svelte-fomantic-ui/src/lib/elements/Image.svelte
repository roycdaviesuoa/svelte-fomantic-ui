<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************

TODO: support svg images
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let alt: string = undefined;
    export let src: string = undefined;
    export let popup: object | boolean = undefined;
    
    let mouseover = false;

</script>

{#if (src || (!src && ui))}
    <img {src} class={classString(ui, $$restProps, "image")} {alt} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
{:else}
    <div class={classString(ui, $$restProps, "image")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:mouseenter={()=>{mouseover=true;}} on:mouseleave={()=>{mouseover=false;}} on:focus>
        <slot {mouseover}/>
    </div>
{/if}