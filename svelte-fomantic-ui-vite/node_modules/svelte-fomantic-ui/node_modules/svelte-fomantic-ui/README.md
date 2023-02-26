# Svelte Fomantic UI Wrapper

## This is very much a work in progress, and is not suitable yet for using in any project as fundamental changes will occur...
## If you are interested in the project, feel free to download, assess, and give me frank feedback...

A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

The following links contain examples of [Elements](Elements.md) | [Collections](Collection.md) | [Views](Views.md) | [Modules](Modules.md)

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
```json
items=["left", "center", "right", "justify"]
```

Interaction with an element and variables are achieved in the standard svelte way, using binding.  For example:

```html
<Button ui submit on:click={processForm} type="submit">
    Submit
</Button>
```

binds the click event to the function `processForm` in the `script` section such as:

```typescript
function processForm (e)
{
    console.log(e.detail);
}
```

where `e` is the event and `e.detail` contains information about the event that has occurred in the form of:

```json
{
    "name": "submit",  // The name of the button (in this case, 'submit')
    "target": { }      // The target object
}
```

Similarly, to get data from an input field, the following may be used:

```html
<Field>
    <Label ui>First Name</Label>
    <Input ui name="first-name" placeholder="First Name" bind:value={firstname}/>
</Field>
```

which binds the value of the input to the variable `firstname`.  This means also that the default value shown in the input can be set by setting firstname to a default value.

Note that the 'svelte-ised' versions can be mixed with the Fomantic UI class versions without problem, for example:
```html
<div class="ui field">
    <Label>First Name</Label>
    <Input name="first-name" placeholder="First Name" bind:value={firstname}/>
</div>
```

It does make sense, however, to use the Svelte versions where events and variable binding are required as this is taken care of in the module.

## Installation

Presently, this has not been packaged to be installed as a module with yarn or npm, so you will need to add the code to your project by hand.  The pieces you need are:

1. Installion of fomantic UI with `yarn add fomantic-ui`
1. The following line added to your index.html head section:
```html
<link rel="stylesheet" href="node_modules/fomantic-ui/dist/semantic.min.css" />
```
1. And the contents of the `lib/fomantic-ui` folder copied to the lib folder of your project.

## Usage

To use fomantic UI in your project, import the required elements from `Core.svelte` in the script section, and then use them below, for example:

```html
<script lang="ts">
    import { Button } from './fomantic-ui/Core.svelte';
</script>

<Button ui simple red fluid>Hello World</Button>

<style>
</style>
```
