<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, update, Embed, Button, Grid, Column, Row, Header, Placeholder } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Embed';

    let output: string = "";

    function specify(id:any) {
        update(id, {
            source      : 'youtube',
            id          : 'O6Xo21L0ybE',
            placeholder : '/images/bear-waving.jpg'
          });
    }
</script>


<Examples
    title = "Embed examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/embed.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying a URL -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying a URL" code = {Code.url}>

        <Button ui fluid green attached top on:click={()=>update("bear")}>Enable</Button>
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

        <Button ui fluid green attached top on:click={()=>update("bear2")}>Enable</Button>
        <Embed ui id="bear2" data-source="youtube" data-id="O6Xo21L0ybE"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Specifying metadata -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Specifying metadata" code = {Code.specifying_metadata}>

        <Button ui fluid green attached top on:click={()=>update("bear3")}>Enable</Button>
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

        <Button ui fluid green attached top on:click={()=>update("bear5")}>Enable</Button>
        <Embed ui id="bear5" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vimeo -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vimeo" code = {Code.vimeo}>

        <Button ui fluid green attached top on:click={()=>update("vimeo1")}>Enable</Button>
        <Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Any content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Any content" code = {Code.any_content}>

        <Button ui fluid green attached top on:click={()=>update("any")}>Enable</Button>
        <Embed ui id="any" data={{url : "https://rasterbuster.lubber.de", placeholder : "/images/image-16by9.png", icon : "right circle arrow"}}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Behaviors -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Behaviors" code = {Code.behaviors}>

        <p>The first parameter to the behavior command has to be the name of embedded element, and the rest are as per required for the Embed module behavior.</p>
        <p>Note that the behavior command can be used to return data as well.</p>

        <Grid ui>
            <Row six column stackable>
                <Column><Button ui fluid green on:click={()=>behavior("content", "change", "youtube", "O6Xo21L0ybE")}>Youtube</Button></Column>
                <Column><Button ui fluid blue on:click={()=>behavior("content", "change", "vimeo", "125292332")}>Vimeo</Button></Column>
                <Column><Button ui fluid brown on:click={()=>behavior("content", "change", "url", "", "https://fomantic-ui.com")}>Webpage</Button></Column>
                <Column><Button ui fluid yellow on:click={()=>output = behavior("content", "get type")}>Get type</Button></Column>
                <Column><Button ui fluid orange on:click={()=>output = behavior("content", "get source")}>Get source</Button></Column>
                <Column><Button ui fluid purple on:click={()=>output = behavior("content", "get url")}>Get URL</Button></Column>
            </Row>
            <Row one column center aligned>
                <Column>
                {#if output}
                    <Header h3>{output}</Header>
                {:else}
                <Header h3>(no data at present)</Header>
                {/if}
                </Column>
            </Row>
        </Grid>
            
        <Embed ui id="content"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>