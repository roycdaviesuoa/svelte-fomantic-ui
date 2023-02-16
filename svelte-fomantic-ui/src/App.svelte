<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import ButtonTest from './lib/fomantic-ui-tests/Button.svelte';
  import ButtonInteractive from './lib/fomantic-ui-tests/ButtonInteractive.svelte';
  import Breadcrumb from './lib/fomantic-ui-tests/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/fomantic-ui-tests/BreadcrumbInteractive.svelte';
  import CheckboxInteractive from './lib/fomantic-ui-tests/CheckboxInteractive.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Button':
      currentRoute = ButtonTest; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    case '/Breadcrumb':
      currentRoute = Breadcrumb; break;
    case '/BreadcrumbInteractive':
      currentRoute = BreadcrumbInteractive; break;
    case '/CheckboxInteractive':
      currentRoute = CheckboxInteractive; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />