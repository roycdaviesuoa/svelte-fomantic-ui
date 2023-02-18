<script lang="ts">
    import { Icon, Icons, Segment, Header } from "../fomantic-ui/Core.svelte";

    let iconClicked:string = "";

    function doClick(event) {
        console.log(event);
        iconClicked = event.detail.name;
    }
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/icon.html">here</a></h3>

<h4>A Disabled Icon</h4>
<Icon disabled users />

<h4>Loading</h4>
<Icon spinner loading/>
<Icon notched circle loading/>
<Icon asterisk loading/>

<h4>Fitted</h4>
<Icon fitted help/>

<h4>Size</h4>
<Icon mini home/>
<Icon tiny home/>
<Icon small home/>
<Icon home/>
<Icon large home/>
<Icon big home/>
<Icon huge home/>
<Icon massive home/>

<h4>Link</h4>
<Icon name="close" on:click={doClick} close link/>
<Icon name="help" on:click={doClick} help link/>
{iconClicked} Clicked

<h4>Flipped</h4>
<Icon horizontally flipped cloud/>
<Icon vertically flipped cloud/>

<h4>Rotated</h4>
<Icon clockwise rotated cloud/>
<Icon counterclockwise rotated cloud/>

<h4>Circular</h4>
<Icon circular users/>
<Icon circular teal users/>
<Icon circular inverted users/>
<Icon circular inverted teal users/>

<h4>Circular colored</h4>
<Icon circular colored red users/>
<Icon circular colored green users/>
<Icon circular colored blue users/>

<h4>Bordered Colored</h4>
<Icon bordered colored red users/>
<Icon bordered colored green users/>
<Icon bordered colored blue users/>

<h4>Colored</h4>
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

<h4>Inverted</h4>
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

<h4>Icon Groups</h4>
<Icons huge>
    <Icon big circle outline/>
    <Icon user/>
</Icons>

<Icons huge>
    <Icon big red dont/>
    <Icon user/>
</Icons>

<h4>Corner Icons</h4>
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