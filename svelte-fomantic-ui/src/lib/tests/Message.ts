// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    basic : `
<Message ui>
    <Header>
        Changes in Service
    </Header>
    <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</Message>
    `,
    list : `
<Message ui>
    <Header>
        New Site Features
    </Header>
    <List ui bulleted>
        <Item>You can now have cover images on blog pages</Item>
        <Item>Drafts will now auto-save while writing</Item>
    </List>
</Message>
    `,
    icon : `
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
    `,
    dismissable: `
<script lang="ts">
    import { Message, Header, Icon, Button } from "svelte-fomantic-ui";
	import { fade } from 'svelte/transition';

    let transitionVisible = true;
    let transitionButtonVisible = false;
</script>

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
    `,
    hidden : `
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
    `
}

export default code;