# Passing functions and the context problem

Many of the Fomantic UI modules allow callback functions to be passed as part of the set up of a module.  For example, the ratings module has a function `onRate` that has one parameter - the rating, which is called when the user sets the rating.

To use this, you would set this up as part of the jquery call, as follows:

```javascript
function doSomething(rating) {
    console.log(rating);
}

$('.ui.rating')
  .rating({
    onRate: doSomething
  })
;
```

where the html might be:

```html
<div class="ui yellow rating" data-icon="star" data-rating="2"></div>
```

To write this in Svelte Fomantic UI, you could write:

```xml
<Rating ui yellow data-icon="star" data-rating="2" settings={{onRate: doSomething}}/>
```

And this will work fine because the value is coming from the onRate function, and so is in context of the called function.  However, let's say you have the following code:

```xml
{#each parameters as param, i} 
    <Rating ui _={param.color} data-icon={param.icon} data-rating = 2 
        settings = {{
            onRate: (rating) => console.log(param.color, param.icon, rating)
        }}
    />
{/each}
```

where 

```json
parameters = [{color: "yellow", icon: "star"}, {color: "red", icon: "heart"}]
```

In this case, an error will occur when the rating UI is clicked with the mouse and the onRate callback function is invoked.  The error will state that param.color and param.icon are unknown variables.
This is because the function itself, due to the way that Svelte stringifies and de-stringifies properties, is executing in a different context (in particular, not the context of this module).

To get around this, we introduce an additional property structure called 'callbacks' to be used in addition to 'settings'.

The above example, using the callbacks structure would be as follows:

```xml
{#each parameters as param, i} 
    <Rating ui _={param.color} data-icon={param.icon} data-rating = 2 
        callbacks = {{
            onRate: {
                rating: null,
                color: param.color,
                icon: param.icon,

                _: (data) => console.log(data.color, data.icon, data.rating)
            }   
        }}
    />
{/each}
```

To clarify the format:
  - Each function is represented by a javascript object where the key of the object is the name of the Fomantic UI function to call (onRate).
  - The first elements of the object are the parameters of the Fomantic UI function, in this case, there is one parameter (rating).
    - Set these to null to indicate that these are to be filled by the Fomantic UI function.
  - Subsequent parameters can be anything you require to be passed through to the main callback function.
    - These can use variables and call functions that are in the local context.
  - The main callback function is defined with the underscore and has one parameter
    - When the Fomantic UI function is activated, it produces a result (in this case the rating that was set by the user).
    - The main callback function is then called with one parameter which is an object with keys with the names defined above, and the values a combination of the result of the Fomantic UI function call, and the pass through parameters.

Let's take another example:

```html
<div class="ui nag">
    Look, I am a nag!
    <i class="close icon"></i>
</div>
```

with

```javascript
let nagMessage = "Nag has been hidden";

$('.ui.nag').nag({
    onHide: () => console.log(nagMessage)
})
```

would become:

```xml
<Nag ui callbacks = {{ onHide: { message: nagMessage,  _: (data) => console.log(data.message); } }}>
    Look, I'm a nag!
    <Icon close/>
</Nag>
```

Note that you can using `settings` and `callbacks` together, for example:

```xml
<Nag ui settings = {{displayTime: 1000, samesite: true, onShow: () => console.log("Nag is now showing") }} callbacks = {{ onHide: { message: nagMessage,  _: (data) => console.log(data.message); } }}>
    Look, I'm a nag!
    <Icon close/>
</Nag>
```

In the above example, the onShow function is defined in settings because it doesn't depend on the context.

Another example showing how the callback function sets a variable in the local context so it can be displayed in the line below.

```xml
<Rating ui settings={{icon: "circle", initialRating: rating4value, maxRating: 5}} callbacks={{ onRate: { rating: null, _: (data) => { rating4value = data.rating; } } }}/>
<Text>Rating value = {rating4value}</Text>
```
  