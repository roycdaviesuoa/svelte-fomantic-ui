<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import { Accordion, Content, Title, Menu, Icon, Text, Link, Button } from "../svelte-fomantic-ui.svelte";

    export let title: string = "";
    export let code: string = "";
    export let narrow: boolean = false;
    export let id: string | undefined = undefined;

    let message="copy code to clipboard";

    function copyToClipboard (str: string) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const getSelection = document.getSelection();
        if (getSelection !== null)
        {
            const selected = getSelection.rangeCount > 0 ? getSelection.getRangeAt(0) : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected)
            {
                getSelection.removeAllRanges();
                getSelection.addRange(selected);
            }
        }
    }

    function deCapitalizeAndReplace(original:string) {
        // Make lower case
        let nice = original.toLowerCase();
        // Replace spaces with underscores
        nice = nice.replace(/ /g, "_");
        return "_"+nice;
    }

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>


{#if narrow}
    <div class="example" id={deCapitalizeAndReplace(title)} >
        <h4 class="example-header">
            <Button ui icon mini basic left floated style="margin-top: -5px;" popup={{content:"back to top", position: "top left"}} on:click={(e)=>{scrollToSection("_top")}}><Icon home/></Button>
            {title}
        </h4>
        <div class="centered">
            <div class="narrow">
                <slot />
            </div>
        </div>
        <Accordion ui very compact>
            <Title>
                <Menu ui text>
                    <Menu right>
                        <Button ui item popup={{content:"view source code", position: "top right"}}>
                            <Icon fitted chevron left small/><Text ui medium>/</Text><Icon fitted chevron right small/>
                        </Button>
                    </Menu>
                </Menu>
            </Title>
            <Content {id}>
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
    <div class="example" id={deCapitalizeAndReplace(title)}>
        <h4 class="example-header">
                <Button ui icon mini basic left floated style="margin-top: -5px;" data-variation="basic" data-position="top left" data-tooltip="back to top" on:click={(e)=>{scrollToSection("_top")}}>
                    <Icon home/>
                </Button>
                {title}
        </h4>
        <slot />
        <Accordion ui very compact>
            <Title>
                <Menu ui text>
                    <Menu right>
                        <Button ui icon item data-tooltip="view source code" data-position="top right">
                            <Icon fitted chevron left small/><Text ui medium>/</Text><Icon fitted chevron right small/>
                        </Button>
                    </Menu>
                </Menu>
            </Title>
            <Content {id}>
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


