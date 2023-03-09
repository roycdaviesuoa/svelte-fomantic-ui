<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Placeholder, Header, Paragraph, Line, Grid, Column, Segment, Card, Cards, Image, Content, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Placeholder';  
</script>

<Examples
    title = "Placeholder examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/placeholder.html'>here</a>">

    
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Standard -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Standard" code = {Code.standard}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- More complex -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "More complex" code = {Code.complex}>

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

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Simulate Loading -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Simulate loading" code = {Code.loading}>

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

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Rectangular images -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Rectangular images" code = {Code.rectangular}>

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

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Line length -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Line length" code = {Code.line_length}>

        <Placeholder ui>
            <Line full/>
            <Line very long/>
            <Line long/>
            <Line medium/>
            <Line short/>
            <Line very short/>
        </Placeholder>

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

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

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

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

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>
