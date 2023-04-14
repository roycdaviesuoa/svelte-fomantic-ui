<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let selected: string = undefined;
    export let popup: object | boolean = undefined;

    function setSelected(e:any) {
        if (e.target.attributes["value"]) {
            selected = e.target.attributes["value"].value;
        }
    }
</script>

{#if selected}
    <div class={classString(ui, $$restProps, "menu")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:click={setSelected} on:change>
        <slot />
    </div>
{:else}
    <div class={classString(ui, $$restProps, "menu")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)} on:change>
        <slot />
    </div>
{/if}