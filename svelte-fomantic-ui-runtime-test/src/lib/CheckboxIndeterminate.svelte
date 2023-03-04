<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, List, Item } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    interface fruit_type { id: string; name: string; selected: boolean; }

    let fruits: fruit_type[] = [
        { id: "apple", name: 'Apple', selected: false },
        { id: "orange", name: 'Orange', selected: false },
        { id: "banana", name: 'Banana', selected: false },
        { id: "mango", name: 'Mango', selected: false },
        { id: "pineapple", name: 'Pineapple', selected: false },
    ];

    let checked: boolean;
    $: checked = fruits.reduce((acc, fruit):boolean => (acc && fruit.selected), true);

    let indeterminate: boolean;
    $: indeterminate = !checked && fruits.reduce((acc, fruit):boolean => (acc || fruit.selected), false);

</script>

<div class="example-document">
  <h3 class="document-header">A Checkbox with Indeterminate status example</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/checkbox.html#/usage">here</a></div>

  <div class="example">
    <h4 class="example-header">Indeterminate</h4>

    <List ui celled relaxed>
        <Item>
            <Checkbox ui {indeterminate} bind:checked label="Fruits" on:click={()=>{fruits.forEach((fruit) => {fruit.selected = !checked})}}/>
            <List>
                {#each fruits as fruit}
                    <Item> <Checkbox ui id={fruit.id} bind:checked={fruit.selected} label={fruit.name}/> </Item>
                {/each}
            </List>
        </Item>
    </List>

    <Prism language="svelte" source={`
<script>
    import { Checkbox, List, Item } from "svelte-fomantic-ui";

    interface fruit_type { id: string; name: string; selected: boolean; }

    let fruits: fruit_type[] = [
        { id: "apple", name: 'Apple', selected: false },
        { id: "orange", name: 'Orange', selected: false },
        { id: "banana", name: 'Banana', selected: false },
        { id: "mango", name: 'Mango', selected: false },
        { id: "pineapple", name: 'Pineapple', selected: false },
    ];

    let checked: boolean;
    $: checked = fruits.reduce((acc, fruit):boolean => (acc && fruit.selected), true);

    let indeterminate: boolean;
    $: indeterminate = !checked && fruits.reduce((acc, fruit):boolean => (acc || fruit.selected), false);
</script>

<List ui celled relaxed>
    <Item>
        <Checkbox ui {indeterminate} bind:checked label="Fruits" on:click={()=>{fruits.forEach((fruit) => {fruit.selected = !checked})}}/>
        <List>
            {#each fruits as fruit}
                <Item> <Checkbox ui id={fruit.id} bind:checked={fruit.selected} label={fruit.name}/> </Item>
            {/each}
        </List>
    </Item>
</List>
  `}/>
  </div>

</div>


