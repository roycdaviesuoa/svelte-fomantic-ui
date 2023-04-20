<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    import { onMount } from "svelte";

    export let ui: boolean=false;
    export let value: string = "";
    export let selected: string = "";
    export let id: string = undefined;
    export let popup: object | boolean = undefined;
    export let settings: object = undefined;
    export let multiple: boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const channelname = [...Array(8)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    console.log("channel", channelname);

    const onChange = () => {
        console.log(channelname);
    }

    onMount(()=> {
        const slotContents = document.querySelectorAll("slot");

        slotContents.forEach((element) => {
            // Modify each element as needed
            console.log(element);
        });

        document.removeEventListener(channelname, ()=>{});
        document.addEventListener(channelname, (newvalue) => {
            console.log(newvalue["detail"]);
            selected = newvalue["detail"];
            value = selected;
        })
    })

    const additionalSettings = {
        // onChange: (value: string[], _text: string, $choice: any, channel:string=this.bind(channelname)) => {
        //     console.log(channel);
        //     const event = new CustomEvent(channel, { detail: value.join(",") });
        //     // console.log($choice);
        //     document.dispatchEvent(event);
        //     // console.log(channelname);
        //     // console.log("CHANGE", value, text, $choice);
        // }
        onChange: onChange
    }

    function doClick(e: any) {
        console.log(e);

        if (e.target.attributes["data-value"]) {
            value = e.target.attributes["data-value"].value;
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
        console.log(e);
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
    <select {id} multiple class={classString(ui, $$restProps, "")} on:change on:click on:keydown on:keypress on:keyup data-module={{type: "select", settings:{...settings, ...additionalSettings}}} {...otherProps($$restProps)}>
        <slot/>
    </select>
{:else}
    <select {id} class={classString(ui, $$restProps, "")} bind:value on:change on:click={doClick} on:keydown on:keypress on:keyup data-module={{type: "select", settings:{...settings, ...additionalSettings}}} {...otherProps($$restProps)}>
        <slot/>
    </select>
{/if}

