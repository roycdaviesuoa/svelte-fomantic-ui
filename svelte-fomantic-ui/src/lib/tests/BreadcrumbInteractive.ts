// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    interactive : `
<script>
    import { Breadcrumb, Link, Divider, Section, Text, Icon } from "svelte-fomantic-ui";

    let selected: string = "home";
    let output: string = "";
    let items = ["home", "store", "clothes", "socks"]

    $: output = selected + " selected";
</script>

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
    `
}

export default code;