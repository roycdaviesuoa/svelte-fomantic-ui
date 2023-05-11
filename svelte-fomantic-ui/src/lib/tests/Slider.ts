// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
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
    `
}

export default code;