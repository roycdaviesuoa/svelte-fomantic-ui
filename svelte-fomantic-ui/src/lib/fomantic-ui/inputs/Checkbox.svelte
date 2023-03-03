<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
    export let id: string="";
    export let group: string="";
    export let value: string="";
    export let placeholder: string="";
    export let label: string=null;
    export let checked:boolean=false;
</script>

{#if label}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " checkbox"} {...otherProps($$restProps)}>
        <input type="checkbox" {placeholder} {id} {value} bind:group bind:checked>
        <label for={id} class="ui checkbox">{label}</label>
    </div>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " checkbox"} {...otherProps($$restProps)}>
        <input type="checkbox" {placeholder} {id} {value} bind:group bind:checked>
        <slot/>
    </div>
{/if}