<script lang="ts">
    import { Checkbox, Field, Fields, Divider, Label, Text, Icon } from "../fomantic-ui/Core.svelte";

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

<h4>An interactive breadcrumb</h4>
<Checkbox ui bind:checked={visibility} on:click={select}>
  <Label checkbox>Make my profile visible</Label>
</Checkbox>
<p></p>
<Fields>
  {#each items as item}
    <Field>
      <Checkbox ui bind:value={selected} name={item} checked={item === selected} style={(item === selected)?"green":""} on:click={select_group}>
        <Label checkbox>{item}</Label>
      </Checkbox>
    </Field>
  {/each}
</Fields>

<Divider ui/>
<Text>{selected} clicked | {selected} | visibility = {visibility}</Text>

