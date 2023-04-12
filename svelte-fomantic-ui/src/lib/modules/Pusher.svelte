<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";
    
    export let ui: boolean = false;
    export let popup: object | boolean = undefined;
        
    export let clientWidth: number=0;
    export let clientHeight: number=0;
    export let offsetWidth: number=0;
    export let offsetHeight: number=0;
</script>

<div class={classString(ui, $$restProps, "pusher")} data-module={serialize((popup?"popup":null), popup)} bind:clientWidth bind:clientHeight bind:offsetWidth bind:offsetHeight {...otherProps($$restProps)}>
    <slot />
</div>
