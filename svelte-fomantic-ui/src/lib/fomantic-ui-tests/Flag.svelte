<script lang="ts">
    import { Flag, Header, Link, Icon, Segment, Button, Label, Text } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/flag.html">here</a></h3>

<h4>Some large flags</h4>
<Flag ae large/>
<Flag france large />
<Flag myanmar large/>

<h4>Size</h4>
<Flag nz tiny/>tiny
<Flag uk small/>small
<Flag se medium/>medum
<Flag us large/>large
<Flag ci big/>big
<Flag greece huge/>huge
<Flag ukraine massive/>massive

<h4>Autosizing</h4>
<Header ui small autosizing><Link href="#autosizing"><Icon fitted small linkify/>Autosizing</Link></Header>
<p>If no specific size class is given, all flags are automatically sized according to the current element font-size</p>
<Segment ui basic>
      <Header ui small>Within a header <Flag us/></Header>
      <Button ui large>Within a button <Flag eu/></Button>
      <br><br>
      <Label ui massive>Within a label <Flag pirate/></Label>
      <br><br>
      <Text ui small orange>Within a text <Flag rainbow/></Text>
</Segment>