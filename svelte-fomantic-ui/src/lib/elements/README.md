## Elements

This folder contains all the core elements, and in some cases, groups of elements (like buttons and icons).  Many of these items are interactable, and all can have the additional option of a popup attached to them.

An example of some of these being used is below.  Note also the different ways that events such as on:click and bindings such as bind:active and bind:value can be used.

```xml
<script lang="ts">
    import { Button, Buttons, Content, Header, Segment, Icon } from "svelte-fomantic-ui";

    let alignment: string = "left";
    let selected: string = "";
    let selected2: string = "align_left";
    let output: string = "";
    let output2: string = "";
    let toggled: boolean = false;

    $: output = 'Toggled ' + (toggled ? "on" : "off");
    $: output2 = 'align ' + alignment;

    let items = ["left", "center", "right", "justify"];
</script>

<Buttons ui wrapping spaced fluid bind:value={selected}>
    <Button ui value="button1">Button 1</Button>
    <Button ui red value="button2">Button 2</Button>
    <Button ui black value="button3">Button 3</Button>

    <!-- Note the values for the content are for the state at the time it was clicked, not the subsequent value for the toggled state -->
    <Button ui toggle bind:active={toggled} on_style="purple" off_style="orange">
        <Content value="was on, now off" slot="on">On</Content>
        <Content value="was off, now on" slot="off">Off</Content>
    </Button>
</Buttons>

<!-- Note here the way of adding arbitrary extra styles to an element, and the way the bound value gets true / false depending on whether toggled on or off -->
<Button ui toggle bind:value={toggled2} on_style="green" off_style="green basic" style="width: 100px" popup={{content: "A toggle button"}}>
    <Content slot="on">On</Content>
    <Content slot="off">Off</Content>
</Button>

<!-- Note the placement of the value on the icon, not the button, but the click event is picked up from the button -->
<Buttons ui icon bind:value={selected2} popup={{content: "A set of buttons together", position: "top center"}}>
    {#each items as item}
        <Button ui icon id={item} green={item === alignment} on:click={e => alignment = e.detail.id }>
            <Icon align _={item} value={"align_" + item}/>
        </Button>
    {/each}
</Buttons>

<Segment ui>
    <Header>Value of button clicked: <b>{selected}</b> | Alignment: <b>{output2}</b> | Align button value: <b>{selected2}</b> | Toggle button state: <b>{output}</b></Header>
</Segment>
```