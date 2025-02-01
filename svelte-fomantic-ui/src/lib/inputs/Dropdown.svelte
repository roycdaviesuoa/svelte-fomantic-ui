<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let id: any = undefined;
    export let settings: object | undefined = undefined;
    export let selected: any = undefined;
    export let value: any = undefined;
    export let popup: object | boolean | undefined = undefined;
    export let multiple: boolean = false;
    export let values: boolean = false;
    export let callbacks : object = {};
        
    import { createEventDispatcher, onDestroy } from 'svelte';
    const dispatch = createEventDispatcher();

    const moreFunctions = {
        onChange: {
            value: null,
            text: null,
            $choice: null,

            _: (data: any) => { console.log(data); selected = data.value; value = selected; }
        }
    };

    let allCallbacks = multiple ? {...callbacks, ...moreFunctions} : callbacks;

    const ID = initialize(id, allCallbacks);
    onDestroy(() => { decommission(ID, id, allCallbacks); });


    function doClick(e: any) {
        if (e.target.attributes.hasOwnProperty("data-value") || e.target.attributes.hasOwnProperty("value") || (!values && e.target.innerText)) {
            value = e.target.attributes.hasOwnProperty("data-value") ? e.target.attributes["data-value"].value : ( e.target.attributes.hasOwnProperty("value").value ? e.target.attributes["value"].value : ( values ? undefined : e.target.innerText.trim() ) );
            selected = value;
            if (id) {
                dispatch('change', {id: id, target: e.target, value: value});
            }
            else {
                dispatch('change', {target: e.target, value: value});
            }
        }
    }

    function doChange(e: any) {
        selected = e.target.value;
        value = selected;
        if (id) {
            dispatch('change', {id: id, target: e.target, value: value});
        }
        else {
            dispatch('change', {target: e.target, value: value});
        }
    }
</script>

{#if multiple}
    <div {id} class={classString(ui, $$restProps, "multiple dropdown")} data-selected={selected} data-module={rationalize([serialize("dropdown", {...functionize(ID, id, allCallbacks), ...settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)} on:change={doChange}>
        <slot />
    </div>
{:else}
    <div role="link" tabindex={0} {id} class={classString(ui, $$restProps, "dropdown")} data-module={rationalize([serialize("dropdown", {...functionize(ID, id, allCallbacks), ...settings}), serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)])} {...otherProps($$restProps)} on:click={doClick}>
        <slot />
    </div>
{/if}

