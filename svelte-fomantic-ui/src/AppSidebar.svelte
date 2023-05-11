<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->
<script lang="ts">
    import { Link, Header as HeaderSFU, Menu as MenuSFU, Item as ItemSFU, Image as ImageSFU, Icon as IconSFU } from "../src/lib/svelte-fomantic-ui.svelte";

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
    import Dimmer from './lib/tests/Dimmer.svelte';
    import Divider from './lib/tests/Divider.svelte';
    import Dropdown from './lib/tests/Dropdown.svelte';
    import Embed from './lib/tests/Embed.svelte';
    import Emoji from './lib/tests/Emoji.svelte';
    import Feed from './lib/tests/Feed.svelte';
    import Flag from './lib/tests/Flag.svelte';
    import Flyout from './lib/tests/Flyout.svelte';
    import Form from './lib/tests/Form.svelte';
    import Grid from './lib/tests/Grid.svelte';
    import Header from './lib/tests/Header.svelte';
    import Icon from './lib/tests/Icon.svelte';
    import Image from './lib/tests/Image.svelte';
    import Item from './lib/tests/Item.svelte';
    import Label from './lib/tests/Label.svelte';
    import List from './lib/tests/List.svelte';
    import Loader from './lib/tests/Loader.svelte';
    import Message from './lib/tests/Message.svelte';
    import Menu from './lib/tests/Menu.svelte';
    import Modal from './lib/tests/Modal.svelte';
    import Nag from './lib/tests/Nag.svelte';
    import Placeholder from './lib/tests/Placeholder.svelte';
    import Popup from './lib/tests/Popup.svelte';
    import Progress from './lib/tests/Progress.svelte';
    import Rail from './lib/tests/Rail.svelte';
    import Rating from './lib/tests/Rating.svelte';
    import Reveal from './lib/tests/Reveal.svelte';
    import Segment from './lib/tests/Segment.svelte';
    import Slider from './lib/tests/Slider.svelte';
    import Statistic from './lib/tests/Statistic.svelte';
    import Step from './lib/tests/Step.svelte';
    import Table from './lib/tests/Table.svelte';
    import Text from './lib/tests/Text.svelte';
    import Input from './lib/tests/Input.svelte';

    import {version} from '../package.json';

    export let currentPage: any;
    export let sidebarWidth: number;
    export let doMenuToggle: any;
</script>

<MenuSFU ui vertical inverted style={"width:"+sidebarWidth+"px"}>
    <ItemSFU>
        <ImageSFU ui inline logo mini icon src="/images/SvelteFomanticUI.png"/>
        <b>&nbsp;Svelte Fomantic UI</b>
        <span> {version}</span>
    </ItemSFU>
    <Link item header on:click={()=>{currentPage=Home; doMenuToggle();}}>
        <IconSFU home/>
        Home
    </Link>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Elements</HeaderSFU>
        <MenuSFU>
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
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Inputs</HeaderSFU>
        <MenuSFU>
            <Link item on:click={()=>{currentPage=Checkbox; doMenuToggle();}}>Checkbox, Radio, Toggle, Slider</Link>    
            <Link item on:click={()=>{currentPage=CheckboxIndeterminate; doMenuToggle();}}>Indeterminate Checkbox</Link>    
            <Link item on:click={()=>{currentPage=Input; doMenuToggle();}}>Input</Link>    
            <Link item on:click={()=>{currentPage=Dropdown; doMenuToggle();}}>Dropdown</Link>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Collections</HeaderSFU>
        <MenuSFU>
            <Link item on:click={()=>{currentPage=Breadcrumb; doMenuToggle();}}>Breadcrumb</Link>    
            <Link item on:click={()=>{currentPage=BreadcrumbInteractive; doMenuToggle();}}>Interactive Breadcrumb</Link>    
            <Link item on:click={()=>{currentPage=Form; doMenuToggle();}}>Form</Link>    
            <Link item on:click={()=>{currentPage=Grid; doMenuToggle();}}>Grid</Link>    
            <Link item on:click={()=>{currentPage=Menu; doMenuToggle();}}>Menu</Link>    
            <Link item on:click={()=>{currentPage=Message; doMenuToggle();}}>Message</Link>    
            <Link item on:click={()=>{currentPage=Table; doMenuToggle();}}>Table</Link>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Views</HeaderSFU>
        <MenuSFU>
            <Link item on:click={()=>{currentPage=Ad; doMenuToggle();}}>Advertisement</Link>    
            <Link item on:click={()=>{currentPage=Card; doMenuToggle();}}>Card</Link>    
            <Link item on:click={()=>{currentPage=Comment; doMenuToggle();}}>Comment</Link>    
            <Link item on:click={()=>{currentPage=Feed; doMenuToggle();}}>Feed</Link>    
            <Link item on:click={()=>{currentPage=Item; doMenuToggle();}}>Item</Link>    
            <Link item on:click={()=>{currentPage=Statistic; doMenuToggle();}}>Statistic</Link>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Modules</HeaderSFU>
        <MenuSFU>
            <Link item on:click={()=>{currentPage=Accordion; doMenuToggle();}}>Accordion</Link>    
            <Link item on:click={()=>{currentPage=Calendar; doMenuToggle();}}>Calendar</Link>    
            <Link item on:click={()=>{currentPage=Dimmer; doMenuToggle();}}>Dimmer</Link>    
            <Link item on:click={()=>{currentPage=Embed; doMenuToggle();}}>Embed</Link>    
            <Link item on:click={()=>{currentPage=Flyout; doMenuToggle();}}>Flyout</Link>    
            <Link item on:click={()=>{currentPage=Modal; doMenuToggle();}}>Modal</Link>    
            <Link item on:click={()=>{currentPage=Nag; doMenuToggle();}}>Nag</Link>    
            <Link item on:click={()=>{currentPage=Popup; doMenuToggle();}}>Popup</Link>    
            <Link item on:click={()=>{currentPage=Progress; doMenuToggle();}}>Progress</Link>    
            <Link item on:click={()=>{currentPage=Rating; doMenuToggle();}}>Rating</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Search</Link>
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Shape</Link>    
            <Link item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Sidebar</Link>    
            <Link item on:click={()=>{currentPage=Slider; doMenuToggle();}}>Slider</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Sticky</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Tab</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Toast</Link>    
            <Link item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Transition</Link>    
        </MenuSFU>
    </ItemSFU>
</MenuSFU>