<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->
<script lang="ts">
    import { Link as LinkSFU, Header as HeaderSFU, Menu as MenuSFU, Item as ItemSFU, Image as ImageSFU, Icon as IconSFU } from "../src/lib/svelte-fomantic-ui.svelte";

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
    import Flyout from './lib/tests/Flyout_outer.svelte';
    import Form from './lib/tests/Form.svelte';
    import Grid from './lib/tests/Grid.svelte';
    import Header from './lib/tests/Header.svelte';
    import Icon from './lib/tests/Icon.svelte';
    import Image from './lib/tests/Image.svelte';
    import Input from './lib/tests/Input.svelte';
    import Item from './lib/tests/Item.svelte';
    import Label from './lib/tests/Label.svelte';
    // import Link from './lib/tests/Link.svelte';
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
    import Shape from './lib/tests/Shape.svelte';
    import Sidebar from './lib/tests/Sidebar_outer.svelte';
    import Slider from './lib/tests/Slider.svelte';
    import Statistic from './lib/tests/Statistic.svelte';
    import Step from './lib/tests/Step.svelte';
    import Sticky from './lib/tests/Sticky_outer.svelte';
    import Tab from './lib/tests/Tab.svelte';
    import Table from './lib/tests/Table.svelte';
    import Text from './lib/tests/Text.svelte';
    import Toast from './lib/tests/Toast.svelte';
    import Transition from './lib/tests/Transition.svelte';
    import Validation from './lib/tests/Validation.svelte';

    import {version} from '../package.json';

    export let currentPage: any;
    // export let sidebarWidth: number;
    export let doMenuToggle: any;
</script>

<!-- <MenuSFU ui vertical inverted style={"width:"+sidebarWidth+"px"}> -->
    <ItemSFU>
        <ImageSFU ui inline logo mini icon src="/images/SvelteFomanticUI.png"/>
        <b>&nbsp;Svelte Fomantic UI</b>
        <span> {version}</span>
    </ItemSFU>
    <LinkSFU item header on:click={()=>{currentPage=Home; doMenuToggle();}}>
        <IconSFU home/>
        Home
    </LinkSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Elements</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=Button; doMenuToggle();}}>Button</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=ButtonInteractive; doMenuToggle();}}>Interactive Buttons</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Container; doMenuToggle();}}>Container</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Divider; doMenuToggle();}}>Divider</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Emoji; doMenuToggle();}}>Emoji</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Flag; doMenuToggle();}}>Flag</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Header; doMenuToggle();}}>Header</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Icon; doMenuToggle();}}>Icon</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Image; doMenuToggle();}}>Image</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Label; doMenuToggle();}}>Label</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=List; doMenuToggle();}}>List</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Loader; doMenuToggle();}}>Loader</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Placeholder; doMenuToggle();}}>Placeholder</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Rail; doMenuToggle();}}>Rail</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Reveal; doMenuToggle();}}>Reveal</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Segment; doMenuToggle();}}>Segment</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Step; doMenuToggle();}}>Step</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Text; doMenuToggle();}}>Text</LinkSFU>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Inputs</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=Checkbox; doMenuToggle();}}>Checkbox, Radio, Toggle, Slider</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=CheckboxIndeterminate; doMenuToggle();}}>Indeterminate Checkbox</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Input; doMenuToggle();}}>Input</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Dropdown; doMenuToggle();}}>Dropdown</LinkSFU>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Collections</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=Breadcrumb; doMenuToggle();}}>Breadcrumb</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=BreadcrumbInteractive; doMenuToggle();}}>Interactive Breadcrumb</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Form; doMenuToggle();}}>Form</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Grid; doMenuToggle();}}>Grid</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Menu; doMenuToggle();}}>Menu</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Message; doMenuToggle();}}>Message</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Table; doMenuToggle();}}>Table</LinkSFU>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Views</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=Ad; doMenuToggle();}}>Advertisement</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Card; doMenuToggle();}}>Card</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Comment; doMenuToggle();}}>Comment</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Feed; doMenuToggle();}}>Feed</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Item; doMenuToggle();}}>Item</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Statistic; doMenuToggle();}}>Statistic</LinkSFU>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Modules</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=Accordion; doMenuToggle();}}>Accordion</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Calendar; doMenuToggle();}}>Calendar</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Dimmer; doMenuToggle();}}>Dimmer</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Embed; doMenuToggle();}}>Embed</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Flyout; doMenuToggle();}}>Flyout</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Modal; doMenuToggle();}}>Modal</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Nag; doMenuToggle();}}>Nag</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Popup; doMenuToggle();}}>Popup</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Progress; doMenuToggle();}}>Progress</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Rating; doMenuToggle();}}>Rating</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=NotYet; doMenuToggle();}}>Search</LinkSFU>
            <LinkSFU item on:click={()=>{currentPage=Shape; doMenuToggle();}}>Shape</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Sidebar; doMenuToggle();}}>Sidebar</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Slider; doMenuToggle();}}>Slider</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Sticky; doMenuToggle();}}>Sticky</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Tab; doMenuToggle();}}>Tab</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Toast; doMenuToggle();}}>Toast</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Transition; doMenuToggle();}}>Transition</LinkSFU>    
        </MenuSFU>
    </ItemSFU>
    <ItemSFU>
        <HeaderSFU ui mini inverted>Behaviors</HeaderSFU>
        <MenuSFU>
            <LinkSFU item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>API</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=Validation; doMenuToggle();}}>Form Validation</LinkSFU>    
            <LinkSFU item on:click={()=>{currentPage=ComingSoon; doMenuToggle();}}>Visibility</LinkSFU>      
        </MenuSFU>
    </ItemSFU>
<!-- </MenuSFU> -->