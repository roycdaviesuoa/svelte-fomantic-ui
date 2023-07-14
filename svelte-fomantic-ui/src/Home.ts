// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const code = {
    button1 : `<button class="ui primary button">
    Save
</button>
<button class="ui button">
    Discard
</button>`,
    button2 : `<Button ui primary>
    Save
</Button>
<Button ui>
    Discard
</Button>`,
complex1 : `<div class="ui labeled button">
    <div class="ui button">
        <i class="heart icon"></i> Like
    </div>
    <a class="ui basic label">
        2,048
    </a>
</div>`,
complex2 : `<Button ui labeled> 
    <Button ui> 
        <Icon heart/> Like 
    </Button> 
    <Link ui basic> 
        2,048
    </Link>
</Button>`,
buttons : `<Buttons ui icon>
    {#each items as item}
        <Button ui name={item} green={item === selected} on:click={processClick}>
            <Icon align _={item}/>
        </Button>
    {/each}
</Buttons>`,
binding: `<Button ui submit on:click={processForm} type="submit" id="submit">
    Submit
</Button>`,
processform: `function processForm (e)
{
    console.log(e.detail);
}`,
inputfield: `<Field>
    <Label ui>First Name</Label>
    <Input ui id="first-name" placeholder="First Name" bind:value={firstname}/>
</Field>`,
combined: `<div class="ui field">
    <Label>First Name</Label>
    <Input id="first-name" placeholder="First Name" bind:value={firstname}/>
</div>`,
sending1 : `<Button ui data={{inverted : "", tooltip : "Add users to your feed", position : "top left"}}>
    Top Left
</Button>`,
sending2 : `<Button ui data-inverted="" data-tooltip="Add users to your feed" data-position="top left">
    Top Left
</Button>`,
yarn: `yarn create vite my-app --template svelte-ts
cd my-app
yarn
yarn add svelte-fomantic-ui`,
html : `<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.css">
<script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"></script>
<script type="module" src="node_modules/svelte-fomantic-ui/src/lib/svelte-fomantic-ui-jquery.js"></script>`,
usage : `<script lang="ts">
    import { Button } from "svelte-fomantic-ui";
</script>

<Button ui simple red fluid>Hello World</Button>

<style>
</style>`,
update : `<script lang="ts">
    import { update, Embed, Button } from "svelte-fomantic-ui";
</script>

<Button ui fluid green attached top on:click={()=>update("vimeo1")}>Enable</Button>
<Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>`,
embed : `<div id="vimeo1" class="ui embed" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"></div>`,
embed2 : `<Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>
<Embed ui id="vimeo1" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"/>`,
embed3 : `update("vimeo1", {{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}});`,
behavior : `<script lang="ts">
    import { update, behavior, Progress, Button, Label, Bar } from "svelte-fomantic-ui";
</script>

<Button ui blue fluid on:click={()=>{update("example1"); example1_value = behavior("example1", "get percent")}}>Update</Button>
<Progress ui teal data-percent={74} id="example1">
    <Bar/>
    <Label>{example1_value}% Funded</Label>
</Progress>`,
initialize : `<script lang="ts">
    import { update, behavior, Progress, Button, Label, Grid, Row, Column, Bar } from "svelte-fomantic-ui";
</script>

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
</Progress>`,
update2 : `$('#vimeo1').embed();`,
reload : `<script lang="ts">
    import { reload } from "svelte-fomantic-ui";
    import { onMount } from 'svelte';
    
    onMount(() => { reload(); });
</script>

<Accordion ui>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>`,
event: `{
    "id": "submit",     // The id of the button (in this case, 'submit') 
    "target": { }       // The target object
}`,
items: `items = ["left", "center", "right", "justify"];`
}

export default code;