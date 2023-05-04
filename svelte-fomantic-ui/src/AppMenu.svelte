<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { reload, behavior, Menu, Item, Icon, Sidebar, Pusher, Button, Header, Segment } from "../src/lib/svelte-fomantic-ui.svelte";
    import "../src/lib/tests/examplestyles.css";

    import Home from './Home.svelte';
    import AppSidebar from './AppSidebar.svelte';

    import { afterUpdate, onMount, onDestroy } from 'svelte';
    afterUpdate(() => { reload(); });
    onMount(() => { handleResize(); });

    let windowWidth = window.innerWidth;
    let currentPage: any = Home;
    let mainmenu_open: boolean;
    let sidebarWidth = 210;
    let pusherStyle: string;
    let isNarrow: boolean= false;
    let narrowWidth = 768;

    const handleResize = () => { windowWidth = window.innerWidth; mainmenu_open = windowWidth >= narrowWidth; isNarrow = windowWidth < narrowWidth; pusherStyle = "width:"+(isNarrow?windowWidth:((mainmenu_open)?windowWidth-sidebarWidth:windowWidth))+"px"; };
    onMount(() => { window.addEventListener('resize', handleResize); });
    onDestroy(() => { window.removeEventListener('resize', handleResize); });

    mainmenu_open = windowWidth >= narrowWidth;
    pusherStyle = "width:"+(isNarrow?windowWidth:((mainmenu_open)?windowWidth-sidebarWidth:windowWidth))+"px"; 

    $: isNarrow = windowWidth < narrowWidth;
    $: pusherStyle = "width:"+(isNarrow?windowWidth:((mainmenu_open)?windowWidth-sidebarWidth:windowWidth))+"px";

    console.log(mainmenu_open, windowWidth, sidebarWidth, pusherStyle);

    function doMenuToggle() {
        if (isNarrow)
        {
            mainmenu_open = !mainmenu_open;
            behavior("mainmenu_mobile", mainmenu_open?"show":"hide");
        }
        handleResize();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

</script>

{#if isNarrow }
    <Sidebar bind:clientWidth={sidebarWidth} id="mainmenu_mobile" ui settings={{silent:false, dimPage: false, delaySetup: true, closable: true}}>
        <AppSidebar bind:currentPage {sidebarWidth} {doMenuToggle}/>
    </Sidebar>
    <Segment style={pusherStyle} id="main">
        <Menu ui inverted top fixed>
            <Item>
                <Button ui icon secondary on:click={doMenuToggle}>
                    <Icon bars/>
                </Button>
            </Item>
            <Item>
                <Header>Svelte Fomantic UI</Header>
            </Item>
        </Menu>
        <div style="margin-top:48px !important">
            <svelte:component this={currentPage}/>
        </div>
    </Segment>
{:else}
    <Sidebar bind:clientWidth={sidebarWidth} id="mainmenu" ui vertical inverted visible menu left settings={{silent:true, dimPage: false, delaySetup: true, closable: false}}>
        <AppSidebar bind:currentPage {sidebarWidth} {doMenuToggle}/>
    </Sidebar>
    <Segment style={pusherStyle} id="main">
        <svelte:component this={currentPage}/>
    </Segment>
{/if}

<style>

</style>