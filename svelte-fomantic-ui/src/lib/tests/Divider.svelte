<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Divider, Grid, Column, Placeholder, Line, Paragraph, Segment, Button, Icon, Form, Field, Label, Input, Table, Table_Body, Table_Row, Table_Col, Table_Head } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Divider';
</script>


<Examples
    title = "Divider examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/divider.html'>here</a>"
    code = {Code}>

    
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Standard -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Standard" code = {Code.standard}>

        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Divider ui/>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vertical -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vertical" code = {Code.vertical}>

        <Segment ui>
            <Grid ui two column very relaxed>
                <Column>
                    <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Column>
                <Column>
                    <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Column>
            </Grid>
            <Divider ui vertical> and </Divider>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable vertical grid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable vertical grid" code = {Code.stackable_vertical_grid}>

        <Segment ui placeholder>
            <Grid ui two column very relaxed stackable>
                <Column>
                    <Form ui>
                        <Field>
                            <Label checkbox>Username</Label>
                            <Input ui left icon>
                                <Input type="text" placeholder='Username'/>
                                <Icon user/>
                            </Input>
                        </Field>
                        <Field>
                            <Label checkbox>Password</Label>
                            <Input ui left icon>
                                <Input type="password"/>
                                <Icon lock/>
                            </Input>
                        </Field>
                        <Button ui blue submit>Login</Button>
                    </Form>
                </Column>
                <Column middle aligned>
                    <Button ui big>
                        <Icon signup/>
                        Sign Up
                    </Button>
                </Column>
            </Grid>
            <Divider ui vertical>
            Or
            </Divider>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Horizontal divider -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Horizontal divider" code = {Code.horizontal_divider}>

        <Segment ui center aligned basic>
            <Input ui left icon action>
                <Icon search/>
                <Input type="text" placeholder="Order #"/>
                <Button ui blue submit>Search</Button>
            </Input>
            <Divider ui horizontal>
                Or
            </Divider>
            <Button ui teal labeled icon>
                Create New Order
                <Icon add/>
            </Button>
        </Segment>
        <Divider ui small horizontal header>
            <Icon tag/>
            Description
        </Divider>
        <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
        <Divider ui small horizontal header>
            <Icon bar chart/>
            Specifications
        </Divider>
        <Table ui definition>
            <Table_Head>
                <Table_Row>
                    <Table_Col head two wide column></Table_Col>
                    <Table_Col head>Details</Table_Col>
                </Table_Row>
            </Table_Head>
            <Table_Body>
                <Table_Row>
                    <Table_Col>Size</Table_Col>
                    <Table_Col>1" x 2"</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Weight</Table_Col>
                    <Table_Col>6 ounces</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Color</Table_Col>
                    <Table_Col>Yellowish</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Odor</Table_Col>
                    <Table_Col>Not Much Usually</Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Horizontal alignment -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Horizontal alignment" code = {Code.horizontal_alignment}>

        <Divider ui small horizontal left aligned header>
            <Icon left align/>
            Left Aligned
        </Divider>
        <Divider ui small horizontal center aligned header>
            <Icon center align/>
            Center Aligned
        </Divider>
        <Divider ui small horizontal right aligned header>
            <Icon right align/>
            Right Aligned
        </Divider>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Placeholder ui inverted> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Divider ui inverted/>
            <Placeholder ui inverted> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Divider ui horizontal inverted>
                Horizontal
            </Divider>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
</Examples>