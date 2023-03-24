// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    comment : `
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
    `
}

export default code;