<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, Form, Field, Fields, Divider, Label, Header, Segment, Radio, List, Item } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility = ["select"];

    let throughput: string="1";
    let radio2: string="1";
    let selectedOptions: string[]=[];
    let subscribe: boolean=false;

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
  <h3 class="document-header">Checkbox, Radio, Toggle and Slider examples and tests</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/checkbox.html">here</a></div>

  <div class="example">
    <h4 class="example-header">Interactive Checkbox</h4>

    <div class="centered">
        <div class="narrow">
            <Checkbox ui bind:group={visibility} value="select" label="Make selections visible"/>
        
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
        </div>
    </div>

    <Prism language="svelte" source={`
<script>
    import { Checkbox, Field, Fields, Divider, Label, Header } from "svelte-fomantic-ui";

    let selected: string = "apples";
    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: string[]=[];
    let selectedOptions: string[]=[];
</script>

<Checkbox ui bind:group={visibility} value="select" label="Make selections visible"/>

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
    <h4 class="example-header">Slider</h4>

    <div class="centered">
        <div class="narrow">
            <Checkbox ui slider name="newsletter" label="Accept terms and conditions"/>
            <br/>
            <Form>
                <Fields grouped>
                    <Label>Outbound Throughput</Label>
                    <Field> <Radio ui slider value="1" bind:group={throughput} label="20 mbps max"/></Field>
                    <Field> <Radio ui slider value="2" bind:group={throughput} label="10 mbps max"/></Field>
                    <Field> <Radio ui slider value="3" bind:group={throughput} label="5 mbps max"/></Field>
                    <Field> <Radio ui slider value="4" bind:group={throughput} label="Unmetered"/></Field>
                </Fields>
            </Form>
            <Header h4>Selected: {throughput}</Header>
            <br/>
            <Checkbox ui toggle bind:checked={subscribe} label={(subscribe?"S":"Don\'t s") + "ubscribe to weekly newsletter"}/>
        </div>
    </div>

    <Prism language="svelte" source={`
<Checkbox ui slider name="newsletter" label="Accept terms and conditions"/>

<Form>
    <Fields grouped>
        <Label>Outbound Throughput</Label>
        <Field> <Radio ui slider value="1" bind:group={throughput} label="20 mbps max"/></Field>
        <Field> <Radio ui slider value="2" bind:group={throughput} label="10 mbps max"/></Field>
        <Field> <Radio ui slider value="3" bind:group={throughput} label="5 mbps max"/></Field>
        <Field> <Radio ui slider value="4" bind:group={throughput} label="Unmetered"/></Field>
    </Fields>
</Form>
<Header h4>Selected: {throughput}</Header>

<Checkbox ui toggle bind:checked={subscribe} label={(subscribe?"S":"Don\'t s") + "ubscribe to weekly newsletter"}/>

  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Read only</h4>

    <div class="centered">
      <div class="narrow">
          <Checkbox ui read-only label="Read Only"/>
      </div>
  </div>

    <Prism language="svelte" source={`
<Checkbox ui read-only label="Read Only"/>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Checked</h4>

    <div class="centered">
        <div class="narrow">
            <Checkbox ui checked label="Active"/>
        </div>
    </div>

    <Prism language="svelte" source={`
<Checkbox ui checked label="Active"/>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Disabled</h4>

    <div class="centered">
        <div class="narrow">
            <Checkbox ui disabled label="Disabled"/><br/><br/>
            <Checkbox ui disabled toggle label="Disabled"/>
        </div>
    </div>


    <Prism language="svelte" source={`
<Checkbox ui disabled label="Disabled"/>
<Checkbox ui disabled toggle label="Disabled"/>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Fitted</h4>

    <div class="centered">
        <div class="narrow">
            <Segment ui left floated compact>
                <Checkbox ui fitted label=""/>
            </Segment>
            <Segment ui left floated compact>
                <Checkbox ui fitted slider label=""/>
            </Segment>
            <Segment ui left floated compact>
                <Checkbox ui fitted toggle label=""/>
            </Segment>
        </div>
    </div>
    
    <Prism language="svelte" source={`
<Segment ui left floated compact>
    <Checkbox ui fitted label=""/>
</Segment>
<Segment ui left floated compact>
    <Checkbox ui fitted slider label=""/>
</Segment>
<Segment ui left floated compact>
    <Checkbox ui fitted toggle label=""/>
</Segment>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Inverted</h4>

    <div class="centered">
        <div class="narrow">
            <Segment ui inverted compact>
                <Checkbox ui inverted label="Inverted"/>
            </Segment>
            <Segment ui inverted compact>
                <Checkbox ui inverted slider label="Inverted"/>
            </Segment>
            <Segment ui inverted compact>
                <Checkbox ui inverted toggle label="Inverted"/>
            </Segment>
        </div>
    </div>

    <Prism language="svelte" source={`
<Segment ui inverted compact>
    <Checkbox ui inverted label="Inverted"/>
</Segment>
<Segment ui inverted compact>
    <Checkbox ui inverted slider label="Inverted"/>
</Segment>
<Segment ui inverted compact>
    <Checkbox ui inverted toggle label="Inverted"/>
</Segment>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Right aligned</h4>

    <div class="centered">
        <div class="narrow">
            <span>Not working correctly for some reason - the active area is still on the left...</span>
            <Form ui>
                <Fields grouped>
                    <Field>
                        <Checkbox ui right aligned label="Checkbox"/>
                    </Field>
                    <Field>
                        <Radio ui right aligned label="Radio"/>
                    </Field>
                    <Field>
                        <Checkbox ui right aligned slider label="Slider"/>
                    </Field>
                    <Field>
                        <Checkbox ui right aligned toggle label="Toggle"/>
                    </Field>
                </Fields>
            </Form>
        </div>
    </div>

    <Prism language="svelte" source={`
<Form ui>
    <Fields grouped>
        <Field>
            <Checkbox ui right aligned label="Checkbox"/>
        </Field>
        <Field>
            <Radio ui right aligned label="Radio"/>
        </Field>
        <Field>
            <Checkbox ui right aligned slider label="Slider"/>
        </Field>
        <Field>
            <Checkbox ui right aligned toggle label="Toggle"/>
        </Field>
    </Fields>
</Form>
  `}/>
  </div>

  <div class="example">
    <h4 class="example-header">Size</h4>

    {#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size, i}
        {#if i > 0} <br/><br/> {/if}
        <Checkbox ui _={size} label="Checkbox"/>&nbsp;&nbsp;
        <Radio ui _={size} label="Radio"/>&nbsp;&nbsp;
        <Checkbox ui _={size} slider label="Slider"/>&nbsp;&nbsp;
        <Checkbox ui _={size} toggle label="Toggle"/>&nbsp;&nbsp;
    {/each}

    <Prism language="svelte" source={`
{#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size, i}
    {#if i > 0} <br/><br/> {/if}
    <Checkbox ui _={size} label="Checkbox"/>
    <Radio ui _={size} label="Radio"/>
    <Checkbox ui _={size} slider label="Slider"/>
    <Checkbox ui _={size} toggle label="Toggle"/>
{/each}
  `}/>
  </div>

</div>


