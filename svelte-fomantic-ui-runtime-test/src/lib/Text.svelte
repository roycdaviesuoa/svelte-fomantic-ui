<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Text, Segment } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/text.html">here</a></div>

    <div class="example">
        <h4 class="example-header">Inline</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>
</div>
