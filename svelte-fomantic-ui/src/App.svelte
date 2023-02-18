<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import ButtonTest from './lib/fomantic-ui-tests/Button.svelte';
  import ButtonInteractive from './lib/fomantic-ui-tests/ButtonInteractive.svelte';
  import BreadcrumbTest from './lib/fomantic-ui-tests/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/fomantic-ui-tests/BreadcrumbInteractive.svelte';
  import CheckboxInteractive from './lib/fomantic-ui-tests/CheckboxInteractive.svelte';
  import ContainerTest from './lib/fomantic-ui-tests/Container.svelte';
  import DividerTest from './lib/fomantic-ui-tests/Divider.svelte';
  import EmojiTest from './lib/fomantic-ui-tests/Emoji.svelte';
  import FlagTest from './lib/fomantic-ui-tests/Flag.svelte';
  import HeaderTest from './lib/fomantic-ui-tests/Header.svelte';
  import IconTest from './lib/fomantic-ui-tests/Icon.svelte';
  import ImageTest from './lib/fomantic-ui-tests/Image.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Button':
      currentRoute = ButtonTest; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    case '/Breadcrumb':
      currentRoute = BreadcrumbTest; break;
    case '/BreadcrumbInteractive':
      currentRoute = BreadcrumbInteractive; break;
    case '/CheckboxInteractive':
      currentRoute = CheckboxInteractive; break;
    case '/Container':
      currentRoute = ContainerTest; break;
    case '/Divider':
      currentRoute = DividerTest; break;
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
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />