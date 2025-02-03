<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Embed } from "../svelte-fomantic-ui.svelte";

    let innerHeight = 0;
    $: height = innerHeight - 30;

</script>

<svelte:window bind:innerHeight={innerHeight}/>
<Embed ui activate data={{url : "#Flyout"}} style={"height: " + height + "px;"}/>
    


