<script lang="ts">
    import { Divider, Column, Placeholder, Line, Paragraph, Segment, Button, Icon, Form, Field, Label, Input, Inputwrapper, Table, TableBody, TableRow, TableCol, TableHead } from "../fomantic-ui/Core.svelte";
    import Grid from "../fomantic-ui/Grid.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/divider.html">here</a></h3>

<h4>A standard divider</h4>
<br/>
<Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
<Divider ui/>
<Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

<h4>A vertical divider</h4>
<Segment ui>
    <Grid ui style="two column very relaxed">
        <Column>
            <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Column>
        <Column>
            <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Column>
    </Grid>
    <Divider ui style="vertical"> and </Divider>
</Segment>

<h4>Stackable Grid Vertical Divider</h4>
<Segment ui style="placeholder">
    <Grid ui style="two column very relaxed stackable">
        <Column>
            <Form ui>
                <Field>
                        <Label checkbox>Username</Label>
                        <Inputwrapper ui style="left icon">
                            <Input type="text" placeholder='Username'/>
                            <Icon style="user"/>
                        </Inputwrapper>
                </Field>
                <Field>
                    <Label checkbox>Password</Label>
                    <Inputwrapper ui style="left icon">
                        <Input type="password"/>
                        <Icon style="lock"/>
                    </Inputwrapper>
                </Field>
                <Button ui style="blue submit">Login</Button>
            </Form>
        </Column>
        <Column style="middle aligned">
            <Button ui style="big">
                <Icon style="signup"/>
                Sign Up
            </Button>
        </Column>
    </Grid>
    <Divider ui style="vertical">
      Or
    </Divider>
</Segment>

<h4>Horizontal Divider</h4>
<Segment ui style="center aligned basic">
    <Inputwrapper ui style="left icon action">
        <Icon style="search"/>
        <Input type="text" placeholder="Order #"/>
        <Button ui style="blue submit">Search</Button>
    </Inputwrapper>
    <Divider ui style="horizontal">
        Or
    </Divider>
    <Button ui style="teal labeled icon">
        Create New Order
        <Icon style="add"/>
    </Button>
</Segment>
<br/><br/>
<Divider ui style="small horizontal header">
    <Icon style="tag"/>
    Description
</Divider>
    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
    <Divider ui style="small horizontal header">
        <Icon style="bar chart"/>
        Specifications
    </Divider>
    <Table ui style="definition">
        <TableHead>
            <TableRow>
                <TableCol head style="two wide column"></TableCol>
                <TableCol head>Details</TableCol>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCol>Size</TableCol>
                <TableCol>1" x 2"</TableCol>
            </TableRow>
            <TableRow>
                <TableCol>Weight</TableCol>
                <TableCol>6 ounces</TableCol>
            </TableRow>
            <TableRow>
                <TableCol>Color</TableCol>
                <TableCol>Yellowish</TableCol>
            </TableRow>
            <TableRow>
                <TableCol>Odor</TableCol>
                <TableCol>Not Much Usually</TableCol>
            </TableRow>
        </TableBody>
</Table>

