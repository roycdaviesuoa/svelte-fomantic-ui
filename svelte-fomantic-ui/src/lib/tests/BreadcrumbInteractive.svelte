<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Text, Icon } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './BreadcrumbInteractive';

    let selected: string = "home";
    let output: string = "";
    let items = ["home", "store", "clothes", "socks"]

    $: output = selected + " selected";
</script>

<Examples
    title = "Breadcrumb interactive example and test"
    description = "An example of how to make breadcrumbs interactive.">

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- An interactive breadcrumb -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "An interactive breadcrumb" code = {Code.interactive}>

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
                <Link section on:click={(e) => selected=e.detail.id} id={item}>{item}</Link>
            {/if}
        {/each}
        </Breadcrumb>
        <Divider ui/>
        <Text>{output}</Text>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>

