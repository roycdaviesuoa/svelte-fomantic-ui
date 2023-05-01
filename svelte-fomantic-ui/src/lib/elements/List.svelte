<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let id: string=undefined;
    export let value: any = undefined;
    export let selected: any = undefined;
    export let popup: object | boolean = undefined;
    export let values: boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Return a click event
    function doClick(e: any) {
        if (e.target.attributes.hasOwnProperty("data-value") || e.target.attributes.hasOwnProperty("value") || (!values && e.target.innerText)) {
            value = e.target.attributes.hasOwnProperty("data-value") ? e.target.attributes["data-value"].value : ( e.target.attributes.hasOwnProperty("value").value ? e.target.attributes["value"].value : ( values ? undefined : e.target.innerText.trim() ) );
            selected = value;
            dispatch('click', {id: id, target: e.target, value: value});
        }
        else {
            dispatch('click', {id: id, target: e.target});
        }
    }
</script>

<!-- {#if selection}
    <div {id} class={classString(ui, $$restProps, "selection list")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup>
        <slot />
    </div>
{:else} -->
    <div {id} class={classString(ui, $$restProps, "list")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup>
        <slot />
    </div>
<!-- {/if} -->