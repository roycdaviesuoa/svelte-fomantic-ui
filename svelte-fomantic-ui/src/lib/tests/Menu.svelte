<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Menu, Item, Image, Icon, Link, Dropdown, Grid, Column, Header, List, Text, Placeholder, Line, Paragraph, Segment, Divider, Input, Label, Popup, Button, Results } from "../svelte-fomantic-ui.svelte";
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
    let ex13 = 0;
    let ex14 = 0;
    let ex15 = 0;
    let ex16 = 0;
    let ex17 = 0;
    let ex18 = 0;
    let ex19 = 0;
    let ex20 = 0;
    let ex21 = 0;
    let ex22 = 0;
    let ex23 = 0;
    let ex24 = 0;
    let ex25 = 0;
    let ex26 = 0;
    let ex27 = 0;
    let ex28 = 0;
    let ex29 = 0;
    let ex30 = 0;
    let ex31 = 0;
    let ex32 = 0;
    let ex33 = 0;

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

    function printMessage(theMessage:string) {
        console.log(theMessage);
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
    <!-- Vertical -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vertical" code = {Code.vertical}>

        <Grid ui>
            <Column eight wide>
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
            </Column>

            <Column eight wide>
                <Menu ui secondary vertical>
                    <Link item active={ex13===0} on:click={()=>ex13=0}>
                        Account
                    </Link>
                    <Link item active={ex13===1} on:click={()=>ex13=1}>
                        Settings
                    </Link>
                    <Dropdown ui item>
                        <Icon dropdown/>
                        Display Options
                        <Menu>
                            <Header>Text Size</Header>
                            <Item>Small</Item>
                            <Item>Medium</Item>
                            <Item>Large</Item>
                        </Menu>
                    </Dropdown>
                  </Menu>            
            </Column>

            <Column five wide>
                <Menu ui vertical text>
                    <Header item>Sort By</Header>
                    <Link item active={ex14===0} on:click={()=>ex14=0}>
                        Closest
                    </Link>
                    <Link item active={ex14===1} on:click={()=>ex14=1}>
                        Most Comments
                    </Link>
                    <Link item active={ex14===2} on:click={()=>ex14=2}>
                        Most Popular
                    </Link>
                </Menu>
            </Column>

            <Column five wide>
                <Menu ui vertical pointing>
                    <Link item active={ex15===0} on:click={()=>ex15=0}>
                      Home
                    </Link>
                    <Link item active={ex15===1} on:click={()=>ex15=1}>
                      Messages
                    </Link>
                    <Link item active={ex15===2} on:click={()=>ex15=2}>
                      Friends
                    </Link>
                </Menu>
            </Column>

            <Column six wide>
                <Menu ui secondary vertical pointing>
                    <Link item active={ex16===0} on:click={()=>ex16=0}>
                      Home
                    </Link>
                    <Link item active={ex16===1} on:click={()=>ex16=1}>
                      Messages
                    </Link>
                    <Link item active={ex16===2} on:click={()=>ex16=2}>
                      Friends
                    </Link>
                </Menu>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pagination -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pagination" code = {Code.pagination}>

        <Menu ui pagination>
            <Link item>
                1
            </Link>
            <Item disabled>
                ...
            </Item>
            <Link item>
                10
            </Link>
            <Link item>
                11
            </Link>
            <Link item>
                12
            </Link>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Header" code = {Code.header}>

        <Menu ui>
            <Item header>
                Our Company
            </Item>
            <Link item  active={ex17===0} on:click={()=>ex17=0}>
                About Us
            </Link>
            <Link item  active={ex17===1} on:click={()=>ex17=1}>
                Jobs
            </Link>
            <Link item active={ex17===2} on:click={()=>ex17=2}>
                Locations
            </Link>
        </Menu>

        <Menu ui vertical>
            <Item>
                <Header>Products</Header>
                <Menu>
                    <Link item active={ex17===3} on:click={()=>ex17=3}>Enterprise</Link>
                    <Link item active={ex17===4} on:click={()=>ex17=4}>Consumer</Link>
                </Menu>
            </Item>
            <Item>
                <Header>CMS Solutions</Header>
                <Menu>
                    <Link item active={ex17===5} on:click={()=>ex17=5}>Rails</Link>
                    <Link item active={ex17===6} on:click={()=>ex17=6}>Python</Link>
                    <Link item active={ex17===7} on:click={()=>ex17=7}>PHP</Link>
                </Menu>
            </Item>
            <Item>
                <Header>Hosting</Header>
                <Menu>
                    <Link item active={ex17===8} on:click={()=>ex17=8}>Shared</Link>
                    <Link item active={ex17===9} on:click={()=>ex17=9}>Dedicated</Link>
                </Menu>
            </Item>
            <Item>
                <Header>Support</Header>
                <Menu>
                    <Link item active={ex17===10} on:click={()=>ex17=10}>E-mail Support</Link>
                    <Link item active={ex17===11} on:click={()=>ex17=11}>FAQs</Link>
                </Menu>
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text" code = {Code.text2}>

        <Menu ui vertical>
            <Link item active={ex18===0} on:click={()=>ex18=0}>
                <Header ui h4>Promotions</Header>
                <p>Check out our new promotions</p>
            </Link>
            <Link item active={ex18===1} on:click={()=>ex18=1}>
                <Header ui h4>Coupons</Header>
                <p>Check out our collection of coupons</p>
            </Link>
            <Link item active={ex18===2} on:click={()=>ex18=2}>
                <Header ui h4>Rebates</Header>
                <p>Visit our rebate forum for information on claiming rebates</p>
            </Link>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Input -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Input" code = {Code.input}>

        <Menu ui>
            <Item>
              <Input ui icon>
                <Input type="text" placeholder="Search..."/>
                <Icon search/>
              </Input>
            </Item>
            <Item right>
              <Input ui action>
                    <Input type="text" placeholder="Navigate to..."/>
                    <Button ui>Go</Button>
              </Input>
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Button -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Button" code = {Code.button}>

        <Menu ui>
            <Item>
                <Button ui primary>Sign up</Button>
            </Item>
            <Item>
                <Button ui>Log-in</Button>
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Link item -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Link item" code = {Code.link_item}>

        <Menu ui vertical>
            <Link item href="https://www.google.com">
                Visit Google
            </Link>
            <Item link>
                Javascript Link
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown item -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dropdown item" code = {Code.dropdown_item}>

        <Menu ui vertical>
            <Dropdown ui item>
                Categories
                <Icon dropdown/>
                <Menu>
                    <Link item active={ex19===0} on:click={()=>ex19=0}>Electronics</Link>
                    <Link item active={ex19===1} on:click={()=>ex19=1}>Automotive</Link>
                    <Link item active={ex19===2} on:click={()=>ex19=2}>Home</Link>
                </Menu>
            </Dropdown>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Popup -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Popup" code = {Code.popup}>

        <Menu ui popup settings={{hoverable: true, position: 'bottom left', onHide: function() {console.log("HERE");}}} >
            <Link browse item>
                Browse
                <Icon dropdown/>
            </Link>
        </Menu>
        <Popup ui flowing>
            <Grid ui four column relaxed equal height divided>
                <Column>
                    <Header ui h4>Fabrics</Header>
                    <List ui link>
                        <Link item active={ex20===0} on:click={()=>ex20=0}>Cashmere</Link>
                        <Link item active={ex20===1} on:click={()=>ex20=1}>Linen</Link>
                        <Link item active={ex20===2} on:click={()=>ex20=2}>Cotton</Link>
                        <Link item active={ex20===3} on:click={()=>ex20=3}>Viscose</Link>
                    </List>
                </Column>
                <Column>
                    <Header ui h4>Size</Header>
                    <List ui link>
                        <Link item active={ex20===4} on:click={()=>ex20=4}>Small</Link>
                        <Link item active={ex20===5} on:click={()=>ex20=5}>Medium</Link>
                        <Link item active={ex20===6} on:click={()=>ex20=6}>Large</Link>
                        <Link item active={ex20===7} on:click={()=>ex20=7}>Plus Sizes</Link>
                    </List>
                </Column>
                <Column>
                    <Header ui h4>Colored</Header>
                    <List ui link>
                        <Link item active={ex20===8} on:click={()=>ex20=8}>Neutrals</Link>
                        <Link item active={ex20===9} on:click={()=>ex20=9}>Brights</Link>
                        <Link item active={ex20===10} on:click={()=>ex20=10}>Pastels</Link>
                    </List>
                </Column>
                <Column>
                    <Header ui h4>Types</Header>
                    <List ui link>
                        <Link item active={ex20===11} on:click={()=>ex20=11}>Knitwear</Link>
                        <Link item active={ex20===12} on:click={()=>ex20=12}>Outerwear</Link>
                        <Link item active={ex20===13} on:click={()=>ex20=13}>Pants</Link>
                        <Link item active={ex20===14} on:click={()=>ex20=14}>Shoes</Link>
                    </List>
                </Column>
            </Grid>
        </Popup>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Search -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Search" code = {Code.search}>

        <Menu ui>
            <Item ui category search>
                <Input ui transparent icon>
                    <Input class="prompt" type="text" placeholder="Search animals..."/>
                    <Icon search link/>
                </Input>
                <Results></Results>
            </Item>
        </Menu>
        <Segment ui>
            <p></p>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Menu" code = {Code.menu}>

        <Menu ui>
            <Link item active={ex21===0} on:click={()=>ex21=0}>Browse</Link>
            <Link item active={ex21===1} on:click={()=>ex21=1}>Submit</Link>
            <Menu right>
                <Link item active={ex21===2} on:click={()=>ex21=2}>Sign Up</Link>
                <Link item active={ex21===3} on:click={()=>ex21=3}>Help</Link>
            </Menu>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Sub menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Sub menu" code = {Code.submenu}>

        <Menu ui vertical>
            <Item>
                <Input ui>
                    <Input type="text" placeholder="Search..."/>
                </Input>
            </Item>
            <Item>
                Home
                <Menu>
                    <Link item active={ex22===0} on:click={()=>ex22=0}>Search</Link>
                    <Link item active={ex22===1} on:click={()=>ex22=1}>Add</Link>
                    <Link item active={ex22===2} on:click={()=>ex22=2}>Remove</Link>
                </Menu>
            </Item>
            <Link item active={ex22===3} on:click={()=>ex22=3}>
                <Icon grid layout/> Browse
            </Link>
            <Link item active={ex22===4} on:click={()=>ex22=4}>
                Messages
            </Link>
            <Dropdown ui item>
                More
                <Icon dropdown/>
                <Menu>
                    <Link item active={ex22===5} on:click={()=>ex22=5}><i class="edit icon"></i> Edit Profile</Link>
                    <Link item active={ex22===6} on:click={()=>ex22=6}><i class="globe icon"></i> Choose Language</Link>
                    <Link item active={ex22===7} on:click={()=>ex22=7}><i class="settings icon"></i> Account Settings</Link>
                </Menu>
            </Dropdown>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Hover -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Hover" code = {Code.hover}>

        <Menu ui compact>
            <Link item active={ex23===0} on:click={()=>ex23=0}>
                A link
            </Link>
            <Item link active={ex23===1} on:click={()=>ex23=1}>
                div Link
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active" code = {Code.active}>

        <Menu ui compact>
            <Item disabled>
                Link
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Menu ui compact>
            <Item disabled>
                Link
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