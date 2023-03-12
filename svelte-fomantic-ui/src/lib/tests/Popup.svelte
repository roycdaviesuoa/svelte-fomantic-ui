<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, Button, Buttons, Icon, Image, Card, Content, Header, Description } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Popup';
</script>


<Examples
    title = "Popup examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/popup.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Popup -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Popup" code = {Code.popup}>

        <Button ui icon popup data-content="Add users to your feed">
            <Icon add/>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Titled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Titled" code = {Code.titled}>

        <Image ui avatar popup src="/images/elliot.jpg" data-title="Elliot Fu" data-content="Elliot has been a member since July 2012"/>
        <Image ui avatar popup src="/images/stevie.jpg" data-title="Stevie Feliciano" data-content="Stevie has been a member since August 2013"/>
        <Image ui avatar popup src="/images/matt.jpg" data-title="Matt" data-content="Matt has been a member since July 2014"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- HTML -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "HTML" code = {Code.html}>

        <Card ui popup data-html="<div class='header'>User Rating</div><div class='content'><div class='ui yellow rating'><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i></div></div>">
            <Image>
                <Image src="/images/totoro-horizontal.jpg"/>
            </Image>
            <Content>
                <Header>My Neighbor Totoro</Header>
                <Description>
                    Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.
                </Description>
            </Content>
            <Buttons ui two bottom attached>
                <Button ui>
                    <Icon add/>
                    Queue
                </Button>
                <Button ui primary>
                    <Icon play/>
                    Watch
                </Button>
            </Buttons>
        </Card>
        
    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>