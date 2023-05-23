<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps, initialize, functionize, decommission } from "../svelte-fomantic-ui";
    import { createEventDispatcher, onDestroy } from 'svelte';

    export let value: string = "";
    export let checked: boolean = false;
    export let group: string = "";
    export let id: string = undefined;
    export let settings: object = undefined;
    export let ui: boolean = false;
    export let text: boolean = false;
    export let password: boolean = false;
    export let hidden: boolean = false;
    export let number: boolean = false;
    export let email: boolean = false;
    export let tel: boolean = false;
    export let checkbox: boolean = false;
    export let radio: boolean = false;
    export let date: boolean = false;
    export let time: boolean = false;
    export let color: boolean = false;
    export let file: boolean = false;
    export let search: boolean = false;
    export let range: boolean = false;
    export let week: boolean = false;
    export let month: boolean = false;
    export let year: boolean = false;

    export let popup: object | boolean = undefined;
    export let callbacks : object = undefined;

    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });

    const dispatch = createEventDispatcher();

    // Return a click event for icons that have a link tag
    function doClick(event:any) {
        if (checkbox) {
            dispatch('click', {id: id, target: event.target, checked: checked, value: value});
        } else if (radio) {
            dispatch('click', {id: id, target: event.target, group: group, value: value});
        } else {
            dispatch('click', {id: id, target: event.target, value: value});
        }
    }
</script>

{#if (ui && file)}
    <div class={classString(ui, $$restProps, "file input")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else if (ui && search)}
    <div class={classString(ui, $$restProps, "search input")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else if text}
    <input type="text" {id} class={classString(ui, $$restProps, "input")} bind:value  on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if password}
    <input type="password" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if hidden}
    <input type="hidden" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if number}
    <input type="number" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if email}
    <input type="email" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if tel}
    <input type="tel" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if date}
    <input type="date" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if time}
    <input type="time" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if color}
    <input type="color" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if file}
    <input type="file" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if search}
    <input type="search" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if range}
    <input type="range" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if week}
    <input type="week" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if month}
    <input type="month" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if year}
    <input type="year" {id} class={classString(ui, $$restProps, "input")} bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{:else if checkbox}
    <input type="checkbox" {id} class={classString(ui, $$restProps, "input")} bind:group bind:checked bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} {...otherProps($$restProps)} {...otherProps($$restProps)}/>
    <slot/>
{:else if radio}
    <input type="radio" {id} class={classString(ui, $$restProps, "input")} bind:group bind:value on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} {...otherProps($$restProps)} {...otherProps($$restProps)}/>
    <slot/>
{:else if ui}
    <div class={classString(ui, $$restProps, "input")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot/>
    </div>
{:else}
    <input {id} type="text" class={classString(ui, $$restProps, "input")} bind:value  on:click={doClick} on:change on:keydown on:keypress on:keyup data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}/>
    <slot/>
{/if}
