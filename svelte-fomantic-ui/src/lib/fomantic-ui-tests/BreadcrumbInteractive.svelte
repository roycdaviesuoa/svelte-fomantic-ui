<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Text, Icon } from "../fomantic-ui/Core.svelte";

    let selected: string = "home";
    let output: string = "";
    let items = ["home", "store", "clothes", "socks"]

    function select(event) {
      selected = event.detail.name;
      output = selected + " selected"
      console.log(event);
    }
</script>

<h4>An interactive breadcrumb</h4>
<Breadcrumb ui>
  {#each items as item, i}
    {#if i === (items.length-1)}
      <Icon right arrow divider/>
    {:else if i !== 0}
      <Icon right chevron divider/>
    {/if}

    {#if selected === item}
      <Section active>{item}</Section>
    {:else}
      <Link section on:click={select} name={item}>{item}</Link>
    {/if}
  {/each}
</Breadcrumb>
<Divider ui/>
<Text>{output}</Text>

