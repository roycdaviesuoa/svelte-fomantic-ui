<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
* A simple app to allow one to try the unit tests.
******************************************************************************************************************************************************
-->

<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import AccordionTest from './lib/fomantic-ui-tests/Accordion.svelte';
  import ButtonTest from './lib/fomantic-ui-tests/Button.svelte';
  import ButtonInteractive from './lib/fomantic-ui-tests/ButtonInteractive.svelte';
  import BreadcrumbTest from './lib/fomantic-ui-tests/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/fomantic-ui-tests/BreadcrumbInteractive.svelte';
  import CalendarTest from './lib/fomantic-ui-tests/Calendar.svelte';
  import Checkbox from './lib/fomantic-ui-tests/Checkbox.svelte';
  import ContainerTest from './lib/fomantic-ui-tests/Container.svelte';
  import DividerTest from './lib/fomantic-ui-tests/Divider.svelte';
  import DropdownTest from './lib/fomantic-ui-tests/Dropdown.svelte';
  import EmojiTest from './lib/fomantic-ui-tests/Emoji.svelte';
  import FlagTest from './lib/fomantic-ui-tests/Flag.svelte';
  import HeaderTest from './lib/fomantic-ui-tests/Header.svelte';
  import IconTest from './lib/fomantic-ui-tests/Icon.svelte';
  import ImageTest from './lib/fomantic-ui-tests/Image.svelte';
  import LabelTest from './lib/fomantic-ui-tests/Label.svelte';
  import ListTest from './lib/fomantic-ui-tests/List.svelte';
  import LoaderTest from './lib/fomantic-ui-tests/Loader.svelte';
  import PlaceholderTest from './lib/fomantic-ui-tests/Placeholder.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Accordion':
      currentRoute = AccordionTest; break;
    case '/Button':
      currentRoute = ButtonTest; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    case '/Breadcrumb':
      currentRoute = BreadcrumbTest; break;
    case '/BreadcrumbInteractive':
      currentRoute = BreadcrumbInteractive; break;
    case '/Calendar':
      currentRoute = CalendarTest; break;
    case '/Checkbox':
      currentRoute = Checkbox; break;
    case '/Container':
      currentRoute = ContainerTest; break;
    case '/Divider':
      currentRoute = DividerTest; break;
    case '/Dropdown':
      currentRoute = DropdownTest; break;
    case '/Emoji':
      currentRoute = EmojiTest; break;
    case '/Flag':
      currentRoute = FlagTest; break;
    case '/Header':
      currentRoute = HeaderTest; break;
    case '/Icon':
      currentRoute = IconTest; break;
    case '/Image':
      currentRoute = ImageTest; break;
    case '/Label':
      currentRoute = LabelTest; break;
    case '/List':
      currentRoute = ListTest; break;
    case '/Loader':
      currentRoute = LoaderTest; break;
    case '/Placeholder':
      currentRoute = PlaceholderTest; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />