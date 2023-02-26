<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************

TODO: support svg images
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean = false;
    export let header: boolean = false;
    export let alt: string = "";
</script>

{#if header}
    <!-- Used with Placeholder -->
    <div class="image header">
        <slot/>
    </div>
{:else}
    <img class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {alt} {...otherProps($$restProps)}/>
{/if}