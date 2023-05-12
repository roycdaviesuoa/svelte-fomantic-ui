// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    dimmer : `
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
    `,
    content : `
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
    `,
    page : `
<Dimmer ui page id="ex3">
    <Content>
        Hello
    </Content>
</Dimmer>

<Button ui icon on:click={()=>{update({id: "ex3", type: "dimmer", commands: ["toggle"]})}}><Icon ui plus/> Dim page</Button>
    `,
    active : `
<Segment ui id="ex4">
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
    `,
    disabled : `
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
    `
}

export default code;