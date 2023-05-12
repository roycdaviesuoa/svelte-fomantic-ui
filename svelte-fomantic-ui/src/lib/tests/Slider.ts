// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    slider : `
<script lang="ts">
    import { Slider, Segment } from "svelte-fomantic-ui";

    let slider1 = 3;
</script>

<Slider ui bind:value={slider1}/>

<Segment ui basic>
    {slider1}
</Segment>
    `,
    labeled : `
<Slider ui labeled bind:value={slider2} settings={{max: 10}}/>
<Slider ui labeled ticked bind:value={slider2} settings={{max: 10}}/>
<Divider ui/>
<Segment ui basic>
    {slider2}
</Segment>
    `,
    bottom_label : `
<Slider ui bottom aligned labeled bind:value={slider3} settings={{max: 10}}/>
<Divider ui/>
<Segment ui basic>
    {slider3}
</Segment>
    `,
    custom_labels : `
<Slider ui labeled ticked bind:value={slider4} settings={slider4settings}/>
<Divider ui/>
<Segment ui basic>
    {slider4}
</Segment>
    `,
    range : `
<Slider ui labeled range ticked bind:value={slider5} settings={{min: 5, max: 100, start: 10, end: 90, step: 5}}/>
<Divider ui/>
<Segment ui basic>
    {JSON.stringify(slider5)}
</Segment>
    `,
    disabled : `
<Slider ui disabled value={12}/>
    `,
    inverted : `
<Segment ui inverted>
    <Slider ui inverted bind:value={slider6}/>
</Segment>
<Divider ui/>
<Segment ui basic>
    {slider6}
</Segment>
    `,
    reversed : `
<Slider ui reversed bind:value={slider7}/>
<Divider ui/>
<Segment ui basic>
    {slider7}
</Segment>
    `,
    vertical : `
<Slider ui vertical bind:value={slider8} style={"height: 200px"}/>
    <Divider ui/>
<Segment ui basic>
    {slider8}
</Segment>
    `,
    colored : `
{#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"] as color}
    <Slider ui _={color} value={8}/><br/><br/>
{/each}
    `,
    inverted_colored : `
<Segment ui inverted>
    {#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"] as color}
        <Slider ui inverted _={color} value={8}/><br/><br/>
    {/each}
</Segment>
    `,
    size : `
{#each [{c:"red", s:"small"}, {c:"orange", s:""}, {c:"yellow", s:"large"}, {c:"olive", s:"big"}] as size_color}
    <Slider ui _={size_color.c + " " + size_color.s} value={8}/><br/><br/>
{/each}
    `
}

export default code;