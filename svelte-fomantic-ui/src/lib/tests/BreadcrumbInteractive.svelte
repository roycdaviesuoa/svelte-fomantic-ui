<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Text, Icon } from "../svelte-fomantic-ui.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import Code from './BreadcrumbInteractive';

    let selected: string = "home";
    let output: string = "";
    let items = ["home", "store", "clothes", "socks"]

    $: output = selected + " selected";
</script>

<div class="example-document">
  <h3 class="document-header">Breadcrumb interactive example and test</h3>
  <div class="document-description">An example of how to make breadcrumbs interactive.</div>

<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- An interactive breadcrumb -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">An interactive breadcrumb</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
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
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.interactive}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->

</div>

