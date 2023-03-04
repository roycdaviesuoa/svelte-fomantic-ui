<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
* A simple app to allow one to try the unit tests.
******************************************************************************************************************************************************
-->

<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import AccordionTest from './lib/Accordion.svelte';
  import ButtonTest from './lib/Button.svelte';
  import ButtonInteractive from './lib/ButtonInteractive.svelte';
  import BreadcrumbTest from './lib/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/BreadcrumbInteractive.svelte';
  import CalendarTest from './lib/Calendar.svelte';
  import Checkbox from './lib/Checkbox.svelte';
  import CheckboxIndeterminate from './lib/CheckboxIndeterminate.svelte';
  import ContainerTest from './lib/Container.svelte';
  import DividerTest from './lib/Divider.svelte';
  import DropdownTest from './lib/Dropdown.svelte';
  import EmojiTest from './lib/Emoji.svelte';
  import FlagTest from './lib/Flag.svelte';
  import HeaderTest from './lib/Header.svelte';
  import IconTest from './lib/Icon.svelte';
  import ImageTest from './lib/Image.svelte';
  import LabelTest from './lib/Label.svelte';
  import ListTest from './lib/List.svelte';
  import LoaderTest from './lib/Loader.svelte';
  import PlaceholderTest from './lib/Placeholder.svelte';
  import RailTest from './lib/Rail.svelte';
  import RevealTest from './lib/Reveal.svelte';
  import SegmentTest from './lib/Segment.svelte';
  import StepTest from './lib/Step.svelte';
  import TextTest from './lib/Text.svelte';
  import InputTest from './lib/Input.svelte';


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
    case '/CheckboxIndeterminate':
      currentRoute = CheckboxIndeterminate; break;
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
    case '/Input':
      currentRoute = InputTest; break;
    case '/Label':
      currentRoute = LabelTest; break;
    case '/List':
      currentRoute = ListTest; break;
    case '/Loader':
      currentRoute = LoaderTest; break;
    case '/Placeholder':
      currentRoute = PlaceholderTest; break;
    case '/Reveal':
      currentRoute = RevealTest; break;
    case '/Rail':
      currentRoute = RailTest; break;
    case '/Segment':
      currentRoute = SegmentTest; break;
    case '/Step':
      currentRoute = StepTest; break;
    case '/Text':
      currentRoute = TextTest; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />