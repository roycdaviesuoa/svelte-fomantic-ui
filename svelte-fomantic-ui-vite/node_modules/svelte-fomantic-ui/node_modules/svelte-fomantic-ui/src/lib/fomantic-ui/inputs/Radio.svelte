<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
    export let name: string="";
    export let group: string="";
    export let value: string="";
    export let placeholder: string="";
    export let single: boolean=false;
</script>

{#if single}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " radio checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {placeholder} {name} {value} >
        <slot/>
    </div>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " radio  checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {placeholder} {name} {value} bind:group>
        <slot/>
    </div>
{/if}