<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Button, Buttons, Content, Text, Divider, Icon } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";

    let selected: string = "left";
    let output: string = "";

    let items = ["left", "center", "right", "justify"]

    let code_html = "";//document.getElementById("thecode").innerHTML;

    function processClick (e)
    {
        selected = e.detail.name;
        output = e.detail.name + " clicked";
    }

    function processToggle (e)
    {
        output = e.detail.name + ' toggled, state = ' + e.detail.active;
    }
</script>

<div class="example-document">
    <h3 class="document-header">Button examples and tests</h3>
    <div class="document-description">An example of how to make buttons interactive.</div>
  
    <div class="example">
      <h4 class="example-header">Interactive Buttons</h4>
      <Buttons ui wrapping spaced fluid>
        <Button ui on:click={processClick} name="button1">Button 1</Button>
        <Button ui red on:click={processClick} name="button2">Button 2</Button>
        <Button ui toggle on:toggle={processToggle} name="toggle_button" on_style="purple" off_style="orange">
            <Content slot="on">On</Content>
            <Content slot="off">Off</Content>
        </Button>
        <Button ui black on:click={processClick} name="button3">Button 3</Button>
        <Divider ui/>
        <Buttons ui icon name="edit_buttons" >
            {#each items as item}
                <Button ui name={item} green={item === selected} on:click={processClick}><Icon align _={item}/></Button>
            {/each}
        </Buttons>
        </Buttons>
        <Divider ui/>
        <Text>{output}</Text>
    </div>
</div>
