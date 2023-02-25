<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, Field, Fields, Divider, Label, Header } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: boolean=false;

    function select(event) {
      console.log(event);
    }
    function select_group(event) {
      selected = event.detail.name;
      console.log(event);
    }
</script>

<div class="example-document">
  <h3 class="document-header">Button examples and tests</h3>
  <div class="document-description">An example of how to make an interactive checkbox.</div>

  <div class="example">
    <h4 class="example-header">Interactive Checkbox</h4>

    <Checkbox ui bind:checked={visibility} on:click={select}>
      <Label checkbox>Make my profile visible</Label>
    </Checkbox>
    <p></p>
    <Fields>
      {#each items as item}
        <Field>
          <Checkbox ui green={item === selected} bind:value={selected} name={item} checked={item === selected} on:click={select_group}>
            <Label checkbox>{item}</Label>
          </Checkbox>
        </Field>
      {/each}
    </Fields>

    <Divider ui/>
    <Header>{selected} clicked | {selected} | visibility = {visibility}</Header>
    <code>
    <Prism language="html">
    {`
<script lang='ts'>
    import { Checkbox, Field, Fields, Divider, Label, Header } from "svelte-fomantic-ui/src/lib/fomantic-ui/Core.svelte";

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: boolean=false;

    function select(event) {
      console.log(event);
    }
    function select_group(event) {
      selected = event.detail.name;
      console.log(event);
    }
</script>

<Checkbox ui bind:checked={visibility} on:click={select}>
    <Label checkbox>Make my profile visible</Label>
</Checkbox>
<Fields>
    {#each items as item}
        <Field>
            <Checkbox ui green={item === selected} bind:value={selected} name={item} checked={item === selected} on:click={select_group}>
                <Label checkbox>{item}</Label>
            </Checkbox>
        </Field>
    {/each}
</Fields>
<Divider ui/>
<Header>{selected} clicked | {selected} | visibility = {visibility}</Header>
`}
</Prism></code>
  </div>
</div>


