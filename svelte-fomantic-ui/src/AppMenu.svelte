<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { reload, behavior, Menu, Item, Icon, Sidebar, Pusher, Button, Header } from "../src/lib/svelte-fomantic-ui.svelte";
    import "../src/lib/tests/examplestyles.css";

    import Home from './Home.svelte';
    import AppSidebar from './AppSidebar.svelte';

    import { afterUpdate, onMount, onDestroy } from 'svelte';
    afterUpdate(() => { reload(); });

    let windowWidth = window.innerWidth;
    let currentPage: any = Home;
    let mainmenu_open: boolean;
    let sidebarWidth: number;
    let pusherStyle: string;
    let isNarrow: boolean= false;
    let narrowWidth = 768;

    const handleResize = () => { windowWidth = window.innerWidth; };
    onMount(() => { window.addEventListener('resize', handleResize); });
    onDestroy(() => { window.removeEventListener('resize', handleResize); });

    mainmenu_open = windowWidth >= narrowWidth;

    $: isNarrow = windowWidth < narrowWidth;
    $: pusherStyle = "width:"+(isNarrow?windowWidth:((mainmenu_open)?windowWidth-sidebarWidth:windowWidth))+"px";

    function doMenuToggle() {
        if (isNarrow)
        {
            mainmenu_open = !mainmenu_open;
            behavior("mainmenu_mobile", mainmenu_open?"show":"hide");
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

</script>

{#if isNarrow }
    <Sidebar bind:clientWidth={sidebarWidth} id="mainmenu_mobile" ui settings={{silent:true, dimPage: false, delaySetup: true, closable: false}}>
        <AppSidebar bind:currentPage {sidebarWidth} {doMenuToggle}/>
    </Sidebar>
    <Pusher style={pusherStyle}>
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
    </Pusher>
{:else}
    <Sidebar bind:clientWidth={sidebarWidth} id="mainmenu" ui visible settings={{silent:true, dimPage: false, delaySetup: true, closable: false}}>
        <AppSidebar bind:currentPage {sidebarWidth} {doMenuToggle}/>
    </Sidebar>
    <Pusher style={pusherStyle}>
        <svelte:component this={currentPage}/>
    </Pusher>
{/if}

<style>

</style>