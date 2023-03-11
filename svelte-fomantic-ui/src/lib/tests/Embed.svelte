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

    import {update, behavior} from "../modules/Embed";

    function activate(id) {
        update(id, {})
    }

    function specify(id) {
        update(id, {
            source      : 'youtube',
            id          : 'O6Xo21L0ybE',
            placeholder : '/images/bear-waving.jpg'
          });
    }

    function do_behavior(id, param1="", param2="", param3="") {
        behavior(id, param1, param2, param3);
    }
</script>


<Examples
    title = "Embed examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/embed.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying a URL -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying a URL" code = {Code.url}>

        <Button ui fluid green attached top on:click={()=>activate("bear")}>Enable</Button>
        <Embed ui id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on page load -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Activate on page load" code = {Code.activate}>

        <Embed ui activate data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content IDs -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content IDs" code = {Code.content_ids}>

        <Button ui fluid green attached top on:click={()=>activate("bear2")}>Enable</Button>
        <Embed ui id="bear2" data-source="youtube" data-id="O6Xo21L0ybE"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying metadata -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying metadata" code = {Code.specifying_metadata}>

        <Button ui fluid green attached top on:click={()=>activate("bear3")}>Enable</Button>
        <Embed ui id="bear3" data-source="youtube" data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying programmatically -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying programmatically" code = {Code.specifying_programmatically}>

        <Button ui fluid green attached top on:click={()=>specify("bear4")}>Enable</Button>
        <Embed ui id="bear4"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Youtube -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Youtube" code = {Code.youtube}>

        <Button ui fluid green attached top on:click={()=>activate("bear5")}>Enable</Button>
        <Embed ui id="bear5" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vimeo -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vimeo" code = {Code.vimeo}>

        <Button ui fluid green attached top on:click={()=>activate("vimeo1")}>Enable</Button>
        <Embed ui id="vimeo1" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Any content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Any content" code = {Code.vimeo}>

        <Button ui fluid green attached top on:click={()=>activate("any")}>Enable</Button>
        <Embed ui id="any" data-url="https://rasterbuster.lubber.de" data-placeholder="/images/image-16by9.png" data-icon="right circle arrow"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Behaviors -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Behaviors" code = {Code.vimeo}>

        <Button ui fluid green attached top on:click={()=>do_behavior("behavior", "play")}>Play</Button>
        <Embed ui activate id="behavior" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>