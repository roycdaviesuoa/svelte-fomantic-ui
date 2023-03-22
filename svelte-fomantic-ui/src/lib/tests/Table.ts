// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    definition_example : `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Age</Table_Col>
            <Table_Col head>Job</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col data-label="Name">James</Table_Col>
            <Table_Col data-label="Age">24</Table_Col>
            <Table_Col data-label="Job">Engineer</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col data-label="Name">Jill</Table_Col>
            <Table_Col data-label="Age">26</Table_Col>
            <Table_Col data-label="Job">Engineer</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col data-label="Name">Elyse</Table_Col>
            <Table_Col data-label="Age">24</Table_Col>
            <Table_Col data-label="Job">Designer</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    with_footer : `
<Table ui celled padded>
    <Table_Head>
        <Table_Row>
            <Table_Col head single line>Evidence Rating</Table_Col>
            <Table_Col head>Effect</Table_Col>
            <Table_Col head>Efficacy</Table_Col>
            <Table_Col head>Consensus</Table_Col>
            <Table_Col head>Comments</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>
                <Header ui h2 center aligned>A</Header>
            </Table_Col>
            <Table_Col single line>
                Power Output
            </Table_Col>
            <Table_Col>
                <Rating ui yellow data-rating="3" data-max-rating="3"/>
            </Table_Col>
            <Table_Col right aligned>
                80% <br>
                <Link href="#">18 studies</Link>
            </Table_Col>
            <Table_Col>
                Creatine supplementation is Table_Cole reference compound for increasing muscular creatine levels; Table_Colere is variability in Table_Colis increase, however, wiTable_Col some nonresponders.
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Header ui h2 center aligned>A</Header>
            </Table_Col>
            <Table_Col single line>
                Weight
            </Table_Col>
            <Table_Col>
                <Rating ui yellow data-rating="3" data-max-rating="3"/>
            </Table_Col>
            <Table_Col right aligned>
                100% <br>
                <Link href="#">65 studies</Link>
            </Table_Col>
            <Table_Col>Creatine is Table_Cole reference compound for power improvement, wiTable_Col numbers from one meta-analysis to assess potency</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col colspan="5">
                <Menu ui right floated pagination>
                    <Link icon item>
                        <Icon left chevron/>
                    </Link>
                    <Link item>1</Link>
                    <Link item>2</Link>
                    <Link item>3</Link>
                    <Link item>4</Link>
                    <Link class="icon item">
                        <Icon right chevron/>
                    </Link>
                </Menu>
            </Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    collapsing_example : `
<Table ui very basic collapsing celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Employee</Table_Col>
            <Table_Col head>Correct Guesses</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>
                <Header ui h4 image>
                    <Image ui mini rounded src="/images/lena.png"/>
                    <Content>
                        Lena
                        <Header sub>
                            Human Resources
                        </Header>
                    </Content>
                </Header>
            </Table_Col>
            <Table_Col>
                22
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Header ui h4 image>
                    <Image ui mini rounded src="/images/matthew.png"/>
                    <Content>
                        Matthew
                        <Header sub>
                            Fabric Design
                        </Header>
                    </Content>
                </Header>
            </Table_Col>
            <Table_Col>
                15
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Header ui h4 image>
                    <Image ui mini rounded src="/images/lindsay.png"/>
                    <Content>
                        Lindsay
                        <Header sub>
                            Entertainment
                        </Header>
                    </Content>
                </Header>
            </Table_Col>
            <Table_Col>
                12
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Header ui h4 image>
                    <Image ui mini rounded src="/images/mark.png"/>
                    <Content>
                        Mark
                        <Header sub>
                            Executive
                        </Header>
                    </Content>
                </Header>
            </Table_Col>
            <Table_Col>
                11
            </Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    striped_example: `
<Table ui celled striped>
    <Table_Head>
        <Table_Row>
            <Table_Col head colspan="3">
                Git Repository
            </Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col collapsing>
                <Icon folder/> node_modules
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col right aligned collapsing>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon folder/> test
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col right aligned>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon folder/> build
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col right aligned>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon file outline/> package.json
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col right aligned>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon file outline/> Gruntfile.js
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col right aligned>10 hours ago</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `, 
    definition: `
<Table ui definition>
    <Table_Head>
        <Table_Row>
            <Table_Col head></Table_Col>
            <Table_Col head>Arguments</Table_Col>
            <Table_Col head>Description</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>reset rating</Table_Col>
            <Table_Col>None</Table_Col>
            <Table_Col>Resets rating to default value</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>set rating</Table_Col>
            <Table_Col>rating (integer)</Table_Col>
            <Table_Col>Sets the current star rating to specified value</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    compact_definition: `
<Table ui compact celled definition>
    <Table_Head>
        <Table_Row>
            <Table_Col head></Table_Col>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Registration Date</Table_Col>
            <Table_Col head>E-mail address</Table_Col>
            <Table_Col head>Premium Plan</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col collapsing>
                <Checkbox ui fitted slider/>
            </Table_Col>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col collapsing>
                <Checkbox ui fitted slider/>
            </Table_Col>
            <Table_Col>Jamie Harington</Table_Col>
            <Table_Col>January 11, 2014</Table_Col>
            <Table_Col>jamieharingonton@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col collapsing>
                <Checkbox ui fitted slider/>
            </Table_Col>
            <Table_Col>Jill Lewis</Table_Col>
            <Table_Col>May 11, 2014</Table_Col>
            <Table_Col>jilsewris22@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot class="full-width">
        <Table_Row>
            <Table_Col head></Table_Col>
            <Table_Col colspan="4">
                <Button ui right floated small primary labeled icon>
                    <i class="user icon"></i> Add User
                </Button>
                <Button ui small>
                    Approve
                </Button>
                <Button ui small disabled>
                    Approve All
                </Button>
            </Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `, 
    rowspanned: `
<Table ui definition>
    <Table_Body>
        <Table_Row>
            <Table_Col rowspan="2">Category rowspanned</Table_Col>
            <Table_Col>Row one</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col rowspanned></Table_Col>
            <Table_Col>Row two</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    structured: `
<Table ui celled structured>
    <Table_Head>
        <Table_Row>
            <Table_Col head rowspan="2">Name</Table_Col>
            <Table_Col head rowspan="2">Type</Table_Col>
            <Table_Col head rowspan="2">Files</Table_Col>
            <Table_Col head colspan="3">Languages</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col head>Ruby</Table_Col>
            <Table_Col head>JavaScript</Table_Col>
            <Table_Col head>Python</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>Alpha Team</Table_Col>
            <Table_Col>Project 1</Table_Col>
            <Table_Col class="right aligned">2</Table_Col>
            <Table_Col class="center aligned">
                <Icon large green checkmark/>
            </Table_Col>
            <Table_Col></Table_Col>
            <Table_Col></Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col rowspan="3">Beta Team</Table_Col>
            <Table_Col>Project 1</Table_Col>
            <Table_Col class="right aligned">52</Table_Col>
            <Table_Col class="center aligned">
                <Icon large green checkmark/>
            </Table_Col>
            <Table_Col></Table_Col>
            <Table_Col></Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Project 2</Table_Col>
            <Table_Col class="right aligned">12</Table_Col>
            <Table_Col></Table_Col>
            <Table_Col class="center aligned">
                <Icon large green checkmark/>
            </Table_Col>
            <Table_Col></Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Project 3</Table_Col>
            <Table_Col class="right aligned">21</Table_Col>
            <Table_Col class="center aligned">
                <Icon large green checkmark/>
            </Table_Col>
            <Table_Col></Table_Col>
            <Table_Col></Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    positive_negative: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>No Name Specified</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col negative>None</Table_Col>
        </Table_Row>
        <Table_Row positive>
            <Table_Col>Jimmy</Table_Col>
            <Table_Col><Icon checkmark/> Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col positive><Icon close/> Requires call</Table_Col>
        </Table_Row>
        <Table_Row negative>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    error: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>No Name Specified</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row error>
            <Table_Col>Jimmy</Table_Col>
            <Table_Col>Cannot pull data</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col error><Icon attention/> Classified</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `, 
    warning: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>No Name Specified</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row warning>
            <Table_Col>Jimmy</Table_Col>
            <Table_Col><Icon attention/> Requires Action</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col warning><Icon attention/> Hostile</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    active: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row active>
            <Table_Col>John</Table_Col>
            <Table_Col>Selected</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col active>Jill</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    disabled: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row disabled>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Selected</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col disabled>Jill</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    colored: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col orange>No Name Specified</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row blue>
            <Table_Col>Jimmy</Table_Col>
            <Table_Col><Icon microphone/> Recording session</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col pink><Icon child/> Baby Party</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col green>Vacation</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    marked: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col right blue marked _="blue">No Name Specified</Table_Col>
            <Table_Col left red marked>Unknown</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row left green marked>
            <Table_Col>Jimmy</Table_Col>
            <Table_Col><Icon microphone/> Recording session</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col ight orange marked>Unknown</Table_Col>
            <Table_Col><Icon child/> Baby Party</Table_Col>
        </Table_Row>
        <Table_Row right purple marked>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Unknown</Table_Col>
            <Table_Col>Vacation</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    colored_marked: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col red colored right blue marked>No Name Specified</Table_Col>
            <Table_Col green colored left red marked>Unknown</Table_Col>
            <Table_Col yellow colored right purple marked>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    single_line: `
<Table ui single line>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Registration Date</Table_Col>
            <Table_Col head>E-mail address</Table_Col>
            <Table_Col head>Premium Plan</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie Harington</Table_Col>
            <Table_Col>January 11, 2014</Table_Col>
            <Table_Col>jamieharingonton@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill Lewis</Table_Col>
            <Table_Col>May 11, 2014</Table_Col>
            <Table_Col>jilsewris22@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    fixed: `
<Table ui fixed>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Description</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>

<Table ui fixed single line celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Description</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col title="This is much too long to fit I'm sorry about that">This is much too long to fit I'm sorry about that</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Shorter description</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>Shorter description</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    stacking: `
<Table ui unstackable>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head right aligned>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
    </Table_Body>
  </Table>
  
  <Table ui tablet stackable>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head right aligned>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    selectable_row: `
<Table ui selectable celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row warning>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col positive>Approved</Table_Col>
            <Table_Col warning>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col negative>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>

<Table ui selectable inverted>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head right aligned>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    selectable_cell: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Edit</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col selectable>
                <Link>Edit</Link>
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col selectable>
            <Link>Edit</Link>
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col selectable>
                <Link>Edit</Link>
            </Table_Col>
        </Table_Row>
        <Table_Row warning>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col selectable warning>
                <Link>Requires change</Link>
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col positive>Approved</Table_Col>
            <Table_Col selectable positive>
                <Link>Approve</Link>
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col negative>Denied</Table_Col>
            <Table_Col selectable negative>
                <Link>Remove</Link>
            </Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    vertical_alignment: `
<Table ui striped>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row top aligned>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col top aligned>
                Notes<br>
                1<br>
                2<br>
            </Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col bottom aligned>Approved</Table_Col>
            <Table_Col>
                Notes<br>
                1<br>
                2<br>
            </Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    text_alignment: `
<Table ui striped>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head right aligned>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row center aligned>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col right aligned>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col right aligned>None</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    striped: `
<Table ui striped>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Date Joined</Table_Col>
            <Table_Col head>E-mail</Table_Col>
            <Table_Col head>Called</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie Harington</Table_Col>
            <Table_Col>January 11, 2014</Table_Col>
            <Table_Col>jamieharingonton@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill Lewis</Table_Col>
            <Table_Col>May 11, 2014</Table_Col>
            <Table_Col>jilsewris22@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie Harington</Table_Col>
            <Table_Col>January 11, 2014</Table_Col>
            <Table_Col>jamieharingonton@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill Lewis</Table_Col>
            <Table_Col>May 11, 2014</Table_Col>
            <Table_Col>jilsewris22@yahoo.com</Table_Col>
            <Table_Col>Yes</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>John Lilki</Table_Col>
            <Table_Col>September 14, 2013</Table_Col>
            <Table_Col>jhlilk22@yahoo.com</Table_Col>
            <Table_Col>No</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    celled: `
<Table ui celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    basic: `
<Table ui basic>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>

<Table ui very basic>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    collapsing_cell: `
<Table ui>
    <Table_Body>
        <Table_Row>
            <Table_Col collapsing>
                <Icon folder/> node_modules
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon folder/> test
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col>10 hours ago</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>
                <Icon folder/> build
            </Table_Col>
            <Table_Col>Initial commit</Table_Col>
            <Table_Col>10 hours ago</Table_Col>
        </Table_Row>
    </Table_Body>
</Table>
    `,
    column_count: `
<Table ui five column>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Age</Table_Col>
            <Table_Col head>Gender</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>22</Table_Col>
            <Table_Col>Male</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>32</Table_Col>
            <Table_Col>Male</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>22</Table_Col>
            <Table_Col>Female</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
            <Table_Col head></Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    column_width: `
<Table ui>
    <Table_Head>
        <Table_Row>
            <Table_Col ten wide>Name</Table_Col>
            <Table_Col six wide>Status</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    collapsing: `
<Table ui collapsing>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `,
    colored_table: `
{#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "voilet", "purple", "pink", "grey", "black"] as color}
    <Table ui _={color}>
        <Table_Head>
            <Table_Row>
                <Table_Col head>Food</Table_Col>
                <Table_Col head>Calories</Table_Col>
                <Table_Col head>Protein</Table_Col>
            </Table_Row>
        </Table_Head>
        <Table_Body>
            <Table_Row>
                <Table_Col>Apples</Table_Col>
                <Table_Col>200</Table_Col>
                <Table_Col>0g</Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col>Orange</Table_Col>
                <Table_Col>310</Table_Col>
                <Table_Col>0g</Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
{/each}
    `,
    inverted: `
<Table ui inverted>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col>Approved</Table_Col>
            <Table_Col>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>

{#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "voilet", "purple", "pink", "grey", "black"] as color}
    <Table ui inverted _={color}>
        <Table_Head>
            <Table_Row>
                <Table_Col head>Food</Table_Col>
                <Table_Col head>Calories</Table_Col>
                <Table_Col head>Protein</Table_Col>
            </Table_Row>
        </Table_Head>
        <Table_Body>
            <Table_Row>
                <Table_Col>Apples</Table_Col>
                <Table_Col>200</Table_Col>
                <Table_Col>0g</Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col>Orange</Table_Col>
                <Table_Col>310</Table_Col>
                <Table_Col>0g</Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
{/each}
    `,
    sortable: `
<Table ui sortable celled>
    <Table_Head>
        <Table_Row>
            <Table_Col head>Name</Table_Col>
            <Table_Col head>Status</Table_Col>
            <Table_Col head>Notes</Table_Col>
        </Table_Row>
    </Table_Head>
    <Table_Body>
        <Table_Row>
            <Table_Col>John</Table_Col>
            <Table_Col>No Action</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jamie</Table_Col>
            <Table_Col positive>Approved</Table_Col>
            <Table_Col warning>Requires call</Table_Col>
        </Table_Row>
        <Table_Row>
            <Table_Col>Jill</Table_Col>
            <Table_Col negative>Denied</Table_Col>
            <Table_Col>None</Table_Col>
        </Table_Row>
    </Table_Body>
    <Table_Foot>
        <Table_Row>
            <Table_Col head>3 People</Table_Col>
            <Table_Col head>2 Approved</Table_Col>
            <Table_Col head></Table_Col>
        </Table_Row>
    </Table_Foot>
</Table>
    `
};

export default code;