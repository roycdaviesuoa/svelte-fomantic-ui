<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Text, Segment } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Text';

    let revealed: boolean = false;
</script>


<Examples
    title = "Text examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/text.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline" code = {Code.inline}>

        <Segment ui>
            This is <Text ui red>red</Text> inline text and this is <Text ui blue>blue</Text> inline text and this is <Text ui purple>purple</Text> inline text
        </Segment>
        <Segment ui inverted>
            This is <Text ui inverted red>red</Text> inline text and this is <Text ui inverted blue>blue</Text> inline text and this is <Text ui inverted purple>purple</Text> inline text
        </Segment>
        <Segment ui>
            This is <Text ui info>info</Text> inline text and this is <Text ui success>success</Text> inline text and this is <Text ui warning>warning</Text> inline text and this is <Text ui error>error</Text> inline text
        </Segment>
        <Segment ui inverted>
            This is <Text ui info>info</Text> inline text and this is <Text ui success>success</Text> inline text and this is <Text ui warning>warning</Text> inline text and this is <Text ui error>error</Text> inline text
        </Segment>

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        <Segment ui>
            <p>Starting with <Text ui mini red>mini</Text> text</p>
            <p>which turns into <Text ui tiny red>tiny</Text> text</p>
            <p>changing to <Text ui small red>small</Text> text until it is</p>
            <p>the default <Text ui medium red>medium</Text> text</p>
            <p>and could be <Text ui large red>large</Text> text</p>
            <p>to turn into <Text ui big red>big</Text> text</p>
            <p>then growing to <Text ui huge red>huge</Text> text</p>
            <p>to finally become <Text ui red massive>massive</Text> text</p>
        </Segment>

     </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>
