<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Dropdown, Input, Text, Menu, Icon, Item, Header, Button } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import Code from './Dropdown';
    
    import {update} from "svelte-fomantic-ui/src/lib/modules/Dropdown.js"

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

<div class="example-document">
  <h3 class="document-header">Dropdown examples and tests</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/dropdown.html">here</a></div>
  <div class="document-disclaimer">This is very much still a work-in-progress.</div>



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Simple dropdown -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Simple Dropdown</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Dropdown ui >
        <Input type="hidden" id="gender"/>
        <Icon dropdown/>
        <Text default>Gender</Text>
        <Menu>
            <Item value="male">Male</Item>
            <Item value="female">Female</Item>
        </Menu>
    </Dropdown>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.simple}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Dropdown using settings -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Dropdown using settings</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Dropdown ui settings={{
            values: [
                { name: 'Male', value: 'male' },
                { name     : 'Female', value    : 'female', selected : true }
            ]
        }}>
        <Text/>
        <Icon dropdown/>
    </Dropdown>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.settings}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Changing settings after initialisation -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Changing settings after initialisation</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Button ui on:click={()=>changeMenu("test")}>Click to change</Button>
    <Dropdown ui bind:selected={test} id="test" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
        <Text/>
        <Icon dropdown/>
    </Dropdown>
    <Header>{test}</Header>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.change_after_initialisation}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Changing settings after initialisation with formatting</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

    <Dropdown ui bind:selected={test2} fluid selection id="test2" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
        <Text/>
        <Icon dropdown/>
    </Dropdown>
    <Header>{test2}</Header>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.change_with_formatting}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->

</div>