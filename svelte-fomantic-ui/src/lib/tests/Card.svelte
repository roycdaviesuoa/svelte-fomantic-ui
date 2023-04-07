<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Card, Cards, Feed, Event, Category, Rating, Text, Segment, Author, Summary, Dimmer, Center, Image, Link, Content, Description, Header, Icon, Meta, Date, Input, Floated, Buttons, Button, Placeholder, Line, Paragraph, Grid, Column } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Card';

    let cardsData = [
        {
            name: "Matt Giampietro",
            image: "/images/matthew.png",
            group: "Friends",
            description: "Matthew is an interior designer living in New York.",
            num_friends: 75,
            joined: 2013
        },
        {
            name: "Molly",
            image: "/images/molly.png",
            group: "Coworker",
            description: "Molly is a personal assistant living in Paris.",
            num_friends: 35,
            joined: 2011
        },
        {
            name: "Elyse",
            image: "/images/elyse.png",
            group: "Coworker",
            description: "Elyse is a copywriter working in New York.",
            num_friends: 151,
            joined: 2014
        }
    ]

    let cardsData2 = [
        {
            name: "Elliot Fu",
            image: "/images/elliot.png",
            group: "Friend",
            description: "Elliot Fu is a film-maker from New York. ",
            num_friends: 75,
            joined: 2013
        },
        {
            name: "Veronika Ossi",
            image: "/images/veronika.png",
            group: "Friend",
            description: "Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.",
            num_friends: 35,
            joined: 2011
        },
        {
            name: "Jenny Hess",
            image: "/images/jenny.png",
            group: "Friend",
            description: "Jenny is a student studying Media Management at the New School.",
            num_friends: 151,
            joined: 2014
        }
    ]
</script>


<Examples
    title = "Card examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/views/card.html'>here</a>"
    disclaimer = "More to come..."
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Card -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Card" code = {Code.card}>

        <Card ui>
            <Image>
                <Image src="/images/kristy.png"/>
            </Image>
            <Content>
                <Link header>Kristy</Link>
                <Meta>
                    <Date>Joined in 2013</Date>
                </Meta>
                <Description>
                    Kristy is an art director living in New York.
                </Description>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
        </Card>

        <Card ui>
            <Content>
                <Meta right floated>14h</Meta>
                <Image ui avatar src="/images/elliot.jpg"/> Elliot
            </Content>
            <Image>
                <Image src="/images/image.png"/>
            </Image>
            <Content>
                <Floated right>
                    <Icon heart outline like/>
                    17 likes
                </Floated>
                <Icon comment/>
                3 comments
            </Content>
            <Content extra>
                <Input ui large transparent left icon>
                    <Icon heart outline/>
                    <Input type="text" placeholder="Add Comment..."/>
                </Input>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Cards -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Cards" code = {Code.cards}>

        <Cards ui>
            <Card>
                <Content>
                    <Image right floated mini ui src="/images/elliot.jpg"/>
                    <Header>
                        Elliot Fu
                    </Header>
                    <Meta>
                        Friends of Veronika
                    </Meta>
                    <Description>
                        Elliot requested permission to view your contact details
                    </Description>
                </Content>
                <Content extra>
                    <Buttons ui two>
                        <Button ui basic green>Approve</Button>
                        <Button ui basic red>Decline</Button>
                    </Buttons>
                </Content>
            </Card>
            <Card>
                <Content>
                    <Image right floated mini ui src="/images/jenny.jpg"/>
                    <Header>
                        Jenny Hess
                    </Header>
                    <Meta>
                        New Member
                    </Meta>
                    <Description>
                        Jenny wants to add you to the group <b>best friends</b>
                    </Description>
                </Content>
                <Content extra>
                    <Buttons ui two>
                        <Button ui basic green>Approve</Button>
                        <Button ui basic red>Decline</Button>
                    </Buttons>
                </Content>
            </Card>
        </Cards>

        <Cards ui link>
            {#each cardsData as theCard}
                <Card>
                    <Image>
                        <Image src={theCard.image}/>
                    </Image>
                    <Content>
                        <Header>{theCard.name}</Header>
                        <Meta>
                            <Link>{theCard.group}</Link>
                        </Meta>
                        <Description>
                            {theCard.description}
                        </Description>
                    </Content>
                    <Content extra>
                        <Floated right>
                            Joined in {theCard.joined}
                        </Floated>
                        <span>
                            <Icon user/>
                            {theCard.num_friends} Friends
                        </span>
                    </Content>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content block -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content block" code = {Code.content_block}>

        <Card ui>
            <Content>
                <Header>Project Timeline</Header>
            </Content>
            <Content>
                <Header ui sub h4 >Activity</Header>
                <Feed ui small>
                    <Event>
                        <Content>
                            <Summary>
                                <Link>Elliot Fu</Link> added <Link>Jenny Hess</Link> to the project
                            </Summary>
                        </Content>
                    </Event>
                    <Event>
                        <Content>
                            <Summary>
                                <Link>Stevie Feliciano</Link> was added as an <Link>Administrator</Link>
                            </Summary>
                        </Content>
                    </Event>
                    <Event>
                        <Content>
                            <Summary>
                                <Link>Helen Troy</Link> added two pictures
                            </Summary>
                        </Content>
                    </Event>
                </Feed>
            </Content>
            <Content extra>
                <Button ui>Join Project</Button>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Image -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Image" code = {Code.image}>

        <Card ui>
            <Image ui slide masked reveal>
                <Image src="/images/jenny.jpg" visible content/>
                <Image src="/images/elliot.jpg" hidden content/>
            </Image>
            <Content>
                <Link header>Team Fu &amp; Hess</Link>
                <Meta>
                    <Date>Created in Sep 2014</Date>
                </Meta>
            </Content>
            <Content extra>
                <Link>
                    <Icon users/>
                    2 Members
                </Link>
            </Content>
        </Card>

        <Cards ui special>
            <Card>
                <Image ui blurring dimmable let:mouseover>
                    <Dimmer ui active={mouseover}>
                        <Content>
                            <Center>
                                <Button ui inverted>Add Friend</Button>
                            </Center>
                        </Content>
                    </Dimmer>
                    <Image src="/images/elliot.jpg"/>
                </Image>
                <Content>
                    <Link header>Team Fu</Link>
                    <Meta>
                        <Date>Created in Sep 2014</Date>
                    </Meta>
                </Content>
                <Content extra>
                    <Link>
                        <Icon users/>
                        2 Members
                    </Link>
                </Content>
            </Card>
            <Card>
                <Image ui blurring dimmable let:mouseover>
                    <Dimmer ui inverted active={mouseover}>
                        <Content>
                            <Center>
                                <Button ui primary>Add Friend</Button>
                            </Center>
                        </Content>
                    </Dimmer>
                    <Image src="/images/jenny.jpg"/>
                </Image>
                <Content>
                    <Link header>Team Hess</Link>
                    <Meta>
                        <Date>Created in Aug 2014</Date>
                    </Meta>
                </Content>
                <Content extra>
                    <Link>
                        <Icon users/>
                        2 Members
                    </Link>
                </Content>
            </Card>
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Header" code = {Code.header}>

        <Cards ui>
            {#each cardsData2 as theCard}
                <Card>
                    <Content>
                        <Header>{theCard.name}</Header>
                        <Meta>
                            <Link>{theCard.group}</Link>
                        </Meta>
                        <Description>
                            {theCard.description}
                        </Description>
                    </Content>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Metadata -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Metadata" code = {Code.metadata}>

        <Card ui>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>
                    <span>2 days ago</span>
                    <Link>Animals</Link>
                </Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Link -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Link" code = {Code.link}>

        <Card ui>
            <Link image href="#">
                <Image src="/images/steve.jpg"/>
            </Link>
            <Content>
                <Link header href="#">Steve Jobes</Link>
                <Meta>
                    <Link>Last Seen 2 days ago</Link>
                </Meta>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Buttons" code = {Code.buttons}>

        <Cards ui>
            {#each cardsData2 as theCard}
                <Card>
                    <Content>
                        <Header>{theCard.name}</Header>
                        <Meta>
                            <Link>{theCard.group}</Link>
                        </Meta>
                        <Description>
                            {theCard.description}
                        </Description>
                    </Content>
                    <Button ui>
                        <Icon add/>
                        Add Friend
                    </Button>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Approval -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Approval" code = {Code.approval}>

        <Card ui>
            <Content>
                <Icon right floated like/>
                <Icon right floated star/>
                <Header>Cute Dog</Header>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated left>
                    <Icon like/>
                    Like
                </Floated>
                <Floated right>
                    <Icon star/>
                    Favorite
                </Floated>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Description -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Description" code = {Code.description}>

        <Card ui>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>
                    <span>2 days ago</span>
                </Meta>
                <Description>
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                    <p>Many people also have their own barometers for what makes a cute dog.</p>
                </Description>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Extra content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Extra content" code = {Code.extra_content}>

        <Card ui>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>
                    <span>2 days ago</span>
                </Meta>
                <Description>
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                    <p>Many people also have their own barometers for what makes a cute dog.</p>
                </Description>
            </Content>
            <Content extra>
                <Icon check/>
                121 Votes
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Card ui disabled>
            <Content>
                <Link header>Kristy</Link>
                <Meta>
                    <Date>Joined in 2013</Date>
                </Meta>
                <Description>
                    Kristy is an art director living in New York.
                </Description>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Loading -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Loading" code = {Code.loading}>

        <Card ui loading>
            <Content>
                <Link header>Kristy</Link>
                <Meta>
                    <Date>Joined in 2013</Date>
                </Meta>
                <Description>
                    Kristy is an art director living in New York.
                </Description>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
        </Card>

        <Card ui brown double loading>
            <Content>
                <Link header>Kristy</Link>
                <Meta>
                    <Date>Joined in 2013</Date>
                </Meta>
                <Description>
                    Kristy is an art director living in New York.
                </Description>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
        </Card>

        <Card ui brown usual double loading>
            <Content>
                <Link header>Kristy</Link>
                <Meta>
                    <Date>Joined in 2013</Date>
                </Meta>
                <Description>
                    Kristy is an art director living in New York.
                </Description>
            </Content>
            <Content extra>
                <Link>
                    <Icon user/>
                    22 Friends
                </Link>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Grid ui three column>
            <Column>
                <Card ui fluid>
                    <Image>
                        <Image src="/images/daniel.jpg"/>
                    </Image>
                    <Content>
                        <Link header>Daniel Louise</Link>
                    </Content>
                </Card>
            </Column>
            <Column>
                <Card ui fluid>
                    <Image>
                        <Image src="/images/helen.jpg"/>
                    </Image>
                    <Content>
                        <Link header>Helen Troy</Link>
                    </Content>
                </Card>
            </Column>
            <Column>
                <Card ui fluid>
                    <Image>
                        <Image src="/images/elliot.jpg"/>
                    </Image>
                    <Content>
                        <Link header>Elliot Fu</Link>
                    </Content>
                </Card>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Centered -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Centered" code = {Code.centered}>

        <Card ui centered>
            <Image>
                <Image src="/images/elyse.png"/>
            </Image>
            <Content>
                <Link header>Elyse</Link>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Horizontal -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Horizontal" code = {Code.horizontal}>

        <Card ui horizontal>
            <Image>
                <Image src="/images/elyse.png"/>
            </Image>
            <Content>
                <Link header>Cute dog</Link>
                <Meta>
                    <Category>Cute dog</Category>
                </Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
        </Card>

        <Cards ui horizontal>
            <Card ui>
                <Image>
                    <Image src="/images/matthew.png"/>
                </Image>
                <Content>
                    <Link header>Matt Giampietro</Link>
                    <Meta>
                        <Category>Friends</Category>
                    </Meta>
                    <Description>
                        Matthew is an interior designer living in New York. 
                    </Description>
                </Content>
            </Card>
            <Card ui>
                <Image>
                    <Image src="/images/molly.png"/>
                </Image>
                <Content>
                    <Link header>Molly</Link>
                    <Meta>
                        <Category>Coworker</Category>
                    </Meta>
                    <Description>
                        Molly is a personal assistant living in Paris. 
                    </Description>
                </Content>
            </Card>
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Raised card -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Raised card" code = {Code.raised_card}>

        <Card ui raised>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>Animals</Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated right>
                  <Image ui avatar src="/images/matt.jpg"/> Matt
                </Floated>
            </Content>
        </Card>

        <Card ui raised link>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>Animals</Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated right>
                  <Image ui avatar src="/images/matt.jpg"/> Matt
                </Floated>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Link card -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Link card" code = {Code.link_card}>

        <Link card ui href="https://www.dog.com">
            <Content>
                <Header>Cute Dog</Header>
                <Meta>Animals</Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated right>
                  <Image ui avatar src="/images/matt.jpg"/> Matt
                </Floated>
            </Content>
        </Link>

        <Card ui link>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>Animals</Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated right>
                  <Image ui avatar src="/images/matt.jpg"/> Matt
                </Floated>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floated content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floated content" code = {Code.floated_content}>

        <Card ui>
            <Content>
                <Header>Cute Dog</Header>
                <Meta>Animals</Meta>
                <Description>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Description>
            </Content>
            <Content extra>
                <Floated right>
                  <Image ui avatar src="/images/matt.jpg"/> Matt
                </Floated>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text alignment -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text alignment" code = {Code.text_alignment}>

        <Card ui>
            <Content>
                <Header center aligned>Jenny Hess</Header>
                <Description center aligned>
                    <p>Jenny is a student studying Media Management at the New School</p>
                </Description>
            </Content>
            <Content extra>
                <Author center aligned>
                    <Image ui avatar src="/images/jenny.jpg"/> Jenny
                </Author>
            </Content>
        </Card>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Cards ui inverted>
                {#each cardsData as theCard}
                    <Card>
                        <Image>
                            <Image src={theCard.image}/>
                        </Image>
                        <Content>
                            <Header>{theCard.name}</Header>
                            <Meta>
                                <Link>{theCard.group}</Link>
                            </Meta>
                            <Description>
                                {theCard.description}
                            </Description>
                        </Content>
                        <Content extra>
                            <Floated right>
                                Joined in {theCard.joined}
                            </Floated>
                            <span>
                                <Icon user/>
                                {theCard.num_friends} Friends
                            </span>
                        </Content>
                    </Card>
                {/each}
            </Cards>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Cards ui four>
            {#each ["Primary", "Secondary", "Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey", "Black"] as color}
                <Link card _={color.toLowerCase()}>
                    <Image>
                        <Image src="/images/image.png"/>
                    </Image>
                    <Content>
                        <Text ui _={color.toLowerCase()}>{color}</Text>
                    </Content>
                </Link>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Basic -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Basic" code = {Code.basic}>

        <p>Something not right here - not getting the color...</p>

        <Cards ui four basic>
            {#each ["Primary", "Secondary", "Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey", "Black"] as color}
                <Link _={color.toLowerCase() + " card"}>
                    <Image>
                        <Image ui wireframe src="/images/white-image.png" _={color.toLowerCase()}/>
                    </Image>
                </Link>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Column count -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Column count" code = {Code.column_count}>

        <Cards ui four>
            {#each [4, 2, 3, 4, 3, 3, 4, 4] as stars}
                <Card>
                    <Image>
                        <Image src="/images/image.png"/>
                    </Image>
                    <Content extra>
                        Rating: 
                        <Rating ui yellow data-rating={stars}/>
                    </Content>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable" code = {Code.stackable}>

        <Cards ui three stackable>
            {#each ["elliot", "helen", "jenny", "veronika", "stevie", "steve"] as name}
                <Card>
                    <Image>
                        <Image src={"/images/" + name + ".jpg"}/>
                    </Image>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Doubling -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Doubling" code = {Code.doubling}>

        <Cards ui six doubling>
            {#each ["elliot", "helen", "jenny", "veronika", "stevie", "steve"] as name}
                <Card>
                    <Image>
                        <Image src={"/images/" + name + ".jpg"}/>
                    </Image>
                </Card>
            {/each}
        </Cards>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>