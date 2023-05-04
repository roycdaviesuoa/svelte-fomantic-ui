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

    const nagSettings = {
        onHide: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['show']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['show']})}, 
        onShow: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['hide']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['hide']})}
    }
</script>


<Examples
    title = "Nag examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/nag.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Nag -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Nag" code = {Code.nag}>

        <Button ui red on:click={() => {behavior({id: 'nag1', type: 'nag', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
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

        <Button ui red on:click={() => {behavior({id: 'nag2', type: 'nag', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
        <Divider ui/>
        <Nag ui id="nag2" settings={{samesite: true, storageMethod: "localstorage", key: "nag2", context: "#app"}}>
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

        <Button ui red on:click={() => {behavior({id: 'fixednag', type: 'nag', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
        <Divider ui/>
        <Nag ui fixed id="fixednag" settings={{samesite: true, storageMethod: "localstorage", key: "fixednag"}} style="margin-left:0 ">
            <Text>Look, I am a fixed nag!</Text>
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>





</Examples>