<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, Progress, Label, Bar, Button, Grid, Row, Column } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Progress';
</script>


<Examples
    title = "Progress examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/progress.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on event -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Activate on event" code = {Code.on_event}>

        <Button ui blue fluid on:click={()=>{update("example1")}}>Update</Button>
        <Progress ui teal data-percent="74" id="example1">
            <Bar/>
            <Label>74% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on start -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Activate on start" code = {Code.on_start}>

        <Progress ui activate teal data-percent="74" id="example2">
            <Bar/>
            <Label>74% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- With javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "With javascript" code = {Code.javascript}>

        <Button ui blue fluid on:click={()=>{update("example3", {percent: 22})}}>Update</Button>
        <Progress ui activate teal id="example3">
            <Bar/>
            <Label>22% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Adding a total value -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Adding a total value" code = {Code.total_value}>

        <Grid ui>
            <Row two column>
                <Column><Button ui green fluid on:click={()=>{update("example4", {total: 3, value:0})}}>Reset</Button></Column>
                <Column><Button ui orange fluid on:click={()=>{behavior("example4", 'increment')}}>Increment</Button></Column>
            </Row>
        </Grid>
        <Progress ui teal activate id="example4" settings={{total: 3, value:0}}>
            <Bar>
                <Progress />
            </Bar>
            <Label>Adding Photos</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Initializing with metadata -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Initializing with metadata" code = {Code.metadata}>

        <Grid ui>
            <Row two column>
                <Column><Button ui green fluid on:click={()=>{update("example5", {total: 20, value:0})}}>Reset</Button></Column>
                <Column><Button ui orange fluid on:click={()=>{behavior("example5", 'increment')}}>Increment</Button></Column>
            </Row>
        </Grid>
        <Progress ui indicating data-value="0" data-total="20" id="example5">
            <Bar>
                <Progress/>
            </Bar>
            <Label>Adding Photos</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Custom labels -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Custom labels" code = {Code.custom_labels}>

        <Grid ui>
            <Row two column>
                <Column><Button ui green fluid on:click={()=>{update("example6", 
                    {   total: 20, value:0, text : 
                        {
                            active : 'Adding {value} of {total} photos', 
                            success : '{total} Photos Uploaded!'
                        }
                    }
                )}}>Start / Reset</Button></Column>
                <Column><Button ui orange fluid on:click={()=>{behavior("example6", 'increment')}}>Increment</Button></Column>
            </Row>
        </Grid>
        <Progress ui indicating id="example6">
            <Bar>
                <Progress/>
            </Bar>
            <Label>Adding Photos</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Translation -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Translation" code = {Code.translation}>

        <Grid ui>
            <Row two column>
                <Column><Button ui green fluid on:click={()=>{update("example7", 
                    {   total: 20, value:0, text : 
                        {
                            active : '{value} de {total} fotos'
                        }
                    }
                )}}>Empezar / Restablecer</Button></Column>
                <Column><Button ui orange fluid on:click={()=>{behavior("example7", 'increment')}}>Incremento</Button></Column>
            </Row>
        </Grid>
        <Progress ui indicating id="example7">
            <Bar>
                <Progress/>
            </Bar>
            <Label>Carga de archivos</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>