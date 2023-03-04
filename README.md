# Svelte Fomantic UI Wrapper

### This is very much a work in progress, and is not suitable yet for using in any project as fundamental changes will occur...
### If you are interested in the project, feel free to download, assess, and give me frank feedback...
---
A simple Svelte wrapper for Fomantic UI.  This is a very shallow and light layer on top of the standard fomantic UI as found at https://fomantic-ui.com.

---
For more details, look inside the svelte-fomantic-ui folder, and in particular, check the [README](./svelte-fomantic-ui/README.md)

The source code is found in the folder `src/lib/fomantic-ui`.  You can use the Core.svelte file for including the necessary elements in your project.
There are some examples and tests in the `src/lib/fomantic-ui-tests`.  You can actually run these as a simple project using `yarn dev`, and certianly look at the code for inspiration.

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
| Button           |      X      |           X           | [/Button](./svelte-fomantic-ui-runtime-test/src/lib/Button.svelte)
|  - Interactive   |      X      |           X           | [/ButtonInteractive](./svelte-fomantic-ui-runtime-test/src/lib/ButtonInteractive.svelte)
| Container | X | X | [/Container](./svelte-fomantic-ui-runtime-test/src/lib/Container.svelte)
| Divider | X | X | [/Divider](./svelte-fomantic-ui-runtime-test/src/lib/Divider.svelte)
| Emoji | X | X | /Emoji
| Flag | X | X | /Flag
| Header | X | X | /Header
| Icon | X | X | /Icon
| Image | X | X | /Image
| Label | X | X | /Label
| List | X | X | /List
| Loader | X | X | /Loader
| Placeholder | X | X | /Placeholder
| Rail | X | X | /Rail
| Reveal | X | X | /Reveal
| Segment | X | X | /Segment
| Step | X | X | /Step
| Text | X | X | /Text

| Inputs          | Implemented | Tested and Documented | Test Link |
|-----------------|:-----------:|:---------------------:|-----------|
| Checkbox | X | X | /Checkbox
|  - Indeterminate | X | X | /CheckboxIndeterminate
| Input | X | X | /Input
| Dropdown | X | X | /Dropdown
| Radio | X | X | /Checkbox
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