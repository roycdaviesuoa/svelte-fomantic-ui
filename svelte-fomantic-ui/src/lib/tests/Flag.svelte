<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Flag, Header, Link, Icon, Segment, Button, Label, Text } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Flag';
</script>


<Examples
    title = "Flag examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/flag.html'>here</a>"
    code = {Code}>


    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Large -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Large" code = {Code.large}>

        <Flag ae large/>
        <Flag france large />
        <Flag myanmar large/>

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Size -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Size" code = {Code.size}>

        <Flag nz tiny/>tiny
        <Flag uk small/>small
        <Flag se medium/>medum
        <Flag us large/>large
        <Flag ci big/>big
        <Flag greece huge/>huge
        <Flag ukraine massive/>massive

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Autosizing -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Autosizing" code = {Code.autosizing}>

        <Segment ui basic>
            <Header ui small>Within a header <Flag us/></Header>
            <Button ui large>Within a button <Flag eu/></Button>
            <br><br>
            <Label ui massive>Within a label <Flag pirate/></Label>
            <br><br>
            <Text ui small orange>Within a text <Flag rainbow/></Text>
        </Segment>

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->


</Examples>