# Svelte Fomantic UI Wrapper

### This is very much a work in progress, and is not suitable yet for using in any project as fundamental changes will occur...
### If you are interested in the project, feel free to download, assess, and give me frank feedback...
---
A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

---
For more details, look inside the svelte-fomantic-ui folder, and in particular, check the [README](./svelte-fomantic-ui/README.md)

The source code is found in the folder `src/lib`.  There are some examples and tests in the `src/lib/tests` folder.

## Roadmap

1. Minimum set of features complete - enough for a working website - all the Elements, Collections and Views - will work with pure css.
    * To date: implementation of features is at about 90%, and I'm about three quarters of the way through testing and documentation.
1. Main features complete - as above, but also the Modules.
    * A couple of modules have been completed, tested and documented.
1. All features complete - as above, but also the Behaviours and Theming.
    * This hasn't been looked at yet (but it might work - see below).

Note that in essence all these do already work (except for the Modules) because you can include Fomantic UI directly into your code using classes as with any javascript.

## Progress so far

| Element          | Implemented | Tested and Documented | Test Link / Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------------------|------------------|
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

| Collections      | Implemented | Tested and Documented | Test Link / Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------------------|------------------|
| Breadcrumb | X | X | [/Breadcrumb](./svelte-fomantic-ui/src/lib/tests/Breadcrumb.svelte) | [Breadcrumb](https://fomantic-ui.com/collections/breadcrumb.html) 
|  - Interactive | X | X | [/BreadcrumbInteractive](./svelte-fomantic-ui/src/lib/tests/BreadcrumbInteractive.svelte)
| Form | X |  |
| Grid | X | X | [/Grid](./svelte-fomantic-ui/src/lib/tests/Grid.svelte) | [Grid](https://fomantic-ui.com/collections/grid.html) 
| Menu | X |  |
| Message | X |  | 
| Table | X |  | 

| Views            | Implemented | Tested and Documented | Test Link / Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------------------|------------------|
| Advertisement | X |  |
| Card | X |  |
| Comment | X |  |
| Feed | X |  |
| Item | X |  |
| Statistic | X |  |

| Modules          | Implemented | Tested and Documented | Test Link / Example Code | Fomantic UI page |
|------------------|:-----------:|:---------------------:|--------------------------|------------------|
| Accordion | X | X | [/Accordion](./svelte-fomantic-ui/src/lib/tests/Accordion.svelte) | [Accordion](https://fomantic-ui.com/modules/accordion.html) 
| Calendar | X | X | [/Calendar](./svelte-fomantic-ui/src/lib/tests/Calendar.svelte) | [Calendar](https://fomantic-ui.com/modules/calendar.html)
| Checkbox | X | X | [/Checkbox](./svelte-fomantic-ui/src/lib/tests/Checkbox.svelte) | [Checkbox](https://fomantic-ui.com/modules/checkbox.html)
|  - Indeterminate | X | X | [/CheckboxIndeterminate](./svelte-fomantic-ui/src/lib/tests/CheckboxIndeterminate.svelte)
| Dimmer | X |  |
| Dropdown | X | X | [/Dropdown](./svelte-fomantic-ui/src/lib/tests/Dropdown.svelte) | [Dropdown](https://fomantic-ui.com/modules/dropdown.html)
| Embed | X | X | [/Embed](./svelte-fomantic-ui/src/lib/tests/Embed.svelte) | [Embed](https://fomantic-ui.com/modules/embed.html)
| Flyout |  |  |
| Modal |  |  |
| Nag |  |  |
| Popup | X | X | [/Popup](./svelte-fomantic-ui/src/lib/tests/Popup.svelte) | [Popup](https://fomantic-ui.com/modules/popup.html)
| Progress | X | X | [/Progress](./svelte-fomantic-ui/src/lib/tests/Progress.svelte) | [Progress](https://fomantic-ui.com/modules/checkbox.html)
| Radio | X | X | [/Checkbox](./svelte-fomantic-ui/src/lib/tests/Checkbox.svelte) | [Checkbox](https://fomantic-ui.com/modules/checkbox.html)
| Rating | X |  |
| Search |  |  |
| Shape |  |  |
| Sidebar |  |  |
| Slider |  |  |
| Sticky |  |  |
| Tab |  |  |
| Toast |  |  |
| Transition |  |  |