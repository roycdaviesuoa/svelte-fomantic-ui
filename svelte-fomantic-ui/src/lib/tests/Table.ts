// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    definition : `
<Table class="ui celled table">
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
    `
};

export default code;