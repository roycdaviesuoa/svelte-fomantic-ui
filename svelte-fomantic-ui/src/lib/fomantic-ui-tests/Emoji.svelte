<script lang="ts">
    import { Emoji, Segment, Header, Button, Label, Text } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/emoji.html">here</a></h3>

<h4>A disabled Emoji</h4>
<Segment ui basic massive>
    <Emoji anguished disabled/>
</Segment>
<h4>Loading</h4>
<Segment ui basic massive>
    <Emoji angel loading/>
    <Emoji blush loading/>
    <Emoji grin loading/>
</Segment>

<h4>Size</h4>
<Segment ui basic massive>
    <Emoji relaxed small/>Small
    <br>
    <Emoji relaxed medium/>Medium
    <br>
    <Emoji relaxed large/>Large
    <br>
    <Emoji relaxed big/>Big
</Segment>

<h4>Autosizing</h4>
<Segment ui basic>
    <Header ui small>Within a header <Emoji relaxed/></Header>
    <Button ui large>Within a button <Emoji relaxed/></Button>
    <br><br>
    <Label ui massive>Within a label <Emoji relaxed/></Label>
    <br><br>
    <Text ui small orange>Within a text <Emoji relaxed/></Text>
</Segment>

<h4>Link</h4>
<Segment ui basic massive>
    <Emoji slight_smile link/>
</Segment>
