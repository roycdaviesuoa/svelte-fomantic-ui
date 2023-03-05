<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Rail, Placeholder, Header, Paragraph, Line, Segment } from "../svelte-fomantic-ui.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/rail.html">here</a></div>

    <div class="example">
        <h4 class="example-header">External</h4>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Rail ui left>
                        <Segment ui>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail ui right>
                        <Segment ui>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Segment>
            </div>
        </div>

        <Prism language="svelte" source={`
<Segment ui>
    <Rail ui left>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Internal</h4>

        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left internal>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right internal>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left internal>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right internal>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Dividing line</h4>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left dividing>
                        <Segment ui>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail ui right dividing>
                        <Segment ui>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
            </div>
        </div>

        <Prism language="svelte" source={`
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left dividing>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right dividing>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Attached</h4>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left attached>
                        <Segment ui>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail ui right attached>
                        <Segment ui>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
            </div>
        </div>
        <Segment ui>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Rail ui left attached internal>
                <Segment ui>
                    Left Rail Content
                </Segment>
            </Rail>
            <Rail ui right attached internal>
                <Segment ui>
                    Right Rail Content
                </Segment>
            </Rail>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left attached>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right attached>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left attached internal>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right attached internal>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Close and very close</h4>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left close>
                        <Segment ui>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail ui right close>
                        <Segment ui>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
            </div>
        </div>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left very close>
                        <Segment ui>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail ui right very close>
                        <Segment ui>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
            </div>
        </div>

        <Prism language="svelte" source={`
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left close>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right close>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left very close>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right very close>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left mini>
                        Mini
                    </Rail>
                    <Rail ui right tiny>
                        Tiny
                    </Rail>
                </Segment>
            </div>
        </div>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left small>
                        Small
                    </Rail>
                    <Rail ui right large>
                        Large
                    </Rail>
                </Segment>
            </div>
        </div>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui left big>
                        Big
                    </Rail>
                    <Rail ui right huge>
                        Huge
                    </Rail>
                </Segment>
            </div>
        </div>

        <div class="centered">
            <div class="narrow">
                <Segment ui>
                    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Rail ui right massive>
                        Massive
                    </Rail>
                </Segment>
            </div>
        </div>

        <Prism language="svelte" source={`
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left mini>
            Mini
    </Rail>
    <Rail ui right tiny>
            Tiny
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left small>
        <Segment ui small>
            Small
        </Segment>
    </Rail>
    <Rail ui right large>
        <Segment ui large>
            Large
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left big>
        <Segment ui big>
            Big
        </Segment>
    </Rail>
    <Rail ui right huge>
        <Segment ui huge>
            Huge
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui right massive>
        <Segment ui massive>
            Massive
        </Segment>
    </Rail>
</Segment>
    `}/>
    </div>
</div>
