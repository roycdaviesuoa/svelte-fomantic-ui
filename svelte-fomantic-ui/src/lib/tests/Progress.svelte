<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, reset, Progress, Label, Bar, Button, Buttons, Text, Grid, Row, Column, Segment, Card, Image, Content, Link, Meta, Icon, Date } from "../svelte-fomantic-ui.svelte";
    import Value from "../views/Value.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Progress';

    let example1_value = 0;
    let example2_value = 74;
    let example3_value = 0;

    let example12_value = 0;

    let repeater;

    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
    const sizes = ['tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
</script>


<Examples
    title = "Progress examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/progress.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on event -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Activate on event" code = {Code.activate_on_event}>

        <Button ui blue fluid on:click={()=>{update("example1"); example1_value = behavior("example1", "get percent")}}>Update</Button>
        <Progress ui teal data-percent={74} id="example1" popup={{content:"A Popup on a progress bar"}}>
            <Bar/>
            <Label>{example1_value}% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Activate on start -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "On start" code = {Code.on_start}>

        <Progress ui activate teal data-percent={example2_value} id="example2">
            <Bar/>
            <Label>{example2_value}% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- With javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Javascript" code = {Code.javascript}>

        <Button ui blue fluid on:click={()=>{update("example3", {percent: 22}); example3_value = behavior("example3", "get percent")}}>Update</Button>
        <Progress ui activate teal id="example3">
            <Bar/>
            <Label>{example3_value}% Funded</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Adding a total value -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Total value" code = {Code.total_value}>

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
    <Example title = "Metadata" code = {Code.metadata}>

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



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Centered progress text -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Centered progress text" code = {Code.centered_progress_text}>

        <Grid ui>
            <Row two column>
                <Column><Button ui green fluid on:click={()=>{update("example8", 
                    {   total: 20, value:0, text : 
                        {
                            active : 'Adding {value} of {total} photos', 
                            success : '{total} Photos Uploaded!'
                        }
                    }
                )}}>Start / Reset</Button></Column>
                <Column><Button ui orange fluid on:click={()=>{behavior("example8", 'increment')}}>Increment</Button></Column>
            </Row>
        </Grid>
        <Progress ui indicating id="example8">
            <Bar>
                <Progress centered/>
            </Bar>
            <Label>Adding Photos</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Multiple bars -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Multiple bars" code = {Code.multiple_bars}>

        <Progress ui multiple data-percent="50,0,10,20" activate>
            <Bar blue/>
            <Bar yellow/>
            <Bar purple/>
            <Bar green/>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Multiple bars with text-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Multiple bars with text" code = {Code.multiple_bars_with_text}>

        <Progress ui multiple data-total="200" data-value="60,30,20,30" activate settings={{text: {percent: '{bar} {percent}%', bars: ['WIP', 'Review', 'Hold', 'Merged']}}}>
            <Bar blue><Progress/></Bar>
            <Bar yellow><Progress/></Bar>
            <Bar purple><Progress/></Bar>
            <Bar green><Progress/></Bar>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active" code = {Code.active}>

        <Progress active ui data-percent="53" activate>
            <Bar>
              <Progress/>
            </Bar>
            <Label>Uploading Files</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Success-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Success" code = {Code.success}>

        <Progress success ui data-percent="100" activate>
            <Bar>
              <Progress/>
            </Bar>
            <Label>Everything worked, your file is all ready.</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Warning-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Warning" code = {Code.warning}>

        <Progress warning ui data-percent="100" activate>
            <Bar>
              <Progress/>
            </Bar>
            <Label>Your file didn't meet the minimum resolution requirements.</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Error-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Error" code = {Code.error}>

        <Progress error ui data-percent="100" activate>
            <Bar>
              <Progress/>
            </Bar>
            <Label>There was an error.</Label>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Progress disabled ui data-percent="20" activate>
            <Bar>
              <Progress/>
            </Bar>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Indeterminate-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Indeterminate" code = {Code.indeterminate}>

        <Progress ui blue activate indeterminate>
            <Bar>
                <Progress>Pulsating (default)</Progress>
            </Bar>
        </Progress>
        <Progress ui blue activate filling indeterminate>
            <Bar>
                <Progress>Filling</Progress>
            </Bar>
        </Progress>
        <Progress ui blue activate sliding indeterminate>
            <Bar>
                <Progress>Sliding</Progress>
            </Bar>
        </Progress>
        <Progress ui blue activate swinging indeterminate>
            <Bar>
                <Progress>Swinging</Progress>
            </Bar>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Speed-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Speed" code = {Code.speed}>

        <Progress ui blue activate slow indeterminate>
            <Bar>
                <Progress>Slow</Progress>
            </Bar>
        </Progress>
        <Progress ui blue activate fast indeterminate>
            <Bar>
                <Progress>Fast</Progress>
            </Bar>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Right aligned-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Right aligned" code = {Code.right_aligned}>

        <Progress active ui right aligned data-percent="6" activate>
            <Bar>
              <Progress/>
            </Bar>
        </Progress>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>

            <Progress active ui inverted data-percent="53" activate>
                <Bar>
                  <Progress/>
                </Bar>
                <Label>Uploading Files</Label>
            </Progress>
            
            <Progress success ui inverted data-percent="100" activate>
                <Bar>
                  <Progress/>
                </Bar>
                <Label>Everything worked, your file is all ready.</Label>
            </Progress>

            <Progress warning ui inverted data-percent="100" activate>
                <Bar>
                  <Progress/>
                </Bar>
                <Label>Your file didn't meet the minimum resolution requirements.</Label>
            </Progress>

            <Progress error ui inverted data-percent="100" activate>
                <Bar>
                  <Progress/>
                </Bar>
                <Label>There was an error.</Label>
            </Progress>

        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached}>

        <Segment ui>
            <Progress ui top attached data-percent="10" activate>
                <Bar/>
            </Progress>
            <p>La la la la</p>
            <Progress ui bottom attached data-percent="20" activate>
                <Bar/>
            </Progress>
        </Segment>

        <Card ui>
            <Image>
                <Image src="/images/image.png"/>
            </Image>
            <Content>
                <Link header>Project</Link>
                <Meta>
                    <Date>Started in 2014</Date>
                </Meta>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
            <Progress ui bottom attached activate data-percent="55">
              <Bar/>
            </Progress>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each sizes as size}
            <Progress ui _={size} activate data-percent={Math.random()*100} id={"example9"+size}>
                <Bar/>
                <Label>{size}</Label>
            </Progress>
        {/each}
        <Buttons ui>
            <Button ui basic red icon on:click={()=>{sizes.forEach(size => behavior("example9" + size, "decrement"))}}><Icon minus/></Button>
            <Button ui basic green icon on:click={()=>{sizes.forEach(size => behavior("example9" + size, "increment"))}}><Icon plus/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Color -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Color" code = {Code.color}>

        {#each colors as color}
            <Progress ui _={color} activate data-percent={Math.random()*100} id={"example10"+color}>
                <Bar/>
            </Progress>
        {/each}
        <Buttons ui>
            <Button ui basic red icon on:click={()=>{colors.forEach(color => behavior("example10" + color, "decrement"))}}><Icon minus/></Button>
            <Button ui basic green icon on:click={()=>{colors.forEach(color => behavior("example10" + color, "increment"))}}><Icon plus/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted color -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted color" code = {Code.inverted_color}>

        <Segment ui inverted>
            {#each colors as color}
                <Progress ui inverted _={color} activate data-percent={Math.random()*100} id={"example11"+color}>
                    <Bar>
                        <Progress/>
                    </Bar>
                </Progress>
            {/each}
            <Buttons ui>
                <Button ui basic red icon on:click={()=>{colors.forEach(color => behavior("example11" + color, "decrement"))}}><Icon minus/></Button>
                <Button ui basic green icon on:click={()=>{colors.forEach(color => behavior("example11" + color, "increment"))}}><Icon plus/></Button>
            </Buttons>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Automated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Automated" code = {Code.automated}>

        <Progress ui indicating id="example12">
            <Bar>
                <Progress/>
            </Bar>
            <Label>Waiting for you to press the button</Label>
        </Progress>
        <Button ui basic red style={"width:100px"} icon on:click={()=>{
            // reset("example12");
            update("example12", { text: {active: '{value} of {total} done'} , total: 200, value: 0});
            repeater = setInterval(()=>{
                behavior("example12", "increment", 10);
                example12_value = behavior("example12", "get value");
                if (behavior("example12", "is complete"))
                {
                    update("example12", {text: {active: 'Waiting for you to press the button again'}})
                    clearInterval(repeater);
                }
            }, 500);
        }}>{example12_value}</Button>
        {#if (example12_value === 0) || (example12_value === 200)}
            <Label ui transition looping pulsating green><Icon left arrow/> PRESS HERE</Label>
        {/if}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>