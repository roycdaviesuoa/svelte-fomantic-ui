<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, Images, Image, Segment, Header, Buttons, Button, Icon } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Dimmer';
</script>


<Examples
    title = "Dimmer examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/dimmer.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>

        <Segment ui id="ex1">
            <!-- Dimmer Generated Automatically No Need to Include !-->
            <Header ui h3>
                Overlayable Section
            </Header>
            <Images ui small>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
            </Images>
            <p></p>
        </Segment>

        <Buttons ui icon>
            <Button ui icon on:click={()=>{update({id: "ex1", type: "dimmer", commands: ["show"]})}}><Icon ui plus/></Button>
            <Button ui icon on:click={()=>{update({id: "ex1", type: "dimmer", commands: ["hide"]})}}><Icon ui minus/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>