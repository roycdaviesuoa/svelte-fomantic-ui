// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    card : `
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
    `,
    cards : `
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
    `,
    content_block : `
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
    `,
    image : `
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
    `,
    header : `
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
    `,
    metadata : `
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
    `,
    link : `
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
    `,
    buttons : `
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
    `,
    approval : `
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
    `,
    description : `
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
    `,
    extra_content : `
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
    `,
    disabled : `
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
    `,
    loading : `
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
    `,
    fluid : `
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
    `,
    centered : `
<Card ui centered>
    <Image>
        <Image src="/images/elyse.png"/>
    </Image>
    <Content>
        <Link header>Elyse</Link>
    </Content>
</Card>
    `,
    horizontal : `
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
    `,
    raised_card : `
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
    `,
    link_card : `
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
    `,
    floated_content : `
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
    `,
    text_alignment : `
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
    `,
    inverted : `
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
    `,
    colored : `
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
    `,
    basic : `
<Cards ui four basic>
    {#each ["Primary", "Secondary", "Red", "Orange", "Yellow", "Olive", "Green", "Teal", "Blue", "Violet", "Purple", "Pink", "Brown", "Grey", "Black"] as color}
        <Link _={color.toLowerCase() + " card"}>
            <Image>
                <Image ui wireframe src="/images/white-image.png" _={color.toLowerCase()}/>
            </Image>
        </Link>
    {/each}
</Cards>
    `,
    column_count: `
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
    `,
    stackable : `
<Cards ui three stackable>
    {#each ["elliot", "helen", "jenny", "veronika", "stevie", "steve"] as name}
        <Card>
            <Image>
                <Image src={"/images/" + name + ".jpg"}/>
            </Image>
        </Card>
    {/each}
</Cards>
    `,
    doubling : `
<Cards ui six doubling>
    {#each ["elliot", "helen", "jenny", "veronika", "stevie", "steve"] as name}
        <Card>
            <Image>
                <Image src={"/images/" + name + ".jpg"}/>
            </Image>
        </Card>
    {/each}
</Cards>
    `
}

export default code;