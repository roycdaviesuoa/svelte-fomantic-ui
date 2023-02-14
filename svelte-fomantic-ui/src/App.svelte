<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import ButtonTest from './lib/fomantic-ui-tests/Button.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu;
      break;
    case '/Button':
      currentRoute = ButtonTest;
      break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />