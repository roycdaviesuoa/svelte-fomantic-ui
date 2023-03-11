// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    interactive_buttons : `
<script lang="ts">
    import { Button, Buttons, Content, Header, Divider, Icon } from "svelte-fomantic-ui";

    let selected: string = "left";
    let output: string = "";

    let items = ["left", "center", "right", "justify"];

    function onClick  (e:any) { selected = e.detail.id; }
    function onToggle (e:any) { output = e.detail.id + ' toggled, state = ' + e.detail.active; }
</script>

<Buttons ui wrapping spaced fluid>
    <Button ui on:click={onClick} id="button1">Button 1</Button>
    <Button ui red on:click={onClick} id="button2">Button 2</Button>
    <Button ui black on:click={onClick} id="button3">Button 3</Button>

    <Button ui toggle on:toggle={onToggle} id="toggle_button" on_style="purple" off_style="orange">
        <Content slot="on">On</Content>
        <Content slot="off">Off</Content>
    </Button>

    <Buttons ui icon id="edit_buttons" >
        {#each items as item}
            <Button ui icon id={item} green={item === selected} on:click={onClick}>
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