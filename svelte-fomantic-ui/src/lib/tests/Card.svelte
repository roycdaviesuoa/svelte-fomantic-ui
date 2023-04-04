<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Card, Cards, Feed, Event, Summary, Dimmer, Center, Image, Link, Content, Description, Header, Icon, Meta, Date, Input, Floated, Buttons, Button } from "../svelte-fomantic-ui.svelte";
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
                <Image blurring dimmable>
                    <Dimmer ui>
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
                <Image blurring dimmable>
                    <Dimmer ui inverted>
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