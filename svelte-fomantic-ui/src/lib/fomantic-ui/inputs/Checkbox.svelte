<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    import { onMount, afterUpdate } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let ui: boolean=false;
    export let id: string=null;
    export let group: string="";
    export let value: string=null;
    export let label: string=null;
    export let name: string=null;
    export let checked:boolean=false;
    export let slider: boolean=false;
    export let toggle: boolean=false;
    export let disabled: boolean=false;
    export let indeterminate: boolean=false;

    let inputElement;

    onMount(() => {
		inputElement.indeterminate = indeterminate;
    });
    afterUpdate(() => {
		inputElement.indeterminate = indeterminate;
    });

</script>

{#if label!==null}
    <div id={id+"_div"} class={(ui?"ui ":"") + (disabled?"disabled ":"") + uiProps($$restProps) + (toggle?" toggle":(slider?" slider":"")) + " checkbox"} {...otherProps($$restProps)} on:click on:keydown on:keypress on:keyup>
        <input type="checkbox" {id} {name} {value} bind:group bind:checked {disabled} bind:this={inputElement}>
        <label for={id} class="ui checkbox">{label}</label>
    </div>
{:else}
    <div id={id+"_div"} class={(ui?"ui ":"") + uiProps($$restProps) + (toggle?" toggle":(slider?" slider":"")) + " checkbox"} {...otherProps($$restProps)} on:click on:keydown on:keypress on:keyup>
        <input type="checkbox" {id} {name} {value} bind:group bind:checked {disabled} bind:this={inputElement}>
        <slot/>
    </div>
{/if}