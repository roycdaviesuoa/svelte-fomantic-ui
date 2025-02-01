<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let id: string | undefined = undefined;
    export let group: string = "";
    export let value: string = "";
    export let label: string = "";
    export let name: string | null = null;
    export let slider: boolean = false;
    export let toggle: boolean = false;
    export let disabled: boolean = false;
    export let settings: object | undefined = undefined;
    export let popup: object | boolean | undefined = undefined;
    
</script>

{#if label}
    <div class={classString(ui, $$restProps, (disabled?"disabled ":"") + (toggle?" toggle":(slider?" slider":" radio")) + " checkbox")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} {...otherProps($$restProps)}>
        <input type="radio" {id} {name} {value} bind:group {disabled}>
        <label for={id} class="ui radio">{label}</label>
    </div>
{:else}
    <div class={classString(ui, $$restProps, (disabled?"disabled ":"") + (toggle?" toggle":(slider?" slider":" radio")) + " checkbox")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize("checkbox", settings)])} {...otherProps($$restProps)}>
        <input type="radio" {id} {name} {value} bind:group {disabled}>
        <slot/>
    </div>
{/if}