// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    indeterminate : `
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
    `
}

export default code;