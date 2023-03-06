<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Dropdown, Input, Text, Menu, Icon, Item, Header, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Dropdown';
    
    import {update} from "../modules/Dropdown";

    let changed = {test:false, test2:false};
    let test="male";
    let test2="female";

    function changeMenu (id:string) {
      if (changed[id]) {
        update(id, {placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]});
      }
      else {
        update(id, {placeholder:"Species", values:[{name:"Species", type:"header"}, {name:"Cat", value:"cat"}, {name:"Dog", value:"dog"}, {name:"Horse", value:"horse"}]});
      }
      changed[id]=!changed[id];
    }
</script>

<Examples
    title = "Dropdown examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/dropdown.html'>here</a>"
    disclaimer = "This is very much still a work-in-progress.">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Simple dropdown -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Simple Dropdown" code = {Code.simple}>

        <Dropdown ui >
            <Input type="hidden" id="gender"/>
            <Icon dropdown/>
            <Text default>Gender</Text>
            <Menu>
                <Item value="male">Male</Item>
                <Item value="female">Female</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown using settings -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dropdown using settings" code = {Code.settings}>

        <Dropdown ui settings={{
                values: [
                    { name: 'Male', value: 'male' },
                    { name     : 'Female', value    : 'female', selected : true }
                ]
            }}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Changing settings after initialisation -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Changing settings after initialisation" code = {Code.change_after_initialisation}>

        <Button ui on:click={()=>changeMenu("test")}>Click to change</Button>
        <Dropdown ui bind:selected={test} id="test" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test}</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Changing settings after initialisation with formatting" code = {Code.change_with_formatting}>

        <Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

        <Dropdown ui bind:selected={test2} fluid selection id="test2" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test2}</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>