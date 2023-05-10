<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, Dimmer, Content, Images, Image, Segment, Header, Buttons, Button, Icon, Placeholder, Line, Paragraph } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Dimmer';

    const flyoutSettings = {
        // onHide: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['show']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['show']})}, 
        // onShow: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['hide']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['hide']})}
    }

</script>


<Examples
    title = "Dimmer examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/dimmer.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dimmer -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dimmer" code = {Code.dimmer}>

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
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>

        <Buttons ui icon>
            <Button ui icon on:click={()=>{update({id: "ex1", type: "dimmer", commands: ["show"]})}}><Icon ui plus/></Button>
            <Button ui icon on:click={()=>{update({id: "ex1", type: "dimmer", commands: ["hide"]})}}><Icon ui minus/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content" code = {Code.content}>

        <Segment ui id="ex2">
            <!-- Dimmer Generated Automatically No Need to Include !-->
            <Header ui h3>
                Overlayable Section
            </Header>
            <Images ui small>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
            </Images>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Dimmer ui>
                <Content>
                    <Header ui h2 inverted icon>
                        <Icon heart/>
                        Dimmed Message!
                    </Header>
                </Content>
            </Dimmer>
        </Segment>

        <Buttons ui icon>
            <Button ui icon on:click={()=>{update({id: "ex2", type: "dimmer", commands: ["show"]})}}><Icon ui plus/></Button>
            <Button ui icon on:click={()=>{update({id: "ex2", type: "dimmer", commands: ["hide"]})}}><Icon ui minus/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Page -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Page" code = {Code.page}>

        <Dimmer ui page id="ex3">
            <Content>
                Hello
            </Content>
        </Dimmer>
        <Button ui icon on:click={()=>{update({id: "ex3", type: "dimmer", commands: ["toggle"]})}}><Icon ui plus/> Dim page</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active" code = {Code.active}>

        <Segment ui id="ex4">
            <!-- Dimmer Generated Automatically No Need to Include !-->
            <Header ui h3>
                Overlayable Section
            </Header>
            <Images ui small>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
            </Images>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Dimmer ui active>
                <Content>
                    <Header ui h2 inverted icon>
                        <Icon star/>
                        Active Dimmed Message!
                    </Header>
                </Content>
            </Dimmer>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Segment ui disabled id="ex5">
            <!-- Dimmer Generated Automatically No Need to Include !-->
            <Header ui h3>
                Overlayable Section
            </Header>
            <Images ui small>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
                <Image src="/images/image.png"/>
            </Images>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
        <Button ui icon on:click={()=>{update({id: "ex5", type: "dimmer", commands: ["show"]})}}><Icon ui plus/> You can press this as much as you like but nothing will happen...</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>