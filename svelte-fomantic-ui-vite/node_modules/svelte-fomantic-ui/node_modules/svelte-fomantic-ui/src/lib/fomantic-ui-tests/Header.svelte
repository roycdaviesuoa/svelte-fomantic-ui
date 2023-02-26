<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Header, Paragraph, Line, Link, Placeholder, Segment, Icon, Content, List, Item, Image } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
</script>

<div class="example-document">
    <h3 class="document-header">Flag examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/header.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">Page headers</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Content headers</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Icon headers</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Sub headers</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Image</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Icon</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Sub header</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Disabled</h4>
        <Header ui disabled>
            Disabled Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </div>

    <div class="example">
        <h4 class="example-header">Dividing</h4>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        <Header h3 ui dividing>
            Dividing Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </div>

    <div class="example">
        <h4 class="example-header">Block</h4>
        <Header h3 ui block>
            Block Header
        </Header>
        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </div>

    <div class="example">
        <h4 class="example-header">Attached</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Floating</h4>
        <Segment ui clearing>
            <Header h3 ui right floated>
                Go Forward
            </Header>
            <Header h3 ui left floated>
                Go Back
            </Header>
        </Segment>
    </div>

    <div class="example">
        <h4 class="example-header">Text alignment</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Colored</h4>
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
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>
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
    </div>

</div>