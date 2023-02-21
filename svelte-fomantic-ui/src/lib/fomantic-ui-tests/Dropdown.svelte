<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Dropdown, Input, Text, Menu, Icon, Item, Fields, Field, Label } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import {update} from "../fomantic-ui/modules/Dropdown.js"
</script>

<div class="example-document">
  <h3 class="document-header">Dropdown examples and tests</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/dropdown.html">here</a></div>
  <div class="document-disclaimer">This is very much still a work-in-progress.</div>

    <div class="example">
        <h4 class="example-header">Simple Dropdown</h4>
        <Dropdown ui id="test">
            <Input type="hidden" name="gender"/>
            <Icon dropdown/>
            <Text default>Gender</Text>
            <Menu>
                <Item value="male">Male</Item>
                <Item value="female">Female</Item>
            </Menu>
        </Dropdown>
        {update("test", {values:[{name:"boy", value:"boy"}, {name:"girl", value:"girl"}]})}
    </div>

    <div class="example">
        <h4 class="example-header">Dropdown using settings</h4>
        <Dropdown ui parameters={{
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
    </div>

</div>