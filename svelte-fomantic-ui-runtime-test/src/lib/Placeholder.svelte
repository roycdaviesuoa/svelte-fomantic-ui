<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Placeholder, Header, Paragraph, Line, Grid, Column, Segment, Card, Cards, Image, Content, Button } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/placeholder.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">Standard</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">More complex</h4>

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

        <Prism language="svelte" source={`
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

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Simulate loading</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Rectangular Images</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Line length</h4>

        <Placeholder ui>
            <Line full/>
            <Line very long/>
            <Line long/>
            <Line medium/>
            <Line short/>
            <Line very short/>
        </Placeholder>

        <Prism language="svelte" source={`
<Placeholder ui>
    <Line full/>
    <Line very long/>
    <Line long/>
    <Line medium/>
    <Line short/>
    <Line very short/>
</Placeholder>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fluid</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

</div>
