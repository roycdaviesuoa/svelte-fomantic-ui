<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Embed, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Embed';

    import {update} from "../modules/Embed";

    function activate(id) {
        update(id, {})
    }
</script>


<Examples
    title = "Embed examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/embed.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying a URL -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying a URL" code = {Code.url}>

        <Button ui fluid green on:click={()=>activate("bear")}>Enable</Button>
        <Embed ui id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on page load -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Activate on page load" code = {Code.activate}>

        <Embed ui activate id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>