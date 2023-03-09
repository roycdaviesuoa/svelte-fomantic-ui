<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Rail, Placeholder, Header, Paragraph, Line, Segment } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Rail';
</script>


<Examples
    title = "Rail examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/rail.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- External -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "External" code = {Code.external} narrow>

        <Segment ui>
            <Rail ui left>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Internal -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Internal" code = {Code.internal}>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left internal>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right internal>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dividing Line -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dividing line" code = {Code.dividing_line} narrow>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left dividing>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right dividing>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached} narrow>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left attached>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right attached>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left attached internal>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right attached internal>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Close and very close -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Close and very close" code = {Code.close} narrow>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left close>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right close>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left very close>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right very close>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size} narrow>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left mini>
                Mini
            </Rail>
            <Rail ui right tiny>
                Tiny
            </Rail>
        </Segment>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left small>
                Small
            </Rail>
            <Rail ui right large>
                Large
            </Rail>
        </Segment>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left big>
                Big
            </Rail>
            <Rail ui right huge>
                Huge
            </Rail>
        </Segment>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui right massive>
                Massive
            </Rail>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>
