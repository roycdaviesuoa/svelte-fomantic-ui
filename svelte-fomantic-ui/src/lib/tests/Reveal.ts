// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    fade : `
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
    `,
    move : `
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
    `,
    rotate : `
<Reveal ui small circular rotate image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>

<Reveal ui small circular rotate left image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `,
    visible_content : `
<Reveal ui small fade image>
    <Image visible content src="/images/ade.png"/>
    <Image hidden content src="/images/square-image.jpg"/>
</Reveal>
    `,
    hidden_content : `
<Reveal ui small fade image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `,
    active_disabled : `
<Button ui toggle bind:active={revealed} green>
    <Content slot="on">Hide</Content>
    <Content slot="off">Reveal</Content>
</Button>
<Reveal ui small fade image active={revealed} disabled={!revealed}>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `,
    instant : `
<Reveal ui small instant move image>
    <Image visible content src="/images/square-image.png"/>
    <Image hidden content src="/images/ade.jpg"/>
</Reveal>
    `
}

export default code;