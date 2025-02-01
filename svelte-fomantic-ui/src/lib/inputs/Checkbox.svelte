<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    import { onMount, afterUpdate } from 'svelte';

    export let ui: boolean = false;
    export let id: string | null = null;
    export let group: string[] = [];
    export let value: string | null = null;
    export let label: string | null = null;
    export let name: string | null = null;
    export let checked:boolean = false;
    export let slider: boolean = false;
    export let toggle: boolean = false;
    export let disabled: boolean = false;
    export let indeterminate: boolean = false;
    export let settings: object | undefined = undefined;
    export let popup: object | boolean | undefined = undefined;

    // If no ID is given, generate a 6 letter random one
    id=(id?id:Math.random().toString(36).substring(2, 6));

    let inputElement : any;

    onMount(() => {
		inputElement.indeterminate = indeterminate;
    });
    afterUpdate(() => {
		inputElement.indeterminate = indeterminate;
    });

</script>

{#if !label}
    <div role="checkbox" aria-checked={checked} tabindex={0} id={id+"_div"} class={classString(ui, $$restProps, (toggle?" toggle":(slider?" slider":"")) + " checkbox")} data-value={value} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} on:click on:keydown on:keypress on:keyup>
        <input type="checkbox" {id} {name} {value} bind:group bind:checked {disabled} bind:this={inputElement} tabindex="0">
        <slot/>
    </div>
{:else}
    <div role="checkbox" aria-checked={checked} tabindex={0} id={id+"_div"} class={classString(ui, $$restProps, (disabled?"disabled ":"") + (toggle?" toggle":(slider?" slider":"")) + " checkbox")} data-value={value} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} {...otherProps($$restProps)} on:click on:keydown on:keypress on:keyup>
        <input type="checkbox" {id} {name} {value} bind:group bind:checked {disabled} bind:this={inputElement} tabindex="0">
        <label for={id} class="ui checkbox">{label}</label>
    </div>
{/if}