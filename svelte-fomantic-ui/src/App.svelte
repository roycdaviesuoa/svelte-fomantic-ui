<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
* A simple app to allow one to try the unit tests.
******************************************************************************************************************************************************
-->

<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import Accordion from './lib/tests/Accordion.svelte';
  import Button from './lib/tests/Button.svelte';
  import ButtonInteractive from './lib/tests/ButtonInteractive.svelte';
  import Breadcrumb from './lib/tests/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/tests/BreadcrumbInteractive.svelte';
  import Calendar from './lib/tests/Calendar.svelte';
  import Checkbox from './lib/tests/Checkbox.svelte';
  import CheckboxIndeterminate from './lib/tests/CheckboxIndeterminate.svelte';
  import Container from './lib/tests/Container.svelte';
  import Divider from './lib/tests/Divider.svelte';
  import Dropdown from './lib/tests/Dropdown.svelte';
  import Emoji from './lib/tests/Emoji.svelte';
  import Flag from './lib/tests/Flag.svelte';
  import Header from './lib/tests/Header.svelte';
  import Icon from './lib/tests/Icon.svelte';
  import Image from './lib/tests/Image.svelte';
  import Label from './lib/tests/Label.svelte';
  import List from './lib/tests/List.svelte';
  import Loader from './lib/tests/Loader.svelte';
  import Placeholder from './lib/tests/Placeholder.svelte';
  import Rail from './lib/tests/Rail.svelte';
  import Reveal from './lib/tests/Reveal.svelte';
  import Segment from './lib/tests/Segment.svelte';
  import Step from './lib/tests/Step.svelte';
  import Text from './lib/tests/Text.svelte';
  import Input from './lib/tests/Input.svelte';


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