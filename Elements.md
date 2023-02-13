# Fomantic Ui Elements

[Button](#button) | [Container](#container) | [Divider](#divider)

## Button
[top](#fomantic-ui-elements) | [Fomantic UI Button](https://fomantic-ui.com/elements/button.html)

All the button types, groups, variations and group variations can be used with the style parameter.  For example:

### Overview

```html
<div class="ui icon buttons">
  <button class="ui button"><i class="align left icon"></i></button>
  <button class="ui button"><i class="align center icon"></i></button>
  <button class="ui button"><i class="align right icon"></i></button>
  <button class="ui button"><i class="align justify icon"></i></button>
</div>
<div class="ui icon buttons">
  <button class="ui button"><i class="bold icon"></i></button>
  <button class="ui button"><i class="underline icon"></i></button>
  <button class="ui button"><i class="text width icon"></i></button>
</div>
```

becomes:

```html
<Buttons style="icon">
    <Button><Icon style="align left"/></Button>
    <Button><Icon style="align center"/></Button>
    <Button><Icon style="align right"/></Button>
    <Button><Icon style="align justify"/></Button>
</Buttons>
<Buttons style="icon">
    <Button><Icon style="bold"/></Button>
    <Button><Icon style="underline"/></Button>
    <Button><Icon style="text width"/></Button>
</Buttons>
```

Note the use of ```Buttons``` here for a group of buttons.

### Parameters

In addition to ```style```, ```name``` and ```type``` parameters are passed through (see example below).

### Interactivity

The click event may be trapped with ```on:click```, for example:

```html
<Button name="submit" on:click={processForm} type="submit">
    Submit
</Button>
```

binds the click event to the function ```processForm``` in the ```script``` section such as:

```typescript
function processForm (e)
{
    console.log(e.detail);
}
```

where ```e``` is the event and ```e.detail``` contains information about the event that has occurred in the form of:

```json
{
  "name": "submit",  # The name of the button (in this case)
  "target": { ... }  # The target object
}
```

## Container
[top](#fomantic-ui-elements) | [Fomantic UI Container](https://fomantic-ui.com/elements/container.html)

The ```Container``` tag follows the same process as for `Button` using the ```style``` parameter to contain the class names except ```ui``` and ```container```, for example:

```html
<div class="ui four column doubling stackable grid container">
    <div class="column">
        <p></p>
        <p></p>
    </div>
    <div class="column">
        <p></p>
        <p></p>
    </div>
    <div class="column">
        <p></p>
        <p></p>
    </div>
    <div class="column">
        <p></p>
        <p></p>
    </div>
</div>
```

becomes:

```html
<Container style="four column doubling stackable grid">
    <Column>
        <p></p>
        <p></p>
    </Column>
    <Column>
        <p></p>
        <p></p>
    </Column>
    <Column>
        <p></p>
        <p></p>
    </Column>
    <Column>
        <p></p>
        <p></p>
    </Column>
</Container>
```

Note the use of the `Column` tag which also needs to be imported along with `Container`.

Other classes flow on through as expected:
```html
<Container style="fluid text">
  Fluid Text
</Container>
```

Creates a text container that has no maximum width.

## Divider
[top](#fomantic-ui-elements) | [Fomantic UI Divider](https://fomantic-ui.com/elements/divider.html)

## Emoji
## Flag
## Header
## Icon
## Image
## Input
## Label
## List
## Loader
## Placeholder
## Rail
## Reveal
## Segment
## Step
## Text