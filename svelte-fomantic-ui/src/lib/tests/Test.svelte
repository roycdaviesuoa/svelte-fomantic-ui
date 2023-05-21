<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, parameter, Progress, Segment, Grid, Row, Column, Button, Bar, Label } from "../svelte-fomantic-ui.svelte";

    const exampleData = {total: 3, value:0, onChange: {
                percent: parameter,
                value: parameter,
                total: parameter,
                
                _:(data)=>{console.log(data);}
            }};
</script>

<Segment ui>

    <Grid ui>
        <Row two column>
            <Column><Button ui green fluid on:click={()=>{update("example4", exampleData)}}>Reset</Button></Column>
            <Column><Button ui orange fluid on:click={()=>{behavior("example4", 'increment')}}>Increment</Button></Column>
        </Row>
    </Grid>
    <Progress ui teal activate id="example4" settings={exampleData}>
        <Bar>
            <Progress />
        </Bar>
        <Label>Adding Photos</Label>
    </Progress>

</Segment>

