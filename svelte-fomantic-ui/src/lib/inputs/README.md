## Inputs

This folder groups all the input-related modules.  Some of these modules have specific characteristics for svelte, for example Checkbox's indeterminate state, all the different types of inputs, and the way Select and Dropdown ought to be usable in the same way.  The example below shows how variable binding, and intermediate values can work.

```xml
<script lang="ts">
    import { Checkbox, List, Item, Segment } from "svelte-fomantic-ui";

    interface fruit_type { id: string; name: string; selected: boolean; }

    let fruits: fruit_type[] = [
        { id: "apple", name: 'Apple', selected: false },
        { id: "orange", name: 'Orange', selected: false },
        { id: "banana", name: 'Banana', selected: false },
        { id: "mango", name: 'Mango', selected: false },
        { id: "pineapple", name: 'Pineapple', selected: false },
    ];

    // Go through each of the fruits, and if they are all true, the result is true, otherwise it is false.
    let checked: boolean;
    $: checked = fruits.reduce((acc, fruit):boolean => (acc && fruit.selected), true);

    // Go through each of the fruits, and if any one is true, but they are not all true, then it is in an intermediate state.
    let indeterminate: boolean;
    $: indeterminate = !checked && fruits.reduce((acc, fruit):boolean => (acc || fruit.selected), false);
</script>

<Segment ui>
    <List ui relaxed>
        <Item>
            <Checkbox ui {indeterminate} bind:checked label="Fruits" on:click={()=>{fruits.forEach((fruit) => {fruit.selected = !checked})}}/>
            <Segment ui>
                <List>
                    {#each fruits as fruit}
                        <Item>
                            <Checkbox ui id={fruit.id} bind:checked={fruit.selected} label={fruit.name}/>
                        </Item>
                    {/each}
                </List>
            </Segment>
        </Item>
    </List>
</Segment>
```

Here is another example showing how you can bind value or selected, and the differences between Select and Dropdown:
```xml
<Dropdown ui fluid search selection bind:selected={ex4value}>
    <Icon dropdown/>
    <Text default>Select Country</Text>
    <Menu>
        {#each Object.keys(countries) as key}
            <Item value={key}><Flag _={key}/>{countries[key]}</Item>
        {/each}
    </Menu>
</Dropdown>
<Segment ui basic>
    Menu option chosen: {ex4value===""?"":ex4value.toUpperCase()}{ex4value===""?"":" : " + countries[ex4value]}
</Segment>

<Select ui search dropdown bind:value={ex6value}>
    <Option value="">State</Option>
    {#each Object.keys(states) as key}
        <Option value={key}>{states[key]}</Option>
    {/each}
</Select>
<Segment ui basic>
    Menu option chosen: {ex6value}{ex6value===""?"":" : " + states[ex6value]}
</Segment>
```
Where
```code
countries = {"af": "Afghanistan", ... "zw": "Zimbabwe"} and
states = {"AL": "Alabama", ... "WY": "Wyoming"}
```