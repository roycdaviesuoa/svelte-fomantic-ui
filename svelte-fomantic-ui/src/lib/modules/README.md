## Modules

Modules are more complex entities and require jquery to work.  Oftentimes, modules require settings to be passed in, which if you were using javascript and jquery directly, would be managed through a jquery command.  However, with svelte, we want to remove the need to use jquery directly in the svelte code, so module properties are used instead.

```xml
<Form ui>
    <Fields two>
        <Field>
            <Label>Start date</Label>
            <Calendar ui id="firstStart" settings={{type: 'date', endCalendar: "firstEnd"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="Start"/>
                </Input>
            </Calendar>
        </Field>
        <Field>
            <Label>End date</Label>
            <Calendar ui id="firstEnd" settings={{type: 'date', startCalendar: "firstStart"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="End"/>
                </Input>
            </Calendar>
        </Field>
    </Fields>
</Form>
```

The content of the settings can be taken directly from Fomantic UI, so for calendars, have a look [here](https://fomantic-ui.com/modules/calendar.html#/examples).

Settings can be of two different formats, namely JSON, or a sequence of strings.

### Module functions

Many of the Fomantic UI modules rely on javascript to work, and this in turn relies on JQuery, as mentioned above.  The sveltised versions wrap this in a simple format that removes the need to use JQuery in your Svelte code.  These modules, if used in ordinary Javascript, need to be initialised before they will work.  This is done automatically for you.  **These won't work without the lines above being included in your index.html head section.**

#### The `update` function

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

#### The `behavior` function

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

#### The `reload` function

The third function is `reload`, which is useful when you need to re-initialise the javascript modules on a page, for example when changing a part of a page that is a svelte element which contains fomantic-ui modules:

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