<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Loader, Segment, Dimmer, Placeholder, Paragraph, Line, Button, Content } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let isActive: boolean = false;
    function setActive() {
        isActive = !isActive;
    }
</script>

<div class="example-document">
    <h3 class="document-header">Loader examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/loader.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">A loader</h4>

        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active>
              <Loader ui/>
            </Dimmer>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <br/><br/><br/>
    <Dimmer ui active>
        <Loader ui/>
    </Dimmer>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Text loader</h4>

        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active>
              <Loader ui text>Loading</Loader>
            </Dimmer>
        </Segment>
        <br/><br/>
        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active inverted >
              <Loader ui text>Loading</Loader>
            </Dimmer>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <br/><br/><br/>
    <Dimmer ui active>
        <Loader ui text>Loading</Loader>
    </Dimmer>
</Segment>

<Segment ui>
    <br/><br/><br/>
    <Dimmer ui active inverted >
        <Loader ui text>Loading</Loader>
    </Dimmer>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Intermediate</h4>

        <Segment ui>
            <br/><br/><br/>
            <Dimmer ui active>
              <Loader ui indeterminate text>Preparing Files</Loader>
            </Dimmer>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <br/><br/><br/>
    <Dimmer ui active>
        <Loader ui indeterminate text>Preparing Files</Loader>
    </Dimmer>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Active / Disabled</h4>

        <Button ui toggle fluid bind:value={isActive} on:toggle={setActive} on_style="green">
            <Content slot="on">Active</Content>
            <Content slot="off">Disabled</Content>
        </Button>
        <Segment ui>
            <Loader ui active={isActive} disabled={!isActive}/>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>

        <Prism language="svelte" source={`
<script>
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inline</h4>

        <Loader ui active inline/>

        <Prism language="svelte" source={`
<Loader ui active inline/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Centered inline</h4>

        <Loader ui active centered inline/>

        <Prism language="svelte" source={`
<Loader ui active centered inline/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Speed</h4>

        <Loader ui active slow inline/>
        <Loader ui active inline/>
        <Loader ui active fast inline/>

        <Prism language="svelte" source={`
<Loader ui active slow inline/>
<Loader ui active inline/>
<Loader ui active fast inline/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Colored</h4>

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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

        <Segment ui>
            <Dimmer ui active>
                <Loader ui mini text>Loading</Loader>
            </Dimmer>
            <br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui tiny text>Loading</Loader>
            </Dimmer>
            <br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui small text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui medium text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui large text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui big text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui huge text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Dimmer ui active>
                <Loader ui massive text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/><br/><br/>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <Dimmer ui active>
        <Loader ui mini text>Loading</Loader>
    </Dimmer>
    <br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui tiny text>Loading</Loader>
    </Dimmer>
    <br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui small text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui medium text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui large text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui big text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/><br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui huge text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/><br/><br/>
</Segment>
<Segment ui>
    <Dimmer ui active>
        <Loader ui massive text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/><br/><br/>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>

        <Segment ui inverted>
            <Loader ui active inverted/>
            <br/><br/><br/><br/>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui inverted>
    <Loader ui active inverted/>
    <br/><br/><br/><br/>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted dimmer</h4>

        <Segment ui>
            <Dimmer ui active inverted>
                <Loader ui text>Loading</Loader>
            </Dimmer>
            <br/><br/><br/>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <Dimmer ui active inverted>
        <Loader ui text>Loading</Loader>
    </Dimmer>
    <br/><br/><br/>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Styles</h4>

        <Segment ui>
            <Loader ui active slow green double/>
            <br/><br/><br/><br/>
        </Segment>
        <Segment ui>
            <Loader ui active blue elastic/>
            <br/><br/><br/><br/>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <Loader ui active slow green double/>
    <br/><br/><br/><br/>
</Segment>
<Segment ui>
    <Loader ui active blue elastic/>
    <br/><br/><br/><br/>
</Segment>
        `}/>
    </div>
</div>
