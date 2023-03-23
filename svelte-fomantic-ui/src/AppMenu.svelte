<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { reload, Link, Header, Menu, Item } from "../src/lib/svelte-fomantic-ui.svelte";
    import "../src/lib/tests/examplestyles.css";

    import AppMenu from './AppMenu.svelte';
    import Home from './Home.svelte';
    import ComingSoon from './ComingSoon.svelte';

    import Accordion from './lib/tests/Accordion.svelte';
    import Button from './lib/tests/Button.svelte';
    import ButtonInteractive from './lib/tests/ButtonInteractive.svelte';
    import Breadcrumb from './lib/tests/Breadcrumb.svelte';
    import BreadcrumbInteractive from './lib/tests/BreadcrumbInteractive.svelte';
    import Calendar from './lib/tests/Calendar.svelte';
    import Checkbox from './lib/tests/Checkbox.svelte';
    import CheckboxIndeterminate from './lib/tests/CheckboxIndeterminate.svelte';
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
    import Step from './lib/tests/Step.svelte';
    import Table from './lib/tests/Table.svelte';
    import Text from './lib/tests/Text.svelte';
    import Input from './lib/tests/Input.svelte';

    import { afterUpdate } from 'svelte';
    afterUpdate(() => { reload(); });

    let currentPage: any = Home;
</script>

<div class="example-document">
    <Menu ui visible inverted left vertical sidebar pushable>
        <Link item on:click={()=>currentPage=Home}>
            <i class="home icon"></i>
            Home
        </Link>
        <Item>
            <Header ui small inverted>Elements</Header>
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
            <Header ui small inverted>Inputs</Header>
            <Menu>
                <Link item on:click={()=>currentPage=Checkbox}>Checkbox, Radio, Toggle, Slider</Link>    
                <Link item on:click={()=>currentPage=Input}>Input</Link>    
                <Link item on:click={()=>currentPage=Dropdown}>Dropdown</Link>    
                <Link item on:click={()=>currentPage=ComingSoon}>Textarea</Link>    
            </Menu>
        </Item>
    </Menu>
    <div class="pusher">
        <svelte:component this={currentPage}/>
    </div>

    <!-- <div class="example">
        <h4 class="example-header">Fomantic UI Svelte</h4>
        <ul>
            <li> <h3>Elements</h3></li>
            <ul>
                <li> <h4><a href="/Button">Button</a> | <a href="/ButtonInteractive">Interactive Button</a></h4> </li>
                <li> <h4><a href="/Container">Container</a> </h4> </li>
                <li> <h4><a href="/Divider">Divider</a> </h4> </li>
                <li> <h4><a href="/Emoji">Emoji</a> </h4> </li>
                <li> <h4><a href="/Flag">Flag</a> </h4> </li>
                <li> <h4><a href="/Header">Header</a> </h4> </li>
                <li> <h4><a href="/Icon">Icon</a> </h4> </li>
                <li> <h4><a href="/Image">Image</a> </h4> </li>
                <li> <h4><a href="/Label">Label</a> </h4> </li>
                <li> <h4><a href="/List">List</a> </h4></li>
                <li> <h4><a href="/Loader">Loader</a></h4></li>
                <li> <h4><a href="/Placeholder">Placeholder</a></h4></li>
                <li> <h4><a href="/Rail">Rail</a></h4></li>
                <li> <h4><a href="/Reveal">Reveal</a></h4></li>
                <li> <h4><a href="/Segment">Segment</a></h4></li>
                <li> <h4><a href="/Step">Step</a></h4></li>
                <li> <h4><a href="/Text">Text</a></h4></li>
            </ul>
            <li> <h3>Inputs</h3></li>
            <ul>
                <li> <h4><a href="/Checkbox">Checkbox, Radio, Toggle, Slider</a>, <a href="/CheckboxIndeterminate">Indeterminate</a></h4> </li>
                <li> <h4><a href="/Input">Input</a></h4></li>
                <li> <h4><a href="/Dropdown">Dropdown</a></h4> </li>
                <li> <h4>Textarea</h4></li>
            </ul>
            <li> <h3>Collections</h3></li>
            <ul>
                <li> <h4><a href="/Breadcrumb">Breadcrumb</a> | <a href="/BreadcrumbInteractive">Interactive Breadcrumb</a></h4> </li>
                <li> <h4>Form</h4></li>
                <li> <h4><a href="/Grid">Grid</a></h4></li>
                <li> <h4><a href="/Menu">Menu</a></h4></li>
                <li> <h4>Message</h4></li>
                <li> <h4><a href="/Table">Table</a></h4></li>
            </ul>
            <li> <h3>Modules</h3></li>
             <ul>
                <li> <h4><a href="/Accordion">Accordion</a></h4> </li>
                <li> <h4><a href="/Calendar">Calendar</a></h4> </li>
                <li> <h4><a href="/Embed">Embed</a></h4> </li>
                <li> <h4><a href="/Modal">Modal</a></h4> </li>
                <li> <h4><a href="/Popup">Popup</a></h4> </li>
                <li> <h4><a href="/Progress">Progress</a></h4> </li>
           </ul>
        </ul>
    </div> -->
</div>