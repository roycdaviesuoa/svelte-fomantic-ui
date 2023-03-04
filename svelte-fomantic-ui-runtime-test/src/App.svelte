<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
* A simple app to allow one to try the unit tests.
******************************************************************************************************************************************************
-->

<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import Accordion from './lib/Accordion.svelte';
  import Button from './lib/Button.svelte';
  import ButtonInteractive from './lib/ButtonInteractive.svelte';
  import Breadcrumb from './lib/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/BreadcrumbInteractive.svelte';
  import Calendar from './lib/Calendar.svelte';
  import Checkbox from './lib/Checkbox.svelte';
  import CheckboxIndeterminate from './lib/CheckboxIndeterminate.svelte';
  import Container from './lib/Container.svelte';
  import Divider from './lib/Divider.svelte';
  import Dropdown from './lib/Dropdown.svelte';
  import Emoji from './lib/Emoji.svelte';
  import Flag from './lib/Flag.svelte';
  import Header from './lib/Header.svelte';
  import Icon from './lib/Icon.svelte';
  import Image from './lib/Image.svelte';
  import Label from './lib/Label.svelte';
  import List from './lib/List.svelte';
  import Loader from './lib/Loader.svelte';
  import Placeholder from './lib/Placeholder.svelte';
  import Rail from './lib/Rail.svelte';
  import Reveal from './lib/Reveal.svelte';
  import Segment from './lib/Segment.svelte';
  import Step from './lib/Step.svelte';
  import Text from './lib/Text.svelte';
  import Input from './lib/Input.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Accordion':
      currentRoute = Accordion; break;
    case '/Button':
      currentRoute = Button; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    case '/Breadcrumb':
      currentRoute = Breadcrumb; break;
    case '/BreadcrumbInteractive':
      currentRoute = BreadcrumbInteractive; break;
    case '/Calendar':
      currentRoute = Calendar; break;
    case '/Checkbox':
      currentRoute = Checkbox; break;
    case '/CheckboxIndeterminate':
      currentRoute = CheckboxIndeterminate; break;
    case '/Container':
      currentRoute = Container; break;
    case '/Divider':
      currentRoute = Divider; break;
    case '/Dropdown':
      currentRoute = Dropdown; break;
    case '/Emoji':
      currentRoute = Emoji; break;
    case '/Flag':
      currentRoute = Flag; break;
    case '/Header':
      currentRoute = Header; break;
    case '/Icon':
      currentRoute = Icon; break;
    case '/Image':
      currentRoute = Image; break;
    case '/Input':
      currentRoute = Input; break;
    case '/Label':
      currentRoute = Label; break;
    case '/List':
      currentRoute = List; break;
    case '/Loader':
      currentRoute = Loader; break;
    case '/Placeholder':
      currentRoute = Placeholder; break;
    case '/Reveal':
      currentRoute = Reveal; break;
    case '/Rail':
      currentRoute = Rail; break;
    case '/Segment':
      currentRoute = Segment; break;
    case '/Step':
      currentRoute = Step; break;
    case '/Text':
      currentRoute = Text; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />