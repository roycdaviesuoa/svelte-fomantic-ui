<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, update, Modal, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Template';

    let example1 = {
        title: 'Important Notice',
        class: 'mini',
        closeIcon: true,
        content: 'You will be logged out in 5 Minutes',
        actions: [{
            text: 'Alright, got it',
            class: 'green'
        }]
    }
</script>


<Examples
    title = "Modal examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/modal.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>

        <Button ui on:click={()=>{behavior("example1", "show")}}>Activate</Button>

        <Modal ui id="example1" settings={example1}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>