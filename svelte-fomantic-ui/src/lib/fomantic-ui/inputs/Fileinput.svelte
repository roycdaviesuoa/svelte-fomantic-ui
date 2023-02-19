<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">

    // NOT YET COMPLETE
    
    export let style: string = "";
    export let placeholder: string="";
    export let name: string="";
    export let value: string="";
    export let ui: boolean=false;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>

<div class={(ui?"ui ":"") + style + " input"} {...$$restProps}>
    <input type="file" {name}>
</div>
