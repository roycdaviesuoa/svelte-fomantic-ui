# Svelte Fomantic UI Wrapper for Client-Side WebApps

### This is now at late Beta stage.  The code is proving robust according to the testing done so far.
### Feel free to use cautiously in projects, and please give feedback.
### Latest update (31st of January, 2025): We're almost there...  Search and Ad need testing, and then onto behaviors...

---
A simple Svelte wrapper for Fomantic UI for creating client-side WebApps.  Note that this does not (yet) work with Server Side Rendering.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

---
For more details, look inside the svelte-fomantic-ui folder, and in particular, check the [README](./svelte-fomantic-ui/README.md)

The source code is found in the folder `src/lib`.  There are some examples and tests in the `src/lib/tests` folder.

## Live Test site
To see this working, follow [this link](https://roycdaviesuoa.github.io).  It's also being used at [reality2.ai](https://reality2.ai), [imersia.com](https://imersia.com) and [my professional site](https://roycdavies.github.io)

## Roadmap

1. Minimum set of features complete - enough for a working website - all the Elements, Collections and Views - will work with pure css.
    * To date: implementation of features is at about 90%, and I'm about nine tenths of the way through testing and documentation.
1. Main features complete - as above, but also the Modules.
    * All modules are now completed, tested and documented.
1. All features complete - as above, but also the Behaviors and Theming.
    * Starting on behaviors - no reason to expect they won't work, but need testing of course.

Note that in essence all these do already work (except for the Modules) because you can include Fomantic UI directly into your code using classes as with any javascript.

## Progress so far

* Where there is a cross in the Implemented column; that means the basic code is in place and should work.
* Where there is a cross in the Tested and Documented column; the examples from the Fomantic UI website have been sveltised and compared for accuracy with the ones on the Fomantic UI website, and where necessary, tweaks to the svelte-fomantic-ui code made.  Often, there are sub classes like 'metadata' and 'description' that need adding, for example.
* Where there is an underscore in the Tested and Documented column, this means I've started the process of testing and documenting, but not yet finished - but I've done at least one, so am confident that it is working - however, there may be some tweaks to come.
    * For example, when working on the Table element, there is an option for sorted tables that required some extra scripting to be added to work as per the example, and to function seamlessly in the Svelte environment.

| Element          | Implemented | Tested and Documented | Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------|------------------|
| Button | X | X | [/Button](./svelte-fomantic-ui/src/lib/tests/Button.svelte) | [Button](https://fomantic-ui.com/elements/button.html)
|  - Interactive | X | X | [/ButtonInteractive](./svelte-fomantic-ui/src/lib/tests/ButtonInteractive.svelte)
| Container | X | X | [/Container](./svelte-fomantic-ui/src/lib/tests/Container.svelte) | [Container](https://fomantic-ui.com/elements/container.html)
| Divider | X | X | [/Divider](./svelte-fomantic-ui/src/lib/tests/Divider.svelte) | [Divider](https://fomantic-ui.com/elements/divider.html)
| Emoji | X | X | [/Emoji](./svelte-fomantic-ui/src/lib/tests/Emoji.svelte) | [Emoji](https://fomantic-ui.com/elements/emoji.html)
| Flag | X | X | [/Flag](./svelte-fomantic-ui/src/lib/tests/Flag.svelte) | [Flag](https://fomantic-ui.com/elements/flag.html)
| Header | X | X | [/Header](./svelte-fomantic-ui/src/lib/tests/Header.svelte) | [Header](https://fomantic-ui.com/elements/header.html)
| Icon | X | X | [/Icon](./svelte-fomantic-ui/src/lib/tests/Icon.svelte) | [Icon](https://fomantic-ui.com/elements/icon.html)
| Image | X | X | [/Image](./svelte-fomantic-ui/src/lib/tests/Image.svelte) | [Image](https://fomantic-ui.com/elements/image.html)
| Input | X | X | [/Input](./svelte-fomantic-ui/src/lib/tests/Input.svelte) | [Input](https://fomantic-ui.com/elements/input.html)
| Label | X | X | [/Label](./svelte-fomantic-ui/src/lib/tests/Label.svelte) | [Label](https://fomantic-ui.com/elements/label.html)
| List | X | X | [/List](./svelte-fomantic-ui/src/lib/tests/List.svelte) | [List](https://fomantic-ui.com/elements/list.html)
| Loader | X | X | [/Loader](./svelte-fomantic-ui/src/lib/tests/Loader.svelte) | [Loader](https://fomantic-ui.com/elements/loader.html)
| Placeholder | X | X | [/Placeholder](./svelte-fomantic-ui/src/lib/tests/Placeholder.svelte) | [Placeholder](https://fomantic-ui.com/elements/placeholder.html)
| Rail | X | X | [/Rail](./svelte-fomantic-ui/src/lib/tests/Rail.svelte) | [Rail](https://fomantic-ui.com/elements/rail.html)
| Reveal | X | X | [/Reveal](./svelte-fomantic-ui/src/lib/tests/Reveal.svelte) | [Reveal](https://fomantic-ui.com/elements/reveal.html)
| Segment | X | X | [/Segment](./svelte-fomantic-ui/src/lib/tests/Segment.svelte) | [Segment](https://fomantic-ui.com/elements/segment.html)
| Step | X | X | [/Step](./svelte-fomantic-ui/src/lib/tests/Step.svelte) | [Step](https://fomantic-ui.com/elements/step.html)
| Text | X | X | [/Text](./svelte-fomantic-ui/src/lib/tests/Text.svelte) | [Text](https://fomantic-ui.com/elements/text.html)
| Textarea | X | X | [/Input](./svelte-fomantic-ui/src/lib/tests/Input.svelte) | [Input](https://fomantic-ui.com/elements/input.html) 

| Collections      | Implemented | Tested and Documented | Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------|------------------|
| Breadcrumb | X | X | [/Breadcrumb](./svelte-fomantic-ui/src/lib/tests/Breadcrumb.svelte) | [Breadcrumb](https://fomantic-ui.com/collections/breadcrumb.html) 
|  - Interactive | X | X | [/BreadcrumbInteractive](./svelte-fomantic-ui/src/lib/tests/BreadcrumbInteractive.svelte)
| Form | X | _ | [/Form](./svelte-fomantic-ui/src/lib/tests/Form.svelte) | [Form](https://fomantic-ui.com/collections/form.html)
| Grid | X | X | [/Grid](./svelte-fomantic-ui/src/lib/tests/Grid.svelte) | [Grid](https://fomantic-ui.com/collections/grid.html) 
| Menu | X | X | [/Menu](./svelte-fomantic-ui/src/lib/tests/Menu.svelte) | [Menu](https://fomantic-ui.com/collections/menu.html)
| Message | X | X | [/Message](./svelte-fomantic-ui/src/lib/tests/Message.svelte) | [Message](https://fomantic-ui.com/collections/message.html)
| Table | X | X | [/Table](./svelte-fomantic-ui/src/lib/tests/Table.svelte) | [Table](https://fomantic-ui.com/collections/table.html)

| Views            | Implemented | Tested and Documented | Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------|------------------|
| Advertisement | X | _ | [/Ad](./svelte-fomantic-ui/src/lib/tests/Ad.svelte) | [Ad](https://fomantic-ui.com/views/advertisement.html)
| Card | X | X | [/Card](./svelte-fomantic-ui/src/lib/tests/Card.svelte) | [Card](https://fomantic-ui.com/views/card.html)
| Comment | X | X | [/Comment](./svelte-fomantic-ui/src/lib/tests/Comment.svelte) | [Comment](https://fomantic-ui.com/views/comment.html) 
| Feed | X | X | [/Feed](./svelte-fomantic-ui/src/lib/tests/Feed.svelte) | [Feed](https://fomantic-ui.com/views/feed.html)
| Item | X | X | [/Item](./svelte-fomantic-ui/src/lib/tests/Item.svelte) | [Item](https://fomantic-ui.com/views/item.html)
| Statistic | X | X | [/Statistic](./svelte-fomantic-ui/src/lib/tests/Statistic.svelte) | [Statistic](https://fomantic-ui.com/views/statistic.html) 

| Modules          | Implemented | Tested and Documented | Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------|------------------|
| Accordion | X | X | [/Accordion](./svelte-fomantic-ui/src/lib/tests/Accordion.svelte) | [Accordion](https://fomantic-ui.com/modules/accordion.html) 
| Calendar | X | X | [/Calendar](./svelte-fomantic-ui/src/lib/tests/Calendar.svelte) | [Calendar](https://fomantic-ui.com/modules/calendar.html)
| Checkbox | X | X | [/Checkbox](./svelte-fomantic-ui/src/lib/tests/Checkbox.svelte) | [Checkbox](https://fomantic-ui.com/modules/checkbox.html)
|  - Indeterminate | X | X | [/CheckboxIndeterminate](./svelte-fomantic-ui/src/lib/tests/CheckboxIndeterminate.svelte)
| Dimmer | X | X | [/Dimmer](./svelte-fomantic-ui/src/lib/tests/Dimmer.svelte) | [Dimmer](https://fomantic-ui.com/modules/dimmer.html)
| Dropdown | X | X | [/Dropdown](./svelte-fomantic-ui/src/lib/tests/Dropdown.svelte) | [Dropdown](https://fomantic-ui.com/modules/dropdown.html)
| Embed | X | X | [/Embed](./svelte-fomantic-ui/src/lib/tests/Embed.svelte) | [Embed](https://fomantic-ui.com/modules/embed.html)
| Flyout | X | X | [/Flyout](./svelte-fomantic-ui/src/lib/tests/Flyout.svelte) | [Flyout](https://fomantic-ui.com/modules/flyout.html)
| Modal | X | X | [/Modal](./svelte-fomantic-ui/src/lib/tests/Modal.svelte) | [Modal](https://fomantic-ui.com/modules/modal.html)
| Nag | X | X | [/Nag](./svelte-fomantic-ui/src/lib/tests/Nag.svelte) | [Nag](https://fomantic-ui.com/modules/nag.html)
| Popup | X | X | [/Popup](./svelte-fomantic-ui/src/lib/tests/Popup.svelte) | [Popup](https://fomantic-ui.com/modules/popup.html)
| Progress | X | X | [/Progress](./svelte-fomantic-ui/src/lib/tests/Progress.svelte) | [Progress](https://fomantic-ui.com/modules/progress.html)
| Radio | X | X | [/Checkbox](./svelte-fomantic-ui/src/lib/tests/Checkbox.svelte) | [Checkbox](https://fomantic-ui.com/modules/checkbox.html)
| Rating | X | X | [/Rating](./svelte-fomantic-ui/src/lib/tests/Rating.svelte) | [Rating](https://fomantic-ui.com/modules/rating.html)
| Search | X | _ | [/Search](./svelte-fomantic-ui/src/lib/tests/Search.svelte) | [Search](https://fomantic-ui.com/modules/search.html)
| Shape | X | X | [/Shape](./svelte-fomantic-ui/src/lib/tests/Shape.svelte) | [Shape](https://fomantic-ui.com/modules/shape.html)
| Sidebar | X | X | [/Sidebar](./svelte-fomantic-ui/src/lib/tests/Sidebar.svelte) | [Sidebar](https://fomantic-ui.com/modules/sidebar.html)
| Slider | X | X | [/Slider](./svelte-fomantic-ui/src/lib/tests/Slider.svelte) | [Slider](https://fomantic-ui.com/modules/slider.html)
| Sticky | X | X | [/Sticky](./svelte-fomantic-ui/src/lib/tests/Sticky.svelte) | [Sticky](https://fomantic-ui.com/modules/sticky.html)
| Tab | X | X | [/Tab](./svelte-fomantic-ui/src/lib/tests/Tab.svelte) | [Tab](https://fomantic-ui.com/modules/tab.html)
| Toast | X | X | [/Toast](./svelte-fomantic-ui/src/lib/tests/Toast.svelte) | [Toast](https://fomantic-ui.com/modules/toast.html)
| Transition | X | X | [/Transition](./svelte-fomantic-ui/src/lib/tests/Transition.svelte) | [Transition](https://fomantic-ui.com/modules/transition.html)

| Behaviors        | Implemented | Tested and Documented | Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------|------------------|
| API |  |  |  | [API](https://fomantic-ui.com/behaviors/api.html) 
| Form validation | X | _ | [/Validation](./svelte-fomantic-ui/src/lib/tests/Validation.svelte) | [Form validation](https://fomantic-ui.com/behaviors/form.html) 
| Visibility |  |  |  | [Visibility](https://fomantic-ui.com/behaviors/visibility.html) 