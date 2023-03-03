<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean=false;
    export let id: string=null;
    export let group: string="";
    export let value: string="";
    export let label: string="";
</script>

{#if label}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " radio checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {id} {value} bind:group>
        <label for={id} class="ui radio">{label}</label>
    </div>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " radio checkbox"} {...otherProps($$restProps)}>
        <input type="radio" {id} {value} bind:group>
        <slot/>
    </div>
{/if}