<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Label, Icon, Link, Image, Image_Wrapper, Detail, Form, Field, Divider, Input, Grid, Column, Row, Segment, Placeholder, Paragraph, Line, Content, List, Menu} from "../fomantic-ui/Core.svelte";

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
    </div>

    <div class="example">
        <h4 class="example-header">Corner</h4>
        <Grid ui two column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Link ui left corner label>
                        <Icon heart/>
                    </Link>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Link ui red right corner label>
                        <Icon save/>
                    </Link>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
        </Grid>
    </div>

    <div class="example">
        <h4 class="example-header">Tag</h4>
        <Link ui tag label>New</Link>
        <Link ui red tag label>Upcoming</Link>
        <Link ui teal tag label>Featured</Link>
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
                <Image_Wrapper ui fluid>
                    <Label ui black ribbon>
                        <Icon hotel/> Hotel
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Label ui blue right ribbon>
                        <Icon spoon/> Food
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
        </Grid>
        <Grid ui two column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Label ui black ribbon>
                        Hotel <Icon hotel/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Label ui blue right ribbon>
                        Food <Icon spoon/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
        </Grid>
        <Grid ui two column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Label ui black ribbon>
                        <Icon hotel/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
            <Column>
                <Image_Wrapper ui fluid>
                    <Label ui blue right ribbon>
                        <Icon spoon/> 
                    </Label>
                    <Image src="/images/image.png"/>
                </Image_Wrapper>
            </Column>
        </Grid>
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
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>
        <div class="ui inverted segment">
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
        </div>
    </div>

    <div class="example">
        <h4 class="example-header">Detail</h4>
        <Label ui>
            Dogs
            <Detail>214</Detail>
        </Label>
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
    </div>
</div>
