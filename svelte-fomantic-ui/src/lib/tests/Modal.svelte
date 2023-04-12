<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, update, Modal, Button, Icon, Header, Description, Content, Image, Actions } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Modal';

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

    let now = new Date();now.setDate(now.getDate()+Math.floor(Math.random() * 31 + 1));
    let example3 = {
        title: 'Free voucher until '+now.toDateString(),
        content: 'Your voucher code is<br><span class="ui huge green text">'+Math.random().toString(16).substr(2).toUpperCase()+'</span>',
        classContent: 'centered',
        class: 'small'
    }
</script>


<Examples
    title = "Modal examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/modal.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Via javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Via javascript" code = {Code.via_javascript}>

        <p>Note here the use of behavior with an object rather than a set of parameters.</p>
        <Button ui fluid green on:click={()=>{behavior({type: 'modal', commands: ['show'], settings: example1})}}>Activate</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Via existing DOM node -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Existing DOM" code = {Code.existing_dom}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Reuse existing DOM -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Reuse DOM" code = {Code.reuse_dom}>

        <p>Note again here the use of behavior with an object rather than a set of parameters, but this time with an id.</p>
        <Button ui fluid green on:click={()=>{behavior({id: 'example3', commands: ['show', 'is active'], settings: example3}); console.log(behavior({id: 'example3', commands: ['can fit']}))}}>Activate</Button>

        <Modal ui id="example3">
            <Header />
            <Content />
            <Actions>
                <Button ui green approve>Redeem now</Button>
                <Button ui red deny>Not now</Button>
            </Actions>
        </Modal>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>