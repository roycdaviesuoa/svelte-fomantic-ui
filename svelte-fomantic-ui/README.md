# Svelte Fomantic UI Wrapper

## This is very much a work in progress, and is not suitable yet for using in any project as fundamental changes will occur...
## If you are interested in the project, feel free to download, assess, and give me frank feedback...

A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

## Progress

I am working on this daily, so check back often.  However, my day job and family do sometimes get in the way of progress... 
[Click here to check on progress so far](#progress-so-far)

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

## Installation

This has been inexpertly packaged for installation with `yarn` - this needs more work - if you are an expert on this and wish to contribute, please let me know...  Presently, you can install in the following way:

1. Install the svelte fomantic UI with `yarn add svelte-fomantic-ui`
1. And add the following lines to your index.html head section:

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js"></script>
<script type="module" src="node_modules/svelte-fomantic-ui/src/lib/fomantic-ui/fomantic-ui.js"></script>
```

Notice that jquery is being included in this project.  If you don't wish to use jquery, you can omit these lines completely, but many of the fomantic-ui modules won't work.  However, everything that only requires css will still be fine.

## Usage

To use fomantic UI in your project, import the required elements from `Core.svelte` in the script section, and then use them below, for example:

```html
<script lang="ts">
    import { Button } from "svelte-fomantic-ui";
</script>

<Button ui simple red fluid>Hello World</Button>

<style>
</style>
```

## Examples and testing

This project was created using vite, and is runnable in its own right.  When you do that, you'll see a website with some examples and tests.

1. Clone the repository from GITHub.
1. Change into the `svelte-fomantic-ui` sub directory.
1. Run the `yarn` command to download dependencies.
1. Run `yarn dev` to start development web server.
1. Open the link in a browser to see the dev / test website (usually `http://localhost:5173`)

## Progress so far

| Element          | Implemented | Tested and Documented | Test Link |
|------------------|:-----------:|:---------------------:|-----------|
| Button           |      X      |           X           | /Button
|  - Interactive   |      X      |           X           | /ButtonInteractive
| Container | X | X | /Container
| Divider | X | X | /Divider
| Emoji | X | X | /Emoji
| Flag | X | X | /Flag
| Header | X | X | /Header
| Icon | X | X | /Icon
| Image | X | X | /Image
| Label | X | X | /Label
| List | X | X | /List
| Loader | X | X |
| Placeholder | X | X |
| Rail | X |   |
| Reveal | X |   |
| Segment | X |   |
| Step | X |   |
| Text | X |   |

| Inputs          | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Checkbox | X | X | /Checkbox
| Input | X |  |
| File Input |  |  |
| Dropdown | X | X | /Dropdown
| Radio | X |  | 
| Simple Dropdown | X |  | 
| Textarea | X |  | 

| Collections     | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Breadcrumb | X | X | /Breadcrumb
|  - Interactive | X | X | /BreadcrumbInteractive
| Form | X |  |
| Grid | X |  |
| Menu | X |  |
| Message | X |  | 
| Table | X |  | 

| Views           | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Advertisement | X |  |
| Card | X |  |
| Comment |  |  |
| Feed | X |  |
| Item | X |  |
| Statistic | X |  |

| Modules         | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Accordion | X | X | /Accordion
| Calendar | X | X | /Calendar
| Dimmer | X |  |
| Embed |  |  |
| Flyout |  |  |
| Modal |  |  |
| Nag |  |  |
| Popup |  |  |
| Progress |  |  |
| Rating |  |  |
| Search |  |  |
| Shape |  |  |
| Sidebar |  |  |
| Slider |  |  |
| Sticky |  |  |
| Tab |  |  |
| Toast |  |  |
| Transition |  |  |