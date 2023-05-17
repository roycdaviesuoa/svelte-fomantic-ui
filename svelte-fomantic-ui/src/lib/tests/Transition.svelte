<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Buttons, Button, Image, Label, Divider } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Transition';

    let colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
    let currentColor = -0.25;
    let nextColor = () => colors[Math.floor(currentColor+=0.25) % colors.length];
</script>


<Examples
    title = "Transition examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/transition.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Transition -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Transition" code = {Code.transition}>

        <Image ui centered medium src="/images/leaves/1.png" id="autumn_leaf"/>
        <Divider ui/>
            <Label ui transition looping pulsating green>Label</Label>
            <Label ui transition looping pulsating blue circular>8</Label>
            <Button ui transition looping pulsating purple>Button</Button>
        <Divider ui/>

        <Buttons ui spaced wrapping>
            {#each ["scale", "zoom", "fade", "fade up", "fade down", "fade left", "fade right", "horizontal flip", "vertical flip", "drop", "fly left", 
                    "fly right", "fly up", "fly down", "swing left", "swing right", "swing up", "swing down", "browse", "browse right", "slide down",
                    "slide up", "slide left", "slide right", "pulsating", "jiggle", "flash", "shake", "pulse", "tada", "bounce", "glow"] as transition}
                <Button ui _={nextColor()} style={"width:150px;"} on:click={() => behavior({id:"autumn_leaf", type: "transition", commands:[transition]})}>
                {transition}</Button>
            {/each}
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>