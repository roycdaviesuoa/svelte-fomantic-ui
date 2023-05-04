<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, reload, Nag, Icon, Button, Divider, Title, Text } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Nag';
</script>


<Examples
    title = "Nag examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/nag.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Nag -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Nag" code = {Code.nag}>

        <Button ui red on:click={() => {behavior({id: 'nag1', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
        <Divider ui/>
        <Nag ui id="nag1" settings={{samesite: true, storageMethod: "localstorage", key: "nag1"}}>
            Look, I am a nag!
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Title -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Title" code = {Code.title}>

        <Button ui red on:click={() => {behavior({id: 'nag2', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
        <Divider ui/>
        <Nag ui id="nag2" settings={{samesite: true, storageMethod: "localstorage", key: "nag2"}}>
            <Title>Welcome to the nag module</Title>
            <Text>Look, I am a nag!</Text>
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fixed -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fixed" code = {Code.fixed}>

        <p>Look at the top of the page for the nag...</p>

        <Button ui red on:click={() => {behavior({id: 'fixednag', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
        <Divider ui/>
        <Nag ui id="fixednag" fixed settings={{samesite: true, storageMethod: "localstorage", key: "fixednag", detachable: true}} style="z-index:2000;" >
            <Text>Look, I am a fixed nag!</Text>
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>





</Examples>