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
        if (e.target.value) {
            selected = e.target.value;
        }
    }

</script>

<div class={classString(ui, $$restProps, "calendar")} data-module={rationalize([serialize((popup?"popup":null), popup), serialize("calendar", settings)])} {...otherProps($$restProps)} on:change={setSelected}>
    <slot />
</div>