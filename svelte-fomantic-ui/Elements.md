# Fomantic Ui Elements

[Button](#button) | [Container](#container) | [Divider](#divider) | [Emoji](#emoji) | [Flag](#flag) | [Header](#header) | [Icon](#icon) | [Image](#image)

## Button
[Fomantic UI Button](https://fomantic-ui.com/elements/button.html)

All the button types, groups, variations and group variations can be used as props.  For example:

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
<Buttons ui icon>
    <Button ui><Icon align left/></Button>
    <Button ui><Icon align center/></Button>
    <Button ui><Icon align right/></Button>
    <Button ui><Icon align justify/></Button>
</Buttons>
<Buttons ui icon>
    <Button ui><Icon bold/></Button>
    <Button ui><Icon underline/></Button>
    <Button ui><Icon text width/></Button>
</Buttons>
```

Note the use of `Buttons` here for a group of buttons.

One difference compared to Fomantic UI is the way a toggle button is described, namely:
```html
<Button ui toggle on_style="purple" off_style="orange">
    <Content slot="on">On</Content>
    <Content slot="off">Off</Content>
</Button>
```

### Parameters

In addition to Fomantic UI class-name props, other props such as `name` and `type`are passed through (see example below).

### Interactivity

The click event may be trapped with `on:click`, for example:

```html
<Button ui blue name="submit" on:click={processForm} type="submit">
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
    "name": "submit",   // The name of the button (in this case)
    "target": { }       // The target object
}
```

[top](#fomantic-ui-elements)
## Container
[Fomantic UI Container](https://fomantic-ui.com/elements/container.html)

### Overview

The `Container` tag follows the same process as for `Button`, for example:

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
<Container ui four column doubling stackable grid>
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

Note the use of the `Column` tag which also needs to be imported along with `Container`.  Similarly, the `Row` tag can be utilised - see the `Grid` tag for examples.

Other classes flow on through as expected:

```html
<Container ui fluid text>
    Fluid Text
</Container>
```

Creates a text container that has no maximum width.

[top](#fomantic-ui-elements)
## Divider
[Fomantic UI Divider](https://fomantic-ui.com/elements/divider.html)

### Overview

The `Divider` tag allows all the nuances of the fomantic UI divider classes, for example:

```html
<Divider ui section/>
<Divider ui fitted/>
<Divider ui horizontal>
    OR
</Divider>
```

[top](#fomantic-ui-elements)
## Emoji
[Fomantic UI Emoji](https://fomantic-ui.com/elements/emoji.html)

### Overview

The `Emoji` tag allows all the capabilities of the fomantic UI emoji class, for example:

```html
<Emoji large loading angel/>
```

Produces a large, rotating Angel emoji.  Note that the `data-emoji` property of fomantic UI is not required.

[top](#fomantic-ui-elements)
## Flag
[Fomantic UI Flag](https://fomantic-ui.com/elements/flag.html)

The `Flag` tag passes through all the capabilities of the fomantic UI flag class, for example:

```html
<Flag medium se/>
```

Creates a medium-sized Swedish flag.

[top](#fomantic-ui-elements)
## Header
[Fomantic UI Header](https://fomantic-ui.com/elements/header.html)

The `Header` tag equates to the fomantic UI header class, for example:

```html
<Segment clearing>
    <Header right floated>
        Go Forward
    </Header>
    <Header left floated>
        Go Back
    </Header>
</Segment>
```

For Document headers, user Header hx where x is the level of header required, for example:

```html
<Header h1 ui>First header</Header>
<Header h2 ui>Second header</Header>
<Header h3 ui>Third header</Header>
<Header h4 ui>Fourth header</Header>
<Header h5 ui>Fifth header</Header>
```

Further, there is the content header style, such as:

```html
<Header huge>A Huge Header</Header>
```

[top](#fomantic-ui-elements)
## Icon
[Fomantic UI Icon](https://fomantic-ui.com/elements/icon.html)

In Fomantic UI, Icons are included using the `i` tag, but here we use `Icon`. For example:

```html
<i class="spinner loading icon"></i>
```

becomes:

```html
<Icon spinner loading/>
```

Icons are often used together with other tags, for example in buttons:

```html
<Button ui labeled icon>
    <Icon pause/>
    Pause
</Button>
```

Icons can be combined using `icons`:
```html
<Header h2 ui>
    <Icons large>
        <Icon twitter/>
        <Icon inverted corner add/>
    </Icons>
    Add on Twitter
</Header>
```

Again, this is a direct translation from the Fomantic UI classes.

[top](#fomantic-ui-elements)
## Image
[Fomantic UI Image](https://fomantic-ui.com/elements/image.html)

The `Image` tag is used in many places, so there are a variety of ways the parameters guide that usage.  At its simplest, this is a UI element, for example:

```html
<Image ui small src="/images/wireframe/image.png" alt="A small image"/>
```

[top](#fomantic-ui-elements)
## Input and Input_Wrapper
[Fomantic UI Input](https://fomantic-ui.com/elements/input.html)

Translating the Fomantic UI `input` class to Svelte is complex, and has to date resulted in several tags such as `Input` for text, `Radio` and `Checkbox` - which are covered elsewhere.  Here we cover the text `Input` tag.  In order to cover the various possibilities that the Fomantic UI input class allows, this has been split into two parts, namely `Input_Wrapper` and `Input` to be used together, for example:

```html
<div class="ui labeled input">
    <div class="ui label">
        https://
    </div>
    <input type="text" placeholder="mysite.com">
</div>
```

translates to:

```html
<Input_Wrapper ui labeled>
    <Label ui>
        https://
    </Label>
    <Input placeholder="mysite.com"/>
</Input_Wapper>
```

whereas:

```html
<div class="ui right labeled input">
    <input type="text" placeholder="Find domain">
    <div class="ui dropdown label">
        <div class="text">.com</div>
        <i class="dropdown icon"></i>
        <div class="menu">
        <div class="item">.com</div>
        <div class="item">.net</div>
        <div class="item">.org</div>
        </div>
    </div>
</div>
```

translates to:

```html
<Input_Wrapper right labeled>
    <Input placeholder="Find domain">
    <Label style="dropdown">
        <Text>.com</Text>
        <Icon dropdown/>
        <Menu>
            <Item>.com</Item>
            <Item>.net</Item>
            <Item>.org</Item>
        </Menu>
    </Label>
</Input_Wrapper>
```

[top](#fomantic-ui-elements)
## Label
[top](#fomantic-ui-elements)
## List
[top](#fomantic-ui-elements)
## Loader
[top](#fomantic-ui-elements)
## Placeholder
[top](#fomantic-ui-elements)
## Rail
[top](#fomantic-ui-elements)
## Reveal
[top](#fomantic-ui-elements)
## Segment
[top](#fomantic-ui-elements)
## Step
[top](#fomantic-ui-elements)
## Text
[top](#fomantic-ui-elements)