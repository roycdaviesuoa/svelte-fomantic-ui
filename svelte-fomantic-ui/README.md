# Svelte Fomantic UI Wrapper

### This is now at late Beta stage.  The code is proving robust according to the testing done so far.
### Feel free to use cautiously in projects, and please give feedback.
### Latest update (2nd of June, 2023): We're almost there...  Search and Ad need testing, and then onto behaviors...
----

A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

----
## Progress

I am working on this daily, so check back often.  However, my day job and family do sometimes get in the way of progress... 
[Click here to check on progress so far](https://github.com/roycdaviesuoa/svelte-fomantic-ui)

## Overview

The majority of the elements, collections, views and modules are wrapped in a single layer, with props used to represent the primary fomantic-ui element.  For example:

```html
<button class="ui primary button">
    Save
</button>
<button class="ui button">
    Discard
</button>
```

Would be written as:

```html
<Button ui primary>
    Save
</Button>
<Button ui>
    Discard
</Button>
```

As can be seem from the example, the props contains the classes that would be used by fomantic-ui, except the main class, in this case `button`.

More complex structures are similarly translated, for example:

```html
<div class="ui labeled button">
    <div class="ui button">
        <i class="heart icon"></i> Like
    </div>
    <a class="ui basic label">
        2,048
    </a>
</div>
```

becomes:

```html
<Button ui labeled>
    <Button ui>
        <Icon heart/> Like
    </Button>
    <Link ui basic>
        2,048
    </Link>
</Button>
```

Sometimes, you might want to send some Fomantic UI classes as text, in which case use the underscore prop, for example:
```html
<Buttons ui icon>
    {#each items as item}
        <Button ui name={item} green={item === selected} on:click={processClick}>
            <Icon align _={item}/>
        </Button>
    {/each}
</Buttons>
```
where
```javascript
items = ["left", "center", "right", "justify"];
```

Interaction with an element and variables are achieved in the standard svelte way, using binding.  For example:

```html
<Button ui submit on:click={processForm} type="submit" id="submit">
    Submit
</Button>
```

binds the click event to the function `processForm` in the `script` section such as:

```javascript
function processForm (e)
{
    console.log(e.detail);
}
```

where `e` is the event and `e.detail` contains information about the event that has occurred in the form of:

```javascript
{
    "id": "submit",     // The id of the button (in this case, 'submit')
    "target": { }       // The target object
}
```

Similarly, to get data from an input field, the following may be used:

```html
<Field>
    <Label ui>First Name</Label>
    <Input ui id="first-name" placeholder="First Name" bind:value={firstname}/>
</Field>
```

which binds the value of the input to the variable `firstname`.  This means also that the default value shown in the input can be set by setting firstname to a default value.

Note that the 'svelte-ised' versions can be mixed with the Fomantic UI class versions without problem, for example:
```html
<div class="ui field">
    <Label>First Name</Label>
    <Input id="first-name" placeholder="First Name" bind:value={firstname}/>
</div>
```

It does make sense, however, to use the Svelte versions where events and variable binding are required as this is taken care of in the module.

## Sending data

Oftentimes, a module will require some data to be sent, where each variable name is preceded by `data-`.  For convenience, these can be collected into one JSON object and sent as a data property.  For example:

```html
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position : "top left"}}>
    Top Left
</Button>
```

is equivalent to:

```html
<Button ui data-inverted="" data-tooltip="Add users to your feed" data-position="top left">
    Top Left
</Button>
```

## Installation

This has been packaged for installation with `yarn`, but should also work with `npm` (testing yet to be conducted).  Presently, you can install in the following way:

1. Install the svelte fomantic UI with `yarn add svelte-fomantic-ui`
1. Add the following lines to your index.html head section:

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.css">
<script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"></script>
<script type="module" src="node_modules/svelte-fomantic-ui/src/lib/svelte-fomantic-ui-jquery.js"></script>
```

Notice that JQuery is being included in this project as fomantic UI depends on it.  If you prefer, you can also include the jquery and fomantic / semantic ui css and js files locally and link to them there.

## Usage

To use fomantic UI in your project, import the required elements in the script section, and then use them in the html section below, for example:

```html
<script lang="ts">
    import { Button } from "svelte-fomantic-ui";
</script>

<Button ui simple red fluid>Hello World</Button>

<style>
</style>
```

## Modules

Many of the Fomantic UI modules rely on javascript to work, and this in turn relies on JQuery, as mentioned above.  The sveltised versions wrap this in a simple format that removes the need to use JQuery in your Svelte code.  These modules, if used in ordinary Javascript, need to be initialized before they will work.  This is done automatically for you.  **These won't work without the lines above being included in your index.html head section.**

### The `update` function

Two functions are supplied that enable the sending of behaviors and data to a module, and are imported from `svelte-fomantic-ui`.  The first is the `update` function:

```html
<script lang="ts">
    import { update, Embed, Button } from "svelte-fomantic-ui";
</script>

<Button ui fluid green attached top on:click={()=>update("vimeo1")}>Enable</Button>
<Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>
```

The update function above would be equivalent to using:

```javascript
$('#vimeo1').embed();
```

with the HTML:

```html
<div id="vimeo1" class="ui embed" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"></div>
```

Note that above we used the contraction of the `data` properties supplied as syntactic sugar.  The following are the same:

```html
<Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>
<Embed ui id="vimeo1" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"/>
```

Which is also equivalent to using the update function with some settings:

```javascript
update("vimeo1", {{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}});
```

### The `behavior` function

The second function is `behavior`, which can be used to both send behavior commands and data, and receive return values.

```html
<script lang="ts">
    import { update, behavior, Progress, Button, Label, Bar } from "svelte-fomantic-ui";
</script>

<Button ui blue fluid on:click={()=>{update("example1"); example1_value = behavior("example1", "get percent")}}>Update</Button>
<Progress ui teal data-percent={74} id="example1">
    <Bar/>
    <Label>{example1_value}% Funded</Label>
</Progress>
```

Both the `update` and `behavior` functions take one or more parameters, where the first parameter is always the `id` of the module.  The second parameter, if required, is usually the behavior, and subsequent parameters are the  parameters of that behavior.  For example `behavior("example1", "set percent", 30)`.

Sometimes, the module can be sent settings on initialisation, for example - see the `Progress` module html below.  Settings are sent via the `settings` prop.  Similarly, some modules allow JSON settings to be sent when being updated, so the `update` function allows that possibility as well.

Note that when defining the settings for a Fomantic UI element, callback functions won't execute in the context of the calling module.  See [this document](./Functions.md) for a way to set up such callbacks.

```html
<script lang="ts">
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
</Progress>
```

### The `reload` function

The third function is `reload`, which is useful when you need to re-initialize the javascript modules on a page, for example when changing a part of a page that is a svelte element which contains fomantic-ui modules:

```html
<script lang="ts">
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
</Accordion>
```

## Examples and testing

This project contains examples and tests.

1. Clone the repository from GITHub.
1. Change into the `svelte-fomantic-ui` sub directory.
1. Run the `yarn` command to download dependencies.
1. Run `yarn dev` to start development web server.
1. Open the link in a browser to see the dev / test website (usually `http://localhost:5173`)

If you are looking for code examples, check in the `svelte-fomantic-ui/src/lib/tests` folder where the examples from the Fomantic UI website have been replicated for testing and documentation purposes.  Even if you don't wish to run the dev server as above, you can still see the worked code.  These are also linked to in the [progress README](https://github.com/roycdaviesuoa/svelte-fomantic-ui) in the `Test Link / Example Code` column

