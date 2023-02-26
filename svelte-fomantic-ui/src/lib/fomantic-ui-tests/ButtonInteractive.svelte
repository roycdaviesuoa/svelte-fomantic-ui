<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Button, Buttons, Content, Header, Divider, Icon } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let selected: string = "left";
    let output: string = "";

    let items = ["left", "center", "right", "justify"];

    function processClick (e)
    {
        console.log(e);
        selected = e.detail.id;
        output = e.detail.id + " clicked";
    }

    function processToggle (e)
    {
        output = e.detail.id + ' toggled, state = ' + e.detail.active;
    }
</script>

<div class="example-document">
    <h3 class="document-header">Button examples and tests</h3>
    <div class="document-description">An example of how to make buttons interactive.</div>
  
    <div class="example">
      <h4 class="example-header">Interactive Buttons</h4>
        <Buttons ui wrapping spaced fluid>
            <Button ui on:click={processClick} id="button1">Button 1</Button>
            <Button ui red on:click={processClick} id="button2">Button 2</Button>
            <Button ui toggle on:toggle={processToggle} id="toggle_button" on_style="purple" off_style="orange">
                <Content slot="on">On</Content>
                <Content slot="off">Off</Content>
            </Button>
            <Button ui black on:click={processClick} id="button3">Button 3</Button>
            <Buttons ui icon id="edit_buttons" >
                {#each items as item}
                    <Button ui icon id={item} green={item === selected} on:click={processClick}><Icon align _={item}/></Button>
                {/each}
            </Buttons>
        </Buttons>
        <Divider ui/>
        <Header>Output: {output}</Header>
        <Divider ui/>

        <Prism language="svelte" source={`
<script>
    import { Button, Buttons, Content, Header, Divider, Icon } from "svelte-fomantic-ui";

    let selected: string = "left";
    let output: string = "";

    let items = ["left", "center", "right", "justify"];

    function processClick (e) {
        selected = e.detail.id;
        output = e.detail.id + " clicked";
    }

    function processToggle (e) {
        output = e.detail.id + ' toggled, state = ' + e.detail.active;
    }
</script>

<Buttons ui wrapping spaced fluid>
    <Button ui on:click={processClick} id="button1">Button 1</Button>
    <Button ui red on:click={processClick} id="button2">Button 2</Button>
    <Button ui toggle on:toggle={processToggle} id="toggle_button" on_style="purple" off_style="orange">
        <Content slot="on">On</Content>
        <Content slot="off">Off</Content>
    </Button>
    <Button ui black on:click={processClick} id="button3">Button 3</Button>

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
    `}/>
    </div>
</div>
