# Svelte Fomantic UI Wrapper

A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

The following links contain examples of [Elements](Elements.md) | [Collections](Collection.md) | [Views](Views.md) | [Modules](Modules.md)

## Overview

The majority of the elements, collections, views and modules are wrapped in a single layer, with a svelte-style tag used to represent the primary fomantic-ui element.  For example:

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
<Button ui style="primary">
  Save
</Button>
<Button ui>
  Discard
</Button>
```

As can be seem from the example, the parameter `style` contains the classes that would be used by fomantic-ui, except `ui` and the main class, in this case `button`.  Any tags that would have had `ui` in the class list need to have `ui` in the parameter list as above.  This is mainly for consistancy with tags that may or may not use `ui` depending on context.

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
<Button ui style="labeled">
  <Button ui>
    <Icon style="heart"/> Like
  </Button>
  <Link ui style="basic">
    2,048
  </Link>
</Button>
```

Interaction with an element and variables are achieved in the standard svelte way, using binding.  For example:

```html
<Button ui name="submit" on:click={processForm} type="submit">
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
    "name": "submit",  # The name of the button (in this case)
    "target": { ... }  # The target object
}
```

Similarly, to get data from an input field, the following may be used:

```html
<Field>
    <Label ui>First Name</Label>
    <Input ui name="first-name" placeholder="First Name" bind:value={firstname}/>
</Field>
```

which binds the value of the input to the variable ```firstname```.  This means also that the default value shown in the input can be set by setting firstname to a default value.

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

1. Installion of fomantic UI with ```yarn add fomantic-ui```
1. The following line added to your index.html head section:
```html
<link rel="stylesheet" href="node_modules/fomantic-ui/dist/semantic.min.css" />
```
1. And the contents of the ```lib/fomantic-ui``` folder copied to the lib folder of your project.

## Usage

To use fomantic UI in your project, import the required elements from ```Core.svelte``` in the script section, and then use them below, for example:

```html
<script lang="ts">
    import { Button } from './fomantic-ui/Core.svelte';
</script>

<Button style="simple red fluid">Hello World</Button>

<style>
</style>
```
