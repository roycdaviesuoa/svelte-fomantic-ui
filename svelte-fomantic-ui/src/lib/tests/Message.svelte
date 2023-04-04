<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, Message, Header, List, Item, Content, Icon, Button, Grid, Column, Form, Link, Field, Fields, Input, Label, Checkbox } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Message';
	import { fade, fly } from 'svelte/transition';

    let transitionVisible = true;
    let transitionButtonVisible = false;
    let hiddenHidden = true;

    let formFields = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        ts_and_cs: false
    }
</script>


<Examples
    title = "Message examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/message.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Basic -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Basic" code = {Code.basic}>

        <Message ui>
            <Header>
                Changes in Service
            </Header>
            <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- List -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "List" code = {Code.list}>

        <Message ui>
            <Header>
                New Site Features
            </Header>
            <List ui bulleted>
                <Item>You can now have cover images on blog pages</Item>
                <Item>Drafts will now auto-save while writing</Item>
            </List>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        <Message ui icon>
            <Icon inbox />
            <Content>
                <Header>
                    Have you heard about our mailing list?
                </Header>
                <p>Get the best news in your e-mail every day.</p>
            </Content>
        </Message>

        <Message ui icon>
            <Icon notched circle loading/>
            <Content>
                <Header>
                    Just one second
                </Header>
                <p>We're fetching that content for you.</p>
            </Content>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dismissable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dismissable" code = {Code.dismissable}>

        <p>See the tutorial on Svelte transitions <a href="https://svelte.dev/tutorial/transition">here</a></p>

        {#if transitionButtonVisible}
            <div transition:fade>
                <Button ui fluid on:click={() => {transitionButtonVisible = false;setTimeout(()=>{transitionVisible=true;}, 500)}} >Bring back</Button>
            </div>
        {/if}
        {#if transitionVisible}
            <div transition:fade>
                <Message ui>
                    <Icon close link on:click={()=>{transitionVisible = false;setTimeout(()=>{transitionButtonVisible=true;}, 500)}}/>
                    <Header>
                        Welcome back!
                    </Header>
                    <p>This is a special notification which you can dismiss if you're bored with it.</p>
                </Message>
            </div>
        {/if}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Hidden -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "hidden" code = {Code.hidden}>

        <Grid ui>
            <Column two wide>
                <Button ui fluid toggle on:toggle={() => {hiddenHidden = !hiddenHidden}} on_style="grey" off_style="green">
                    <Content slot="on">Hide</Content>
                    <Content slot="off">Show</Content>
                </Button>
            </Column>
            <Column fourteen wide>
                <Message ui hidden={hiddenHidden}>
                    <p>You could't see me - now you can.</p>
                </Message>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Visible -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Visible" code = {Code.visible}>

        <Message ui visible>
            <p>You can always see me</p>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Center aligned -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Center aligned" code = {Code.center_aligned}>

        <Message ui center aligned>
            <Content>
                <Header>
                    New Version is available!
                </Header>
                <p>When are you going to update?</p>
            </Content>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Right aligned -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Right aligned" code = {Code.right_aligned}>

        <Message ui right aligned>
            <Content>
                <Header>
                    New Version is available!
                </Header>
                <p>When are you going to update?</p>
            </Content>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- FLoating -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floating" code = {Code.floating}>

        <Message ui floating>
            <p>Way to go!</p>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Compact -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Compact" code = {Code.compact}>

        <Message ui compact>
            <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached}>

        <Message ui attached>
            <Header>
                Welcome to our site!
            </Header>
            <p>Fill out the form below to sign-up for a new account</p>
        </Message>
        <Form ui attached fluid segment>
            <Fields two>
                <Field>
                    <Label>First Name</Label>
                    <Input placeholder="First Name" type="text" bind:value={formFields.firstname}/>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <Input placeholder="Last Name" type="text" bind:value={formFields.lastname}/>
                </Field>
            </Fields>
            <Field>
                <Label>Username</Label>
                <Input placeholder="Username" type="text" bind:value={formFields.username}/>
            </Field>
            <Field>
                <Label>Password</Label>
                <Input type="password" bind:value={formFields.password}/>
            </Field>
            <Field inline>
                <Checkbox ui bind:checked={formFields.ts_and_cs} label="I agree to the terms and conditions"/>
            </Field>
            <Button ui blue submit>Submit</Button>
        </Form>
        <Message ui bottom attached warning>
            <Icon help/>
            Already signed up? <Link href="#">Login here</Link> instead.
        </Message>
        <Message ui>
            Data filled in: {JSON.stringify(formFields)}
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Warning -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Warning" code = {Code.warning}>

        <Message ui warning>
            <Icon close icon/>
            <Header>
              You must register before you can do that!
            </Header>
            Visit our registration page, then try again
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Positive success -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Positive success" code = {Code.positive_success}>

        <Message ui positive>
            <Icon close icon/>
            <Header>
                You are eligible for a reward
            </Header>
            <p>Go to your <b>special offers</b> page to see now.</p>
        </Message>

        <Message ui success>
            <Icon close icon/>
            <Header>
                Your user registration was successful.
            </Header>
            <p>You may now log-in with the username you have chosen</p>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Negative error -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Negative error" code = {Code.negative_error}>

        <Message ui negative>
            <Icon close icon/>
            <Header>
                We're sorry we can't apply that discount
            </Header>
            <p>That offer has expired</p>
        </Message>

        <Message ui error>
            <Icon close icon/>
            <Header>
                There were some errors with your submission
            </Header>
            <List ui bulleted>
                <Item>You must include both a upper and lower case letters in your password.</Item>
                <Item>You need to select your home country.</Item>
            </List>
        </Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        {#each ["Red", "Orange", "Yellow", "Olive", "Green", "Teal", "BLue", "Violet", "Purple", "Pink", "Brown", "Black"] as color}
            <Message ui _={color.toLowerCase()}>{color}</Message>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size, i}
            <Message ui _={size.toLowerCase()}>This is {i<3?"a ":""}{size}{i<3?" message":""}</Message>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>