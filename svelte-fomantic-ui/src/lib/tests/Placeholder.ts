// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    standard : `
<Placeholder ui>
    <Header image>
        <Line/>
        <Line/>
    </Header>
    <Paragraph>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
    </Paragraph>
</Placeholder>
    `,
    complex : `
<Grid ui three column stackable>
    <Column>
        <Segment ui raised>
            <Placeholder ui>
                <Header image>
                    <Line/>
                    <Line/>
                </Header>
                <Paragraph>
                    <Line medium/>
                    <Line short/>
                </Paragraph>
            </Placeholder>
        </Segment>
    </Column>
    <Column>
        <Segment ui raised>
            <Placeholder ui>
                <Header image>
                    <Line/>
                    <Line/>
                </Header>
                <Paragraph>
                    <Line medium/>
                    <Line short/>
                </Paragraph>
            </Placeholder>
        </Segment>
    </Column>
    <Column>
        <Segment ui raised>
            <Placeholder ui>
                <Header image>
                    <Line/>
                    <Line/>
                </Header>
                <Paragraph>
                    <Line medium/>
                    <Line short/>
                </Paragraph>
            </Placeholder>
        </Segment>
    </Column>
</Grid>
    `,
    loading : `
<Cards ui three doubling stackable>
    <Card ui>
        <Image ui>
            <Placeholder ui>
                <Image square/>
            </Placeholder>
        </Image>
        <Content>
            <Placeholder ui>
                <Header>
                    <Line very short/>
                    <Line medium line/>
                </Header>
                <Paragraph>
                    <Line short/>
                </Paragraph>
            </Placeholder>
        </Content>
        <Content extra>
                <Button ui disabled primary>Add</Button>
                <Button ui disabled>Delete</Button>
        </Content>
    </Card>
</Cards>
    `,
    rectangular : `
<Cards ui three>
    <Card ui>
        <Content>
            <Placeholder ui>
                <Image ui rectangular/>
            </Placeholder>
        </Content>
    </Card>
    <Card ui>
        <Content>
            <Placeholder ui>
                <Image ui rectangular/>
            </Placeholder>
        </Content>
    </Card>
    <Card ui>
        <Content>
            <Placeholder ui>
                <Image ui rectangular/>
            </Placeholder>
        </Content>
    </Card>
</Cards>
    `,
    line_length : `
<Placeholder ui>
    <Line full/>
    <Line very long/>
    <Line long/>
    <Line medium/>
    <Line short/>
    <Line very short/>
</Placeholder>
    `,
    fluid : `
<Placeholder ui fluid>
    <Header image>
        <Line/>
        <Line/>
    </Header>
    <Paragraph>
        <Line/>
        <Line/>
        <Line/>
    </Paragraph>
</Placeholder>
    `,
    inverted : `
<Segment ui inverted>
    <Placeholder ui active inverted>
        <Header image>
            <Line/>
            <Line/>
        </Header>
        <Paragraph>
            <Line/>
            <Line/>
            <Line/>
        </Paragraph>
    </Placeholder>
</Segment>
    `
}

export default code;