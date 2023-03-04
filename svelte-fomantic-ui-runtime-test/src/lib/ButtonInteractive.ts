const code = {
    interactive_buttons : `
<script>
    import { Button, Buttons, Content, Header, Divider, Icon } from "svelte-fomantic-ui";

    let selected: string = "left";
    let output: string = "";

    let items = ["left", "center", "right", "justify"];

    function processClick  (e) { selected = e.detail.id; }
    function processToggle (e) { output = e.detail.id + ' toggled, state = ' + e.detail.active; }
</script>

<Buttons ui wrapping spaced fluid>
    <Button ui on:click={processClick} id="button1">Button 1</Button>
    <Button ui red on:click={processClick} id="button2">Button 2</Button>
    <Button ui black on:click={processClick} id="button3">Button 3</Button>

    <Button ui toggle on:toggle={processToggle} id="toggle_button" on_style="purple" off_style="orange">
        <Content slot="on">On</Content>
        <Content slot="off">Off</Content>
    </Button>

    <Buttons ui icon id="edit_buttons" >
        {#each items as item}
            <Button ui icon id={item} green={item === selected} on:click={processClick}>
                <Icon align _={item}/>
            </Button>
        {/each}
    </Buttons>
</Buttons>
<Divider ui/>
<Header>Output: {output}</Header>
<Divider ui/>
    `
}

export default code;