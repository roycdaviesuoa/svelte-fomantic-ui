<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, Progress, Segment, Button, Bar, Label, Divider } from "../svelte-fomantic-ui.svelte";

    let example1_value: number = 0;
    let parameter = null;
</script>

<Segment ui>
    <Button ui blue fluid on:click={()=>{update("example1"); example1_value = behavior("example1", "get percent")}}>Update</Button>
    <Divider ui/>
    <Progress ui teal data-percent={74} id="example1" popup={{content:"A Popup on a progress bar", position:"bottom center", callbacks:{
        onChange : {
            percent: parameter,
            value: parameter,
            total: parameter,

            _: (data) => {console.log(data);}
        }
    }}}>
        <Bar/>
        <Label>{example1_value}% Funded</Label>
    </Progress>
</Segment>

