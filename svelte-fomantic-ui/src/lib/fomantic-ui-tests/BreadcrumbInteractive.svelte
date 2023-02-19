<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Text, Icon } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";

    let selected: string = "home";
    let output: string = "";
    let items = ["home", "store", "clothes", "socks"]

    $: output = selected + " selected";
</script>

<div class="example-document">
  <h3 class="document-header">Breadcrumb interactive example and test</h3>
  <div class="document-description">An example of how to make breadcrumbs interactive.</div>

  <div class="example">
    <h4 class="example-header">An ineractive breadcrumb</h4>
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
              <Link section on:click={(e) => selected=e.detail.name} name={item}>{item}</Link>
          {/if}
      {/each}
    </Breadcrumb>
    <Divider ui/>
    <Text>{output}</Text>
  </div>
</div>

