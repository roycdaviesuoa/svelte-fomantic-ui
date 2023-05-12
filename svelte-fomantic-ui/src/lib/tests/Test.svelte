<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Sidebar, Button, Pusher, Item, Sticky, Segment, Rail, Placeholder, Header, Paragraph, Line, Image } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Text';

    let clientWidth: number = 210;
</script>

<body>
    <Sidebar ui inverted vertical menu visible bind:clientWidth>
        <Item>
            An Item
        </Item>
    </Sidebar>
    <Pusher ui bind:clientWidth>
        <Segment ui id="sticky1">
            <Rail left ui>
                <Placeholder ui>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                </Placeholder>
                <p></p>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky1"}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Rail right ui>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky1"}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Placeholder ui>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
            </Placeholder>
        </Segment>
    </Pusher>
</body>

