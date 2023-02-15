<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import ButtonTest from './lib/fomantic-ui-tests/Button.svelte';
  import ButtonInteractive from './lib/fomantic-ui-tests/ButtonInteractive.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Button':
      currentRoute = ButtonTest; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />