<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Dropdown, Input, Text, Menu, Icon, Item, Header, Button } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    import {update} from "../fomantic-ui/modules/Dropdown.js"

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

    <div class="example">
        <h4 class="example-header">Simple Dropdown</h4>
        <Dropdown ui >
            <Input type="hidden" id="gender"/>
            <Icon dropdown/>
            <Text default>Gender</Text>
            <Menu>
                <Item value="male">Male</Item>
                <Item value="female">Female</Item>
            </Menu>
        </Dropdown>

        <Prism language="html" source={`
<Dropdown ui >
    <Input type="hidden" id="gender"/>
    <Icon dropdown/>
    <Text default>Gender</Text>
    <Menu>
        <Item value="male">Male</Item>
        <Item value="female">Female</Item>
    </Menu>
</Dropdown>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Dropdown using settings</h4>
        <Dropdown ui settings={{
            values: [
              {
                name: 'Male',
                value: 'male'
              },
              {
                name     : 'Female',
                value    : 'female',
                selected : true
              }
            ]
          }}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>

        <Prism language="html" source={`
<Dropdown ui settings={{
    values: [
      {
        name: 'Male',
        value: 'male'
      },
      {
        name     : 'Female',
        value    : 'female',
        selected : true
      }
    ]
  }}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Changing settings after initialisation</h4>
        <Button ui on:click={()=>changeMenu("test")}>Click to change</Button>
        <Dropdown ui bind:selected={test} id="test" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test}</Header>

        <Prism language="svelte" source={`
<script>
    import { Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    import { update } from "svelte-fomantic-ui/src/lib/fomantic-ui/modules/Dropdown.js"

    let changed = {test:false};
    let test="male";

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

<Button ui on:click={()=>changeMenu("test")}>Click to change</Button>

<Dropdown ui bind:selected={test} id="test" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
<Header>{test}</Header>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Changing settings after initialisation with formatting</h4>
        <Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

        <Dropdown ui bind:selected={test2} fluid selection id="test2" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test2}</Header>

        <Prism language="svelte" source={`
<script>
    import { Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    import { update } from "svelte-fomantic-ui/src/lib/fomantic-ui/modules/Dropdown.js"

    let changed = {test2:false};
    let test2="male";

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

<Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

<Dropdown ui bind:selected={test2} fluid selection id="test2" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
<Header>{test2}</Header>
    `}/>
    </div>

</div>