<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    // import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';

    export let title: string = "";
    export let code: string = "";
    export let narrow: boolean = false;
</script>

{#if narrow}
    <div class="example">
        <h4 class="example-header">{title}</h4>
        <div class="centered">
            <div class="narrow">
                <slot />
            </div>
        </div>
        <SourceCode language = "svelte" source = {code}/>
    </div>

{:else}
    <div class="example">
        <h4 class="example-header">{title}</h4>
        <slot />
        <SourceCode language = "svelte" source = {code}/>
    </div>
{/if}

<style>

    .example {
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 20px;
        max-width: 1024px;
        border: 1px;
        border-color: lightgrey;
        border-style:solid;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 20px;
        /* padding-top: 20px; */
        border-radius: 10px;
    }
    .centered {
        display: grid;
        place-items: center;
    }
    .narrow {
        width: 400px;
        border: 1px;
        border-color: rgb(244, 244, 244);;
        border-style:solid;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
    }
    .example-header {
        background-color: rgb(244, 244, 244);
        padding:20px;
        margin-bottom:20px;
        margin-left:-50px;
        margin-right:-50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }

</style>
