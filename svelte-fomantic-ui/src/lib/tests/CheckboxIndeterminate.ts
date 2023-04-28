// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    indeterminate : `
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
            <!-- The intermediate state is calculated above, but the value of checked is bound to the variable 'checked'.  However, if this is clicked, all the sub-checkboxes are set or unset -->
            <Checkbox ui {indeterminate} bind:checked label="Fruits" on:click={ () => fruits.forEach(fruit => fruit.selected = !checked) }/>
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
    `
}

export default code;