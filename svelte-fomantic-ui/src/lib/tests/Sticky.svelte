<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Sticky, Segment, Rail, Placeholder, Header, Paragraph, Line, Image } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Sticky';
    import { onDestroy, onMount } from "svelte";
</script>


<Examples
    title = "Sticky examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/sticky.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX} narrow>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>