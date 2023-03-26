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
    `
}

export default code;