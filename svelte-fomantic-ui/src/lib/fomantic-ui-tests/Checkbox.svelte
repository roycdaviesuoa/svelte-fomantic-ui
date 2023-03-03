<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, Form, Field, Fields, Divider, Label, Header, Input, Radio, Icon } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility = ["select"];

    let radio1: string="";
    let radio2: string="1";
    let selectedOptions: string[]=[];

    interface Item {
      id: number;
      name: string;
      selected: boolean;
    }

    let moreItems: Item[] = [
      { id: 1, name: 'Item 1', selected: false },
      { id: 2, name: 'Item 2', selected: false },
      { id: 3, name: 'Item 3', selected: false },
    ];
</script>

<div class="example-document">
  <h3 class="document-header">Button examples and tests</h3>
  <div class="document-description">An example of how to make an interactive checkbox.</div>

  <div class="example">
    <h4 class="example-header">Interactive Checkbox</h4>

    <Checkbox ui bind:group={visibility} value="select">
        <Label checkbox>Make selections visible</Label>
    </Checkbox>
    <p></p>
    {#if visibility[0]==="select"}
      <Fields>
          {#each items as item}
            <Field> <Checkbox ui name={item} value={item} bind:group={selectedOptions} label={item}/> </Field>
          {/each}
      </Fields>
    {/if}
    <Divider ui/>
    <Header>{selectedOptions} clicked | visibility = {visibility}</Header>

    <Prism language="svelte" source={`
<script>
    import { Checkbox, Field, Fields, Divider, Label, Header } from "svelte-fomantic-ui";

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: string[]=[];
    let selectedOptions: string[]=[];
</script>

<Checkbox ui bind:group={visibility} value="select">
    <Label checkbox>Make selections visible</Label>
</Checkbox>

{#if visibility[0]==="select"}
  <Fields>
      {#each items as item}
        <Field> <Checkbox ui name={item} value={item} bind:group={selectedOptions} label={item}/> </Field>
      {/each}
  </Fields>
{/if}
<Divider ui/>
<Header>{selectedOptions} clicked | visibility = {visibility}</Header>
  `}/>
</div>

  <div class="example">
    <h4 class="example-header">Radio inline</h4>
    
    <Label>How often do you use checkboxes? </Label>
    <Form ui>
        <Fields inline>
            <Field> <Radio ui value="1" bind:group={radio2} label="Once a week"/> </Field>
            <Field> <Radio ui value="2" bind:group={radio2} label="2-3 time a week"/> </Field>
            <Field> <Radio ui value="3" bind:group={radio2} label="Once a day"/> </Field>
            <Field> <Radio ui value="4" bind:group={radio2} label="Twice a day"/> </Field>
        </Fields>
    </Form>
    <Header h4>Selected: {radio2}</Header>

    <Prism language="svelte" source={`
<Label>How often do you use checkboxes? </Label>
<Form ui>
    <Fields inline>
        <Field> <Radio ui value="1" bind:group={radio2} label="Once a week"/> </Field>
        <Field> <Radio ui value="2" bind:group={radio2} label="2-3 time a week"/> </Field>
        <Field> <Radio ui value="3" bind:group={radio2} label="Once a day"/> </Field>
        <Field> <Radio ui value="4" bind:group={radio2} label="Twice a day"/> </Field>
    </Fields>
</Form>
<Header h4>Selected: {radio2}</Header>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Radio grouped</h4>

    <div class="centered">
      <div class="narrow">
        <Label>How often do you use checkboxes? </Label>
        <Form ui>
            <Fields grouped>
                <Field> <Radio ui value="1" bind:group={radio2} label="Once a week"/> </Field>
                <Field> <Radio ui value="2" bind:group={radio2} label="2-3 time a week"/> </Field>
                <Field> <Radio ui value="3" bind:group={radio2} label="Once a day"/> </Field>
                <Field> <Radio ui value="4" bind:group={radio2} label="Twice a day"/> </Field>
            </Fields>
        </Form>
        <Header h4>Selected: {radio2}</Header>
      </div>
    </div>

    <Prism language="svelte" source={`
<Label>How often do you use checkboxes? </Label>
<Form ui>
    <Fields grouped>
        <Field> <Radio ui value="1" bind:group={radio2} label="Once a week"/> </Field>
        <Field> <Radio ui value="2" bind:group={radio2} label="2-3 time a week"/> </Field>
        <Field> <Radio ui value="3" bind:group={radio2} label="Once a day"/> </Field>
        <Field> <Radio ui value="4" bind:group={radio2} label="Twice a day"/> </Field>
    </Fields>
</Form>
<Header h4>Selected: {radio2}</Header>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Checkbox individually selected</h4>

    <div class="centered">
      <div class="narrow">
        <Fields grouped>
            {#each moreItems as item}
                <Field> <Checkbox ui id={item.id} bind:checked={item.selected} label={item.name}/> </Field>
            {/each}
        </Fields>
        {#each moreItems as item}
            {item.name} is {item.selected}<br/>
        {/each}
      </div>
    </div>

    <Prism language="svelte" source={`
<script>
    interface Item { id: number; name: string; selected: boolean; }

    let moreItems: Item[] = [
        { id: 1, name: 'Item 1', selected: false },
        { id: 2, name: 'Item 2', selected: false },
        { id: 3, name: 'Item 3', selected: false },
    ];
</script>

<Fields grouped>
    {#each moreItems as item}
        <Field> <Checkbox ui id={item.id} bind:checked={item.selected} label={item.name}/> </Field>
    {/each}
</Fields>

{#each moreItems as item}
    {item.name} is {item.selected}<br/>
{/each}
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Prism language="svelte" source={`
  `}/>
  </div>

</div>


