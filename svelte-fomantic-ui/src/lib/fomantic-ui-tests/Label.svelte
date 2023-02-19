<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Label, Icon, Link, Image, Image_Wrapper, Detail, Form, Field, Divider, Input, Grid, Column, Segment, Placeholder, Paragraph, Line, Container} from "../fomantic-ui/Core.svelte";

    import "./examplestyles.css";
</script>

<div class="example-document">
    <h3 class="document-header">Label examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/label.html">here</a></div>

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
    </div>
</div>
