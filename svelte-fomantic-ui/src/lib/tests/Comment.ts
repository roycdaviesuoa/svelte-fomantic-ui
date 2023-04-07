// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    comments : `
<Comments ui>
    <Header h3 ui dividing>Comments</Header>
    <Comment>
        <Link avatar>
            <Image src="/images/matt.jpg"/>
        </Link>
        <Content>
            <Link author>Matt</Link>
            <Metadata>
                <Date>Today at 5:42PM</Date>
            </Metadata>
            <Text>
                How artistic!
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/elliot.jpg"/>
        </Link>
        <Content>
            <Link author>Elliot Fu</Link>
            <Metadata>
                <Date>Yesterday at 12:30AM</Date>
            </Metadata>
            <Text>
                <p>This has been very useful for my research. Thanks as well!</p>
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
        <Comments>
            <Comment>
                <Link avatar>
                    <Image src="/images/jenny.jpg"/>
                </Link>
                <Content>
                    <Link author>Jenny Hess</Link>
                    <Metadata>
                        <Date>Just now</Date>
                    </Metadata>
                    <Text>
                        Elliot you are always so right :)
                    </Text>
                    <Actions>
                        <Link reply>Reply</Link>
                    </Actions>
                </Content>
            </Comment>
        </Comments>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Joe Henderson</Link>
            <Metadata>
                <Date>5 days ago</Date>
            </Metadata>
            <Text>
                Dude, this is awesome. Thanks so much
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Form ui reply>
        <Field>
            <Textarea></Textarea>
        </Field>
        <Button ui blue labeled submit icon>
            <Icon edit/> Add Reply
        </Button>
    </Form>
</Comments>
    `,
    avatar : `
<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/elliot.jpg"/>
        </Link>
        <Content>
            <Link author>Elliot Fu</Link>
        </Content>
    </Comment>
</Comments>
    `,
    metadata : `
<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/stevie.jpg"/>
        </Link>
        <Content>
            <Link author>Stevie Feliciano</Link>
            <Metadata>
                <Date>2 days ago</Date>
                <Rating>
                    <Icon star/>
                    5 Faves
                </Rating>
            </Metadata>
            <Text>
                Hey guys, I hope this example comment is helping you read this documentation.
            </Text>
        </Content>
    </Comment>
</Comments>
    `,
    actions : `
<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Tom Lukic</Link>
            <Text>
                This will be great for business reports. I will definitely download this.
            </Text>
            <Actions>
                <Link reply>Reply</Link>
                <Link save>Save</Link>
                <Link hide>Hide</Link>
                <Link>
                    <Icon expand/>
                    Full-screen
                </Link>
            </Actions>
        </Content>
    </Comment>
</Comments>
    `,
    reply_form : `
<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/steve.jpg"/>
        </Link>
        <Content>
            <Link author>Steve Jobes</Link>
            <Metadata>
                <Date>2 days ago</Date>
            </Metadata>
            <Text>
                Revolutionary!
            </Text>
            <Actions>
                <Link reply active>Reply</Link>
            </Actions>
            <Form ui reply>
                <Field>
                    <Textarea></Textarea>
                </Field>
                <Button ui primary submit labeled icon>
                    <Icon edit/> Add Reply
                </Button>
            </Form>
        </Content>
    </Comment>
</Comments>

<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Joe Henderson</Link>
            <Metadata>
                <Date>1 day ago</Date>
            </Metadata>
            <Text>
                <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
                <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/christian.jpg"/>
        </Link>
        <Content>
            <Link author>Christian Rocha</Link>
            <Metadata>
                <Date>2 days ago</Date>
            </Metadata>
            <Text>
                I re-tweeted this.
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Form ui reply>
        <Field>
            <Textarea></Textarea>
        </Field>
        <Button ui primary submit labeled icon>
            <Icon edit/> Add Comment
        </Button>
    </Form>
</Comments>
    `,
    collapsed : `
<Comments ui>
    <Comment>
        <Link avatar>
            <Image src="/images/christian.jpg"/>
        </Link>
        <Content>
            <Link author>Christian Rocha</Link>
            <Metadata>
                <Date>2 days ago</Date>
            </Metadata>
            <Text>
                I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
        <Comments collapsed>
            <Comment>
                <Link avatar>
                    <Image src="/images/elliot.jpg"/>
                </Link>
                <Content>
                    <Link author>Elliot Fu</Link>
                    <Metadata>
                        <Date>1 day ago</Date>
                    </Metadata>
                    <Text>
                        No, it wont
                    </Text>
                    <Actions>
                        <Link reply>Reply</Link>
                    </Actions>
                </Content>
                <Comments>
                    <Comment>
                        <Link avatar>
                            <Image src="/images/jenny.jpg"/>
                        </Link>
                        <Content>
                            <Link author>Jenny Hess</Link>
                            <Metadata>
                                <Date>20 minutes ago</Date>
                            </Metadata>
                            <Text>
                                Maybe it would.
                            </Text>
                            <Actions>
                                <Link reply>Reply</Link>
                            </Actions>
                        </Content>
                    </Comment>
                </Comments>
            </Comment>
        </Comments>
    </Comment>
</Comments>
    `,
    threaded : `
<Comments ui threaded>
    <Header h3 ui dividing>Comments</Header>
    <Comment>
        <Link avatar>
            <Image src="/images/matt.jpg"/>
        </Link>
        <Content>
            <Link author>Matt</Link>
            <Metadata>
                <Date>Today at 5:42PM</Date>
            </Metadata>
            <Text>
                How artistic!
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/elliot.jpg"/>
        </Link>
        <Content>
            <Link author>Elliot Fu</Link>
            <Metadata>
                <Date>Yesterday at 12:30AM</Date>
            </Metadata>
            <Text>
                <p>This has been very useful for my research. Thanks as well!</p>
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
        <Comments>
            <Comment>
                <Link avatar>
                    <Image src="/images/jenny.jpg"/>
                </Link>
                <Content>
                    <Link author>Jenny Hess</Link>
                    <Metadata>
                        <Date>Just now</Date>
                    </Metadata>
                    <Text>
                        Elliot you are always so right :)
                    </Text>
                    <Actions>
                        <Link reply>Reply</Link>
                    </Actions>
                </Content>
            </Comment>
        </Comments>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Joe Henderson</Link>
            <Metadata>
                <Date>5 days ago</Date>
            </Metadata>
            <Text>
                Dude, this is awesome. Thanks so much
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Form ui reply>
        <Field>
            <Textarea></Textarea>
        </Field>
        <Button ui blue labeled submit icon>
            <Icon edit/> Add Reply
        </Button>
    </Form>
</Comments>
    `,
    minimal : `
<Comments ui minimal>
    <Header ui h3 dividing>Comments</Header>
    <Comment>
        <Link avatar>
            <Image src="/images/matt.jpg"/>
        </Link>
        <Content>
            <Link author>Matt</Link>
            <Metadata>
                <Date>Today at 5:42PM</Date>
            </Metadata>
            <Text>
                How artistic!
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/elliot.jpg"/>
        </Link>
        <Content>
            <Link author>Elliot Fu</Link>
            <Metadata>
                <Date>Yesterday at 12:30AM</Date>
            </Metadata>
            <Text>
                <p>This has been very useful for my research. Thanks as well!</p>
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
        <Comments>
            <Comment>
                <Link avatar>
                    <Image src="/images/jenny.jpg"/>
                </Link>
                <Content>
                    <Link author>Jenny Hess</Link>
                    <Metadata>
                        <Date>Just now</Date>
                    </Metadata>
                    <Text>
                        Elliot you are always so right :)
                    </Text>
                    <Actions>
                        <Link reply>Reply</Link>
                    </Actions>
                </Content>
            </Comment>
        </Comments>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Joe Henderson</Link>
            <Metadata>
                <Date>5 days ago</Date>
            </Metadata>
            <Text>
                Dude, this is awesome. Thanks so much
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Form ui reply>
        <Field>
            <Textarea></Textarea>
        </Field>
        <Button ui blue labeled submit icon>
            <Icon edit/> Add Reply
        </Button>
    </Form>
</Comments>
    `,
    size : `
<Comments ui small>
    <Header ui h3 dividing>Comments</Header>
    <Comment>
        <Link avatar>
            <Image src="/images/matt.jpg"/>
        </Link>
        <Content>
            <Link author>Matt</Link>
            <Metadata>
                <Date>Today at 5:42PM</Date>
            </Metadata>
            <Text>
                How artistic!
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/elliot.jpg"/>
        </Link>
        <Content>
            <Link author>Elliot Fu</Link>
            <Metadata>
                <Date>Yesterday at 12:30AM</Date>
            </Metadata>
            <Text>
                <p>This has been very useful for my research. Thanks as well!</p>
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
        <Comments>
            <Comment>
                <Link avatar>
                    <Image src="/images/jenny.jpg"/>
                </Link>
                <Content>
                    <Link author>Jenny Hess</Link>
                    <Metadata>
                        <Date>Just now</Date>
                    </Metadata>
                    <Text>
                        Elliot you are always so right :)
                    </Text>
                    <Actions>
                        <Link reply>Reply</Link>
                    </Actions>
                </Content>
            </Comment>
        </Comments>
    </Comment>
    <Comment>
        <Link avatar>
            <Image src="/images/joe.jpg"/>
        </Link>
        <Content>
            <Link author>Joe Henderson</Link>
            <Metadata>
                <Date>5 days ago</Date>
            </Metadata>
            <Text>
                Dude, this is awesome. Thanks so much
            </Text>
            <Actions>
                <Link reply>Reply</Link>
            </Actions>
        </Content>
    </Comment>
    <Form ui reply>
        <Field>
            <Textarea></Textarea>
        </Field>
        <Button ui blue labeled submit icon>
            <Icon edit/> Add Reply
        </Button>
    </Form>
</Comments>
    `,
    inverted : `
<Segment ui inverted>
    <Comments ui inverted threaded>
        <Header h3 ui dividing>Comments</Header>
        <Comment>
            <Link avatar>
                <Image src="/images/matt.jpg"/>
            </Link>
            <Content>
                <Link author>Matt</Link>
                <Metadata>
                    <Date>Today at 5:42PM</Date>
                </Metadata>
                <Text>
                    How artistic!
                </Text>
                <Actions>
                    <Link reply>Reply</Link>
                </Actions>
            </Content>
        </Comment>
        <Comment>
            <Link avatar>
                <Image src="/images/elliot.jpg"/>
            </Link>
            <Content>
                <Link author>Elliot Fu</Link>
                <Metadata>
                    <Date>Yesterday at 12:30AM</Date>
                </Metadata>
                <Text>
                    <p>This has been very useful for my research. Thanks as well!</p>
                </Text>
                <Actions>
                    <Link reply>Reply</Link>
                </Actions>
            </Content>
            <Comments>
                <Comment>
                    <Link avatar>
                        <Image src="/images/jenny.jpg"/>
                    </Link>
                    <Content>
                        <Link author>Jenny Hess</Link>
                        <Metadata>
                            <Date>Just now</Date>
                        </Metadata>
                        <Text>
                            Elliot you are always so right :)
                        </Text>
                        <Actions>
                            <Link reply>Reply</Link>
                        </Actions>
                    </Content>
                </Comment>
            </Comments>
        </Comment>
        <Comment>
            <Link avatar>
                <Image src="/images/joe.jpg"/>
            </Link>
            <Content>
                <Link author>Joe Henderson</Link>
                <Metadata>
                    <Date>5 days ago</Date>
                </Metadata>
                <Text>
                    Dude, this is awesome. Thanks so much
                </Text>
                <Actions>
                    <Link reply>Reply</Link>
                </Actions>
            </Content>
        </Comment>
        <Form ui reply>
            <Field>
                <Textarea></Textarea>
            </Field>
            <Button ui blue labeled submit icon>
                <Icon edit/> Add Reply
            </Button>
        </Form>
    </Comments>
</Segment>
    `
}

export default code;