// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    items : `
<Items ui>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
</Items>
    `,
    image : `
<Items ui divided>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
    </Item>
</Items>
    `,
    content : `
<Items ui divided>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            Content A
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            Content B
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            Content C
        </Content>
    </Item>
</Items>
    `,
    header : `
<Items ui>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>12 Years a Slave</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>My Neighbor Totoro</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>Watchmen</Link>
        </Content>
    </Item>
</Items>
    `,
    metadata : `
<Items ui>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Header>Arrowhead Valley Camp</Header>
            <Meta>
                <span class="price">$1200</span>
                <span class="stay">1 Month</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Header>Buck's Homebrew Stayaway</Header>
            <Meta>
                <span class="price">$1000</span>
                <span class="stay">2 Weeks</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Header>Astrology Camp</Header>
            <Meta>
                <span class="price">$1600</span>
                <span class="stay">6 Weeks</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
</Items>
    `,
    link : `
<Message ui yellow>
    <Icon star/>
    To make the entire content of an item link, check out the link variation below
</Message>
<Items ui>
    <Item>
        <Link ui tiny image>
            <Image src="/images/stevie.jpg"/>
        </Link>
        <Content>
            <Link header>Stevie Feliciano</Link>
            <Description>
                <p>Stevie Feliciano is a <Link>library scientist</Link> living in New York City. She likes to spend her time reading, running, and writing.</p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/veronika.jpg"/>
        </Link>
        <Content>
            <Link header>Veronika Ossi</Link>
            <Description>
                <p>Veronika Ossi is a set designer living in New York who <Link>enjoys</Link> kittens, music, and partying.</p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/jenny.jpg"/>
        </Link>
        <Content>
            <Link header>Jenny Hess</Link>
            <Description>
                <p>Jenny is a student studying Media Management at <Link>the New School</Link>.</p>
            </Description>
        </Content>
    </Item>
</Items>
    `,
    description : `
<Items ui>
    <Item>
        <Link ui small image>
                <Image src="/images/image.png"/>
        </Link>
        <Content>
            <Link header>Cute Dog</Link>
            <Description>
                <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                <p>Many people also have their own barometers for what makes a cute dog.</p>
            </Description>
        </Content>
    </Item>
</Items>
    `,
    extra_content : `
<Items ui>
    <Item>
        <Content>
            <Link header>Cute Dog</Link>
            <Description>
                <p></p>
                <p></p>
            </Description>
            <Extra>
                <Icon green check/>
                121 Votes
            </Extra>
        </Content>
    </Item>
</Items>
    `,
    rating : `
<Items ui>
    <Item>
        <Link ui tiny image>
            <Image src="/images/jenny.jpg"/>
        </Link>
        <Content middle aligned>
            <Header>
                <Icon like/>
                Veronika Ossi
            </Header>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/justen.jpg"/>
        </Link>
        <Content middle aligned>
            <Header>
                <Icon favorite/>
                Justen Kitsune
            </Header>
        </Content>
    </Item>
</Items>
    `,
    stacking : `
<Items ui unstackable>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
</Items>
    `,
    divided : `
<Items ui divided>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>12 Years a Slave</Link>
            <Meta>
                <span class="cinema">Union Square 14</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Label ui>IMAX</Label>
                <Label ui><Icon globe/> Additional Languages</Label>
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>My Neighbor Totoro</Link>
            <Meta>
                <span class="cinema">IFC Cinema</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Button ui right floated primary>
                    Buy tickets
                    <Icon right chevron/>
                </Button>
                <Label ui>Limited</Label>
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Watchmen</Link>
            <Meta>
                <span class="cinema">IFC</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Button ui right floated primary>
                    Buy tickets
                    <Icon right chevron/>
                </Button>
            </Extra>
        </Content>
    </Item>
</Items>
    `,
    relaxed : `
<Items ui relaxed>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>12 Years a Slave</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>My Neighbor Totoro</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>Watchmen</Link>
        </Content>
    </Item>
</Items>

<Items ui very relaxed>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>12 Years a Slave</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>My Neighbor Totoro</Link>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/image.png"/>
        </Link>
        <Content middle aligned>
            <Link header>Watchmen</Link>
        </Content>
    </Item>
</Items>
    `,
    link_item : `
<Items ui link>
    <Item>
        <Link ui tiny image>
            <Image src="/images/stevie.jpg"/>
        </Link>
        <Content>
            <Header>Stevie Feliciano</Header>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/veronika.jpg"/>
        </Link>
        <Content>
            <Header>Veronika Ossi</Header>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
    <Item>
        <Link ui tiny image>
            <Image src="/images/jenny.jpg"/>
        </Link>
        <Content>
            <Header>Jenny Hess</Header>
            <Description>
                <p></p>
            </Description>
        </Content>
    </Item>
</Items>
    `,
    vertical_alignment : `
<Items ui>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Header>
                Top Aligned
            </Header>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content middle aligned>
            <Header>
                Middle Aligned
            </Header>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content bottom aligned>
            <Header>
                Bottom Aligned
            </Header>
        </Content>
    </Item>
</Items>
    `,
    floated_content : `
<Items ui>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content middle aligned>
            <Header>
                Content A
            </Header>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Button ui right floated>
                    Action
                </Button>
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content middle aligned>
            <Header>
                Content B
            </Header>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Button ui right floated>
                    Action
                </Button>
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image ui small>
            <Image src="/images/image.png"/>
        </Image>
        <Content middle aligned>
            <Header>
                Content C
            </Header>
            <Description>
                <p></p>
            </Description>
            <Extra>
                <Button ui right floated>
                    Action
                </Button>
            </Extra>
        </Content>
    </Item>
</Items>
    `,
    inverted : `
<Segment ui inverted>
    <Items ui inverted>
        <Item>
            <Image ui small>
                <Image src="/images/image.png"/>
            </Image>
            <Content>
                <Header>Arrowhead Valley Camp</Header>
                <Meta>
                    <span class="price">$1200</span>
                    <span class="stay">1 Month</span>
                </Meta>
                <Description>
                    <p></p>
                </Description>
            </Content>
        </Item>
        <Item>
            <Image ui small>
                <Image src="/images/image.png"/>
            </Image>
            <Content>
                <Header>Buck's Homebrew Stayaway</Header>
                <Meta>
                    <span class="price">$1000</span>
                    <span class="stay">2 Weeks</span>
                </Meta>
                <Description>
                    <p></p>
                </Description>
            </Content>
        </Item>
    </Items>
</Segment>
    `
}

export default code;