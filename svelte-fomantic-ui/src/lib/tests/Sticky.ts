// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    sticky : `
<Segment ui id="sticky1">
    <Rail left ui>
        <Placeholder ui fluid>
            {#each {length: 3} as _}
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
            {/each}
        </Placeholder>
        <p></p>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky1"}}>
            <Header ui h3>Stuck Content</Header>
            <Image ui src="/images/image.png"/>
        </Sticky>
    </Rail>
    <Rail right ui>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky1"}}>
            <Header ui h3>Stuck Content</Header>
            <Image ui src="/images/image.png"/>
        </Sticky>
    </Rail>
    <Placeholder ui fluid>
        {#each {length: 20} as _}
            <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
        {/each}
    </Placeholder>
</Segment>
    `,
    pushing : `
<Segment ui id="sticky2">
    <Rail left ui>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
            <Header ui h3>Stuck Content</Header>
            <Image ui src="/images/image.png"/>
        </Sticky>
    </Rail>
    <Rail right ui>
        <Placeholder ui fluid>
            {#each {length: 3} as _}
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
            {/each}
        </Placeholder>
        <p></p>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
            <Header ui h3>Stuck Content</Header>
            <Image ui src="/images/image.png"/>
        </Sticky>
    </Rail>
    <Placeholder ui fluid>
        {#each {length: 20} as _}
            <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
        {/each}
    </Placeholder>
</Segment>
    `,
    oversized : `
<Segment ui id="sticky3">
    <Rail left ui>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky3"}}>
            <Header ui h3>Stuck Content</Header>
            <Items ui divided>
                {#each new Array(10) as _}
                    <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                {/each}
            </Items>
        </Sticky>
    </Rail>
    <Rail right ui>
        <Placeholder ui fluid>
            {#each {length: 3} as _}
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
            {/each}
        </Placeholder>
        <p></p>
        <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky3"}}>
            <Header ui h3>Stuck Content</Header>
            <Image ui src="/images/image.png"/>
        </Sticky>
    </Rail>
    <Placeholder ui fluid>
        {#each {length: 15} as _}
            <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
        {/each}
    </Placeholder>
</Segment>
    `,
    own_context : `
<Segment ui d="sticky4">
    <Sticky ui style="width: 670px !important; height: 43px !important; left: 617px;" >
        <Menu ui fluid three item tabular>
            <Item active>Tab 1</Item>
            <Item>Tab 2</Item>
            <Item>Tab 3</Item>
        </Menu>
    </Sticky>
    <Tab ui active>
        <Placeholder ui fluid>
            {#each {length: 20} as _}
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
            {/each}
        </Placeholder>
    </Tab>
</Segment>
    `
}

export default code;