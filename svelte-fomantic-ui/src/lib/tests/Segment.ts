// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    segment : `
<Segment ui>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    placeholder : `
<Segment ui placeholder>
    <Header ui icon>
        <Icon pdf file outline/>
        No documents are listed for this customer.
    </Header>
    <Button ui primary>Add Document</Button>
</Segment>

<Segment ui placeholder>
    <Header ui icon>
        <Icon search/>
        We don't have any documents matching your query
    </Header>
    <Inline>
        <Button ui primary>Clear Query</Button>
        <Button ui>Add Document</Button>
    </Inline>
</Segment>

<Segment ui placeholder>
    <Grid ui two column stackable center aligned>
        <Divider ui vertical>Or</Divider>
        <Row middle aligned>
            <Column>
                <Header ui icon>
                    <Icon search/>
                    Find Country
                </Header>
                <Field>
                    <Search ui>
                        <Input ui icon>
                            <Input class="prompt" type="text" placeholder="Search countries..."/>
                            <Icon search/>
                        </Input>
                        <Segment ui results"></div>
                    </Search>
                </Field>
            </Column>
            <Column>
                <Header ui icon>
                    <Icon world/>
                    Add New Country
                </Header>
                <Button ui primary>
                    Create
                </Button>
            </Column>
        </Row>
    </Grid>
</Segment>
    `,
    raised : `
<Segment ui raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</Segment>
    `,
    stacked : `
<Segment ui stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</Segment>

<Segment ui tall stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</Segment>
    `,
    piled : `
<Segment ui piled>
    <Header ui h4>A header</Header>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>
    `,
    vertical : `
<Content>
    <Segment ui vertical>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui vertical>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui vertical>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
</Content>
    `,
    segments : `
<Segments ui>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>

<Segments ui basic>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>

<Segments ui>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui red>
        <p>Middle</p>
    </Segment>
    <Segment ui blue>
        <p>Middle</p>
    </Segment>
    <Segment ui green>
        <p>Middle</p>
    </Segment>
    <Segment ui yellow>
        <p>Bottom</p>
    </Segment>
</Segments>

<Segments ui>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui secondary>
        <p>Secondary Content</p>
    </Segment>
</Segments>
    `,
    nested : `
<Segments ui>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segments ui>
        <Segment ui>
            <p>Nested Top</p>
        </Segment>
        <Segment ui>
            <p>Nested Middle</p>
        </Segment>
        <Segment ui>
            <p>Nested Bottom</p>
        </Segment>
    </Segments>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segments ui horizontal>
        <Segment ui>
            <p>Top</p>
        </Segment>
        <Segment ui>
            <p>Middle</p>
        </Segment>
        <Segment ui>
            <p>Bottom</p>
        </Segment>
    </Segments>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>
    `,
    horizontal : `
<Segments ui horizontal>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
</Segments>

<Segments ui horizontal basic>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
    <Segment ui>
        <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    </Segment>
</Segments>
    `,
    equal_width : `
<Segments ui horizontal equal width>
    <Segment ui>
        Segment One
    </Segment>
    <Segment ui>
        Segment Two with a lot of additional content
    </Segment>
    <Segment ui>
        Segment Three
    </Segment>
</Segments>
    `,
    stackable : `
<Segments ui horizontal stackable>
    <Segment ui>
        Segment One
    </Segment>
    <Segment ui>
        Segment Two
    </Segment>
    <Segment ui>
        Segment Three
    </Segment>
    <Segment ui>
        Segment Four
    </Segment>
    <Segment ui>
        Segment Five
    </Segment>
    <Segment ui>
        Segment Six
    </Segment>
    <Segment ui>
        Segment Seven
    </Segment>
    <Segment ui>
        Segment Eight
    </Segment>
</Segments>
    `,
    raised_segments : `
<Segments ui raised>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>
    `,
    stacked_segments : `
<Segments ui stacked>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>
    `,
    piled_segments : `
<Segments ui piled>
    <Segment ui>
        <p>Top</p>
    </Segment>
    <Segment ui>
        <p>Middle</p>
    </Segment>
    <Segment ui>
        <p>Bottom</p>
    </Segment>
</Segments>
    `,
    disabled : `
<Segment ui disabled>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    loading : `
<Segment ui loading>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>

<Segment ui brown double loading>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>

<Segment ui brown usual double loading>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    inverted : `
<Segment ui inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
</Segment>
    `,
    attached : `
<Segment top attached>
    <p>This segment is on top</p>
</Segment>
<Segment ui attached>
    <p>This segment is attached on both sides</p>
</Segment>
<Segment ui bottom attached>
    <p>This segment is on bottom</p>
</Segment>

<Header ui h5 top attached>
    Dogs
</Header>
<Segment ui attached>
    <p>Dogs are one type of animal</p>
</Segment>
<Header ui h5 attached>
    Cats
</Header>
<Segment ui attached>
    <p>Cats are thought of as being related to dogs, but only humans think this.</p>
</Segment>
<Header ui h5 attached>
    Lions
</Header>
<Segment ui attached>
    <p>Humans don't think of lions as being like cats, but they are.</p>
</Segment>
<Message ui bottom attached warning>
    <Icon warning/>
    You've reached the end of this content segment!
</Message>
    `,
    seamless_attached : `
<Segments ui horizontal>
    <Segment ui seamless left attached right aligned>
        <p>This segment is seamless left attached</p>
    </Segment>
    <Segment ui seamless right attached>
        <p>This segment is seamless right attached</p>
    </Segment>
</Segments>
    `,
    padded : `
<Segment ui padded>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>

<Segment ui very padded>
    <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
</Segment>
    `,
    fitted : `
<Segment ui fitted>
    <p>Fitted Segment</p>
</Segment>
<Segment ui horizontally fitted>
    <p>Horizontally fitted segment</p>
</Segment>
<Segment ui vertically fitted>
    <p>Vertically fitted segment</p>
</Segment>
    `,
    compact : `
<Segment ui compact>
    <p>Pellentesque habitant morbi</p>
</Segment>

<Segments ui compact>
    <Segment ui>
        <p>Pellentesque habitant morbi</p>
    </Segment>
    <Segment ui>
        <p>Pellentesque habitant morbi</p>
    </Segment>
</Segments>
    `,
    colored : `
<Segment ui red>Red</Segment>
<Segment ui orange>Orange</Segment>
<Segment ui yellow>Yellow</Segment>
<Segment ui olive>Olive</Segment>
<Segment ui green>Green</Segment>
<Segment ui teal>Teal</Segment>
<Segment ui blue>Blue</Segment>
<Segment ui violet>Violet</Segment>
<Segment ui purple>Purple</Segment>
<Segment ui pink>Pink</Segment>
<Segment ui brown>Brown</Segment>
<Segment ui grey>Grey</Segment>
<Segment ui black>Black</Segment>

<Segment ui inverted red>Red</Segment>
<Segment ui inverted orange>Orange</Segment>
<Segment ui inverted yellow>Yellow</Segment>
<Segment ui inverted olive>Olive</Segment>
<Segment ui inverted green>Green</Segment>
<Segment ui inverted teal>Teal</Segment>
<Segment ui inverted blue>Blue</Segment>
<Segment ui inverted violet>Violet</Segment>
<Segment ui inverted purple>Purple</Segment>
<Segment ui inverted pink>Pink</Segment>
<Segment ui inverted brown>Brown</Segment>
<Segment ui inverted grey>Grey</Segment>
<Segment ui inverted black>Black</Segment>
    `,
    emphasis : `
<Segment ui>
    <p>I'm here to tell you something, and you will probably read me first.</p>
</Segment>
<Segment ui secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
</Segment>
<Segment ui tertiary>
    <p>If you notice me you must be looking very hard.</p>
</Segment>

<Segment ui inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
</Segment>
<Segment ui secondary inverted>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
</Segment>
<Segment ui tertiary inverted>
    <p>If you notice me you must be looking very hard.</p>
</Segment>

<Segment ui red inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
</Segment>
<Segment ui red secondary inverted>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
</Segment>
<Segment ui red tertiary inverted>
    <p>If you notice me you must be looking very hard.</p>
</Segment>
    `,
    circular : `
<Segment ui circular>
    <Header ui h2>
        Buy Now
        <Header sub>$10.99</Header>
    </Header>
</Segment>
<Segment ui inverted circular>
    <Header ui h2 inverted>
        Buy Now
        <Header sub>$10.99</Header>
    </Header>
</Segment>
    `,
    clearing : `
<Segment ui clearing>
    <Button ui right floated>Floated</Button>
</Segment>
    `,
    floated : `
<Segment ui right floated>
    <p>This segment will appear to the right</p>
</Segment>
<Segment ui left floated>
    This segment will appear to the left
</Segment>
<Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
    `,
    text_alignment : `
<Segment ui right aligned>
    Right
</Segment>
<Segment ui left aligned>
    Left
</Segment>
<Segment ui center aligned>
    Center
</Segment>
    `,
    basic : `
<Segment ui basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</Segment>
    `,
    scrolling : `
<Segment ui scrolling>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>

<Segment ui short scrolling>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>
    `

}

export default code;