<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { onMount } from 'svelte';
    import "../src/lib/fomantic-ui-tests/examplestyles.css";
    import jq from 'jquery';
    import 'fomantic-ui-css/semantic.css';
    import 'fomantic-ui-css/semantic.js';
    import 'fomantic-ui-css/components/calendar.css'
    import 'fomantic-ui-css/components/calendar.js'


    onMount(() => {
        console.log(jq('#standard_calendar').calendar());

    });
</script>

<div class="example-document">
    <h3 class="document-header">Svelte sFomantic UI unit Tests</h3>
    <div class="document-description">Various tests to check that the Svelte versions look the same as the Fomantic-UI examples.</div>
  
    <div class="example">
        <h4 class="example-header">Fomantic UI Svelte</h4>
        <ul>
            <li> <h3>Elements</h3></li>
            <ul>
                <li> <h4><a href="/Button">Button</a> | <a href="/ButtonInteractive">Interactive Button</a></h4> </li>
                <li> <h4><a href="/Container">Container</a> </h4> </li>
                <li> <h4><a href="/Divider">Divider</a> </h4> </li>
                <li> <h4><a href="/Emoji">Emoji</a> </h4> </li>
                <li> <h4><a href="/Flag">Flag</a> </h4> </li>
                <li> <h4><a href="/Header">Header</a> </h4> </li>
                <li> <h4><a href="/Icon">Icon</a> </h4> </li>
                <li> <h4><a href="/Image">Image</a> </h4> </li>
                <li> <h4><a href="/Label">Label</a> </h4> </li>
            </ul>
            <li> <h3>Inputs</h3></li>
            <ul>
                <li> <h4><a href="/CheckboxInteractive">Interactive Checkbox</a></h4> </li>
            </ul>
            <li> <h3>Collections</h3></li>
            <ul>
                <li> <h4><a href="/Breadcrumb">Breadcrumb</a> | <a href="/BreadcrumbInteractive">Interactive Breadcrumb</a></h4> </li>
            </ul>
            <li> <h3>Modules</h3></li>
            <ul>
            </ul>
        </ul>
    </div>

    <div class="example">
        <h4 class="example-header">Testing interactive calendar</h4>
        <div class="ui calendar" id="standard_calendar">
            <div class="ui fluid input left icon">
                <i class="calendar icon"></i>
                <input type="text" placeholder="Date/Time">
            </div>
        </div>
    </div>
</div>



