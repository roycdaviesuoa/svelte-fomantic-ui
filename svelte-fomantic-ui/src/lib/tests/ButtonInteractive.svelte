<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Button, Buttons, Content, Header, Segment, Icon } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './ButtonInteractive';

    let alignment: string = "left";
    let selected: string = "(nothing yet)";
    let selected2: string = "align_left";
    let output: string = "";
    let output2: string = "";
    let toggled: boolean = false;
    let toggled2: boolean = false;

    $: output = 'Toggled ' + (toggled ? "on" : "off");
    $: output2 = 'align ' + alignment;

    let items = ["left", "center", "right", "justify"];
</script>


<Examples
    title = "Button examples and tests"
    description = "An example of how to make buttons interactive.">

  
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Interactive Buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Interactive Buttons" code = {Code.interactive_buttons}>

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
            <Header>Value of button clicked: <b>{selected}</b> | Alignment: <b>{output2}</b> | Align button value: <b>{selected2}</b> | Toggle button state: <b>{output}</b> | Second toggle button state: <b>{toggled2}</b></Header>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>
