<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean=false;
    export let id: string | undefined = undefined;
    export let value: any = undefined;
    export let popup: object | boolean | undefined = undefined;
        
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    function doClick(event:any) {
        if (event.target.attributes["data-value"]) {
            value = event.target.attributes["data-value"].value;
            dispatch('click', {id: id, target: event.target, value: value});
        }
        else {
            dispatch('click', {id: id, target: event.target});
        }
    }
</script>

<a {id} role="link" tabindex={0} class={classString(ui, $$restProps, "")} data-value={value} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:click={doClick} on:keydown on:keypress on:keyup>
    <slot />
</a>
