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
    `
}

export default code;