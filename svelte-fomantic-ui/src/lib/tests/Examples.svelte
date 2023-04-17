<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import "./prism.css";
    import { Dropdown as DropdownSFU, Text as TextSFU, Icon as IconSFU, Grid, Column} from "../svelte-fomantic-ui.svelte";

    export let title: string = "";
    export let description: string = "";
    export let disclaimer: string = "";
    export let code:{} = {};

    let submenu: string = "";

    function capitalizeAndReplace(original:string) {
        // Capitalize first letter
        let nice = original.charAt(0).toUpperCase() + original.slice(1);
        // Replace underscores with spaces
        nice = nice.replace(/_/g, " ");
        return {name:nice, value:"_"+original};
    }

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function submenu_chosen(e: any) {
        scrollToSection(e.detail.value);
    }
</script>



<div id="_top" class="example-document">
    <h3 class="document-header">{@html title}<br/>
    {#if (Object.keys(code).length > 0)}
        <DropdownSFU ui selection basic grey bind:selected={submenu} on:change={submenu_chosen} settings={{placeholder: "Choose Section", values: Object.keys(code).map(capitalizeAndReplace)}}>
            <TextSFU/>
            <IconSFU dropdown/>
        </DropdownSFU>
    {/if}
    </h3>
    <div class="document-description">{@html description}</div>
    <div class="document-disclaimer">{@html disclaimer}</div>
    <slot/>
</div>
