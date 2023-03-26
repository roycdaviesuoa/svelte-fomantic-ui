<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, Menu, Item, Image, Icon, Link, Dropdown, Grid, Column, Header, List, Text, Placeholder, Line, Paragraph, Segment, Divider, Input, Label, Popup } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Menu';

    let ex1 = 0;
    let ex4 = 0;
    let ex5 = 0;
    let ex6 = 0;
    let ex7 = 0;
    let ex8 = 0;
    let ex9 = 0;
    let ex10 = 0;
    let ex11 = 0;
    let ex12 = 0;

    let ex3search = "";
    let ex4search = "";
    let ex5search = "";

    let selectedCourse = '';
    let selectedTopic = '';

    let courseMenu = [
        {name: "Business", items: ["Design & Urban Ecologies", "Fashion Design", "Fine Art", "Strategic Design"], function: (a:string) => {selectedCourse=a}},
        {name: "Liberal Arts", items: ["Anthropology", "Economics", "Media Studies", "Philosophy"], function: (a:string) => {selectedCourse=a}},
        {name: "Social Sciences", items: ["Food Studies", "Journalism", "Non Profit Management"], function: (a:string) => {selectedCourse=a}},
    ];
    let topics = ["Applications", "International Students", "Scholarships"];

    let ex3menu: string = "";
    function ex3handler(menuname: string) {
        ex3menu = menuname;
    }
    function ex3dosearch() {
        console.log("Search Initiated...");
    }
</script>


<Examples
    title = "Menu examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/menu.html'>here</Link>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- A menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "A menu" code = {Code.a_menu}>

        <Menu ui three item>
            <Link item active={ex1===0} on:click={()=>ex1=0}>Editorials</Link>
            <Link item active={ex1===1} on:click={()=>ex1=1}>Reviews</Link>
            <Link item active={ex1===2} on:click={()=>ex1=2}>Upcoming Events</Link>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown Menus -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dropdown Menus" code = {Code.dropdown_menus}>

        <Menu ui text>
            <Item>
                <Image src="/images/new-school.jpg"/>
            </Item>
            <Item>
                <Dropdown ui>
                    <Text>Browse Courses</Text>
                    <Icon dropdown/>
                    <Menu relaxed>
                        <Grid ui three column padded divided>
                            {#each courseMenu as menu}
                                <Column>
                                    <Header h4>{menu.name}</Header>
                                    <List ui link style="white-space: normal">
                                        {#each menu.items as item}
                                            <Link item name={item} on:click={()=>menu.function(item)}>{item}</Link>
                                        {/each}
                                    </List>
                                </Column>
                            {/each}
                        </Grid>
                    </Menu>
                </Dropdown>
            </Item>
            <Item right>
                <Dropdown ui>
                    <Icon ui left>
                        <Icon dropdown/>
                    </Icon>
                    <Text>More</Text>
                    <Menu relaxed>
                        {#each topics as topic}
                            <Link item name={topic} on:click={()=>{selectedTopic=topic}}>{topic}</Link>
                        {/each}
                    </Menu>
                </Dropdown>
            </Item>
        </Menu>

        {selectedCourse} {selectedTopic && selectedCourse?":":""} {selectedTopic}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached Menus -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached Menus" code = {Code.attached_menus}>

        <Menu ui top attached>
            <Dropdown ui icon item>
                <Icon wrench/>
                <Menu>
                    <Item>
                        <Icon dropdown/>
                        <Text>New</Text>
                        <Menu>
                            <Item on:click={()=>{ex3handler("Document")}}>Document</Item>
                            <Item on:click={()=>{ex3handler("Image")}}>Image</Item>
                        </Menu>
                    </Item>
                    <Item on:click={()=>{ex3handler("Open")}}>
                        Open...
                    </Item>
                    <Item on:click={()=>{ex3handler("Save")}}>
                        Save...
                    </Item>
                    <Item on:click={()=>{ex3handler("Edit Permissions")}}>Edit Permissions</Item>
                    <Divider />
                    <Header>
                        Export
                    </Header>
                    <Item on:click={()=>{ex3handler("Share")}}>
                        Share...
                    </Item>
                </Menu>
            </Dropdown>
            <Menu right>
                <Item ui right aligned category search>
                    <Input ui transparent icon>
                        <Input prompt type="text" placeholder="Search animals..." bind:value={ex3search} on:change={ex3dosearch}/>
                        <Icon search link/>
                    </Input>
                </Item>
            </Menu>
        </Menu>
        <Segment ui bottom attached>
            <Placeholder ui fluid>
                <Header image>
                    <Line/>
                    <Line/>
                </Header>
                <Paragraph>
                    <Line/>
                    <Line/>
                    <Line/>
                </Paragraph>
            </Placeholder>
            {ex3menu} {ex3menu && ex3search?":":""} {ex3search?"Will search for : ":""} {ex3search}
        </Segment>


    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Secondary Menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Secondary Menu" code = {Code.secondary}>

        <Menu ui secondary>
            <Item link active={ex4===0} on:click={()=>ex4=0} >
                Home
            </Item>
            <Item link active={ex4===1} on:click={()=>ex4=1}>
                Messages
            </Item>
            <Item link active={ex4===2} on:click={()=>ex4=2}>
                Friends
            </Item>
            <Menu right>
                <Item>
                    <Input ui icon>
                        <Input type="text" placeholder="Search..." bind:value={ex4search}/>
                        <Icon class="search link"/>
                    </Input>
                </Item>
                <Item link active={ex4===3} on:click={()=>ex4=3}>
                    Logout
                </Item>
            </Menu>
        </Menu>
        <Segment ui basic bottom attached>
            Menu Active : {ex4} {ex4 && ex4search?":":""} {ex4search?"Will search for : ":""} {ex4search}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pointing -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pointing" code = {Code.pointing}>
        
        <Menu ui pointing>
            <Item link active={ex5===0} on:click={()=>ex5=0} >
                Home
            </Item>
            <Item link active={ex5===1} on:click={()=>ex5=1}>
                Messages
            </Item>
            <Item link active={ex5===2} on:click={()=>ex5=2}>
                Friends
            </Item>
            <Menu right>
                <Item>
                    <Input ui icon>
                        <Input type="text" placeholder="Search..." bind:value={ex5search}/>
                        <Icon class="search link"/>
                    </Input>
                </Item>
            </Menu>
        </Menu>

        {#if ex5 === 0}
            <Segment ui stacked>
                Section 1 - Home
            </Segment>
        {:else if ex5 === 1}
            <Segment ui stacked>
                Section 2 - Messages
            </Segment>
        {:else if ex5 === 2}
            <Segment ui stacked>
                Section 3 - Friends
            </Segment>
        {/if}

        <Segment basic ui>
            Menu Active : {ex5} {ex5 && ex4search?":":""} {ex5search?"Will search for : ":""} {ex5search}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pointing secondary -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pointing secondary" code = {Code.pointing_secondary}>

        <Menu ui pointing secondary>
            <Item link active={ex6===0} on:click={()=>ex6=0}>
                Home
            </Item>
            <Item link active={ex6===1} on:click={()=>ex6=1}>
                Messages
            </Item>
            <Item link active={ex6===2} on:click={()=>ex6=2}>
                Friends
            </Item>
            <Menu right>
                <Item link active={ex6===3} on:click={()=>ex6=3}>
                    Logout
                </Item>
            </Menu>
        </Menu>

        {#if ex6 === 0}
            <Segment ui basic>
                Section 1 - Home
            </Segment>
        {:else if ex6 === 1}
            <Segment ui basic>
                Section 2 - Messages
            </Segment>
        {:else if ex6 === 2}
            <Segment ui basic>
                Section 3 - Friends
            </Segment>
        {:else if ex6 === 3}
            <Segment ui basic>
                Logging out
            </Segment>
        {/if}

        <Segment basic ui>
            Menu Active : {ex6}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Tabular -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Tabular" code = {Code.tabular}>

        <Menu ui tabular top attached>
            <Item link active={ex7===0} on:click={()=>ex7=0}>
                Bio
            </Item>
            <Item link active={ex7===1} on:click={()=>ex7=1}>
                Photos
            </Item>
        </Menu>

        {#if ex7 === 0}
            <Segment ui bottom attached>
                Biography
            </Segment>
        {:else if ex7 === 1}
            <Segment ui bottom attached>
                Photos
            </Segment>
        {/if}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Tabular bottom -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Tabular bottom" code = {Code.tabular_bottom}>

        <Segment ui top attached>
            {#if ex8 === 0}
                Biography
            {:else if ex8 === 1}
                Photos
            {/if}
        </Segment>

        <Menu ui tabular bottom attached>
            <Item link active={ex8===0} on:click={()=>ex8=0}>
                Bio
            </Item>
            <Item link active={ex8===1} on:click={()=>ex8=1}>
                Photos
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached tabular -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached tabular" code = {Code.attached_tabular}>

        <Segment ui top attached>
            <p></p>
        </Segment>
        <Menu ui bottom attached tabular>
            <Link item active={ex9===0} on:click={()=>ex9=0}>
                Active Project
            </Link>
            <Link item active={ex9===1} on:click={()=>ex9=1}>
                 Project #2
            </Link>
            <Link item active={ex9===2} on:click={()=>ex9=2}>
                Project #3
            </Link>
            <Menu right>
                <Link item active={ex9===3} on:click={()=>ex9=3}>
                    <Icon add/> New Tab
                </Link>
            </Menu>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Left attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Left attached" code = {Code.left_attached}>

        <Grid ui>
            <Column four wide left attached>
                <Menu ui vertical fluid tabular>
                    <Link item active={ex10===0} on:click={()=>ex10=0}>
                        Bio
                    </Link>
                    <Link item active={ex10===1} on:click={()=>ex10=1}>
                        Pics
                    </Link>
                    <Link item active={ex10===2} on:click={()=>ex10=2}>
                        Companies
                    </Link>
                    <Link item active={ex10===3} on:click={()=>ex10=3}>
                        Links
                    </Link>
                </Menu>
            </Column>
            <Column twelve wide stretched right attached>
                <Segment ui seamless right attached>
                    This is a stretched grid column. This segment will always match the tab height
                </Segment>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Right attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Right attached" code = {Code.right_attached}>

        <Grid ui>
            <Column twelve wide stretched left attached>
                <Segment ui seamless left attached>
                    This is a stretched grid column. This segment will always match the tab height
                </Segment>
            </Column>
            <Column four wide right attached>
                <Menu ui vertical fluid right tabular>
                    <Link item active={ex10===0} on:click={()=>ex10=0}>
                        Bio
                    </Link>
                    <Link item active={ex10===1} on:click={()=>ex10=1}>
                        Pics
                    </Link>
                    <Link item active={ex10===2} on:click={()=>ex10=2}>
                        Companies
                    </Link>
                    <Link item active={ex10===3} on:click={()=>ex10=3}>
                        Links
                    </Link>
                </Menu>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text" code = {Code.text}>

        <Menu ui text>
            <Item header>Sort By</Item>
            <Link item active={ex11===0} on:click={()=>ex11=0}>
                Closest
            </Link>
            <Link item active={ex11===1} on:click={()=>ex11=1}>
                Most Comments
            </Link>
            <Link item active={ex11===2} on:click={()=>ex11=2}>
                Most Popular
            </Link>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.vertical}>

        <Menu ui vertical>
            <Link item teal={ex12===0} active={ex12===0} on:click={()=>ex12=0}>
                Inbox
                <Label ui teal left pointing>1</Label>
            </Link>
            <Link item teal={ex12===1} active={ex12===1} on:click={()=>ex12=1}>
                Spam
                <Label ui>51</Label>
            </Link>
            <Link item teal={ex12===2} active={ex12===2} on:click={()=>ex12=2}>
                Updates
              <Label ui>1</Label>
            </Link>
            <Item>
                <Input ui transparent icon>
                    <Input type="text" placeholder="Search mail..."/>
                    <Icon search/>
                </Input>
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>

<style>
</style>