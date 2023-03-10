<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    // import "./examplestyles.css";
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

<style>
    
    .example-document {
        border: 1px;
        border-color: lightgrey;
        border-style:solid;
        max-width: 1124px;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 20px;
        margin-top: 50px;
        border-radius: 10px;
    }

    .document-header {
        background-color: lightgrey;
        padding:20px;
        margin-bottom:20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    .document-description {
        background-color:rgb(244, 244, 244);
        padding:20px;
        margin-bottom:20px;
        margin-top:-20px;
        text-align: center;
    }
    .document-disclaimer {
        background-color:rgb(244, 244, 244);
        padding-left:20px;
        padding-right:20px;
        padding-bottom:20px;
        margin-bottom:20px;
        margin-top:-20px;
        text-align: center;
        font-style: italic;
        font-weight: bold;
    }

</style>