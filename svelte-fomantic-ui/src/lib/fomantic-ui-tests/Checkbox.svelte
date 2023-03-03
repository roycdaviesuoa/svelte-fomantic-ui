<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, Form, Field, Fields, Divider, Label, Header, Input } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: boolean=false;

    let radio1: string="";

    function select(event) {
      console.log(event);
    }
    function selectItem(event) {
      selected = event.detail.id;
      console.log(event);
    }
</script>

<div class="example-document">
  <h3 class="document-header">Button examples and tests</h3>
  <div class="document-description">An example of how to make an interactive checkbox.</div>

  <div class="example">
    <h4 class="example-header">Interactive Checkbox</h4>

    <Checkbox ui bind:checked={visibility} on:click={select}>
      <Label checkbox>Make selections visible</Label>
    </Checkbox>
    <p></p>
    {#if visibility}
      <Fields>
          {#each items as item}
            <Field>
              <Checkbox ui green={item === selected} bind:value={selected} id={item} checked={item === selected} on:click={selectItem}>
                <Label checkbox>{item}</Label>
              </Checkbox>
            </Field>
          {/each}
      </Fields>
    {/if}

    <Divider ui/>
    <Header>{selected} clicked | visibility = {visibility}</Header>
    <Prism language="svelte" source={`
<script>
    import { Checkbox, Field, Fields, Divider, Label, Header } from "svelte-fomantic-ui";

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: boolean=false;

    function select(event) {
      console.log(event);
    }
    function select_group(event) {
      selected = event.detail.id;
      console.log(event);
    }
</script>

<Checkbox ui bind:checked={visibility} on:click={select}>
    <Label checkbox>Make selections visible</Label>
</Checkbox>

{#if visibility}
    <Fields>
        {#each items as item}
            <Field>
                <Checkbox ui green={item === selected} bind:value={selected} id={item} checked={item === selected} on:click={selectItem}>
                    <Label checkbox>{item}</Label>
                </Checkbox>
            </Field>
        {/each}
    </Fields>
{/if}

<Divider ui/>
<Header>{selected} clicked | visibility = {visibility}</Header>
  `}/>
</div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Checkbox ui radio bind:value={radio1}>
        <Input type="radio" value="radio1" id="radio1"/>
        <Label _for="radio1">Radio choice 1</Label>
    </Checkbox>
    <Header>Checked: {radio1}</Header>

    <Prism language="svelte" source={`
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Textarea</h4>

    <Form ui>
        <Fields inline>
          <Label>How often do you use checkboxes?</Label>
          <Field>
              <Checkbox ui radio>
                  <Input type="radio" name="frequency" checked="checked"/>
                  <Label>Once a week</Label>
              </Checkbox>
          </Field>
          <Field>
              <Checkbox ui radio>
                  <Input type="radio" name="frequency"/>
                  <Label>2-3 times a week</Label>
              </Checkbox>
          </Field>
          <Field>
              <Checkbox ui radio>
                  <Input type="radio" name="frequency"/>
                  <Label>Once a day</Label>
              </Checkbox>
          </Field>
          <Field>
              <Checkbox ui radio>
                  <Input type="radio" name="frequency"/>
                  <Label>Twice a day</Label>
              </Checkbox>
          </Field>
        </Fields>
    </Form>

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


