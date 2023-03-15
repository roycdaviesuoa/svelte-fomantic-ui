// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    via_javascript : `
<script lang='ts'>
    import { behavior } from "svelte-fomantic-ui";

    let example1 = {
        title: 'Important Notice',
        class: 'mini',
        closeIcon: true,
        content: 'You will be logged out in 5 Minutes',
        actions: [{
            text: 'Alright, got it',
            class: 'green'
        }]
    }
</script>

<Button ui fluid green on:click={()=>{behavior({type: 'modal', commands: ['show'], settings: example1})}}>Activate</Button>
    `, 
    existing_dom : `
<Button ui fluid blue on:click={()=>{behavior("example2", "show")}}>Activate</Button>

<Modal ui small id="example2">
    <Icon close/>
    <Header>
        Modal Title
    </Header>
    <Content image>
        <Image src="/images/eve.png"/>
        <Description>
            <p>An image can appear on left or an icon.</p>
            <p>A description can appear on the right.</p>
        </Description>
    </Content>
    <Actions>
        <Button ui on:click={()=>{behavior("example2", "hide")}}>Cancel</Button>
        <Button ui on:click={()=>{behavior({id: "example2", commands: ["hide"]})}}>OK</Button>
        </Actions>
</Modal>
    `,
    reuse_dom : `
<script lang='ts'>
    import { behavior, Modal, Button, Icon, Header, Description, Content, Image, Actions } from "svelte-fomantic-ui";

    let now = new Date();now.setDate(now.getDate()+Math.floor(Math.random() * 31 + 1));
    let example3 = {
        title: 'Free voucher until '+now.toDateString(),
        content: 'Your voucher code is<br><span class="ui huge green text">'+Math.random().toString(16).substr(2).toUpperCase()+'</span>',
        classContent: 'centered',
        class: 'small'
    }
</script>

<Button ui fluid green on:click={()=>{behavior({id: 'example3', type: 'modal', commands: ['show'], settings: example3})}}>Activate</Button>

<Modal ui id="example3">
    <Header />
    <Content />
    <Actions>
        <Button ui green approve>Redeem now</Button>
        <Button ui red deny>Not now</Button>
    </Actions>
</Modal>
    `
}

export default code;