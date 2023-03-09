// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    external : `
<Segment ui>
    <Rail ui left>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    internal : `
    <Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left internal>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right internal>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `,
    dividing_line : `
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left dividing>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right dividing>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `,
    attached : `
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left attached>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right attached>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left attached internal>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right attached internal>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `,
    close : `
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left close>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right close>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left very close>
        <Segment ui>
            Left Rail Content
        </Segment>
    </Rail>
    <Rail ui right very close>
        <Segment ui>
            Right Rail Content
        </Segment>
    </Rail>
</Segment>
    `,
    size : `
    <Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left mini>
            Mini
    </Rail>
    <Rail ui right tiny>
            Tiny
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left small>
        <Segment ui small>
            Small
        </Segment>
    </Rail>
    <Rail ui right large>
        <Segment ui large>
            Large
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui left big>
        <Segment ui big>
            Big
        </Segment>
    </Rail>
    <Rail ui right huge>
        <Segment ui huge>
            Huge
        </Segment>
    </Rail>
</Segment>

<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    <Rail ui right massive>
        <Segment ui massive>
            Massive
        </Segment>
    </Rail>
</Segment>
    `
}

export default code;