// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    a_menu : `
<Menu ui three item>
    <Link item active={ex1===0} on:click={()=>ex1=0}>Editorials</Link>
    <Link item active={ex1===1} on:click={()=>ex1=1}>Reviews</Link>
    <Link item active={ex1===2} on:click={()=>ex1=2}>Upcoming Events</Link>
</Menu>
    `,
    dropdown_menus : `
<script lang="ts">
    import { Menu, Item, Image, Icon, Link, Dropdown, Grid, Column, Header, List, Text } from "svelte-fomantic-ui";

    let selectedCourse = '';
    let selectedTopic = '';

    let courseMenu = {
        "Business" : ["Design & Urban Ecologies", "Fashion Design", "Fine Art", "Strategic Design"],
        "Liberal Arts" : ["Anthropology", "Economics", "Media Studies", "Philosophy"],
        "Social Sciences" : ["Food Studies", "Journalism", "Non Profit Management"]
    };
    let topics = ["Applications", "International Students", "Scholarships"];
</script>

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
                    {#each Object.keys(courseMenu) as menu}
                        <Column>
                            <Header h4>{menu}</Header>
                            <List ui link style="white-space: normal">
                                {#each courseMenu[menu] as item}
                                    <Link item name={item} on:click={()=>{selectedCourse=item}}>{item}</Link>
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
    `,
    attached_menus: `
<script lang="ts">
    import { Menu, Item, Image, Icon, Link, Dropdown, Grid, Column, Header, List, Text, Placeholder, Line, Paragraph, Segment, Divider, Input, Results } from "svelte-fomantic-ui";

    let example3searchterm: string = "";
    let example3menuselection: string = "";
    function example3handler(menuname: string) {
        example3menuselection = menuname;
    }
    function example3input() {
        console.log("Search Initiated...");
    }
</script>

<Menu ui top attached>
    <Dropdown ui icon item>
        <Icon wrench/>
        <Menu>
            <Item>
                <Icon dropdown/>
                <Text>New</Text>
                <Menu>
                    <Item on:click={()=>{example3handler("Document")}}>Document</Item>
                    <Item on:click={()=>{example3handler("Image")}}>Image</Item>
                </Menu>
            </Item>
            <Item on:click={()=>{example3handler("Open")}}>
                Open...
            </Item>
            <Item on:click={()=>{example3handler("Save")}}>
                Save...
            </Item>
            <Item on:click={()=>{example3handler("Edit Permissions")}}>Edit Permissions</Item>
            <Divider />
            <Header>
                Export
            </Header>
            <Item on:click={()=>{example3handler("Share")}}>
                Share...
            </Item>
        </Menu>
    </Dropdown>
    <Menu right>
        <Item ui right aligned category search>
            <Input ui transparent icon>
                <Input prompt type="text" placeholder="Search animals..." bind:value={example3searchterm} on:change={example3input}/>
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
</Segment>

{example3menuselection} {example3menuselection && example3searchterm?":":""} {example3searchterm?"Will search for : ":""} {example3searchterm}
    `,
    secondary: `
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
    `,
    pointing: `
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
    <Segment ui>
        Section 1
    </Segment>
{:else if ex5 === 1}
    <Segment ui>
        Section 2
    </Segment>
{:else if ex5 === 2}
    <Segment ui>
        Section 3
    </Segment>
{/if}

<Segment basic ui>
    Menu Active : {ex5} {ex5 && ex4search?":":""} {ex5search?"Will search for : ":""} {ex5search}
</Segment>
    `,
    pointing_secondary: `
<Menu ui pointing secondary>
    <Item link active={ex6===0} on:click={()=>ex6=0} >
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
    `,
    tabular: `
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
    `,
    tabular_bottom: `
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
    `,
    attached_tabular: `
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
    `,
    left_attached: `
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
    `,
    right_attached: `
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
    `,
    text: `
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
    `,
    vertical: `
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
            <Item active={ex14===0} on:click={()=>ex14=0}>
                Closest
            </Item>
            <Item active={ex14===1} on:click={()=>ex14=1}>
                Most Comments
            </Item>
            <Item active={ex14===2} on:click={()=>ex14=2}>
                Most Popular
            </Item>
        </Menu>
    </Column>

    <Column five wide>
        <Menu ui vertical pointing>
            <Item active={ex15===0} on:click={()=>ex15=0}>
                Home
            </Item>
            <Item active={ex15===1} on:click={()=>ex15=1}>
                Messages
            </Item>
            <Item active={ex15===2} on:click={()=>ex15=2}>
                Friends
            </Item>
        </Menu>
    </Column>

    <Column six wide>
        <Menu ui secondary vertical pointing>
            <Item active={ex16===0} on:click={()=>ex16=0}>
                Home
            </Item>
            <Item active={ex16===1} on:click={()=>ex16=1}>
                Messages
            </Item>
            <Item active={ex16===2} on:click={()=>ex16=2}>
                Friends
            </Item>
        </Menu>
    </Column>
</Grid>
    `,
    pagination: `
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
    `,
    header: `
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
    `,
    text2: `
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
    `,
    input: `
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
    `,
    button: `
<Menu ui>
    <Item>
        <Button ui primary>Sign up</Button>
    </Item>
    <Item>
        <Button ui>Log-in</Button>
    </Item>
</Menu>
    `,
    link_item:`
<Menu ui vertical>
    <Link item href="https://www.google.com">
        Visit Google
    </Link>
    <Item link>
        Javascript Link
    </Item>
</Menu>
    `,
    dropdown_item:`
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
    `,
    popup:`
<Menu ui popup={{hoverable: true, position: 'bottom left'}}>
    <Link browse item>
        Browse
        <Icon dropdown/>
    </Link>
</Menu>
<Popup ui fluid settings={{hoverable: true, position: 'bottom left'}}>
    <Grid ui four column relaxed equal height divided>
        <Column>
            <Header ui h4>Fabrics</Header>
            <List ui link bind:value={popupMenu}>
                <Link value="cashmere" item active={ex20===0} on:click={()=>ex20=0}>Cashmere</Link>
                <Link item active={ex20===1} on:click={()=>ex20=1}>Linen</Link>
                <Link item active={ex20===2} on:click={()=>ex20=2}>Cotton</Link>
                <Link item active={ex20===3} on:click={()=>ex20=3}>Viscose</Link>
            </List>
        </Column>
        <Column>
            <Header ui h4>Size</Header>
            <List ui link bind:value={popupMenu}>
                <Link item active={ex20===4} on:click={()=>ex20=4}>Small</Link>
                <Link item active={ex20===5} on:click={()=>ex20=5}>Medium</Link>
                <Link item active={ex20===6} on:click={()=>ex20=6}>Large</Link>
                <Link item active={ex20===7} on:click={()=>ex20=7}>Plus Sizes</Link>
            </List>
        </Column>
        <Column>
            <Header ui h4>Colored</Header>
            <List ui link bind:value={popupMenu}>
                <Link item active={ex20===8} on:click={()=>ex20=8}>Neutrals</Link>
                <Link item active={ex20===9} on:click={()=>ex20=9}>Brights</Link>
                <Link item active={ex20===10} on:click={()=>ex20=10}>Pastels</Link>
            </List>
        </Column>
        <Column>
            <Header ui h4>Types</Header>
            <List ui link bind:value={popupMenu}>
                <Link item active={ex20===11} on:click={()=>ex20=11}>Knitwear</Link>
                <Link item active={ex20===12} on:click={()=>ex20=12}>Outerwear</Link>
                <Link item active={ex20===13} on:click={()=>ex20=13}>Pants</Link>
                <Link item active={ex20===14} on:click={()=>ex20=14}>Shoes</Link>
            </List>
        </Column>
    </Grid>
</Popup>
<Segment ui basic>
    {ex20} {popupMenu}
</Segment>
    `,
    search: `
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
    `,
    menu: `
<Menu ui>
    <Link item active={ex21===0} on:click={()=>ex21=0}>Browse</Link>
    <Link item active={ex21===1} on:click={()=>ex21=1}>Submit</Link>
    <Menu right>
        <Link item active={ex21===2} on:click={()=>ex21=2}>Sign Up</Link>
        <Link item active={ex21===3} on:click={()=>ex21=3}>Help</Link>
    </Menu>
</Menu>
    `,
    submenu: `
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
    `,
    hover: `
<Menu ui compact>
    <Link item active={ex23===0} on:click={()=>ex23=0}>
        A link
    </Link>
    <Item link active={ex23===1} on:click={()=>ex23=1}>
        div Link
    </Item>
</Menu>
    `,
    active: `
<Menu ui compact>
    <Item active>
        Link
    </Item>
</Menu>
    `,
    disabled: `
<Menu ui compact>
    <Item disabled>
        Link
    </Item>
</Menu>
    `,
    fixed: `
<Menu ui top fixed>
    <Item>
        <Image src="/images/logo.png"/>
    </Item>
    <Link item>Features</Link>
    <Link item>Testimonials</Link>
    <Link item>Sign-in</Link>
</Menu>
<Segment>
    <Placeholder ui>
        <Header image>
            <Line/>
            <Line/>
        </Header>
        <Paragraph>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
        </Paragraph>
    </Placeholder>            
</Segment>
<Menu ui bottom fixed>
    <Item>
        <Image src="/images/logo.png"/>
    </Item>
    <Link item>Features</Link>
    <Link item>Testimonials</Link>
    <Link item>Sign-in</Link>
</Menu>
    `,
    stackable: `
<Menu ui stackable>
    <Item>
        <Image src="/images/logo.png"/>
    </Item>
    <Link active={ex25===0} on:click={()=>ex25=0} item>
        Features
    </Link>
    <Link active={ex25===1} on:click={()=>ex25=1} item>
        Testimonials
    </Link>
    <Link active={ex25===2} on:click={()=>ex25=2} item>
        Sign-in
    </Link>
</Menu>
    `,
    inverted: `
<Menu ui inverted>
    <Link active={ex24===0} on:click={()=>ex24=0} item>
        Home
    </Link>
    <Link active={ex24===1} on:click={()=>ex24=1} item>
        Messages
    </Link>
    <Link active={ex24===2} on:click={()=>ex24=2} item>
        Friends
    </Link>
</Menu>

<Menu ui inverted vertical>
    <Link active={ex24===0} on:click={()=>ex24=0} item>
        Home
    </Link>
    <Link active={ex24===1} on:click={()=>ex24=1} item>
        Messages
    </Link>
    <Link active={ex24===2} on:click={()=>ex24=2} item>
        Friends
    </Link>
</Menu>

<Menu ui inverted vertical pointing>
    <Link active={ex24===0} on:click={()=>ex24=0} item>
        Home
    </Link>
    <Link active={ex24===1} on:click={()=>ex24=1} item>
        Messages
    </Link>
    <Link active={ex24===2} on:click={()=>ex24=2} item>
        Friends
    </Link>
</Menu>

<Segment ui inverted>
    <Menu ui inverted secondary>
        <Link active={ex24===0} on:click={()=>ex24=0} item>
            Home
        </Link>
        <Link active={ex24===1} on:click={()=>ex24=1} item>
            Messages
        </Link>
        <Link active={ex24===2} on:click={()=>ex24=2} item>
            Friends
        </Link>
    </Menu>
</Segment>

<Segment ui inverted>
    <Menu ui inverted secondary pointing>
        <Link active={ex24===0} on:click={()=>ex24=0} item>
            Home
        </Link>
        <Link active={ex24===1} on:click={()=>ex24=1} item>
            Messages
        </Link>
        <Link active={ex24===2} on:click={()=>ex24=2} item>
            Friends
        </Link>
    </Menu>
</Segment>
    `,
    colored: `
<Menu ui six item>
    {#each ["Red", "Orange", "Yellow", "Olive", "Green", "Teal"] as color, i}
        <Link _={color.toLowerCase()} item active={ex26===i} on:click={()=>ex26=i}>{color}</Link>
    {/each}
</Menu>
<Menu ui six item>
    {#each ["Blue", "Violet", "Purple", "Pink", "Brown", "Grey"] as color, j}
        <Link _={color.toLowerCase()} item active={ex26===(j+6)} on:click={()=>ex26=(j+6)}>{color}</Link>
    {/each}
</Menu>

{#each ["Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey"] as color, k}
    <Menu ui  _={color.toLowerCase()} three item>
        <Link active={ex27[k]===0} on:click={()=>ex27[k]=0} item>
            Home
        </Link>
        <Link active={ex27[k]===1} on:click={()=>ex27[k]=1} item>
            Messages
        </Link>
        <Link active={ex27[k]===2} on:click={()=>ex27[k]=2} item>
            Friends
        </Link>
    </Menu>
{/each}

<Menu ui six item inverted>
    {#each ["Red", "Orange", "Yellow", "Olive", "Green", "Teal"] as color, i}
        <Link _={color.toLowerCase()} item active={ex26===i} on:click={()=>ex26=i}>{color}</Link>
    {/each}
</Menu>
<Menu ui six item inverted>
    {#each ["Blue", "Violet", "Purple", "Pink", "Brown", "Grey"] as color, j}
        <Link _={color.toLowerCase()} item active={ex26===(j+6)} on:click={()=>ex26=(j+6)}>{color}</Link>
    {/each}
</Menu>

{#each ["Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey"] as color, k}
    <Menu ui  _={color.toLowerCase()} three item inverted>
        <Link active={ex27[k]===0} on:click={()=>ex27[k]=0} item>
            Home
        </Link>
        <Link active={ex27[k]===1} on:click={()=>ex27[k]=1} item>
            Messages
        </Link>
        <Link active={ex27[k]===2} on:click={()=>ex27[k]=2} item>
            Friends
        </Link>
    </Menu>
{/each}
    `,
    icon: `
<Menu ui icon>
    {#each ['gamepad', 'video camera', 'play'] as icon, i}
        <Link item active={ex28===i} on:click={()=>ex28=i}>
            <Icon _={icon}/>
        </Link>
    {/each}
</Menu>

<Menu ui icon vertical>
    {#each ['gamepad', 'video camera', 'play'] as icon, i}
        <Link item active={ex28===i} on:click={()=>ex28=i}>
            <Icon _={icon}/>
        </Link>
    {/each}
</Menu>
    `,
    labeled_icon: `
<Menu ui icon labeled>
    {#each [{i: 'gamepad', n: 'Games'}, {i: 'video camera', n: 'Channels'}, {i: 'play', n: 'Videos'}] as icon, i}
        <Link item active={ex29===i} on:click={()=>ex29=i}>
            <Icon _={icon.i}/>
            {icon.n}
        </Link>
    {/each}
</Menu>

<Menu ui icon vertical labeled>
    {#each [{i: 'gamepad', n: 'Games'}, {i: 'video camera', n: 'Channels'}, {i: 'play', n: 'Videos'}] as icon, i}
        <Link item active={ex29===i} on:click={()=>ex29=i}>
            <Icon _={icon.i}/>
            {icon.n}
        </Link>
    {/each}
</Menu>
    `,
    fluid: `
<Menu ui fluid vertical>
    <Link item active={ex30===0} on:click={()=>ex30=0}>Run</Link>
    <Link item active={ex30===1} on:click={()=>ex30=1}>Walk</Link>
    <Link item active={ex30===2} on:click={()=>ex30=2}>Bike</Link>
</Menu>
    `,
    compact: `
<Menu ui compact>
    {#each [{i: 'gamepad', n: 'Games'}, {i: 'video camera', n: 'Channels'}, {i: 'play', n: 'Videos'}] as icon, i}
        <Link item active={ex31===i} on:click={()=>ex31=i}>
            <Icon _={icon.i}/>
            {icon.n}
        </Link>
    {/each}
</Menu>

<Menu ui compact labeled vertical icon>
    {#each [{i: 'gamepad', n: 'Games'}, {i: 'video camera', n: 'Channels'}, {i: 'play', n: 'Videos'}] as icon, i}
        <Link item active={ex31===i} on:click={()=>ex31=i}>
            <Icon _={icon.i}/>
            {icon.n}
        </Link>
    {/each}
</Menu>
    `,
    evenly_divided: `
<Menu ui fluid three item>
    <Link item active={ex32===0} on:click={()=>ex32=0}>Buy</Link>
    <Link item active={ex32===1} on:click={()=>ex32=1}>Sell</Link>
    <Link item active={ex32===2} on:click={()=>ex32=2}>Rent</Link>
</Menu>
    `,
    attached: `
<Menu ui top attached tabular>
    <Link item active={ex33===0} on:click={()=>ex33=0}>
        Tab 1
    </Link>
    <Link item active={ex33===1} on:click={()=>ex33=1}>
        Tab 2
    </Link>
</Menu>
<Segment ui bottom attached>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</Segment>

<Menu ui top attached>
    <Link item active={ex34===0} on:click={()=>ex34=0}>
        Section 1
    </Link>
    <Link item active={ex34===1} on:click={()=>ex34=1}>
        Section 2
    </Link>
</Menu>
<Segment ui attached>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</Segment>
<Menu ui bottom attached>
    <Link item active={ex35===0} on:click={()=>ex35=0}>
        Section 1
    </Link>
    <Link item active={ex35===1} on:click={()=>ex35=1}>
        Section 2
    </Link>
</Menu>
    `,
    size: `
{#each ["mini", "tiny", "small", "large", "huge", "massive"] as size}
    <Menu ui _={size}>
        <Link item active={ex36===0} on:click={()=>ex36=0}>
        Home
        </Link>
        <Link item active={ex36===1} on:click={()=>ex36=1}>
            Messages
        </Link>
        <Menu right>
            <Dropdown ui item>
                Language <Icon dropdown/>
                <Menu>
                    <Link item active={ex36===2} on:click={()=>ex36=2}>English</Link>
                    <Link item active={ex36===3} on:click={()=>ex36=3}>Russian</Link>
                    <Link item active={ex36===4} on:click={()=>ex36=4}>Spanish</Link>
                </Menu>
            </Dropdown>
            <Item>
                <Button ui primary>Sign Up</Button>
            </Item>
        </Menu>
    </Menu>
{/each}

{#each ["mini", "tiny", "small", "large", "huge", "massive"] as size}
    <Menu ui vertical _={size}>
        <Link item teal={ex37===0} active={ex37===0} on:click={()=>ex37=0}>
            Inbox
            <Label ui teal left pointing>1</Label>
        </Link>
        <Link item teal={ex37===1} active={ex37===1} on:click={()=>ex37=1}>
            Spam
            <Label ui>51</Label>
        </Link>
        <Link item teal={ex37===2} active={ex37===2} on:click={()=>ex37=2}>
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
{/each}
    `,
    fitted: `
<Menu ui>
    <Item fitted>
        No padding whatsoever
    </Item>
    <Item horizontally fitted>
        No horizontal padding
    </Item>
    <Item vertically fitted>
        No vertical padding
    </Item>
</Menu>
    `,
    borderless: `
<Menu ui borderless>
    <Link item active={ex38===0} on:click={()=>ex38=0}>1</Link>
    <Link item active={ex38===1} on:click={()=>ex38=1}>2</Link>
    <Link item active={ex38===2} on:click={()=>ex38=2}>3</Link>
    <Link item active={ex38===3} on:click={()=>ex38=3}>4</Link>
    <Link item active={ex38===4} on:click={()=>ex38=4}>5</Link>
    <Link item active={ex38===5} on:click={()=>ex38=5}>6</Link>
</Menu>
    `,
    centered: `
<Menu ui centered>
    <Link bug icon item active={ex39===0} on:click={()=>ex39=0}>
        <Icon edit/>
    </Link>
    <Link bug icon item active={ex39===1} on:click={()=>ex39=1}>
        <Icon bug/>
    </Link>
    <Link github icon item active={ex39===2} on:click={()=>ex39=2}>
        <Icon alternate github/>
    </Link>
</Menu>

<Menu ui centered pagination>
    <Link active={ex40===0} on:click={()=>ex40=0} item>
        1
    </Link>
    <Link disabled item>
        ...
    </Link>
    <Link active={ex40===1} on:click={()=>ex40=1} item>
        10
    </Link>
    <Link active={ex40===2} on:click={()=>ex40=2} item>
        11
    </Link>
    <Link active={ex40===3} on:click={()=>ex40=3} item>
        12
    </Link>
</Menu>
    `,
    centered_fluid: `
<Menu ui centered fluid>
    <Link bug icon item active={ex41===0} on:click={()=>ex41=0}>
        <Icon edit/>
    </Link>
    <Link bug icon item active={ex41===1} on:click={()=>ex41=1}>
        <Icon bug/>
    </Link>
    <Link github icon item active={ex41===2} on:click={()=>ex41=2}>
        <Icon alternate github/>
    </Link>
</Menu>
    `,
    wrapping: `
<Menu ui inverted green wrapping>
    {#each ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"] as count, i}
        <Link item active={ex42===i} on:click={()=>ex42=i}>{count}</Link>
    {/each}
</Menu>
    `,
    centered_fluid_wrapping: `
<Menu ui inverted centered fluid wrapping blue>
    {#each ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"] as count, i}
        <Link item active={ex43===i} on:click={()=>ex43=i}>{count}</Link>
    {/each}
</Menu>
    `
}

export default code;