<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Flag, Header, Link, Icon, Segment, Button, Label, Text } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Flag examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/flag.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">Some large flags</h4>
        <Flag ae large/>
        <Flag france large />
        <Flag myanmar large/>
        <Prism language="svelte" source={`
<Flag ae large/>
<Flag france large />
<Flag myanmar large/>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4><Flag nz tiny/>tiny
        <Flag uk small/>small
        <Flag se medium/>medum
        <Flag us large/>large
        <Flag ci big/>big
        <Flag greece huge/>huge
        <Flag ukraine massive/>massive
        <Prism language="svelte" source={`
<Flag uk small/>small
<Flag se medium/>medum
<Flag us large/>large
<Flag ci big/>big
<Flag greece huge/>huge
<Flag ukraine massive/>massive
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Autosizing</h4>
        <Header ui small autosizing>
            <Link href="#autosizing"><Icon fitted small linkify/>Autosizing</Link>
        </Header>
        <p>If no specific size class is given, all flags are automatically sized according to the current element font-size</p>
        <Segment ui basic>
            <Header ui small>Within a header <Flag us/></Header>
            <Button ui large>Within a button <Flag eu/></Button>
            <br><br>
            <Label ui massive>Within a label <Flag pirate/></Label>
            <br><br>
            <Text ui small orange>Within a text <Flag rainbow/></Text>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui basic>
    <Header ui small>Within a header <Flag us/></Header>
    <Button ui large>Within a button <Flag eu/></Button>
    <Label ui massive>Within a label <Flag pirate/></Label>
    <Text ui small orange>Within a text <Flag rainbow/></Text>
</Segment>
    `}/>
    </div>
</div>