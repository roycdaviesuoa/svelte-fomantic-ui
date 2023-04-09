<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    function doClick(event) {
        dispatch('click', {id: id, target:event.target})
    }
</script>

<a {id} class={classString(ui, $$restProps, "")} data-module={serialize((popup?"popup":null), popup)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup>
    <slot />
</a>
