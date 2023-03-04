// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    interactive : `
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
    `,
    radio_inline : `
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
    `,
    radio_grouped : `
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
    `,
    individually_selected : `
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
    `,
    slider : `
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

    `,
    readonly : `
<Checkbox ui read-only label="Read Only"/>
    `,
    checked : `
<Checkbox ui checked label="Active"/>
    `,
    disabled : `
<Checkbox ui disabled label="Disabled"/>
<Checkbox ui disabled toggle label="Disabled"/>
    `,
    fitted : `
<Segment ui left floated compact>
    <Checkbox ui fitted label=""/>
</Segment>
<Segment ui left floated compact>
    <Checkbox ui fitted slider label=""/>
</Segment>
<Segment ui left floated compact>
    <Checkbox ui fitted toggle label=""/>
</Segment>
    `,
    centered : `
<Segment ui inverted compact>
    <Checkbox ui inverted label="Inverted"/>
</Segment>
<Segment ui inverted compact>
    <Checkbox ui inverted slider label="Inverted"/>
</Segment>
<Segment ui inverted compact>
    <Checkbox ui inverted toggle label="Inverted"/>
</Segment>
    `,
    right_aligned : `
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
    `,
    size : `
{#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size, i}
    {#if i > 0} <br/><br/> {/if}
    <Checkbox ui _={size} label="Checkbox"/>
    <Radio ui _={size} label="Radio"/>
    <Checkbox ui _={size} slider label="Slider"/>
    <Checkbox ui _={size} toggle label="Toggle"/>
{/each}
    `
}

export default code;