<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Label, Labels, Icon, Link, Image, Detail, Form, Field, Divider, Input, Grid, Column, Row, Segment, Placeholder, Paragraph, Line, Content, List, Menu} from "svelte-fomantic-ui";
    import "./prism.css";
    import Prism from 'svelte-prism';

    import "./examplestyles.css";
</script>

<div class="example-document">
    <h3 class="document-header">Label examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/label.html">here</a></div>

    <div class="example">
        <h4 class="example-header">A Label</h4>
        <Label ui>
            <Icon mail/> 23
        </Label>
        <Prism language="svelte" source={`
<Label ui>
    <Icon mail/> 23
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Image</h4>
        <Link ui image label>
            <Image src="/images/joe.jpg"/>
            Joe
        </Link>
        <Link ui image label>
            <Image src="/images/elliot.jpg"/>
            Elliot
        </Link>
        <Link ui image label>
            <Image src="/images/stevie.jpg"/>
            Stevie
        </Link>

        <br/><br/>

        <Link ui blue image label>
            <Image src="/images/veronika.jpg"/>
            Veronika
            <Detail>Friend</Detail>
        </Link>
        <Link ui teal image label>
            <Image src="/images/jenny.jpg"/>
            Jenny
            <Detail>Student</Detail>
        </Link>
        <Link ui yellow image label>
            <Image src="/images/christian.jpg"/>
            Christian
            <Detail>Co-worker</Detail>
        </Link>

        <br/><br/>

        <Label ui image>
            <Image src="/images/ade.jpg"/>
            Adrienne
            <Icon delete/>
        </Label>
        <Label ui image>
            <Image src="/images/zoe.jpg"/>
            Zoe
            <Icon delete/>
        </Label>
        <Label ui image>
            <Image src="/images/nan.jpg"/>
            Nan
            <Icon delete/>
        </Label>
        <Prism language="svelte" source={`
<Link ui image label>
    <Image src="/images/joe.jpg"/>
    Joe
</Link>
<Link ui image label>
    <Image src="/images/elliot.jpg"/>
    Elliot
</Link>
<Link ui image label>
    <Image src="/images/stevie.jpg"/>
    Stevie
</Link>

<Link ui blue image label>
    <Image src="/images/veronika.jpg"/>
    Veronika
    <Detail>Friend</Detail>
</Link>
<Link ui teal image label>
    <Image src="/images/jenny.jpg"/>
    Jenny
    <Detail>Student</Detail>
</Link>
<Link ui yellow image label>
    <Image src="/images/christian.jpg"/>
    Christian
    <Detail>Co-worker</Detail>
</Link>

<Label ui image>
    <Image src="/images/ade.jpg"/>
    Adrienne
    <Icon delete/>
</Label>
<Label ui image>
    <Image src="/images/zoe.jpg"/>
    Zoe
    <Icon delete/>
</Label>
<Label ui image>
    <Image src="/images/nan.jpg"/>
    Nan
    <Icon delete/>
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Pointing</h4>
        <Form ui fluid>
            <Field>
                <Input placeholder="First name"/>
                <Label ui pointing>
                    Please enter a value
                </Label>
            </Field>
            <Divider ui/>
            <Field placeholder="Last Name">
                <Label ui pointing below>
                    Please enter a value
                </Label>
                <Input />
            </Field>
            <Divider ui/>
            <Field inline>
                <Input placeholder="Username"/>
                <Label ui left pointing>
                    That name is taken!
                </Label>
            </Field>
            <Divider ui/>
            <Field inline>
                <Label ui right pointing>
                    Your password must be 6 characters or more
                </Label>
                <Input type="password"/>
            </Field>
        </Form>
        <br/><br/>
        <Form ui fluid>
            <Field>
                <Input placeholder="First name"/>
                <Label ui pointing red basic>
                    Please enter a value
                </Label>
            </Field>
            <Divider ui/>
            <Field placeholder="Last Name">
                <Label ui pointing below red basic>
                    Please enter a value
                </Label>
                <Input />
            </Field>
            <Divider ui/>
            <Field inline>
                <Input placeholder="Username"/>
                <Label ui left pointing red basic>
                    That name is taken!
                </Label>
            </Field>
            <Divider ui/>
            <Field inline>
                <Label ui right pointing red basic>
                    Your password must be 6 characters or more
                </Label>
                <Input type="password"/>
            </Field>
        </Form>
        <Prism language="svelte" source={`
<Form ui fluid>
    <Field>
        <Input placeholder="First name"/>
        <Label ui pointing>
            Please enter a value
        </Label>
    </Field>
    <Divider ui/>
    <Field placeholder="Last Name">
        <Label ui pointing below>
            Please enter a value
        </Label>
        <Input />
    </Field>
    <Divider ui/>
    <Field inline>
        <Input placeholder="Username"/>
        <Label ui left pointing>
            That name is taken!
        </Label>
    </Field>
    <Divider ui/>
    <Field inline>
        <Label ui right pointing>
            Your password must be 6 characters or more
        </Label>
        <Input type="password"/>
    </Field>
</Form>

<Form ui fluid>
    <Field>
        <Input placeholder="First name"/>
        <Label ui pointing red basic>
            Please enter a value
        </Label>
    </Field>
    <Divider ui/>
    <Field placeholder="Last Name">
        <Label ui pointing below red basic>
            Please enter a value
        </Label>
        <Input />
    </Field>
    <Divider ui/>
    <Field inline>
        <Input placeholder="Username"/>
        <Label ui left pointing red basic>
            That name is taken!
        </Label>
    </Field>
    <Divider ui/>
    <Field inline>
        <Label ui right pointing red basic>
            Your password must be 6 characters or more
        </Label>
        <Input type="password"/>
    </Field>
</Form>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Corner</h4>
        <Grid ui two column>
            <Column>
                <Image ui fluid>
                    <Link ui left corner label>
                        <Icon heart/>
                    </Link>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
            <Column>
                <Image ui fluid>
                    <Link ui red right corner label>
                        <Icon save/>
                    </Link>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
        </Grid>
        <Prism language="svelte" source={`
<Grid ui two column>
    <Column>
        <Image ui fluid>
            <Link ui left corner label>
                <Icon heart/>
            </Link>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
    <Column>
        <Image ui fluid>
            <Link ui red right corner label>
                <Icon save/>
            </Link>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
</Grid>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Tag</h4>
        <Link ui tag label>New</Link>
        <Link ui red tag label>Upcoming</Link>
        <Link ui teal tag label>Featured</Link>
        <Prism language="svelte" source={`
<Link ui tag label>New</Link>
<Link ui red tag label>Upcoming</Link>
<Link ui teal tag label>Featured</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Ribbon</h4>
        <Grid ui two column>
            <Column>
                <Segment ui raised>
                    <Link ui red ribbon label>Overview</Link>
                    <span>Account Details</span>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Link ui blue ribbon label>Community</Link> User Reviews
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Segment>
            </Column>
            <Column>
                <Segment ui>
                    <Link ui orange right ribbon label>Specs</Link>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    <Link ui teal right ribbon label>Reviews</Link>
                    <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                </Segment>
            </Column>
        </Grid>
        <Grid ui two column>
            <Column>
                <Image ui fluid>
                    <Label ui black ribbon>
                        <Icon hotel/> Hotel
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
            <Column>
                <Image ui fluid>
                    <Label ui blue right ribbon>
                        <Icon spoon/> Food
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
        </Grid>
        <Grid ui two column>
            <Column>
                <Image ui fluid>
                    <Label ui black ribbon>
                        Hotel <Icon hotel/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
            <Column>
                <Image ui fluid>
                    <Label ui blue right ribbon>
                        Food <Icon spoon/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
        </Grid>
        <Grid ui two column>
            <Column>
                <Image ui fluid>
                    <Label ui black ribbon>
                        <Icon hotel/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
            <Column>
                <Image ui fluid>
                    <Label ui blue right ribbon>
                        <Icon spoon/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image>
            </Column>
        </Grid>
        <Prism language="svelte" source={`
<Grid ui two column>
    <Column>
        <Segment ui raised>
            <Link ui red ribbon label>Overview</Link>
            <span>Account Details</span>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Link ui blue ribbon label>Community</Link> User Reviews
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
    </Column>
    <Column>
        <Segment ui>
            <Link ui orange right ribbon label>Specs</Link>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            <Link ui teal right ribbon label>Reviews</Link>
            <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
    </Column>
</Grid>
<Grid ui two column>
    <Column>
        <Image ui fluid>
            <Label ui black ribbon>
                <Icon hotel/> Hotel
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
    <Column>
        <Image ui fluid>
            <Label ui blue right ribbon>
                <Icon spoon/> Food
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
</Grid>
<Grid ui two column>
    <Column>
        <Image ui fluid>
            <Label ui black ribbon>
                Hotel <Icon hotel/> 
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
    <Column>
        <Image ui fluid>
            <Label ui blue right ribbon>
                Food <Icon spoon/> 
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
</Grid>
<Grid ui two column>
    <Column>
        <Image ui fluid>
            <Label ui black ribbon>
                <Icon hotel/> 
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
    <Column>
        <Image ui fluid>
            <Label ui blue right ribbon>
                <Icon spoon/> 
            </Label>
            <Image src="/images/image.png"/>
        </Image>
    </Column>
</Grid>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Attached</h4>
        <Grid ui celled three column>
            <Row>
                <Column>
                    <Label ui top attached>HTML</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
                <Column>
                    <Label ui bottom attached>CSS</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
                <Column>
                    <Label ui top right attached>Code</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label ui top left attached>View</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
                <Column>
                    <Label ui bottom left attached>User View</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
                <Column>
                    <Label ui bottom right attached>Admin View</Label>
                    <Content>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                        <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                    </Content>
                </Column>
            </Row>
        </Grid>
        <Prism language="svelte" source={`
<Grid ui celled three column>
    <Row>
        <Column>
            <Label ui top attached>HTML</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
        <Column>
            <Label ui bottom attached>CSS</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
        <Column>
            <Label ui top right attached>Code</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
    </Row>
    <Row>
        <Column>
            <Label ui top left attached>View</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
        <Column>
            <Label ui bottom left attached>User View</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
        <Column>
            <Label ui bottom right attached>Admin View</Label>
            <Content>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
                <Placeholder ui fluid> <Paragraph> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
            </Content>
        </Column>
    </Row>
</Grid>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Horizontal</h4>
        <List ui divided selection>
            <Link item>
                <Label ui red horizontal label>Fruit</Label>
                Kumquats
            </Link>
            <Link item>
                <Label ui purple horizontal>Candy</Label>
                Ice Cream
            </Link>
            <Link item>
                <Label ui red horizontal>Fruit</Label>
                Orange
            </Link>
            <Link item>
                <Label ui horizontal>Dog</Label>
                Poodle
            </Link>
        </List>
        <Prism language="svelte" source={`
<List ui divided selection>
    <Link item>
        <Label ui red horizontal label>Fruit</Label>
        Kumquats
    </Link>
    <Link item>
        <Label ui purple horizontal>Candy</Label>
        Ice Cream
    </Link>
    <Link item>
        <Label ui red horizontal>Fruit</Label>
        Orange
    </Link>
    <Link item>
        <Label ui horizontal>Dog</Label>
        Poodle
    </Link>
</List>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Floating</h4>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label floating ui red>22</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label floating ui teal>22</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label floating ui red>22 Mails</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label floating ui teal>22 Friends</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label bottom floating ui red>22</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label bottom floating ui teal>22</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label bottom floating ui red>22 Mails</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label bottom floating ui teal>22 Friends</Label>
            </Link>
        </Menu>
        <Prism language="svelte" source={`
<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label floating ui red>22</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label floating ui teal>22</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label floating ui red>22 Mails</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label floating ui teal>22 Friends</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label bottom floating ui red>22</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label bottom floating ui teal>22</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label bottom floating ui red>22 Mails</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label bottom floating ui teal>22 Friends</Label>
    </Link>
</Menu>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Floating left</h4>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label left floating ui red>22</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label left floating ui teal>22</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label left floating ui red>22 Mails</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label left floating ui teal>22 Friends</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label left bottom floating ui red>22</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label left bottom floating ui teal>22</Label>
            </Link>
        </Menu><br/><br/>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages
                <Label left bottom floating ui red>22 Mails</Label>
            </Link>
            <Link item>
                <Icon users/> Friends
                <Label left bottom floating ui teal>22 Friends</Label>
            </Link>
        </Menu>
        <Prism language="svelte" source={`
<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label left floating ui red>22</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label left floating ui teal>22</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label left floating ui red>22 Mails</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label left floating ui teal>22 Friends</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label left bottom floating ui red>22</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label left bottom floating ui teal>22</Label>
    </Link>
</Menu>

<Menu ui compact>
    <Link item>
        <Icon mail/> Messages
        <Label left bottom floating ui red>22 Mails</Label>
    </Link>
    <Link item>
        <Icon users/> Friends
        <Label left bottom floating ui teal>22 Friends</Label>
    </Link>
</Menu>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Floating aligned</h4>
        <Menu ui compact>
            <Link item>
                <Icon mail/> Messages from Fomantic-UI-Users
                <Label left aligned floating ui red>22 Mails unread</Label>
            </Link>
            <Link item>
                <Icon users/> Friends of the Fomantic-UI Community
                <Label right aligned floating ui teal>22 Friends online</Label>
            </Link>
        </Menu>
        <Prism language="svelte" source={`
<Menu ui compact>
    <Link item>
        <Icon mail/> Messages from Fomantic-UI-Users
        <Label left aligned floating ui red>22 Mails unread</Label>
    </Link>
    <Link item>
        <Icon users/> Friends of the Fomantic-UI Community
        <Label right aligned floating ui teal>22 Friends online</Label>
    </Link>
</Menu>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>
        <Segment ui inverted>
            <Label ui primary inverted>Primary</Label>
            <Label ui secondary inverted>Secondary</Label>
            <Label ui red inverted>Red</Label>
            <Label ui orange inverted>Orange</Label>
            <Label ui yellow inverted>Yellow</Label>
            <Label ui olive inverted>Olive</Label>
            <Label ui green inverted>Green</Label>
            <Label ui teal inverted>Teal</Label>
            <Label ui blue inverted>Blue</Label>
            <Label ui violet inverted>Violet</Label>
            <Label ui purple inverted>Purple</Label>
            <Label ui pink inverted>Pink</Label>
            <Label ui brown inverted>Brown</Label>
            <Label ui grey inverted>Grey</Label>
            <Label ui black inverted>Black</Label>
            <p></p>
            <Label ui primary inverted basic>Primary</Label>
            <Label ui secondary inverted basic>Secondary</Label>
            <Label ui red inverted basic>Red</Label>
            <Label ui orange inverted basic>Orange</Label>
            <Label ui yellow inverted basic>Yellow</Label>
            <Label ui olive inverted basic>Olive</Label>
            <Label ui green inverted basic>Green</Label>
            <Label ui teal inverted basic>Teal</Label>
            <Label ui blue inverted basic>Blue</Label>
            <Label ui violet inverted basic>Violet</Label>
            <Label ui purple inverted basic>Purple</Label>
            <Label ui pink inverted basic>Pink</Label>
            <Label ui brown inverted basic>Brown</Label>
            <Label ui grey inverted basic>Grey</Label>
            <Label ui black inverted basic>Black</Label>
            <p></p>
            <Label ui inverted tag>Tag</Label>
            <Label ui primary inverted tag>Primary</Label>
            <Label ui secondary inverted tag>Secondary</Label>
            <Label ui red inverted tag>Red</Label>
            <Label ui orange inverted tag>Orange</Label>
            <Label ui yellow inverted tag>Yellow</Label>
            <Label ui olive inverted tag>Olive</Label>
            <Label ui green inverted tag>Green</Label>
            <Label ui teal inverted tag>Teal</Label>
            <Label ui blue inverted tag>Blue</Label>
            <Label ui violet inverted tag>Violet</Label>
            <Label ui purple inverted tag>Purple</Label>
            <Label ui pink inverted tag>Pink</Label>
            <Label ui brown inverted tag>Brown</Label>
            <Label ui grey inverted tag>Grey</Label>
            <Label ui black inverted tag>Black</Label>
        </Segment>
        <Prism language="svelte" source={`
<Segment ui inverted>
    <Label ui primary inverted>Primary</Label>
    <Label ui secondary inverted>Secondary</Label>
    <Label ui red inverted>Red</Label>
    <Label ui orange inverted>Orange</Label>
    <Label ui yellow inverted>Yellow</Label>
    <Label ui olive inverted>Olive</Label>
    <Label ui green inverted>Green</Label>
    <Label ui teal inverted>Teal</Label>
    <Label ui blue inverted>Blue</Label>
    <Label ui violet inverted>Violet</Label>
    <Label ui purple inverted>Purple</Label>
    <Label ui pink inverted>Pink</Label>
    <Label ui brown inverted>Brown</Label>
    <Label ui grey inverted>Grey</Label>
    <Label ui black inverted>Black</Label>

    <Label ui primary inverted basic>Primary</Label>
    <Label ui secondary inverted basic>Secondary</Label>
    <Label ui red inverted basic>Red</Label>
    <Label ui orange inverted basic>Orange</Label>
    <Label ui yellow inverted basic>Yellow</Label>
    <Label ui olive inverted basic>Olive</Label>
    <Label ui green inverted basic>Green</Label>
    <Label ui teal inverted basic>Teal</Label>
    <Label ui blue inverted basic>Blue</Label>
    <Label ui violet inverted basic>Violet</Label>
    <Label ui purple inverted basic>Purple</Label>
    <Label ui pink inverted basic>Pink</Label>
    <Label ui brown inverted basic>Brown</Label>
    <Label ui grey inverted basic>Grey</Label>
    <Label ui black inverted basic>Black</Label>

    <Label ui inverted tag>Tag</Label>
    <Label ui primary inverted tag>Primary</Label>
    <Label ui secondary inverted tag>Secondary</Label>
    <Label ui red inverted tag>Red</Label>
    <Label ui orange inverted tag>Orange</Label>
    <Label ui yellow inverted tag>Yellow</Label>
    <Label ui olive inverted tag>Olive</Label>
    <Label ui green inverted tag>Green</Label>
    <Label ui teal inverted tag>Teal</Label>
    <Label ui blue inverted tag>Blue</Label>
    <Label ui violet inverted tag>Violet</Label>
    <Label ui purple inverted tag>Purple</Label>
    <Label ui pink inverted tag>Pink</Label>
    <Label ui brown inverted tag>Brown</Label>
    <Label ui grey inverted tag>Grey</Label>
    <Label ui black inverted tag>Black</Label>
</Segment>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Detail</h4>
        <Label ui>
            Dogs
            <Detail>214</Detail>
        </Label>
        <Prism language="svelte" source={`
<Label ui>
    Dogs
    <Detail>214</Detail>
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icon</h4>
        <Label ui>
            <Icon mail/>
            Mail
        </Label>
        <Label ui>
            <Icon checkmark/>
            Test Passed
        </Label>
        <Label ui>
            <Icon dog/>
            Dog
        </Label>
        <Label ui>
            <Icon cat/>
            Cat
        </Label>
        <Prism language="svelte" source={`
<Label ui>
    <Icon mail/>
    Mail
</Label>
<Label ui>
    <Icon checkmark/>
    Test Passed
</Label>
<Label ui>
    <Icon dog/>
    Dog
</Label>
<Label ui>
    <Icon cat/>
    Cat
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icons on the right</h4>
        <Label ui right icon>
            Mail
            <Icon mail/>
        </Label>
        <Label ui right icon>
            Test Passed
            <Icon checkmark/>
        </Label>
        <Label ui right icon>
            Dog
            <Icon dog/>
        </Label>
        <Label ui right icon>
            Cat
            <Icon cat/>
        </Label>
        <Prism language="svelte" source={`
<Label ui right icon>
    Mail
    <Icon mail/>
</Label>
<Label ui right icon>
    Test Passed
    <Icon checkmark/>
</Label>
<Label ui right icon>
    Dog
    <Icon dog/>
</Label>
<Label ui right icon>
    Cat
    <Icon cat/>
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icons no text</h4>
        <Label ui icon>
            <Icon mail/>
        </Label>
        <Label ui icon>
            <Icon dog/>
        </Label>
        <Label ui icon>
            <Icon cat/>
        </Label>
        <Prism language="svelte" source={`
<Label ui icon>
    <Icon mail/>
</Label>
<Label ui icon>
    <Icon dog/>
</Label>
<Label ui icon>
    <Icon cat/>
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Image</h4>
        <Link ui label>
            <Image ui right spaced avatar src="/images/elliot.jpg"/>
            Elliot
        </Link>
        <Link ui label>
            <Image src="/images/stevie.jpg"/>
            Stevie
        </Link>
        <Prism language="svelte" source={`
<Link ui label>
    <Image ui right spaced avatar src="/images/elliot.jpg"/>
    Elliot
</Link>
<Link ui label>
    <Image src="/images/stevie.jpg"/>
    Stevie
</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Link</h4>
        <Link ui label>
            <Icon mail/> 23
        </Link>
        <br/><br/>
        <Label ui>
            <Icon mail/>
            23
            <Link detail>View Mail</Link>
        </Label>
        <Prism language="svelte" source={`
<Link ui label>
    <Icon mail/> 23
</Link>

<Label ui>
    <Icon mail/>
    23
    <Link detail>View Mail</Link>
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Disabled Link</h4>
        <Link ui disabled label>
            Disabled Label
        </Link>
        <Prism language="svelte" source={`
<Link ui disabled label>
    Disabled Label
</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fluid</h4>
        <Link ui fluid label>
            Fits container
        </Link>
        <Prism language="svelte" source={`
<Link ui fluid label>
    Fits container
</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Centered</h4>
        <Link ui fluid centered label>
            Fits container
        </Link>
        <Prism language="svelte" source={`
<Link ui fluid centered label>
    Fits container
</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Circular</h4>
        <Link ui red circular label>2</Link>
        <Link ui orange circular label>2</Link>
        <Link ui yellow circular label>2</Link>
        <Link ui olive circular label>2</Link>
        <Link ui green circular label>2</Link>
        <Link ui teal circular label>2</Link>
        <Link ui blue circular label>2</Link>
        <Link ui violet circular label>2</Link>
        <Link ui purple circular label>2</Link>
        <Link ui pink circular label>2</Link>
        <Link ui brown circular label>2</Link>
        <Link ui grey circular label>2</Link>
        <Link ui black circular label>2</Link>
        <br/><br/>
        <Link ui red empty circular label/>
        <Link ui orange empty circular label/>
        <Link ui yellow empty circular label/>
        <Link ui olive empty circular label/>
        <Link ui green empty circular label/>
        <Link ui teal empty circular label/>
        <Link ui blue empty circular label/>
        <Link ui violet empty circular label/>
        <Link ui purple empty circular label/>
        <Link ui pink empty circular label/>
        <Link ui brown empty circular label/>
        <Link ui grey empty circular label/>
        <Link ui black empty circular label/>
        <Prism language="svelte" source={`
<Link ui red circular label>2</Link>
<Link ui orange circular label>2</Link>
<Link ui yellow circular label>2</Link>
<Link ui olive circular label>2</Link>
<Link ui green circular label>2</Link>
<Link ui teal circular label>2</Link>
<Link ui blue circular label>2</Link>
<Link ui violet circular label>2</Link>
<Link ui purple circular label>2</Link>
<Link ui pink circular label>2</Link>
<Link ui brown circular label>2</Link>
<Link ui grey circular label>2</Link>
<Link ui black circular label>2</Link>

<Link ui red empty circular label/>
<Link ui orange empty circular label/>
<Link ui yellow empty circular label/>
<Link ui olive empty circular label/>
<Link ui green empty circular label/>
<Link ui teal empty circular label/>
<Link ui blue empty circular label/>
<Link ui violet empty circular label/>
<Link ui purple empty circular label/>
<Link ui pink empty circular label/>
<Link ui brown empty circular label/>
<Link ui grey empty circular label/>
<Link ui black empty circular label/>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Basic</h4>
        <Link ui basic label>Basic</Link>
        <Link ui pointing basic label>Pointing</Link>
        <Link ui basic image label>
            <Image src="/images/elliot.jpg"/>
            Elliot
        </Link>
        <Link ui pointing red basic label>Red Pointing</Link>
        <Link ui blue basic label>Blue</Link>
        <Prism language="svelte" source={`
<Link ui basic label>Basic</Link>
<Link ui pointing basic label>Pointing</Link>
<Link ui basic image label>
    <Image src="/images/elliot.jpg"/>
    Elliot
</Link>
<Link ui pointing red basic label>Red Pointing</Link>
<Link ui blue basic label>Blue</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Colored</h4>
        <Link ui primary label>Primary</Link>
        <Link ui secondary label>Secondary</Link>
        <Link ui red label>Red</Link>
        <Link ui orange label>Orange</Link>
        <Link ui yellow label>Yellow</Link>
        <Link ui olive label>Olive</Link>
        <Link ui green label>Green</Link>
        <Link ui teal label>Teal</Link>
        <Link ui blue label>Blue</Link>
        <Link ui violet label>Violet</Link>
        <Link ui purple label>Purple</Link>
        <Link ui pink label>Pink</Link>
        <Link ui brown label>Brown</Link>
        <Link ui grey label>Grey</Link>
        <Link ui black label>Black</Link>
        <Prism language="svelte" source={`
<Link ui primary label>Primary</Link>
<Link ui secondary label>Secondary</Link>
<Link ui red label>Red</Link>
<Link ui orange label>Orange</Link>
<Link ui yellow label>Yellow</Link>
<Link ui olive label>Olive</Link>
<Link ui green label>Green</Link>
<Link ui teal label>Teal</Link>
<Link ui blue label>Blue</Link>
<Link ui violet label>Violet</Link>
<Link ui purple label>Purple</Link>
<Link ui pink label>Pink</Link>
<Link ui brown label>Brown</Link>
<Link ui grey label>Grey</Link>
<Link ui black label>Black</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Basic tag labels</h4>
        <Link ui basic tag label>Standard Tag</Link>
        <Link ui primary basic tag label>Primary</Link>
        <Link ui secondary basic tag label>Secondary</Link>
        <Link ui red basic tag label>Red</Link>
        <Link ui orange basic tag label>Orange</Link>
        <Link ui yellow basic tag label>Yellow</Link>
        <Link ui olive basic tag label>Olive</Link>
        <Link ui green basic tag label>Green</Link>
        <Link ui teal basic tag label>Teal</Link>
        <Link ui blue basic tag label>Blue</Link>
        <Link ui violet basic tag label>Violet</Link>
        <Link ui purple basic tag label>Purple</Link>
        <Link ui pink basic tag label>Pink</Link>
        <Link ui brown basic tag label>Brown</Link>
        <Link ui grey basic tag label>Grey</Link>
        <Link ui black basic tag label>Black</Link>
        <Prism language="svelte" source={`
<Link ui basic tag label>Standard Tag</Link>
<Link ui primary basic tag label>Primary</Link>
<Link ui secondary basic tag label>Secondary</Link>
<Link ui red basic tag label>Red</Link>
<Link ui orange basic tag label>Orange</Link>
<Link ui yellow basic tag label>Yellow</Link>
<Link ui olive basic tag label>Olive</Link>
<Link ui green basic tag label>Green</Link>
<Link ui teal basic tag label>Teal</Link>
<Link ui blue basic tag label>Blue</Link>
<Link ui violet basic tag label>Violet</Link>
<Link ui purple basic tag label>Purple</Link>
<Link ui pink basic tag label>Pink</Link>
<Link ui brown basic tag label>Brown</Link>
<Link ui grey basic tag label>Grey</Link>
<Link ui black basic tag label>Black</Link>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>
        <Label ui mini>
            Mini
        </Label>
        <Label ui tiny>
            Tiny
        </Label>
        <Label ui small>
            Small
        </Label>
        <Label ui>
            Medium
        </Label>
        <Label ui large>
            Large
        </Label>
        <Label ui big>
            Big
        </Label>
        <Label ui huge>
            Huge
        </Label>
        <Label ui massive>
            Massive
        </Label>
        <Prism language="svelte" source={`
<Label ui mini>
    Mini
</Label>
<Label ui tiny>
    Tiny
</Label>
<Label ui small>
    Small
</Label>
<Label ui>
    Medium
</Label>
<Label ui large>
    Large
</Label>
<Label ui big>
    Big
</Label>
<Label ui huge>
    Huge
</Label>
<Label ui massive>
    Massive
</Label>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Group size</h4>
        <Labels ui huge>
            <Label ui>
            Fun
            </Label>
            <Label ui>
            Happy
            </Label>
            <Label ui>
            Smart
            </Label>
            <Label ui>
            Witty
            </Label>
        </Labels>
        <Prism language="svelte" source={`
<Labels ui huge>
    <Label ui>
    Fun
    </Label>
    <Label ui>
    Happy
    </Label>
    <Label ui>
    Smart
    </Label>
    <Label ui>
    Witty
    </Label>
</Labels>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Colored group</h4>
        <Labels ui blue>
            <Link ui label>
              Fun <Icon close/>
            </Link>
            <Link ui label>
              Happy
              <Detail>22</Detail>
            </Link>
            <Link ui label>
              Smart
            </Link>
            <Link ui label>
              Insane
            </Link>
            <Link ui label>
              Exciting
            </Link>
        </Labels>
        <Prism language="svelte" source={`
<Labels ui blue>
    <Link ui label>
        Fun <Icon close/>
    </Link>
    <Link ui label>
        Happy
        <Detail>22</Detail>
    </Link>
    <Link ui label>
        Smart
    </Link>
    <Link ui label>
        Insane
    </Link>
    <Link ui label>
        Exciting
    </Link>
</Labels>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Basic group</h4>
        <Labels ui basic>
            <Link ui label>
              Fun <Icon close/>
            </Link>
            <Link ui label>
              Happy
              <Detail>22</Detail>
            </Link>
            <Link ui label>
              Smart
            </Link>
            <Link ui label>
              Insane
            </Link>
            <Link ui label>
              Exciting
            </Link>
        </Labels>
        <Prism language="svelte" source={`
<Labels ui basic>
    <Link ui label>
        Fun <Icon close/>
    </Link>
    <Link ui label>
        Happy
        <Detail>22</Detail>
    </Link>
    <Link ui label>
        Smart
    </Link>
    <Link ui label>
        Insane
    </Link>
    <Link ui label>
        Exciting
    </Link>
</Labels>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Tag group</h4>
        <Labels ui tag>
            <Link ui label>
                $10
            </Link>
            <Link ui label>
                $19.99
            </Link>
            <Link ui label>
                $24.99
            </Link>
            <Link ui label>
                $30.99
            </Link>
            <Link ui label>
                $10.25
            </Link>
        </Labels>
        <Prism language="svelte" source={`
<Labels ui tag>
    <Link ui label>
        $10
    </Link>
    <Link ui label>
        $19.99
    </Link>
    <Link ui label>
        $24.99
    </Link>
    <Link ui label>
        $30.99
    </Link>
    <Link ui label>
        $10.25
    </Link>
</Labels>
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Circular group</h4>
        <Labels ui circular>
            <Link ui label>
                11
            </Link>
            <Link ui label>
                22
            </Link>
            <Link ui label>
                33
            </Link>
            <Link ui label>
                44
            </Link>
            <Link ui label>
                141
            </Link>
        </Labels>
        <Prism language="svelte" source={`
<Labels ui circular>
    <Link ui label>
        11
    </Link>
    <Link ui label>
        22
    </Link>
    <Link ui label>
        33
    </Link>
    <Link ui label>
        44
    </Link>
    <Link ui label>
        141
    </Link>
</Labels>
        `}/>
    </div>
</div>
