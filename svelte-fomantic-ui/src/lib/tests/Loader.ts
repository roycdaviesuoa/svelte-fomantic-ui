// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    loader : `
<Segment ui>
    <Dimmer ui active>
        <Loader ui/>
    </Dimmer>
</Segment>
    `,
    text_loader : `
<Segment ui>
    <Dimmer ui active>
        <Loader ui text>Loading</Loader>
    </Dimmer>
</Segment>

<Segment ui>
    <Dimmer ui active inverted >
        <Loader ui text>Loading</Loader>
    </Dimmer>
</Segment>
    `,
    indeterminate : `
<Segment ui>
    <Dimmer ui active>
        <Loader ui indeterminate text>Preparing Files</Loader>
    </Dimmer>
</Segment>
    `,
    active_disabled : `
<script lang="ts">
    import { Loader, Segment, Placeholder, Paragraph, Line, Button, Content } from "svelte-fomantic-ui";

    let isActive: boolean = false;
    function setActive() { isActive = !isActive; }
</script>

<Button ui toggle fluid bind:value={isActive} on:toggle={setActive} on_style="green">
    <Content slot="on">Active</Content>
    <Content slot="off">Disabled</Content>
</Button>
<Segment ui>
    <Loader ui active={isActive} disabled={!isActive}/>
    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    inline : `
<Loader ui active inline/>
    `,
    centered_inline : `
<Loader ui active centered inline/>
    `,
    speed : `
<Loader ui active slow inline/>
<Loader ui active inline/>
<Loader ui active fast inline/>
    `,
    colored : `
<Loader ui active primary inline/>
<Loader ui active secondary inline/>
<Loader ui active red inline/>
<Loader ui active orange inline/>
<Loader ui active yellow inline/>
<Loader ui active olive inline/>
<Loader ui active green inline/>
<Loader ui active teal inline/>
<Loader ui active blue inline/>
<Loader ui active violet inline/>
<Loader ui active purple inline/>
<Loader ui active pink inline/>
<Loader ui active brown inline/>
<Loader ui active grey inline/>
<Loader ui active black inline/>    
    `,
    size : `
<Segment ui>
    <Dimmer ui active>
        <Loader ui mini text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui tiny text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui small text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui medium text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui large text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui big text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui huge text>Loading</Loader>
    </Dimmer>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui massive text>Loading</Loader>
    </Dimmer>
</Segment>
    `,
    inverted : `
<Segment ui inverted>
    <Loader ui active inverted/>
</Segment>
    `,
    inverted_dimmer : `
<Segment ui>
    <Dimmer ui active inverted>
        <Loader ui text>Loading</Loader>
    </Dimmer>
</Segment>
    `,
    styles : `
<Segment ui>
    <Loader ui active slow green double/>
</Segment>
<Segment ui>
    <Loader ui active blue elastic/>
</Segment>
    `
}

export default code;