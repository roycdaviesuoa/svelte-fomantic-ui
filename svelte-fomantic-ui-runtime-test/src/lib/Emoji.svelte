<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Emoji, Segment, Header, Button, Label, Text, Link } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import Code from './Emoji';
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/emoji.html">here</a></div>
  


<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Disabled -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">A disabled emoji</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Segment ui basic massive>
        <Emoji anguished disabled/>
    </Segment>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.disabled}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Loading -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Loading</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Segment ui basic massive>
        <Emoji angel loading/>
        <Emoji blush loading/>
        <Emoji grin loading/>
    </Segment>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.loading}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Size -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Size</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Segment ui basic massive>
        <Emoji relaxed small/>Small
        <br>
        <Emoji relaxed medium/>Medium
        <br>
        <Emoji relaxed large/>Large
        <br>
        <Emoji relaxed big/>Big
    </Segment>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.size}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Autosizing -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Autosizing</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Segment ui basic>
        <Header ui small>Within a header <Emoji relaxed/></Header>
        <Button ui large>Within a button <Emoji relaxed/></Button>
        <br><br>
        <Label ui massive>Within a label <Emoji relaxed/></Label>
        <br><br>
        <Text ui small orange>Within a text <Emoji relaxed/></Text>
    </Segment>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.autosizing}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Link -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Link</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Segment ui basic massive>
        <Emoji slight_smile link/>
    </Segment>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.link}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->

</div>
