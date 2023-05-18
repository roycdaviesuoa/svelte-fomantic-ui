<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, Progress, Segment, Button, Bar, Label, Divider, Grid, Row, Column } from "../svelte-fomantic-ui.svelte";

    let example1_value: number = 0;
    let parameter = undefined;

    let message = "This is some text";
</script>

<Segment ui>
    <Button ui blue fluid on:click={()=>{update("example1", "set value"); example1_value = behavior("example1", "get percent")}}>Update</Button>
    <Divider ui/>
    <Progress ui teal data-percent={74} activate id="example1" 
        settings = {{ 
            percent:22, 
            onChange : {
                percent: parameter,
                value: parameter,
                total: parameter,
                pass_through: message,

                _: data => console.log(data)
            }
        }}
        popup={{
            content:"A Popup on a progress bar", 
            position:"bottom center",
            onShow : {
                _: data => console.log("POPUP SHOW",  behavior("example1", "get percent"))
            },
            onHide : {
                _: data => console.log("POPUP HIDE", data)
            }
        }}>
        <Bar/>
        <Label>{example1_value}% Funded</Label>
    </Progress>


    <Grid ui>
        <Row two column>
            <Column><Button ui green fluid on:click={()=>{update("example4", {total: 3, value:0})}}>Reset</Button></Column>
            <Column><Button ui orange fluid on:click={()=>{behavior("example4", 'increment')}}>Increment</Button></Column>
        </Row>
    </Grid>
    <Progress ui teal activate id="example4" 
        settings = {{ 
            total:3,
            value: 0,
            onChange : {
                percent: parameter,
                value: parameter,
                total: parameter,
                pass_through: message,

                _: data => console.log("CHANGE ",data)
            },
            onSuccess : {
                total: parameter,

                _: data => console.log("SUCCESS ", data)
            }
        }}>
        <Bar>
            <Progress />
        </Bar>
        <Label>Adding Photos</Label>
    </Progress>

</Segment>

