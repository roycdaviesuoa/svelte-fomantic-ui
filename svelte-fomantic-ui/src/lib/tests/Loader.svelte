<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Loader, Segment, Dimmer, Placeholder, Paragraph, Line, Button, Content, Image } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Loader';

    let isActive: boolean = false;
    function setActive() {
        isActive = !isActive;
    }
    
</script>


<Examples
    title = "Loader examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/loader.html'>here</a>"
    code = {Code}>
  
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Loader -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Loader" code = {Code.loader}>


        <Segment ui>
            <Image ui wireframe src="/images/short-paragraph.png"/>
            <Dimmer ui active>
                <Loader ui active/>
            </Dimmer>
        </Segment>


    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text loader -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text loader" code = {Code.text_loader}>

        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active>
              <Loader ui text>Loading</Loader>
            </Dimmer>
        </Segment>
        <br/><br/>
        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active inverted >
              <Loader ui text>Loading</Loader>
            </Dimmer>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Indeterminate -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Indeterminate" code = {Code.indeterminate}>

        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active>
              <Loader ui indeterminate text>Preparing Files</Loader>
            </Dimmer>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active Disabled" code = {Code.active_disabled}>

        <Button ui toggle fluid bind:value={isActive} on:toggle={setActive} on_style="green">
            <Content slot="on">Active</Content>
            <Content slot="off">Disabled</Content>
        </Button>
        <Segment ui>
            <Loader ui active={isActive} disabled={!isActive}/>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline" code = {Code.inline}>

        <Loader ui active inline/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Centered inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Centered inline" code = {Code.centered_inline}>

        <Loader ui active centered inline/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Speed -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Speed" code = {Code.speed}>

        <Loader ui active slow inline/>
        <Loader ui active inline/>
        <Loader ui active fast inline/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Loader ui active primary inline/>
        <Loader ui active secondary inline/>
        <Loader ui active red inline/>
        <Loader ui active orange inline/>
        <Loader ui active yellow inline/>
        <Loader ui active olive inline/>
        <Loader ui active green inline/>
        <Loader ui active teal inline/>
        <Loader ui active blue inline/>
        <Loader ui active violet inline/>
        <Loader ui active purple inline/>
        <Loader ui active pink inline/>
        <Loader ui active brown inline/>
        <Loader ui active grey inline/>
        <Loader ui active black inline/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        <Segment ui>
            <Dimmer ui active>
                <Loader ui mini text>Loading</Loader>
            </Dimmer>
            <br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui tiny text>Loading</Loader>
            </Dimmer>
            <br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui small text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui medium text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui large text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui big text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui huge text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui massive text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Loader ui active inverted/>
            <br/><br/><br/><br/>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted dimmer -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted dimmer" code = {Code.inverted_dimmer}>

        <Segment ui>
            <Dimmer ui active inverted>
                <Loader ui text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Styles -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Styles" code = {Code.styles}>

        <Segment ui>
            <Loader ui active slow green double/>
            <br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Loader ui active blue elastic/>
            <br/><br/><br/><br/>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>
