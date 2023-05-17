<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Slider } from "../svelte-fomantic-ui.svelte";
    import {deFunction} from "../super_stringify";
    const aFunction = (a:number = 0,b: number = 1,c: number = 2) => {return a+b+c};

    function bFunction (a:number = 0,b: number = 1,c: number = 2) {
        return a+b+c;
    }

    deFunction (aFunction);
    deFunction (bFunction);
</script>

<Slider ui/>

