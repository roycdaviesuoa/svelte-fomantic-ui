// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    disabled : `
<Icon disabled users />
    `,
    loading : `
<Icon spinner loading/>
<Icon notched circle loading/>
<Icon asterisk loading/>
    `,
    fitted : `
Help me <Icon fitted help/>
    `,
    size : `
<Icon mini home/>
<Icon tiny home/>
<Icon small home/>
<Icon home/>
<Icon large home/>
<Icon big home/>
<Icon huge home/>
<Icon massive home/>
    `,
    link : `
<Icon id="close" on:click={(event) => iconClicked = event.detail.id} close link/>
<Icon id="help" on:click={(event) => iconClicked = event.detail.id} help link/>
<br/>(click an icon)<br/>
{iconClicked}{iconClicked===""?"":" clicked"}
    `,
    flipped : `
<Icon horizontally flipped cloud/>
<Icon vertically flipped cloud/>
    `,
    rotated : `
<Icon clockwise rotated cloud/>
<Icon counterclockwise rotated cloud/>
    `,
    circular : `
<Icon circular users/>
<Icon circular teal users/>
<Icon circular inverted users/>
<Icon circular inverted teal users/>
    `,
    circular_colored : `
<Icon circular colored red users/>
<Icon circular colored green users/>
<Icon circular colored blue users/>
    `,
    bordered_colored : `
<Icon bordered colored red users/>
<Icon bordered colored green users/>
<Icon bordered colored blue users/>
    `,
    colored : `
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
    `,
    inverted : `
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
    `,
    icon_groups : `
<Icons huge>
    <Icon big circle outline/>
    <Icon user/>
</Icons>

<Icons huge>
    <Icon big red dont/>
    <Icon user/>
</Icons>
    `,
    corner_icons : `
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
     `
};

export default code;