<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';

    export let title: string = "";
    export let code: string = "";
</script>

<div class="example">
    <h4 class="example-header">{title}</h4>
    <slot />
    <SourceCode language = "svelte" source = {code}/>
</div>