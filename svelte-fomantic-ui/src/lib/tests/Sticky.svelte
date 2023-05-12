<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Items, Item, Content, Meta, Author, Link, Sticky, Segment, Rail, Placeholder, Header, Paragraph, Line, Image, Menu } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Sticky';
    import { onDestroy, onMount } from "svelte";
</script>


<Examples
    title = "Sticky examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/sticky.html'>here</a>"
    disclaimer = "Note that here the page is embedded inside an iFrame, so is not including the Menu."
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Sticky -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Sticky" code = {Code.sticky} narrow>

        <Segment ui id="sticky1">
            <Rail left ui>
                <Placeholder ui>
                    {#each new Array(3) as _unused}
                        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    {/each}
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
                {#each new Array(20) as _unused}
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                {/each}
            </Placeholder>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pushing -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pushing" code = {Code.pushng} narrow>

        <Segment ui id="sticky2">
            <Rail left ui>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Rail right ui>
                <Placeholder ui>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                </Placeholder>
                <p></p>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Oversized -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Oversized" code = {Code.oversized} narrow>

        <Segment ui id="sticky3">
            <Rail left ui>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky3"}}>
                    <Header ui h3>Stuck Content</Header>
                    <Items ui divided>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                    </Items>
                </Sticky>
            </Rail>
            <Rail right ui>
                <Placeholder ui>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                </Placeholder>
                <p></p>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky3"}}>
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
            </Placeholder>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Own context -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Own context" code = {Code.own_context} narrow>

        <Segment ui d="sticky4">
            <Sticky ui style="width: 670px !important; height: 43px !important; left: 617px;" >
                <Menu ui fluid three item tabular>
                    <Item active>Tab 1</Item>
                    <Item>Tab 2</Item>
                    <Item>Tab 3</Item>
                </Menu>
            </Sticky>
            <div class="ui active tab">
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
            </div>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>