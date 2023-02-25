<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Icon, Icons, Segment, Header } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let iconClicked:string = "";

    function doClick(event) {
        console.log(event);
        iconClicked = event.detail.name;
    }
</script>

<div class="example-document">
    <h3 class="document-header">Icon examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/icon.html#/definition">here</a></div>

    <div class="example">
        <h4 class="example-header">Disabled Icon</h4>
        <Icon disabled users />
        <Prism language="html" source={`
<Icon disabled users />
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Loading</h4>
        <Icon spinner loading/>
        <Icon notched circle loading/>
        <Icon asterisk loading/>
        <Prism language="html" source={`
<Icon spinner loading/>
<Icon notched circle loading/>
<Icon asterisk loading/>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fitted</h4>
        Help me <Icon fitted help/>
        <Prism language="html" source={`
Help me <Icon fitted help/>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>
        <Icon mini home/>
        <Icon tiny home/>
        <Icon small home/>
        <Icon home/>
        <Icon large home/>
        <Icon big home/>
        <Icon huge home/>
        <Icon massive home/>
        <Prism language="html" source={`
<Icon mini home/>
<Icon tiny home/>
<Icon small home/>
<Icon home/>
<Icon large home/>
<Icon big home/>
<Icon huge home/>
<Icon massive home/>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Link</h4>
        <Icon name="close" on:click={doClick} close link/>
        <Icon name="help" on:click={doClick} help link/>
        <br/>(click an icon)<br/>
        {iconClicked}{iconClicked===""?"":" clicked"}
        <Prism language="svelte" source={`
<script>
    import { Icon } from "svelte-fomantic-ui";

    let iconClicked:string = "";

    function doClick(event) {
        iconClicked = event.detail.name;
    }
</script>

<Icon name="close" on:click={doClick} close link/>
<Icon name="help" on:click={doClick} help link/>

(click an icon)

{iconClicked}{iconClicked===""?"":" clicked"}
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Flipped</h4>
        <Icon horizontally flipped cloud/>
        <Icon vertically flipped cloud/>
        <Prism language="html" source={`
<Icon horizontally flipped cloud/>
<Icon vertically flipped cloud/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Rotated</h4>
        <Icon clockwise rotated cloud/>
        <Icon counterclockwise rotated cloud/>
        <Prism language="html" source={`
<Icon clockwise rotated cloud/>
<Icon counterclockwise rotated cloud/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Circular</h4>
        <Icon circular users/>
        <Icon circular teal users/>
        <Icon circular inverted users/>
        <Icon circular inverted teal users/>
        <Prism language="html" source={`
<Icon circular users/>
<Icon circular teal users/>
<Icon circular inverted users/>
<Icon circular inverted teal users/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Circular colored</h4>
        <Icon circular colored red users/>
        <Icon circular colored green users/>
        <Icon circular colored blue users/>
        <Prism language="html" source={`
<Icon circular colored red users/>
<Icon circular colored green users/>
<Icon circular colored blue users/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Bordered colored</h4>
        <Icon bordered colored red users/>
        <Icon bordered colored green users/>
        <Icon bordered colored blue users/>
        <Prism language="html" source={`
<Icon bordered colored red users/>
<Icon bordered colored green users/>
<Icon bordered colored blue users/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Colored</h4>
        <Icon primary users/>
        <Icon secondary users/>
        <Icon red users/>
        <Icon orange users/>
        <Icon yellow users/>
        <Icon olive users/>
        <Icon green users/>
        <Icon teal users/>
        <Icon blue users/>
        <Icon violet users/>
        <Icon purple users/>
        <Icon pink users/>
        <Icon brown users/>
        <Icon grey users/>
        <Icon black users/>
        <Prism language="html" source={`
<Icon primary users/>
<Icon secondary users/>
<Icon red users/>
<Icon orange users/>
<Icon yellow users/>
<Icon olive users/>
<Icon green users/>
<Icon teal users/>
<Icon blue users/>
<Icon violet users/>
<Icon purple users/>
<Icon pink users/>
<Icon brown users/>
<Icon grey users/>
<Icon black users/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>
        <Segment ui inverted>
            <Icon inverted users/>
            <Icon inverted primary users/>
            <Icon inverted secondary users/>
            <Icon inverted red users/>
            <Icon inverted orange users/>
            <Icon inverted yellow users/>
            <Icon inverted olive users/>
            <Icon inverted green users/>
            <Icon inverted teal users/>
            <Icon inverted blue users/>
            <Icon inverted violet users/>
            <Icon inverted purple users/>
            <Icon inverted pink users/>
            <Icon inverted brown users/>
            <Icon inverted grey users/>
        </Segment>
        <Prism language="html" source={`
<Segment ui inverted>
    <Icon inverted users/>
    <Icon inverted primary users/>
    <Icon inverted secondary users/>
    <Icon inverted red users/>
    <Icon inverted orange users/>
    <Icon inverted yellow users/>
    <Icon inverted olive users/>
    <Icon inverted green users/>
    <Icon inverted teal users/>
    <Icon inverted blue users/>
    <Icon inverted violet users/>
    <Icon inverted purple users/>
    <Icon inverted pink users/>
    <Icon inverted brown users/>
    <Icon inverted grey users/>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icon groups</h4>
        <Icons huge>
            <Icon big circle outline/>
            <Icon user/>
        </Icons>

        <Icons huge>
            <Icon big red dont/>
            <Icon user/>
        </Icons>
        <Prism language="html" source={`
<Icons huge>
    <Icon big circle outline/>
    <Icon user/>
</Icons>

<Icons huge>
    <Icon big red dont/>
    <Icon user/>
</Icons>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Corner icons</h4>
        <Icons huge>
            <Icon puzzle/>
            <Icon top left corner add/>
        </Icons>
        <Icons huge>
            <Icon puzzle/>
            <Icon top right corner add/>
        </Icons>
        <Icons huge>
            <Icon puzzle/>
            <Icon bottom left corner add/>
        </Icons>
        <Icons huge>
            <Icon puzzle/>
            <Icon bottom right corner add/>
        </Icons>

        <Header h2 ui>
            <Icons large>
                <Icon twitter/>
                <Icon inverted corner add/>
            </Icons>
            Add on Twitter
        </Header>
        <Prism language="html" source={`
<Icons huge>
    <Icon puzzle/>
    <Icon top left corner add/>
</Icons>
<Icons huge>
    <Icon puzzle/>
    <Icon top right corner add/>
</Icons>
<Icons huge>
    <Icon puzzle/>
    <Icon bottom left corner add/>
</Icons>
<Icons huge>
    <Icon puzzle/>
    <Icon bottom right corner add/>
</Icons>

<Header h2 ui>
    <Icons large>
        <Icon twitter/>
        <Icon inverted corner add/>
    </Icons>
    Add on Twitter
</Header>
        `}/>
    </div>
</div>