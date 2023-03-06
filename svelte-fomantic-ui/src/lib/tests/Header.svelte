<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Header, Paragraph, Line, Link, Placeholder, Segment, Icon, Content, List, Item, Image } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Header';
</script>

<Examples
    title = "Header examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/header.html'>here</a>">

  
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Page headers -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Page header" code = {Code.page_header}>

        <Header h1 ui>First header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h2 ui>Second header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h3 ui>Third header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h4 ui>Fourth header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h5 ui>Fifth header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content header" code = {Code.content_header}>

        <Header ui huge>Huge Header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header ui large>Large Header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header ui medium>Medium Header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header ui small>Small Header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header ui tiny>Tiny Header</Header>
        <Placeholder ui> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon header" code = {Code.icon_header}>

        <Header h2 ui icon>
            <Icon settings/>
            <Content>
                Account Settings
                <Header sub>Manage your account settings and set e-mail preferences.</Header>
            </Content>
        </Header>
        <br/><br/>
        <Header h2 ui center aligned icon>
            <Icon circular users/>
            Friends
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Sub headers -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Sub headers" code = {Code.sub_headers}>

        <Header h2 sub>
            Price
        </Header>
        <span>$10.99</span>
        <br/><br/>
        <List ui horizontal>
            <Item>
                <Image ui mini circular src="/images/molly.png"/>
                <Content>
                    <Header ui sub>Molly</Header>
                    Coordinator
                </Content>
            </Item>
            <Item>
                <Image ui mini circular src="/images/elyse.png"/>
                <Content>
                    <Header ui sub>Elyse</Header>
                    Developer
                </Content>
            </Item>
            <Item>
                <Image ui mini circular src="/images/eve.png"/>
                <Content>
                    <Header ui sub>Eve</Header>
                    Project Manager
                </Content>
            </Item>
        </List>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Image -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Image" code = {Code.image}>

        <Header h2 ui>
            <Image ui src="/images/school.png"/>
            <Content>
                Learn More
            </Content>
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

        <Header h2 ui>
            <Image ui circular src="/images/patrick.png"/>
            Patrick
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

        <Header h2 ui>
            <Image ui src="/images/plugin.png"/>
            <Content>
                Plug-ins
                <Header sub>Check out our plug-in marketplace</Header>
            </Content>
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        <Header h2 ui>
            <Icon plug/>
            <Content>
            Uptime Guarantee
            </Content>
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

        <Header h2 ui>
            <Icon settings/>
            <Content>
                Account Settings
            <Header sub>Manage your preferences</Header>
            </Content>
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Sub header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Sub header" code = {Code.sub_header}>

        <Header h2 ui>
            Account Settings
            <Header sub>Manage your account settings and set e-mail preferences.</Header>
        </Header>

        <Header h1 ui>
            H1
            <Header sub>Sub Header</Header>
        </Header>
        <Header h2 ui>
            H2
            <Header sub>Sub Header</Header>
        </Header>
        <Header h3 ui>
            H3
            <Header sub>Sub Header</Header>
        </Header>
        <Header h4 ui id="h4">
            <Link href="#h4">
                <Icon fitted small linkify/>
                H4
                <Header sub>Sub Header</Header>
            </Link>
        </Header>
        <Header h5 ui>
            H5
            <Header sub>Sub Header</Header>
        </Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Header ui disabled>
            Disabled Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dividing -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dividing" code = {Code.dividing}>

        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h3 ui dividing>
            Dividing Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Block -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Block" code = {Code.block}>

        <Header h3 ui block>
            Block Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached}>

        <Header h3 ui top attached>
            Top Attached
        </Header>
        <Segment ui attached>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
        <Header h3 ui attached>
            Attached
        </Header>
        <Segment ui attached>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
        <Header h3 ui bottom attached>
            Bottom Attached
        </Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floating -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floating" code = {Code.floating}>

        <Segment ui clearing>
            <Header h3 ui right floated>
                Go Forward
            </Header>
            <Header h3 ui left floated>
                Go Back
            </Header>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text alignment-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text alignment" code = {Code.text_alignment}>

        <Segment ui>
            <Header h3 ui right aligned>
                Right
            </Header>
            <Header ui left aligned>
                Left
            </Header>
            <Header ui justified>
                This should take up the full width even if only one line
            </Header>
            <Header ui center aligned>
                Center
            </Header>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Header h4 ui primary>Primary</Header>
        <Header h4 ui secondary>Secondary</Header>
        <Header h4 ui red>Red</Header>
        <Header h4 ui orange>Orange</Header>
        <Header h4 ui yellow>Yellow</Header>
        <Header h4 ui olive>Olive</Header>
        <Header h4 ui green>Green</Header>
        <Header h4 ui teal>Teal</Header>
        <Header h4 ui blue>Blue</Header>
        <Header h4 ui purple>Purple</Header>
        <Header h4 ui violet>Violet</Header>
        <Header h4 ui pink>Pink</Header>
        <Header h4 ui brown>Brown</Header>
        <Header h4 ui grey>Grey</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Header h4 ui inverted red>Red</Header>
            <Header h4 ui inverted orange>Orange</Header>
            <Header h4 ui inverted yellow>Yellow</Header>
            <Header h4 ui inverted olive>Olive</Header>
            <Header h4 ui inverted green>Green</Header>
            <Header h4 ui inverted teal>Teal</Header>
            <Header h4 ui inverted blue>Blue</Header>
            <Header h4 ui inverted purple>Purple</Header>
            <Header h4 ui inverted violet>Violet</Header>
            <Header h4 ui inverted pink>Pink</Header>
            <Header h4 ui inverted brown>Brown</Header>
            <Header h4 ui inverted grey>Grey</Header>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>