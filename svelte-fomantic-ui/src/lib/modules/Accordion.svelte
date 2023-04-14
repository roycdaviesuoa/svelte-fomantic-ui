<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, rationalize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean=false;
    export let selected: string = "";
    export let settings: object = undefined;
    export let popup: object | boolean = undefined;
        
    function setSelected(e: any) {
        if (e.target.attributes["value"]) {
            selected = e.target.attributes["value"].value;
        }
    }

</script>

<div class={classString(ui, $$restProps, "accordion")} data-module={rationalize([serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup), serialize((ui?"accordion":null), settings)])} {...otherProps($$restProps)} on:click={setSelected}>
    <slot />
</div>