<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->
<script lang="ts">
    import { Link, Grid as GridFUI, Header as HeaderFUI, Menu as MenuFUI, Item, Image as ImageFUI, Icon as IconFUI, Button as ButtonFUI, Column } from "../src/lib/svelte-fomantic-ui.svelte";

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
    import Header from './lib/tests/Header.svelte';
    import Icon from './lib/tests/Icon.svelte';
    import Image from './lib/tests/Image.svelte';
    import Label from './lib/tests/Label.svelte';
    import List from './lib/tests/List.svelte';
    import Loader from './lib/tests/Loader.svelte';
    import Menu from './lib/tests/Menu.svelte';
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

    export let currentPage: any;
    export let sidebarWidth: number;
    export let doMenuToggle: any;
</script>

<MenuFUI ui vertical inverted style={"width:"+sidebarWidth+"px"}>
    <Item>
        <ImageFUI ui inline logo mini icon src="/images/SvelteFomanticUI.png"/>
        <b>&nbsp;Svelte Fomantic UI</b>
    </Item>
    <Link item header on:click={()=>{currentPage=Home; doMenuToggle();}}>
        <IconFUI home/>
        Home
    </Link>
    <Item>
        <HeaderFUI ui mini inverted>Elements</HeaderFUI>
        <MenuFUI>
            <Link item on:click={()=>{currentPage=Button; doMenuToggle();}}>Button</Link>    
            <Link item on:click={()=>{currentPage=ButtonInteractive; doMenuToggle();}}>Interactive Buttons</Link>    
            <Link item on:click={()=>{currentPage=Container; doMenuToggle();}}>Container</Link>    
            <Link item on:click={()=>{currentPage=Divider; doMenuToggle();}}>Divider</Link>    
            <Link item on:click={()=>{currentPage=Emoji; doMenuToggle();}}>Emoji</Link>    
            <Link item on:click={()=>{currentPage=Flag; doMenuToggle();}}>Flag</Link>    
            <Link item on:click={()=>{currentPage=Header; doMenuToggle();}}>Header</Link>    
            <Link item on:click={()=>{currentPage=Icon; doMenuToggle();}}>Icon</Link>    
            <Link item on:click={()=>{currentPage=Image; doMenuToggle();}}>Image</Link>    
            <Link item on:click={()=>{currentPage=Label; doMenuToggle();}}>Label</Link>    
            <Link item on:click={()=>{currentPage=List; doMenuToggle();}}>List</Link>    
            <Link item on:click={()=>{currentPage=Loader; doMenuToggle();}}>Loader</Link>    
            <Link item on:click={()=>{currentPage=Placeholder; doMenuToggle();}}>Placeholder</Link>    
            <Link item on:click={()=>{currentPage=Rail; doMenuToggle();}}>Rail</Link>    
            <Link item on:click={()=>{currentPage=Reveal; doMenuToggle();}}>Reveal</Link>    
            <Link item on:click={()=>{currentPage=Segment; doMenuToggle();}}>Segment</Link>    
            <Link item on:click={()=>{currentPage=Step; doMenuToggle();}}>Step</Link>    
            <Link item on:click={()=>{currentPage=Text; doMenuToggle();}}>Text</Link>    
        </MenuFUI>
    </Item>
    <Item>
        <HeaderFUI ui mini inverted>Inputs</HeaderFUI>
        <MenuFUI>
            <Link item on:click={()=>{currentPage=Checkbox; doMenuToggle();}}>Checkbox, Radio, Toggle, Slider, Textarea</Link>    
            <Link item on:click={()=>{currentPage=CheckboxIndeterminate; doMenuToggle();}}>Indeterminate Checkbox</Link>    
            <Link item on:click={()=>{currentPage=Input; doMenuToggle();}}>Input</Link>    
            <Link item on:click={()=>{currentPage=Dropdown; doMenuToggle();}}>Dropdown</Link>    
        </MenuFUI>
    </Item>
    <Item>
        <HeaderFUI ui mini inverted>Collections</HeaderFUI>
        <MenuFUI>
            <Link item on:click={()=>{currentPage=Breadcrumb; doMenuToggle();}}>Breadcrumb</Link>    
            <Link item on:click={()=>{currentPage=BreadcrumbInteractive; doMenuToggle();}}>Interactive Breadcrumb</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Form</Link>    
            <Link item on:click={()=>{currentPage=Grid; doMenuToggle();}}>Grid</Link>    
            <Link item on:click={()=>{currentPage=Menu; doMenuToggle();}}>Menu</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Message</Link>    
            <Link item on:click={()=>{currentPage=Table; doMenuToggle();}}>Table</Link>    
        </MenuFUI>
    </Item>
    <Item>
        <HeaderFUI ui mini inverted>Views</HeaderFUI>
        <MenuFUI>
            <Link item on:click={()=>{currentPage=Ad; doMenuToggle();}}>Advertisement</Link>    
            <Link item on:click={()=>{currentPage=Card; doMenuToggle();}}>Card</Link>    
            <Link item on:click={()=>{currentPage=Comment; doMenuToggle();}}>Comment</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Feed</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Item</Link>    
            <Link item on:click={()=>{currentPage=Statistic; doMenuToggle();}}>Statistic</Link>    
        </MenuFUI>
    </Item>
    <Item>
        <HeaderFUI ui mini inverted>Modules</HeaderFUI>
        <MenuFUI>
            <Link item on:click={()=>{currentPage=Accordion; doMenuToggle();}}>Accordion</Link>    
            <Link item on:click={()=>{currentPage=Calendar; doMenuToggle();}}>Calendar</Link>    
            <Link item on:click={()=>{currentPage=Embed; doMenuToggle();}}>Embed</Link>    
            <Link item on:click={()=>{currentPage=Modal; doMenuToggle();}}>Modal</Link>    
            <Link item on:click={()=>{currentPage=Popup; doMenuToggle();}}>Popup</Link>    
            <Link item on:click={()=>{currentPage=Progress; doMenuToggle();}}>Progress</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Rating</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Search</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Shape</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Sidebar</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Slider</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Sticky</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Tab</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Toast</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Transition</Link>    
        </MenuFUI>
    </Item>
</MenuFUI>