<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import "./examplestyles.css";
    import "./prism.css";

    export let title: string = "";
    export let description: string = "";
    export let disclaimer: string = "";
</script>

<div class="example-document">
    <h3 class="document-header">{@html title}</h3>
    <div class="document-description">{@html description}</div>
    <div class="document-disclaimer">{@html disclaimer}</div>

    <slot/>
</div>