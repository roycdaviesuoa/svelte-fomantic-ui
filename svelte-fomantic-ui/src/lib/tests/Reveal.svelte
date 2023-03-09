<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Reveal, Content, Image, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Reveal';

    let revealed: boolean = false;
</script>


<Examples
    title = "Reveal examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/reveal.html'>here</a>">
    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fade -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fade" code = {Code.fade}>

        <Reveal ui fade>
            <Content visible>
                <Image ui small src="/images/square-image.png"/>
            </Content>
            <Content hidden>
                <Image ui small src="/images/ade.jpg"/>
            </Content>
        </Reveal>
        <br/>
        <Reveal ui small fade image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Move -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Move" code = {Code.move}>

        <Reveal ui small move image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>
        <br/>
        <Reveal ui small move right image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>
        <br/>
        <Reveal ui small move up image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>
        <br/>
        <Reveal ui small move down image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Rotate -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Rotate" code = {Code.rotate}>

        <Reveal ui small circular rotate image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>
        <br/>
        <Reveal ui small circular rotate left image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Visible Content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Visible Content" code = {Code.visible_content}>

        <Reveal ui small fade image>
            <Image visible content src="/images/ade.jpg"/>
            <Image hidden content src="/images/square-image.png"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Hidden Content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Hidden Content" code = {Code.hidden_content}>

        <Reveal ui small fade image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active / Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active / Disabled" code = {Code.active_disabled}>

        <Button ui toggle bind:active={revealed} green>
            <Content slot="on">Hide</Content>
            <Content slot="off">Reveal</Content>
        </Button>
        <Reveal ui small fade image active={revealed} disabled={!revealed}>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Instant -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Instant" code = {Code.instant}>

        <Reveal ui small instant move image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>
