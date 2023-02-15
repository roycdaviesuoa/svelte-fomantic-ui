<script lang="ts">
    import { Button, Buttons, Content, Text, Divider, Icon } from "../fomantic-ui/Core.svelte";

    let output: string = "";

    function processClick (e)
    {
        output = e.detail.name + " clicked";
    }

    function processToggle (e)
    {
        output = e.detail.name + ' toggled, state = ' + e.detail.active;
    }
</script>

<Buttons ui style="wrapping spaced fluid">
    <Button ui on:click={processClick} name="button1">Button 1</Button>
    <Button ui style="red" on:click={processClick} name="button2">Button 2</Button>
    <Button ui style="toggle" on:toggle={processToggle} name="toggle_button" on_style="purple" off_style="orange">
        <Content slot="on">On</Content>
        <Content slot="off">Off</Content>
    </Button>
    <Button ui style="black" on:click={processClick} name="button3">Button 3</Button>
    <Buttons ui style="icon" name="edit_buttons" on:click={processClick} >
        <Button ui name="left"><Icon style="align left"/></Button>
        <Button ui name="center"><Icon style="align center"/></Button>
        <Button ui name="right"><Icon style="align right"/></Button>
        <Button ui name="justify"><Icon style="align justify"/></Button>
    </Buttons>
</Buttons>
<Divider ui/>
<Text>{output}</Text>
<Divider ui/>
