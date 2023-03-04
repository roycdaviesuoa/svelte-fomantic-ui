<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let id: string=null;
    export let group: string="";
    export let value: string="";
    export let label: string="";
    export let name: string=null;
    export let slider: boolean=false;
    export let toggle: boolean=false;
    export let disabled: boolean=false;
</script>

{#if label}
    <div class={(ui?"ui ":"") + (disabled?"disabled ":"") + uiProps($$restProps) + (toggle?" toggle":(slider?" slider":" radio")) + " checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {id} {name} {value} bind:group {disabled}>
        <label for={id} class="ui radio">{label}</label>
    </div>
{:else}
    <div class={(ui?"ui ":"") + (disabled?"disabled ":"") + uiProps($$restProps) + (toggle?" toggle":(slider?" slider":" radio")) + " checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {id} {name} {value} bind:group {disabled}>
        <slot/>
    </div>
{/if}