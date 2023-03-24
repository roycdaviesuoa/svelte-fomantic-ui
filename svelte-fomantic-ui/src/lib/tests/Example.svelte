<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import { Accordion, Content, Title, Menu, Icon, Text, Link } from "../svelte-fomantic-ui.svelte";
    import { copyToClipboard } from "../svelte-fomantic-ui-jquery";

    export let title: string = "";
    export let code: string = "";
    export let narrow: boolean = false;

    let message="copy code to clipboard";
</script>


{#if narrow}
    <div class="example">
        <h4 class="example-header">{title}</h4>
        <div class="centered">
            <div class="narrow">
                <slot />
            </div>
        </div>
        <Accordion ui very compact>
            <Title>
                <Menu ui text>
                    <Menu right>
                        <Link item data-tooltip="view source code">
                            <Icon fitted chevron left small/><Text ui medium>/</Text><Icon fitted chevron right small/>
                        </Link>
                    </Menu>
                </Menu>
            </Title>
            <Content>
                <Menu ui centered fluid text>
                    <Link item style="background-color: rgb(249, 249, 249); border-top-left-radius: 1em; border-top-right-radius: 1em;" data-tooltip={message} data-variation="basic">
                        <Icon copy link on:click={()=>{copyToClipboard(code); message="copied..."; setTimeout(() => {message="copy code to clipboard"}, 2000)}}/>
                    </Link>
                </Menu>
                <SourceCode language = "svelte" source = {code}/>
            </Content>
        </Accordion>
    </div>
{:else}
    <div class="example">
        <h4 class="example-header">{title}</h4>
        <slot />
        <Accordion ui very compact>
            <Title>
                <Menu ui text>
                    <Menu right>
                        <Link item data-tooltip="view source code">
                            <Icon fitted chevron left small/><Text ui medium>/</Text><Icon fitted chevron right small/>
                        </Link>
                    </Menu>
                </Menu>
            </Title>
            <Content>
                <div style="margin-bottom:-40px; text-align: center;">
                    <Link data-tooltip={message} data-variation="basic" on:click={()=>{copyToClipboard(code); message="copied..."; setTimeout(() => {message="copy code to clipboard"}, 2000)}}>
                        <Icon ui grey copy/>
                    </Link>
                </div>
                <SourceCode language = "svelte" source = {code}/>
            </Content>
        </Accordion>
    </div>
{/if}


