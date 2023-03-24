<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { reload, Link, Header, Menu, Item, Sidebar, Pusher } from "../src/lib/svelte-fomantic-ui.svelte";
    import "../src/lib/tests/examplestyles.css";

    import AppMenu from './AppMenu.svelte';
    import Home from './Home.svelte';
    import ComingSoon from './ComingSoon.svelte';
    import NotYet from './NotYet.svelte';

    import Accordion from './lib/tests/Accordion.svelte';
    import Ad from './lib/tests/Ad.svelte';
    import Button from './lib/tests/Button.svelte';
    import ButtonInteractive from './lib/tests/ButtonInteractive.svelte';
    import Breadcrumb from './lib/tests/Breadcrumb.svelte';
    import BreadcrumbInteractive from './lib/tests/BreadcrumbInteractive.svelte';
    import Calendar from './lib/tests/Calendar.svelte';
    import Card from './lib/tests/Card.svelte';
    import Checkbox from './lib/tests/Checkbox.svelte';
    import CheckboxIndeterminate from './lib/tests/CheckboxIndeterminate.svelte';
    import Comment from './lib/tests/Comment.svelte';
    import Container from './lib/tests/Container.svelte';
    import Divider from './lib/tests/Divider.svelte';
    import Dropdown from './lib/tests/Dropdown.svelte';
    import Embed from './lib/tests/Embed.svelte';
    import Emoji from './lib/tests/Emoji.svelte';
    import Flag from './lib/tests/Flag.svelte';
    import Grid from './lib/tests/Grid.svelte';
    import _Header from './lib/tests/Header.svelte';
    import Icon from './lib/tests/Icon.svelte';
    import Image from './lib/tests/Image.svelte';
    import Label from './lib/tests/Label.svelte';
    import List from './lib/tests/List.svelte';
    import Loader from './lib/tests/Loader.svelte';
    import _Menu from './lib/tests/Menu.svelte';
    import Modal from './lib/tests/Modal.svelte';
    import Placeholder from './lib/tests/Placeholder.svelte';
    import Popup from './lib/tests/Popup.svelte';
    import Progress from './lib/tests/Progress.svelte';
    import Rail from './lib/tests/Rail.svelte';
    import Reveal from './lib/tests/Reveal.svelte';
    import Segment from './lib/tests/Segment.svelte';
    import Statistic from './lib/tests/Statistic.svelte';
    import Step from './lib/tests/Step.svelte';
    import Table from './lib/tests/Table.svelte';
    import Text from './lib/tests/Text.svelte';
    import Input from './lib/tests/Input.svelte';

    import { afterUpdate } from 'svelte';
    afterUpdate(() => { reload(); });

    let currentPage: any = Home;
</script>

<Sidebar ui inverted vertical menu mobile hidden tablet computer only visible>
    <Link item header on:click={()=>currentPage=Home}>
        <i class="home icon"></i>
        Home
    </Link>
    <Item>
        <Header ui mini inverted>Elements</Header>
        <Menu>
            <Link item on:click={()=>currentPage=Button}>Button</Link>    
            <Link item on:click={()=>currentPage=ButtonInteractive}>Interactive Buttons</Link>    
            <Link item on:click={()=>currentPage=Container}>Container</Link>    
            <Link item on:click={()=>currentPage=Divider}>Divider</Link>    
            <Link item on:click={()=>currentPage=Emoji}>Emoji</Link>    
            <Link item on:click={()=>currentPage=Flag}>Flag</Link>    
            <Link item on:click={()=>currentPage=_Header}>Header</Link>    
            <Link item on:click={()=>currentPage=Icon}>Icon</Link>    
            <Link item on:click={()=>currentPage=Image}>Image</Link>    
            <Link item on:click={()=>currentPage=Label}>Label</Link>    
            <Link item on:click={()=>currentPage=List}>List</Link>    
            <Link item on:click={()=>currentPage=Loader}>Loader</Link>    
            <Link item on:click={()=>currentPage=Placeholder}>Placeholder</Link>    
            <Link item on:click={()=>currentPage=Rail}>Rail</Link>    
            <Link item on:click={()=>currentPage=Reveal}>Reveal</Link>    
            <Link item on:click={()=>currentPage=Segment}>Segment</Link>    
            <Link item on:click={()=>currentPage=Step}>Step</Link>    
            <Link item on:click={()=>currentPage=Text}>Text</Link>    
        </Menu>
    </Item>
    <Item>
        <Header ui mini inverted>Inputs</Header>
        <Menu>
            <Link item on:click={()=>currentPage=Checkbox}>Checkbox, Radio, Toggle, Slider, Textarea</Link>    
            <Link item on:click={()=>currentPage=CheckboxIndeterminate}>Indeterminate Checkbox</Link>    
            <Link item on:click={()=>currentPage=Input}>Input</Link>    
            <Link item on:click={()=>currentPage=Dropdown}>Dropdown</Link>    
        </Menu>
    </Item>
    <Item>
        <Header ui mini inverted>Collections</Header>
        <Menu>
            <Link item on:click={()=>currentPage=Breadcrumb}>Breadcrumb</Link>    
            <Link item on:click={()=>currentPage=BreadcrumbInteractive}>Interactive Breadcrumb</Link>    
            <Link item on:click={()=>currentPage=ComingSoon}>Form</Link>    
            <Link item on:click={()=>currentPage=Grid}>Grid</Link>    
            <Link item on:click={()=>currentPage=_Menu}>Menu</Link>    
            <Link item on:click={()=>currentPage=ComingSoon}>Message</Link>    
            <Link item on:click={()=>currentPage=Table}>Table</Link>    
        </Menu>
    </Item>
    <Item>
        <Header ui mini inverted>Views</Header>
        <Menu>
            <Link item on:click={()=>currentPage=Ad}>Advertisement</Link>    
            <Link item on:click={()=>currentPage=Card}>Card</Link>    
            <Link item on:click={()=>currentPage=Comment}>Comment</Link>    
            <Link item on:click={()=>currentPage=ComingSoon}>Feed</Link>    
            <Link item on:click={()=>currentPage=ComingSoon}>Item</Link>    
            <Link item on:click={()=>currentPage=Statistic}>Statistic</Link>    
        </Menu>
    </Item>
    <Item>
        <Header ui mini inverted>Modules</Header>
        <Menu>
            <Link item on:click={()=>currentPage=Accordion}>Accordion</Link>    
            <Link item on:click={()=>currentPage=Calendar}>Calendar</Link>    
            <Link item on:click={()=>currentPage=Embed}>Embed</Link>    
            <Link item on:click={()=>currentPage=Modal}>Modal</Link>    
            <Link item on:click={()=>currentPage=Popup}>Popup</Link>    
            <Link item on:click={()=>currentPage=Progress}>Progress</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Rating</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Search</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Shape</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Sidebar</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Slider</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Sticky</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Tab</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Toast</Link>    
            <Link item on:click={()=>currentPage=NotYet}>Transition</Link>    
        </Menu>
    </Item>
</Sidebar>
<Pusher overflowing>
    <svelte:component this={currentPage}/>
</Pusher>
