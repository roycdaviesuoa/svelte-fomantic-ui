<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Emoji, Segment, Header, Button, Label, Text, Link } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/emoji.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">A disabled emoji</h4>
        <Segment ui basic massive>
            <Emoji anguished disabled/>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic>
    <Emoji anguished disabled/>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Loading</h4>
        <Segment ui basic massive>
            <Emoji angel loading/>
            <Emoji blush loading/>
            <Emoji grin loading/>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic massive>
    <Emoji angel loading/>
    <Emoji blush loading/>
    <Emoji grin loading/>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>
        <Segment ui basic massive>
            <Emoji relaxed small/>Small
            <br>
            <Emoji relaxed medium/>Medium
            <br>
            <Emoji relaxed large/>Large
            <br>
            <Emoji relaxed big/>Big
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic massive>
    <Emoji relaxed small/>Small
    <Emoji relaxed medium/>Medium
    <Emoji relaxed large/>Large
    <Emoji relaxed big/>Big
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Autosizing</h4>
        <Segment ui basic>
            <Header ui small>Within a header <Emoji relaxed/></Header>
            <Button ui large>Within a button <Emoji relaxed/></Button>
            <br><br>
            <Label ui massive>Within a label <Emoji relaxed/></Label>
            <br><br>
            <Text ui small orange>Within a text <Emoji relaxed/></Text>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic>
    <Header ui small>Within a header <Emoji relaxed/></Header>
    <Button ui large>Within a button <Emoji relaxed/></Button>

    <Label ui massive>Within a label <Emoji relaxed/></Label>

    <Text ui small orange>Within a text <Emoji relaxed/></Text>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Link</h4>
        <Segment ui basic massive>
            <Emoji slight_smile link/>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic massive>
    <Emoji slight_smile link/>
</Segment>
    `}/>
    </div>
</div>
