// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    feed : `
<Feed ui>
    <Event>
        <Label>
            <Image src="/images/elliot.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link user>
                    Elliot Fu
                </Link> added you as a friend
                <Date>
                    1 Hour Ago
                </Date>
            </Summary>
            <Meta>
                <Link like>
                    <Icon like/> 4 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/helen.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link>Helen Troy</Link> added <Link>2 new illustrations</Link>
                <Date>
                    4 days ago
                </Date>
            </Summary>
            <Images extra>
                <Link><Image src="/images/image.png"/></Link>
                <Link><Image src="/images/image.png"/></Link>
            </Images>
            <Meta>
                <Link like>
                    <Icon like/> 1 Like
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/jenny.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link user>
                    Jenny Hess
                </Link> added you as a friend
                <Date>
                    2 Days Ago
                </Date>
            </Summary>
            <Meta>
                <Link like>
                    <Icon like/> 8 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/joe.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link>Joe Henderson</Link> posted on his page
                <Date>
                    3 days ago
                </Date>
            </Summary>
            <Text extra>
                Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
            </Text>
            <Meta>
                <Link like>
                    <Icon like/> 5 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/justen.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link>Justen Kitsune</Link> added <Link>2 new photos</Link> of you
                <Date>
                    4 days ago
                </Date>
            </Summary>
            <Images extra>
                <Link><Image src="/images/image.png"/></Link>
                <Link><Image src="/images/image.png"/></Link>
            </Images>
            <Meta>
                <Link like>
                    <Icon like/> 41 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
</Feed>
    `,
    label : `
<Feed ui>
    <Event>
        <Label>
            <Image src="/images/elliot.jpg"/>
        </Label>
        <Content>
            You added Elliot Fu to the group <Link>Coworkers</Link>
        </Content>
    </Event>
</Feed>

<Feed ui>
    <Event>
        <Label>
            <Icon pencil/>
        </Label>
        <Content>
            <Summary>
                You posted on your friend <Link>Stevie Feliciano's</Link> wall.
                <Date>Today</Date>
            </Summary>
        </Content>
    </Event>
</Feed>
    `,
    date : `
<Feed ui>
    <Event>
        <Label>
            <Image src="/images/jenny.jpg"/>
        </Label>
        <Content>
            <Date>
                3 days ago
            </Date>
            <Summary>
                You added <Link>Jenny Hess</Link> to your <Link>coworker</Link> group.
            </Summary>
        </Content>
    </Event>
</Feed>

<Feed ui>
    <Event>
        <Label>
            <Image src="/images/jenny.jpg"/>
        </Label>
        <Content>
            <Summary>
                You added <Link>Jenny Hess</Link> to your <Link>coworker</Link> group.
                <Date>
                    3 days ago
                </Date>
            </Summary>
        </Content>
    </Event>
</Feed>
    `,
    additional_information : `
<Feed ui>
    <Event>
        <Label>
            <Image src="/images/helen.jpg"/>
        </Label>
        <Content>
            <Date>
                3 days ago
            </Date>
            <Summary>
                <Link>Helen Troy</Link> added 2 photos
            </Summary>
            <Images extra>
                <Link><Image src="/images/image.png"/></Link>
                <Link><Image src="/images/image.png"/></Link>
            </Images>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/laura.jpg"/>
        </Label>
        <Content>
            <Date>
                3 days ago
            </Date>
            <Summary>
                <Link>Laura Faucet</Link> created a post
            </Summary>
            <Text extra>
                Have you seen what's going on in Israel? Can you believe it.
            </Text>
        </Content>
    </Event>
</Feed>
    `,
    size : `
<Feed ui small>
    <Header ui h4>Followers Activity</Header>
    <Event>
        <Content>
            <Summary>
                <Link>Elliot Fu</Link> added <Link>Jenny Hess</Link> as a friend
            </Summary>
        </Content>
    </Event>
    <Event>
        <Content>
            <Summary>
                <Link>Stevie Feliciano</Link> added <Link>Elliot Fu</Link> as a friend
            </Summary>
        </Content>
    </Event>
    <Event>
        <Content>
            <Summary>
                <Link>Helen Troy</Link> added <Link>Christian Rocha</Link> as a friend
            </Summary>
        </Content>
    </Event>
    <Event>
        <Content>
            <Summary>
                <Link>Christian Rocha</Link> signed up for the  site.
            </Summary>
        </Content>
    </Event>
</Feed>

<Feed ui large>
    <Event>
        <Label>
            <Image src="/images/elliot.jpg"/>
        </Label>
        <Content>
            <Summary>
                <Link user>
                    Elliot Fu
                </Link> added you as a friend
                <Date>
                    1 Hour Ago
                </Date>
            </Summary>
            <Meta>
                <Link like>
                    <Icon like /> 4 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Icon pencil />
        </Label>
        <Content>
            <Summary>
                You submitted a new post to the page
                <Date>
                    3 days ago
                </Date>
            </Summary>
            <Text extra>
                I'm having a BBQ this weekend. Come by around 4pm if you can.
            </Text>
            <Meta>
                <Link like>
                    <Icon like /> 11 Likes
                </Link>
            </Meta>
        </Content>
    </Event>
    <Event>
        <Label>
            <Image src="/images/helen.jpg"/>
        </Label>
        <Content>
            <Date>
                4 days ago
            </Date>
            <Summary>
                <Link>Helen Troy</Link> added <Link>2 new illustrations</Link>
            </Summary>
            <Images extra>
                <Link><Image src="/images/image.png"/></Link>
                <Link><Image src="/images/image.png"/></Link>
            </Images>
            <Meta>
                <Link like>
                    <Icon like /> 1 Like
                </Link>
            </Meta>
        </Content>
    </Event>
</Feed>
    `,
    inverted : `
<Segment ui inverted>
    <Feed ui inverted>
        <Event>
            <Label>
                <Image src="/images/elliot.jpg"/>
            </Label>
            <Content>
                <Summary>
                    <Link user>
                        Elliot Fu
                    </Link> added you as a friend
                    <Date>
                        1 Hour Ago
                    </Date>
                </Summary>
                <Meta>
                    <Link like>
                        <Icon like/> 4 Likes
                    </Link>
                </Meta>
            </Content>
        </Event>
        <Event>
            <Label>
                <Image src="/images/helen.jpg"/>
            </Label>
            <Content>
                <Summary>
                    <Link>Helen Troy</Link> added <Link>2 new illustrations</Link>
                    <Date>
                        4 days ago
                    </Date>
                </Summary>
                <Images extra>
                    <Link><Image src="/images/image.png"/></Link>
                    <Link><Image src="/images/image.png"/></Link>
                </Images>
                <Meta>
                    <Link like>
                        <Icon like/> 1 Like
                    </Link>
                </Meta>
            </Content>
        </Event>
        <Event>
            <Label>
                <Image src="/images/jenny.jpg"/>
            </Label>
            <Content>
                <Summary>
                    <Link user>
                        Jenny Hess
                    </Link> added you as a friend
                    <Date>
                        2 Days Ago
                    </Date>
                </Summary>
                <Meta>
                    <Link like>
                        <Icon like/> 8 Likes
                    </Link>
                </Meta>
            </Content>
        </Event>
        <Event>
            <Label>
                <Image src="/images/joe.jpg"/>
            </Label>
            <Content>
                <Summary>
                    <Link>Joe Henderson</Link> posted on his page
                    <Date>
                        3 days ago
                    </Date>
                </Summary>
                <Text extra>
                    Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
                </Text>
                <Meta>
                    <Link like>
                        <Icon like/> 5 Likes
                    </Link>
                </Meta>
            </Content>
        </Event>
        <Event>
            <Label>
                <Image src="/images/justen.jpg"/>
            </Label>
            <Content>
                <Summary>
                    <Link>Justen Kitsune</Link> added <Link>2 new photos</Link> of you
                    <Date>
                        4 days ago
                    </Date>
                </Summary>
                <Images extra>
                    <Link><Image src="/images/image.png"/></Link>
                    <Link><Image src="/images/image.png"/></Link>
                </Images>
                <Meta>
                    <Link like>
                        <Icon like/> 41 Likes
                    </Link>
                </Meta>
            </Content>
        </Event>
    </Feed>
</Segment>
    `
}

export default code;