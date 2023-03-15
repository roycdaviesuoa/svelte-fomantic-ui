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
            <Results />
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
    `
}

export default code;