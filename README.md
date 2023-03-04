# Svelte Fomantic UI Wrapper

### This is very much a work in progress, and is not suitable yet for using in any project as fundamental changes will occur...
### If you are interested in the project, feel free to download, assess, and give me frank feedback...
---
A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

---
For more details, look inside the svelte-fomantic-ui folder, and in particular, check the [README](./svelte-fomantic-ui/README.md)

The source code is found in the folder `src/lib/fomantic-ui`.  You can use the Core.svelte file for including the necessary elements in your project.
There are some examples and tests in the `svelte-fomantic-ui-runtime-test` folder available from GIThub.

## Roadmap

1. Minimum set of features complete - enough for a working website - all the Elements, Collections and Views - will work with pure css.
    * To date: implementation of features is at about 90%, and I'm about three quarters of the way through testing and documentation.
1. Main features complete - as above, but also the Modules.
    * A couple of modules have been completed, tested and documented.
1. All features complete - as above, but also the Behaviours and Theming.
    * This hasn't been looked at yet (but it might work - see below).

Note that in essence all these do already work (except for the Modules) because you can include Fomantic UI directly into your code using classes as with any javascript.

## Progress so far

| Element          | Implemented | Tested and Documented | Test Link |
|------------------|:-----------:|:---------------------:|-----------|
| Button | X | X | [/Button](./svelte-fomantic-ui-runtime-test/src/lib/Button.svelte)
|  - Interactive | X | X | [/ButtonInteractive](./svelte-fomantic-ui-runtime-test/src/lib/ButtonInteractive.svelte)
| Container | X | X | [/Container](./svelte-fomantic-ui-runtime-test/src/lib/Container.svelte)
| Divider | X | X | [/Divider](./svelte-fomantic-ui-runtime-test/src/lib/Divider.svelte)
| Emoji | X | X | [/Emoji](./svelte-fomantic-ui-runtime-test/src/lib/Emoji.svelte)
| Flag | X | X | [/Flag](./svelte-fomantic-ui-runtime-test/src/lib/Flag.svelte)
| Header | X | X | [/Header](./svelte-fomantic-ui-runtime-test/src/lib/Header.svelte)
| Icon | X | X | [/Icon](./svelte-fomantic-ui-runtime-test/src/lib/Icon.svelte)
| Image | X | X | [/Image](./svelte-fomantic-ui-runtime-test/src/lib/Image.svelte)
| Label | X | X | [/Label](./svelte-fomantic-ui-runtime-test/src/lib/Label.svelte)
| List | X | X | [/List](./svelte-fomantic-ui-runtime-test/src/lib/List.svelte)
| Loader | X | X | [/Loader](./svelte-fomantic-ui-runtime-test/src/lib/Loader.svelte)
| Placeholder | X | X | [/Placeholder](./svelte-fomantic-ui-runtime-test/src/lib/Placeholder.svelte)
| Rail | X | X | [/Rail](./svelte-fomantic-ui-runtime-test/src/lib/Rail.svelte)
| Reveal | X | X | [/Reveal](./svelte-fomantic-ui-runtime-test/src/lib/Reveal.svelte)
| Segment | X | X | [/Segment](./svelte-fomantic-ui-runtime-test/src/lib/Segment.svelte)
| Step | X | X | [/Step](./svelte-fomantic-ui-runtime-test/src/lib/Step.svelte)
| Text | X | X | [/Text](./svelte-fomantic-ui-runtime-test/src/lib/Text.svelte)

| Inputs          | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Checkbox | X | X | [/Checkbox](./svelte-fomantic-ui-runtime-test/src/lib/Checkbox.svelte)
|  - Indeterminate | X | X | [/CheckboxIndeterminate](./svelte-fomantic-ui-runtime-test/src/lib/CheckboxIndeterminate.svelte)
| Input | X | X | [/Input](./svelte-fomantic-ui-runtime-test/src/lib/Input.svelte)
| Dropdown | X | X | [/Dropdown](./svelte-fomantic-ui-runtime-test/src/lib/Dropdown.svelte)
| Radio | X | X | [/Checkbox](./svelte-fomantic-ui-runtime-test/src/lib/Checkbox.svelte)
| Simple Dropdown | X |  | 
| Textarea | X |  | 

| Collections     | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Breadcrumb | X | X | [/Breadcrumb](./svelte-fomantic-ui-runtime-test/src/lib/Breadcrumb.svelte)
|  - Interactive | X | X | [/BreadcrumbInteractive](./svelte-fomantic-ui-runtime-test/src/lib/BreadcrumbInteractive.svelte)
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
| Accordion | X | X | [/Accordion](./svelte-fomantic-ui-runtime-test/src/lib/Accordion.svelte)
| Calendar | X | X | [/Calendar](./svelte-fomantic-ui-runtime-test/src/lib/Calendar.svelte)
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