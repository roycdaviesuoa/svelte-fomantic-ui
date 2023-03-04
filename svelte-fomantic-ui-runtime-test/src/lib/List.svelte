<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { List, Item, Icon, Content, Header, Description, Link, Image, Segment, Button } from "svelte-fomantic-ui";
    import "./prism.css";
    import Prism from 'svelte-prism';

    import "./examplestyles.css";

    let sizes = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];

    function doSelect(e) {
        console.log(e);
    }
</script>

<div class="example-document">
    <h3 class="document-header">List examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/Itemst.html">here</a></div>
  
    <div class="example">
        <h4 class="example-header">Basic Lists</h4>

        <List ui>
            <Item>Apples</Item>
            <Item>Pears</Item>
            <Item>Oranges</Item>
        </List>
        <br/><br/>
        <List ui>
            <Item>
                <Icon users/>
                <Content>
                    Fomantic UI
                </Content>
            </Item>
            <Item>
                <Icon marker/>
                <Content>
                    Worldwide
                </Content>
            </Item>
            <Item>
                <Icon mail/>
                <Content>
                    <Link href="mailto:contact@fomantic-ui.com">contact@fomantic-ui.com</Link>
                </Content>
            </Item>
            <Item>
                <Icon Itemnkify/>
                <Content>
                    <Link href="https://fomantic-ui.com">fomantic-ui.com</Link>
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui relaxed divided>
            <Item>
                <Icon large github middle aItemgned/>
                <Content>
                    <Link header>fomantic/Fomantic-UI</Link>
                    <Description>Updated 10 mins ago</Description>
                </Content>
            </Item>
            <Item>
                <Icon large github middle aItemgned/>
                <Content>
                    <Link header>fomantic/Fomantic-UI-Docs</Link>
                    <Description>Updated 22 mins ago</Description>
                </Content>
            </Item>
            <Item>
                <Icon large github middle aItemgned/>
                <Content>
                    <Link header>fomantic/Fomantic-UI-LESS</Link>
                    <Description>Updated 34 mins ago</Description>
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui>
            <Item>
                <Icon folder/>
                <Content>
                    <Header>src</Header>
                    <Description>Source files for project</Description>
                    <List>
                        <Item>
                            <Icon folder/>
                            <Content>
                                <Header>site</Header>
                                <Description>Your site's theme</Description>
                            </Content>
                        </Item>
                        <Item>
                            <Icon folder/>
                            <Content>
                                <Header>themes</Header>
                                <Description>Packaged theme files</Description>
                                <List>
                                    <Item>
                                        <Icon folder/>
                                        <Content>
                                            <Header>default</Header>
                                            <Description>Default packaged theme</Description>
                                        </Content>
                                    </Item>
                                    <Item>
                                        <Icon folder/>
                                        <Content>
                                            <Header>my_theme</Header>
                                            <Description>Packaged themes are also available in this folder</Description>
                                        </Content>
                                    </Item>
                                </List>
                            </Content>
                        </Item>
                        <Item>
                            <Icon file/>
                            <Content>
                                <Header>theme.config</Header>
                                <Description>Config file for setting packaged themes</Description>
                            </Content>
                        </Item>
                    </List>
                </Content>
            </Item>
            <Item>
                <Icon folder/>
                <Content>
                    <Header>dist</Header>
                    <Description>Compiled CSS and JS files</Description>
                    <List>
                        <Item>
                            <Icon folder/>
                            <Content>
                                <Header>components</Header>
                                <Description>Individual component CSS and JS</Description>
                            </Content>
                        </Item>
                    </List>
                </Content>
            </Item>
            <Item>
                <Icon file/>
                <Content>
                    <Header>semantic.json</Header>
                    <Description>Contains build settings for gulp</Description>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Item>Apples</Item>
    <Item>Pears</Item>
    <Item>Oranges</Item>
</List>

<List ui>
    <Item>
        <Icon users/>
        <Content>
            Fomantic UI
        </Content>
    </Item>
    <Item>
        <Icon marker/>
        <Content>
            Worldwide
        </Content>
    </Item>
    <Item>
        <Icon mail/>
        <Content>
            <Link href="mailto:contact@fomantic-ui.com">contact@fomantic-ui.com</Link>
        </Content>
    </Item>
    <Item>
        <Icon Itemnkify/>
        <Content>
            <Link href="https://fomantic-ui.com">fomantic-ui.com</Link>
        </Content>
    </Item>
</List>

<List ui relaxed divided>
    <Item>
        <Icon large github middle aItemgned/>
        <Content>
            <Link header>fomantic/Fomantic-UI</Link>
            <Description>Updated 10 mins ago</Description>
        </Content>
    </Item>
    <Item>
        <Icon large github middle aItemgned/>
        <Content>
            <Link header>fomantic/Fomantic-UI-Docs</Link>
            <Description>Updated 22 mins ago</Description>
        </Content>
    </Item>
    <Item>
        <Icon large github middle aItemgned/>
        <Content>
            <Link header>fomantic/Fomantic-UI-LESS</Link>
            <Description>Updated 34 mins ago</Description>
        </Content>
    </Item>
</List>

<List ui>
    <Item>
        <Icon folder/>
        <Content>
            <Header>src</Header>
            <Description>Source files for project</Description>
            <List>
                <Item>
                    <Icon folder/>
                    <Content>
                        <Header>site</Header>
                        <Description>Your site's theme</Description>
                    </Content>
                </Item>
                <Item>
                    <Icon folder/>
                    <Content>
                        <Header>themes</Header>
                        <Description>Packaged theme files</Description>
                        <List>
                            <Item>
                                <Icon folder/>
                                <Content>
                                    <Header>default</Header>
                                    <Description>Default packaged theme</Description>
                                </Content>
                            </Item>
                            <Item>
                                <Icon folder/>
                                <Content>
                                    <Header>my_theme</Header>
                                    <Description>Packaged themes are also available in this folder</Description>
                                </Content>
                            </Item>
                        </List>
                    </Content>
                </Item>
                <Item>
                    <Icon file/>
                    <Content>
                        <Header>theme.config</Header>
                        <Description>Config file for setting packaged themes</Description>
                    </Content>
                </Item>
            </List>
        </Content>
    </Item>
    <Item>
        <Icon folder/>
        <Content>
            <Header>dist</Header>
            <Description>Compiled CSS and JS files</Description>
            <List>
                <Item>
                    <Icon folder/>
                    <Content>
                        <Header>components</Header>
                        <Description>Individual component CSS and JS</Description>
                    </Content>
                </Item>
            </List>
        </Content>
    </Item>
    <Item>
        <Icon file/>
        <Content>
            <Header>semantic.json</Header>
            <Description>Contains build settings for gulp</Description>
        </Content>
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Bulleted</h4>

        <List ui bulleted>
            <Item>Gaining Access</Item>
            <Item>Inviting Friends</Item>
            <Item>
                <Item>Benefits</Item>
                <List>
                    <Link item href="#">Link to somewhere</Link>
                    <Item>Rebates</Item>
                    <Item>Discounts</Item>
                </List>
            </Item>
            <Item>Warranty</Item>
        </List>
        <br/><br/>
        <List ui horizontal bulleted>
            <Link item>
                About Us
            </Link>
            <Link item>
                Sitemap
            </Link>
            <Link item>
                Contact
            </Link>
        </List>

        <Prism language="svelte" source={`
<List ui bulleted>
    <Item>Gaining Access</Item>
    <Item>Inviting Friends</Item>
    <Item>
        <Item>Benefits</Item>
        <List>
            <Link item href="#">Link to somewhere</Link>
            <Item>Rebates</Item>
            <Item>Discounts</Item>
        </List>
    </Item>
    <Item>Warranty</Item>
</List>

<List ui horizontal bulleted>
    <Link item>
        About Us
    </Link>
    <Link item>
        Sitemap
    </Link>
    <Link item>
        Contact
    </Link>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Ordered</h4>

        <List ui ordered>
            <Link item>Getting Started</Link>
            <Link item>Introduction</Link>
            <Link item>
                <Link>Languages</Link>
                <List ordered>
                    <Link item>HTML</Link>
                    <Link item>Javascript</Link>
                    <Link item>CSS</Link>
                </List>
            </Link>
            <Link item>Review</Link>
        </List>

        For Lists using `&#x3c;ol&#x3e;`, `&#x3c;ul&#x3e;` and `&#x3c;li&#x3e;`, use those tags instead of `&#x3c;List&#x3e;` and `&#x3c;Item&#x3e;` as per the examples on the Fomantic UI website.

        <Prism language="svelte" source={`
<List ui ordered>
    <Link item>Getting Started</Link>
    <Link item>Introduction</Link>
    <Link item>
        <Link>Languages</Link>
        <List>
            <Link item>HTML</Link>
            <Link item>Javascript</Link>
            <Link item>CSS</Link>
        </List>
    </Link>
    <Link item>Review</Link>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Link</h4>

        <List ui link>
            <Item active>Home</Item>
            <Link item>About</Link>
            <Link item>Jobs</Link>
            <Link item>Team</Link>
        </List>

        <Prism language="svelte" source={`
<List ui link>
    <Item active>Home</Item>
    <Link item>About</Link>
    <Link item>Jobs</Link>
    <Link item>Team</Link>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Content Item</h4>

        <List ui>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Item>1</Item>
    <Item>2</Item>
    <Item>3</Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Title</h4>

        <List ui>
            <Link item>
                <Icon help/>
                <Content>
                    <Header>Floated Icon</Header>
                    <Description>This text will always have a left margin to make sure it sits alongside your icon</Description>
                </Content>
            </Link>
            <Item>
                <Icon right triangle/>
                <Content>
                    <Header>Icon Alignment</Header>
                    <Description>Floated icons are by default top aligned. To have an icon top aligned try this example.</Description>
                </Content>
            </Item>
            <Item>
                <Icon help/>
                Inline Text
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Link item>
        <Icon help/>
        <Content>
            <Header>Floated Icon</Header>
            <Description>This text will always have a left margin to make sure it sits alongside your icon</Description>
        </Content>
    </Link>
    <Item>
        <Icon right triangle/>
        <Content>
            <Header>Icon Alignment</Header>
            <Description>Floated icons are by default top aligned. To have an icon top aligned try this example.</Description>
        </Content>
    </Item>
    <Item>
        <Icon help/>
        Inline Text
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Image</h4>

        <List ui>
            <Item>
                <Image ui avatar src="/images/rachel.png"/>
                <Content>
                    <Link header>Rachel</Link>
                    <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/lindsay.png"/>
                <Content>
                    <Link header>Lindsay</Link>
                    <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/matthew.png"/>
                <Content>
                    <Link header>Matthew</Link>
                    <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/jenny.jpg"/>
                <Content>
                    <Link header>Jenny Hess</Link>
                    <Description>Last seen watching <Link><b>Twin Peaks</b></Link> 3 days ago.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/veronika.jpg"/>
                <Content>
                    <Link header>Veronika Ossi</Link>
                    <Description>Has not watched anything recently</Description>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Item>
        <Image ui avatar src="/images/rachel.png"/>
        <Content>
            <Link header>Rachel</Link>
            <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/lindsay.png"/>
        <Content>
            <Link header>Lindsay</Link>
            <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/matthew.png"/>
        <Content>
            <Link header>Matthew</Link>
            <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/jenny.jpg"/>
        <Content>
            <Link header>Jenny Hess</Link>
            <Description>Last seen watching <Link><b>Twin Peaks</b></Link> 3 days ago.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/veronika.jpg"/>
        <Content>
            <Link header>Veronika Ossi</Link>
            <Description>Has not watched anything recently</Description>
        </Content>
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Link</h4>

        <List ui>
            <Link item>What is a FAQ?</Link>
            <Link item>Who is our user?</Link>
            <Link item>Where is our office located?</Link>
        </List>
        <br/><br/>
        <List ui>
            <Item>
                <Link header>Header</Link>
                <Description>
                    Click a link in our <Link>description</Link>.
                </Description>
            </Item>
            <Item>
                <Link header>Learn More</Link>
                <Description>
                    Learn more about this site on <Link>our FAQ page</Link>.
                </Description>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Link item>What is a FAQ?</Link>
    <Link item>Who is our user?</Link>
    <Link item>Where is our office located?</Link>
</List>

<List ui>
    <Item>
        <Link header>Header</Link>
        <Description>
            Click a link in our <Link>description</Link>.
        </Description>
    </Item>
    <Item>
        <Link header>Learn More</Link>
        <Description>
            Learn more about this site on <Link>our FAQ page</Link>.
        </Description>
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Header</h4>

        <List ui>
            <Item>
              <Header>New York City</Header>
              A lovely city
            </Item>
            <Item>
              <Header>Chicago</Header>
              Also quite a lovely city
            </Item>
            <Item>
              <Header>Los Angeles</Header>
              Sometimes can be a lovely city
            </Item>
            <Item>
              <Header>San Francisco</Header>
              What a lovely city
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Item>
        <Header>New York City</Header>
        A lovely city
    </Item>
    <Item>
        <Header>Chicago</Header>
        Also quite a lovely city
    </Item>
    <Item>
        <Header>Los Angeles</Header>
        Sometimes can be a lovely city
    </Item>
    <Item>
        <Header>San Francisco</Header>
        What a lovely city
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Description</h4>

        <List ui>
            <Item>
                <Icon map marker/>
                <Content>
                    <Link header>Krolewskie Jadlo</Link>
                    <Description>An excellent polish restaurant, quick delivery and hearty, filling meals.</Description>
                </Content>
            </Item>
            <Item>
                <Icon map marker/>
                <Content>
                    <Link header>Xian Famous Foods</Link>
                    <Description>A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</Description>
                </Content>
            </Item>
            <Item>
                <Icon map marker/>
                <Content>
                    <Link header>Sapporo Haru</Link>
                    <Description>Greenpoint's best choice for quick and delicious sushi.</Description>
                </Content>
            </Item>
            <Item>
                <Icon map marker/>
                <Content>
                    <Link header>Enid's</Link>
                    <Description>At night a bar, during the day a delicious brunch spot.</Description>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui>
    <Item>
        <Icon map marker/>
        <Content>
            <Link header>Krolewskie Jadlo</Link>
            <Description>An excellent polish restaurant, quick delivery and hearty, filling meals.</Description>
        </Content>
    </Item>
    <Item>
        <Icon map marker/>
        <Content>
            <Link header>Xian Famous Foods</Link>
            <Description>A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</Description>
        </Content>
    </Item>
    <Item>
        <Icon map marker/>
        <Content>
            <Link header>Sapporo Haru</Link>
            <Description>Greenpoint's best choice for quick and delicious sushi.</Description>
        </Content>
    </Item>
    <Item>
        <Icon map marker/>
        <Content>
            <Link header>Enid's</Link>
            <Description>At night a bar, during the day a delicious brunch spot.</Description>
        </Content>
    </Item>
</List>
        `}/>
    </div>
      
    <div class="example">
        <h4 class="example-header">Horizontal</h4>

        <List ui horizontal>
            <Item>
                <Image ui avatar src="/images/tom.jpg"/>
                <Content>
                    <Header>Tom</Header>
                    Top Contributor
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/christian.jpg"/>
                <Content>
                    <Header>Christian Rocha</Header>
                    Admin
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/matt.jpg"/>
                <Content>
                    <Header>Matt</Header>
                    Top Rated User
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui ordered horizontal>
            <Item>
                <Image ui avatar src="/images/tom.jpg"/>
                <Content>
                    <Header>Steve Jobes</Header>
                    50 Points
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Header>Stevie Feliciano</Header>
                    44 Points
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/jenny.jpg"/>
                <Content>
                    <Header>Jenny Hess</Header>
                    11 Points
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui horizontal bulleted link>
            <Link item>
              Terms and Conditions
            </Link>
            <Link item>
              Privacy Policy
            </Link>
            <Link item>
              Contact Us
            </Link>
        </List>

        <Prism language="svelte" source={`
<List ui horizontal>
    <Item>
        <Image ui avatar src="/images/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top Contributor
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/christian.jpg"/>
        <Content>
            <Header>Christian Rocha</Header>
            Admin
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/matt.jpg"/>
        <Content>
            <Header>Matt</Header>
            Top Rated User
        </Content>
    </Item>
</List>

<List ui ordered horizontal>
    <Item>
        <Image ui avatar src="/images/tom.jpg"/>
        <Content>
            <Header>Steve Jobes</Header>
            50 Points
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Header>Stevie Feliciano</Header>
            44 Points
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/jenny.jpg"/>
        <Content>
            <Header>Jenny Hess</Header>
            11 Points
        </Content>
    </Item>
</List>

<List ui horizontal bulleted link>
    <Link item>
        Terms and Conditions
    </Link>
    <Link item>
        Privacy Policy
    </Link>
    <Link item>
        Contact Us
    </Link>
</List>
        `}/>
    </div>
          
    <div class="example">
        <h4 class="example-header">Inverted</h4>

        <Segment ui inverted>
            <List ui inverted relaxed divided>
                <Item>
                    <Content>
                        <Header>Snickerdoodle</Header>
                        An excellent companion
                    </Content>
                </Item>
                <Item>
                    <Content>
                        <Header>Poodle</Header>
                        A poodle, its pretty basic
                    </Content>
                </Item>
                <Item>
                    <Content>
                        <Header>Paulo</Header>
                        He's also a dog
                    </Content>
                </Item>
            </List>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui inverted>
    <List ui inverted relaxed divided>
        <List>
            <Content>
                <Header>Snickerdoodle</Header>
                An excellent companion
            </Content>
        </List>
        <List>
            <Content>
                <Header>Poodle</Header>
                A poodle, its pretty basic
            </Content>
        </List>
        <List>
            <Content>
                <Header>Paulo</Header>
                He's also a dog
            </Content>
        </List>
    </List>
</Segment>
        `}/>
    </div>
          
    <div class="example">
        <h4 class="example-header">Selection</h4>

        <List ui middle aligned selection on:click={doSelect}>
            <Item id="helen">
                <Image ui avatar src="/images/helen.jpg"/>
                <Content>
                    <Header>Helen</Header>
                </Content>
            </Item>
            <Item id="christian">
                <Image ui avatar src="/images/christian.jpg"/>
                <Content>
                    <Header>Christian</Header>
                </Content>
            </Item>
            <Item id="daniel">
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Header>Daniel</Header>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui middle aligned selection>
    <Item>
        <Image ui avatar src="/images/helen.jpg"/>
        <Content>
            <Header>Helen</Header>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/christian.jpg"/>
        <Content>
            <Header>Christian</Header>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Header>Daniel</Header>
        </Content>
    </Item>
</List>
        `}/>
    </div>
          
    <div class="example">
        <h4 class="example-header">Animated</h4>

        <List ui middle aligned animated>
            <Item>
                <Image ui avatar src="/images/helen.jpg"/>
                <Content>
                    <Header>Helen</Header>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/christian.jpg"/>
                <Content>
                    <Header>Christian</Header>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Header>Daniel</Header>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui middle aligned animated>
    <Item>
        <Image ui avatar src="/images/helen.jpg"/>
        <Content>
            <Header>Helen</Header>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/christian.jpg"/>
        <Content>
            <Header>Christian</Header>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Header>Daniel</Header>
        </Content>
    </Item>
</List>
        `}/>
    </div>
          
    <div class="example">
        <h4 class="example-header">Relaxed</h4>

        <List ui relaxed>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Link header>Daniel Louise</Link>
                    <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Link header>Stevie Feliciano</Link>
                    <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/elliot.jpg"/>
                <Content>
                    <Link header>Elliot Fu</Link>
                    <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui relaxed horizontal>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Link header>Daniel Louise</Link>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Link header>Stevie Feliciano</Link>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/elliot.jpg"/>
                <Content>
                    <Link header>Elliot Fu</Link>
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui very relaxed>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Link header>Daniel Louise</Link>
                    <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Link header>Stevie Feliciano</Link>
                    <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/elliot.jpg"/>
                <Content>
                    <Link header>Elliot Fu</Link>
                    <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui very relaxed horizontal>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Link header>Daniel Louise</Link>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Link header>Stevie Feliciano</Link>
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/elliot.jpg"/>
                <Content>
                    <Link header>Elliot Fu</Link>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui relaxed>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Link header>Daniel Louise</Link>
            <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Link header>Stevie Feliciano</Link>
            <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/elliot.jpg"/>
        <Content>
            <Link header>Elliot Fu</Link>
            <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
        </Content>
    </Item>
</List>

<List ui relaxed horizontal>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Link header>Daniel Louise</Link>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Link header>Stevie Feliciano</Link>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/elliot.jpg"/>
        <Content>
            <Link header>Elliot Fu</Link>
        </Content>
    </Item>
</List>

<List ui very relaxed>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Link header>Daniel Louise</Link>
            <Description>Last seen watching <Link><b>Arrested Development</b></Link> just now.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Link header>Stevie Feliciano</Link>
            <Description>Last seen watching <Link><b>Bob's Burgers</b></Link> 10 hours ago.</Description>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/elliot.jpg"/>
        <Content>
            <Link header>Elliot Fu</Link>
            <Description>Last seen watching <Link><b>The Godfather Part 2</b></Link> yesterday.</Description>
        </Content>
    </Item>
</List>

<List ui very relaxed horizontal>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Link header>Daniel Louise</Link>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Link header>Stevie Feliciano</Link>
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/elliot.jpg"/>
        <Content>
            <Link header>Elliot Fu</Link>
        </Content>
    </Item>
</List>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Divided</h4>

        <List ui middle aligned divided>
            <Item >
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Link header>Daniel Louise</Link>
                </Content>
            </Item>
            <Item >
                <Image ui avatar src="/images/stevie.jpg"/>
                <Content>
                    <Link header>Stevie Feliciano</Link>
                </Content>
            </Item>
            <Item >
                <Image ui avatar src="/images/elliot.jpg"/>
                <Content>
                    <Link header>Elliot Fu</Link>
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui middle aligned divided>
    <Item >
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Link header>Daniel Louise</Link>
        </Content>
    </Item>
    <Item >
        <Image ui avatar src="/images/stevie.jpg"/>
        <Content>
            <Link header>Stevie Feliciano</Link>
        </Content>
    </Item>
    <Item >
        <Image ui avatar src="/images/elliot.jpg"/>
        <Content>
            <Link header>Elliot Fu</Link>
        </Content>
    </Item>
</List>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Celled</h4>

        <List ui celled>
            <Item>
                <Image ui avatar src="/images/helen.jpg"/>
                <Content>
                    <Header>Snickerdoodle</Header>
                    An excellent companion
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Header>Poodle</Header>
                    A poodle, its pretty basic
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/daniel.jpg"/>
                <Content>
                    <Header>Paulo</Header>
                    He's also a dog
                </Content>
            </Item>
        </List>
        <br/><br/>
        <List ui celled ordered>
            <Item>Cats</Item>
            <Item>Horses</Item>
            <Item>Dogs
                <List>
                    <Item>Labradoodles</Item>
                    <Item>Shiba Inu</Item>
                    <Item>Mastiff</Item>
                </List>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui celled>
    <Item>
        <Image ui avatar src="/images/helen.jpg"/>
        <Content>
            <Header>Snickerdoodle</Header>
            An excellent companion
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Header>Poodle</Header>
            A poodle, its pretty basic
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/daniel.jpg"/>
        <Content>
            <Header>Paulo</Header>
            He's also a dog
        </Content>
    </Item>
</List>

<List ui celled ordered>
    <Item>Cats</Item>
    <Item>Horses</Item>
    <Item>Dogs
        <List>
            <Item>Labradoodles</Item>
            <Item>Shiba Inu</Item>
            <Item>Mastiff</Item>
        </List>
    </Item>
</List>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

        {#each sizes as size, i}
            {#if i>0}
                <br/><br/>
            {/if}
            <List ui _={size} horizontal divided>
                <Item>
                    <Image ui avatar src="/images/helen.jpg"/>
                    <Content>
                        <Header>Helen</Header>
                    </Content>
                </Item>
                <Item>
                    <Image ui avatar src="/images/christian.jpg"/>
                    <Content>
                        <Header>Christian</Header>
                    </Content>
                </Item>
                <Item>
                    <Image ui avatar src="/images/daniel.jpg"/>
                    <Content>
                        <Header>Daniel</Header>
                    </Content>
                </Item>
            </List>
        {/each}

        <Prism language="svelte" source={`
<script>
    let sizes = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"]; 
</script>
{#each sizes as size, i}
    {#if i>0}
        <br/><br/>
    {/if}
    <List ui _={size} horizontal divided>
        <Item>
            <Image ui avatar src="/images/helen.jpg"/>
            <Content>
                <Header>Helen</Header>
            </Content>
        </Item>
        <Item>
            <Image ui avatar src="/images/christian.jpg"/>
            <Content>
                <Header>Christian</Header>
            </Content>
        </Item>
        <Item>
            <Image ui avatar src="/images/daniel.jpg"/>
            <Content>
                <Header>Daniel</Header>
            </Content>
        </Item>
    </List>
{/each}
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Vertically Aligned</h4>

        <List ui horizontal>
            <Item>
                <Image ui avatar src="/images/square-image.png"/>
                <Content top aligned>
                    Top Aligned
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/square-image.png"/>
                <Content middle aligned>
                    Middle
                </Content>
            </Item>
            <Item>
                <Image ui avatar src="/images/square-image.png"/>
                <Content bottom aligned>
                    Bottom
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui horizontal>
    <Item>
        <Image ui avatar src="/images/square-image.png"/>
        <Content top aligned>
            Top Aligned
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/square-image.png"/>
        <Content middle aligned>
            Middle
        </Content>
    </Item>
    <Item>
        <Image ui avatar src="/images/square-image.png"/>
        <Content bottom aligned>
            Bottom
        </Content>
    </Item>
</List>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Floated</h4>

        <List ui middle aligned divided>
            <Item>
                <Content right floated>
                    <Button ui>Add</Button>
                </Content>
                <Image ui avatar src="/images/lena.png"/>
                <Content>
                    Lena
                </Content>
            </Item>
            <Item>
                <Content right floated>
                    <Button ui>Add</Button>
                </Content>
                <Image ui avatar src="/images/lindsay.png"/>
                <Content>
                    Lindsay
                </Content>
            </Item>
            <Item>
                <Content right floated>
                    <Button ui>Add</Button>
                </Content>
                <Image ui avatar src="/images/mark.png"/>
                <Content>
                    Mark
                </Content>
            </Item>
            <Item>
                <Content right floated>
                    <Button ui>Add</Button>
                </Content>
                <Image ui avatar src="/images/molly.png"/>
                <Content>
                    Molly
                </Content>
            </Item>
        </List>

        <Prism language="svelte" source={`
<List ui middle aligned divided>
    <Item>
        <Content right floated>
            <Button ui>Add</Button>
        </Content>
        <Image ui avatar src="/images/lena.png"/>
        <Content>
            Lena
        </Content>
    </Item>
    <Item>
        <Content right floated>
            <Button ui>Add</Button>
        </Content>
        <Image ui avatar src="/images/lindsay.png"/>
        <Content>
            Lindsay
        </Content>
    </Item>
    <Item>
        <Content right floated>
            <Button ui>Add</Button>
        </Content>
        <Image ui avatar src="/images/mark.png"/>
        <Content>
            Mark
        </Content>
    </Item>
    <Item>
        <Content right floated>
            <Button ui>Add</Button>
        </Content>
        <Image ui avatar src="/images/molly.png"/>
        <Content>
            Molly
        </Content>
    </Item>
</List>
        `}/>
    </div>
</div>