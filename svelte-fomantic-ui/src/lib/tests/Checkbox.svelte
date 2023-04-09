<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Checkbox, Form, Field, Fields, Divider, Label, Header, Segment, Radio, List, Item } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Checkbox';

    let items = ["apples", "peaches", "oranges", "bananas", "mangos"]
    let visibility: string[] = [];

    let throughput: string="1";
    let radio2: string="1";
    let selectedOption: string[] = [];
    let subscribe: boolean=false;

    interface Item {
        id: string;
        name: string;
        selected: boolean;
    }

    let moreItems: Item[] = [
        { id: "1", name: 'Item 1', selected: false },
        { id: "2", name: 'Item 2', selected: false },
        { id: "3", name: 'Item 3', selected: false },
    ];
</script>


<Examples
    title = "Checkbox, Radio, Toggle and Slider examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/checkbox.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Interactive -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Interactive" code = {Code.interactive} narrow>

        <Checkbox ui bind:group={visibility} value="select" label="Make selections visible"/>
        <p></p>
        {#if visibility[0]==="select"}
            <Fields>
                {#each items as item}
                <Field> <Checkbox ui name={item} value={item} bind:group={selectedOption} label={item}/> </Field>
                {/each}
            </Fields>
        {/if}
        <Divider ui/>
        <Header>{selectedOption} clicked | visibility = {visibility}</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Radio inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Radio inline" code = {Code.radio_inline}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Radio grouped -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Radio grouped" code = {Code.radio_grouped} narrow>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Individually selected -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Individually selected" code = {Code.individually_selected} narrow>

        <Fields grouped>
            {#each moreItems as item}
                <Field> <Checkbox ui id={item.id} bind:checked={item.selected} label={item.name}/> </Field>
            {/each}
        </Fields>
        {#each moreItems as item}
            {item.name} is {item.selected}<br/>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Slider -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Slider" code = {Code.slider} narrow>

        <Checkbox ui slider name="newsletter" label="Accept terms and conditions"/>
        <br/>
        <Form ui>
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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Read only -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Read only" code = {Code.read_only} narrow>

        <Checkbox ui read-only label="Read Only"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Checked -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Checked" code = {Code.checked} narrow>

        <Checkbox ui checked label="Active"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled} narrow>

        <Checkbox ui disabled label="Disabled"/><br/><br/>
        <Checkbox ui disabled toggle label="Disabled"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fitted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fitted" code = {Code.fitted} narrow>

        <Segment ui left floated compact>
            <Checkbox ui fitted label=""/>
        </Segment>
        <Segment ui left floated compact>
            <Checkbox ui fitted slider label=""/>
        </Segment>
        <Segment ui left floated compact>
            <Checkbox ui fitted toggle label=""/>
        </Segment>
        
    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Centered -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Centered" code = {Code.centered} narrow>

        <Segment ui inverted compact>
            <Checkbox ui inverted label="Inverted"/>
        </Segment>
        <Segment ui inverted compact>
            <Checkbox ui inverted slider label="Inverted"/>
        </Segment>
        <Segment ui inverted compact>
            <Checkbox ui inverted toggle label="Inverted"/>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Right aligned -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Right aligned" code = {Code.right_aligned} narrow>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>
        
        {#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size, i}
            {#if i > 0} <br/><br/> {/if}
            <Checkbox ui _={size} label="Checkbox"/>&nbsp;&nbsp;
            <Radio ui _={size} label="Radio"/>&nbsp;&nbsp;
            <Checkbox ui _={size} slider label="Slider"/>&nbsp;&nbsp;
            <Checkbox ui _={size} toggle label="Toggle"/>&nbsp;&nbsp;
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>


