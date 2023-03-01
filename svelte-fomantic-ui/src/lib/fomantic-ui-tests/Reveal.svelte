<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Reveal, Content, Image, Button } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let revealed: boolean = false;
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/reveal.html">here</a></div>

    <div class="example">
        <h4 class="example-header">Fade</h4>

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

        <Prism language="html" source={`
<Reveal ui fade>
    <Content visible>
        <Image ui small src="/images/square-image.png"/>
    </Content>
    <Content hidden>
        <Image ui small src="/images/ade.jpg"/>
    </Content>
</Reveal>

<Reveal ui small fade image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Move</h4>

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

        <Prism language="html" source={`
<Reveal ui small move image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

<Reveal ui small move right image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

<Reveal ui small move up image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

<Reveal ui small move down image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Rotate</h4>

        <Reveal ui small circular rotate image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>
        <br/>
        <Reveal ui small circular rotate left image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

        <Prism language="html" source={`
<Reveal ui small circular rotate image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

<Reveal ui small circular rotate left image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Visible Content</h4>

        <Reveal ui small fade image>
            <Image visible content src="/images/ade.jpg"/>
            <Image hidden content src="/images/square-image.png"/>
        </Reveal>

        <Prism language="html" source={`
<Reveal ui small fade image>
    <Image visible content src="/images/ade.png"/>
    <Image hidden content src="/images/square-image.jpg"/>
</Reveal>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Hidden Content</h4>

        <Reveal ui small fade image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

        <Prism language="html" source={`
<Reveal ui small fade image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Active / Disabled</h4>

        <Button ui toggle bind:active={revealed} green>
            <Content slot="on">Hide</Content>
            <Content slot="off">Reveal</Content>
        </Button>
        <Reveal ui small fade image active={revealed} disabled={!revealed}>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

        <Prism language="html" source={`
<Button ui toggle bind:active={revealed} green>
    <Content slot="on">Hide</Content>
    <Content slot="off">Reveal</Content>
</Button>
<Reveal ui small fade image active={revealed} disabled={!revealed}>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Instant</h4>

        <Reveal ui small instant move image>
            <Image visible content src="/images/square-image.png"/>
            <Image hidden content src="/images/ade.jpg"/>
        </Reveal>

        <Prism language="html" source={`
<Reveal ui small instant move image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `}/>
    </div>
</div>
