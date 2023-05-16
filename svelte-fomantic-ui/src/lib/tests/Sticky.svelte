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
                <Placeholder ui fluid>
                    {#each {length: 3} as _}
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
            <Placeholder ui fluid>
                {#each {length: 20} as _}
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                {/each}
            </Placeholder>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pushing -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pushing" code = {Code.pushing} narrow>

        <Segment ui id="sticky2">
            <Rail left ui>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Rail right ui>
                <Placeholder ui fluid>
                    {#each {length: 3} as _}
                        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    {/each}
                </Placeholder>
                <p></p>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky2", pushing: true}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Placeholder ui fluid>
                {#each {length: 20} as _}
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                {/each}
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
                        {#each new Array(10) as _}
                            <Item> <Image ui tiny> <Image src="/images/image.png"/> </Image> <Content middle aligned> <Header link>Followup Article</Header> <Meta> <Author>By <Link>Author</Link></Author> </Meta> </Content> </Item>
                        {/each}
                    </Items>
                </Sticky>
            </Rail>
            <Rail right ui>
                <Placeholder ui fluid>
                    {#each {length: 3} as _}
                        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    {/each}
                </Placeholder>
                <p></p>
                <Sticky ui style={"width: 272px !important; height: 262.672px !important; left: 567px;"} settings={{context:"#sticky3"}}>
                    <Header ui h3>Stuck Content</Header>
                    <Image ui src="/images/image.png"/>
                </Sticky>
            </Rail>
            <Placeholder ui fluid>
                {#each {length: 15} as _}
                    <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                {/each}
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
                <Placeholder ui fluid>
                    {#each {length: 20} as _}
                        <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph>
                    {/each}
                </Placeholder>
            </div>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>