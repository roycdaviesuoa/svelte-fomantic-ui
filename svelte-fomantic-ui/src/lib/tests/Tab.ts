// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    tabs : `
<Menu ui top attached tabular>
    <Item active data-tab="example1tab1">Tab1</Item>
    <Item data-tab="example1tab2">Tab2</Item>
</Menu>
<Tab segment ui active bottom attached data-tab="example1tab1" id="example1">
    <Header ui h4>Tab1 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
<Tab segment ui bottom attached data-tab="example1tab2" id="example1">
    <Header ui h4>Tab2 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
    `,
    javascript : `
<Menu ui top attached tabular>
    <Item active={example2tab===0} on:click={()=> {example2tab = 0; behavior("example2", "change tab", "example2tab1"); }}>Tab1</Item>
    <Item active={example2tab===1} on:click={()=> {example2tab = 1; behavior("example2", "change tab", "example2tab2"); }}>Tab2</Item>
</Menu>
<Tab segment ui active={example2tab===0} bottom attached data-tab="example2tab1" id="example2">
    <Header ui h4>Tab1 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
<Tab segment ui active={example2tab===1} bottom attached data-tab="example2tab2" id="example2">
    <Header ui h4>Tab2 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
    `,
    centered : `
<Menu ui top attached tabular>
    <Item data-tab="example3tab1">One</Item>
    <Item center data-tab="example3tab2">Two</Item>
    <Item active data-tab="example3tab3">Three</Item>
</Menu>
<Tab ui bottom attached segment data-tab="example3tab1">
    <Header ui h4>Tab1 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
<Tab ui bottom attached segment data-tab="example3tab2">
    <Header ui h4>Tab2 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
<Tab ui active bottom attached segment data-tab="example3tab3">
    <Header ui h4>Tab3 Content</Header>
    <Placeholder ui fluid>
        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
    </Placeholder>
</Tab>
    `,
    inverted : `
<Segment ui inverted>
    <Menu ui top attached inverted tabular>
        <Link active item data-tab="one" on:click={()=> {example5tab = 0;}}>{example5tab === 0?"Active Tab":"Tab 1"}</Link>
        <Link item data-tab="two"on:click={()=> {example5tab = 1;}}>{example5tab === 1?"Active Tab":"Tab 2"}</Link>
        <Link item data-tab="three"on:click={()=> {example5tab = 2;}}>{example5tab === 2?"Active Tab":"Tab 3"}</Link>
    </Menu>
    <Tab ui bottom attached active inverted segment data-tab="one">
        <p>content one</p>
    </Tab>
    <Tab ui bottom attached inverted segment data-tab="two">
        <p>content two</p>
    </Tab>
    <Tab ui bottom attached inverted segment data-tab="three">
        <p>content three</p>
    </Tab>
</Segment>
    `,
    bottom_attached : `
<Segment ui inverted>
    <Tab ui top attached active inverted segment data-tab="example6tab1">
        <p>content one</p>
    </Tab>
    <Tab ui top attached inverted segment data-tab="example6tab2">
        <p>content two</p>
    </Tab>
    <Tab ui top attached inverted segment data-tab="example6tab3">
        <p>content three</p>
    </Tab>
    <Menu ui bottom attached inverted tabular>
        <Link active item data-tab="example6tab1" on:click={()=> {example6tab = 0;}}>{example6tab === 0?"Active Tab":"Tab 1"}</Link>
        <Link item data-tab="example6tab2" on:click={()=> {example6tab = 1;}}>{example6tab === 1?"Active Tab":"Tab 2"}</Link>
        <Link item data-tab="example6tab3" on:click={()=> {example6tab = 2;}}>{example6tab === 2?"Active Tab":"Tab 3"}</Link>
    </Menu>
</Segment>
    `
}

export default code;