<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Table, Table_Body, Table_Col, Table_Head, Table_Row, Table_Foot, Header, Rating, Link, Menu, Icon, Content, Image, Button, Checkbox, Input, Label } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Table';
</script>


<Examples
    title = "Table examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/table.html'>here</a>">


    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Definition example -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Definition example" code = {Code.definition_example}>

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

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- With footer -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "With footer" code = {Code.with_footer}>

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
                            <Link icon item>
                                <Icon right chevron/>
                            </Link>
                        </Menu>
                    </Table_Col>
                </Table_Row>
            </Table_Foot>
        </Table>

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Collapsing example -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Collapsing example" code = {Code.collapsing_example}>

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

    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Striped example -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Striped example" code = {Code.striped_example}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Definition -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Definition" code = {Code.definition}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Compact definition -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Compact definition" code = {Code.compact_definition}>

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
            <Table_Foot full-width>
                <Table_Row>
                    <Table_Col head></Table_Col>
                    <Table_Col colspan="4">
                        <Button ui right floated small primary labeled icon>
                            <Icon user/> Add User
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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Rowspanned -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Rowspanned" code = {Code.rowspanned}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Structured -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Structured" code = {Code.structured}>

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
                    <Table_Col right aligned>2</Table_Col>
                    <Table_Col center aligned>
                        <Icon large green checkmark/>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col rowspan="3">Beta Team</Table_Col>
                    <Table_Col>Project 1</Table_Col>
                    <Table_Col right aligned>52</Table_Col>
                    <Table_Col center aligned>
                        <Icon large green checkmark/>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Project 2</Table_Col>
                    <Table_Col right aligned>12</Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col center aligned>
                        <Icon large green checkmark/>
                    </Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Project 3</Table_Col>
                    <Table_Col right aligned>21</Table_Col>
                    <Table_Col center aligned>
                        <Icon large green checkmark/>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Positive / negative states -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Positive / Negative states" code = {Code.positive_negative}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Cell error state -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Cell error state" code = {Code.error}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Warning -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Warning" code = {Code.warning}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Active -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Active" code = {Code.active}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Disabled -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Disabled" code = {Code.disabled}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Colored -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Colored" code = {Code.colored}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Marked -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Marked" code = {Code.marked}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Colored and marked -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Colored and marked" code = {Code.colored_marked}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Single line -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Single line" code = {Code.single_line}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Fixed -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Fixed" code = {Code.fixed}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Stacking -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Stacking" code = {Code.stacking}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Selectable row -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Selectable Row" code = {Code.selectable_row}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Selectable cell -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Selectable cell" code = {Code.selectable_cell}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Vertical Alignment -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Vertical Alignment" code = {Code.vertical_alignment}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Text Alignment -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Text Alignment" code = {Code.text_alignment}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Striped -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Striped" code = {Code.striped}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Celled -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Celled" code = {Code.celled}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Basic -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Basic" code = {Code.basic}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Collapsing cell -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Collapsing cell" code = {Code.collapsing_cell}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Column count -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Column count" code = {Code.column_count}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Column width -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Column width" code = {Code.column_width}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Collapsing -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Collapsing" code = {Code.collapsing}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Colored -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Colored" code = {Code.colored_table}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Inverted -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Inverted" code = {Code.inverted}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Sortable -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Sortable" code = {Code.sortable}>

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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Full-width header / footer -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Full-width header / footer" code = {Code.full_width}>

        <Table ui compact celled definition>
            <Table_Head full-width>
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
            <Table_Foot full-width>
                <Table_Row>
                    <Table_Col head></Table_Col>
                    <Table_Col colspan="4">
                    <Button ui right floated small primary labeled icon>
                        <Icon user/> Add User
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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Padded -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Padded" code = {Code.padded}>

        <Table ui padded>
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
                    <Table_Col>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Jamie was not interested in purchasing our product.</Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>

        <Table ui very padded>
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
                    <Table_Col>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Jamie was not interested in purchasing our product.</Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Compact -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Compact" code = {Code.compact}>

        <Table ui compact>
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
                    <Table_Col>John</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>None</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Requires call</Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>

        <Table ui very compact>
            <Table_Head>
                <Table_Row>
                    <Table_Col head>Name</Table_Col>
                    <Table_Col head>Status</Table_Col>
                    <Table_Col head>Another Status</Table_Col>
                    <Table_Col head>Notes</Table_Col>
                </Table_Row>
            </Table_Head>
            <Table_Body>
                <Table_Row>
                    <Table_Col>John</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>None</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Requires call</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>John</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>None</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Requires call</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>John</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>None</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Requires call</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>John</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>None</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jamie</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Approved</Table_Col>
                    <Table_Col>Requires call</Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Size -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Size" code = {Code.size}>

        <Table ui small>
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

        <Table ui large>
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
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Scrolling -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Scrolling" code = {Code.scrolling}>

        <Table ui unstackable celled scrolling>
            <Table_Head>
                <Table_Row>
                    <Table_Col head>Name</Table_Col>
                    <Table_Col head>Age</Table_Col>
                    <Table_Col head>Job</Table_Col>
                </Table_Row>
            </Table_Head>
            <Table_Body>
                <Table_Row>
                    <Table_Col>James</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jill</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Elyse</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Daphne</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Zoe</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Kirk</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Doug</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Francis</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Claire</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Thomas</Table_Col>
                    <Table_Col>27</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Clint</Table_Col>
                    <Table_Col>31</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Alison</Table_Col>
                    <Table_Col>21</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Rachel</Table_Col>
                    <Table_Col>19</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Dave</Table_Col>
                    <Table_Col>23</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Oliver</Table_Col>
                    <Table_Col>29</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Sue</Table_Col>
                    <Table_Col>23</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jennifer</Table_Col>
                    <Table_Col>22</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Zak</Table_Col>
                    <Table_Col>27</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
            </Table_Body>
            <Table_Foot>
                <Table_Row>
                    <Table_Col>18 Entries</Table_Col>
                    <Table_Col>Average age: 25</Table_Col>
                    <Table_Col>2 Job-Types</Table_Col>
                </Table_Row>
            </Table_Foot>
        </Table>

        <Table ui unstackable celled long scrolling>
            <Table_Head>
                <Table_Row>
                    <Table_Col head>Name</Table_Col>
                    <Table_Col head>Age</Table_Col>
                    <Table_Col head>Job</Table_Col>
                </Table_Row>
            </Table_Head>
            <Table_Body>
                <Table_Row>
                    <Table_Col>James</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jill</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Elyse</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Daphne</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Zoe</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Kirk</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Doug</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Francis</Table_Col>
                    <Table_Col>26</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Claire</Table_Col>
                    <Table_Col>24</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Thomas</Table_Col>
                    <Table_Col>27</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Clint</Table_Col>
                    <Table_Col>31</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Alison</Table_Col>
                    <Table_Col>21</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Rachel</Table_Col>
                    <Table_Col>19</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Dave</Table_Col>
                    <Table_Col>23</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Oliver</Table_Col>
                    <Table_Col>29</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Sue</Table_Col>
                    <Table_Col>23</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Jennifer</Table_Col>
                    <Table_Col>22</Table_Col>
                    <Table_Col>Engineer</Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>Zak</Table_Col>
                    <Table_Col>27</Table_Col>
                    <Table_Col>Designer</Table_Col>
                </Table_Row>
            </Table_Body>
            <Table_Foot>
                <Table_Row>
                    <Table_Col>18 Entries</Table_Col>
                    <Table_Col>Average age: 25</Table_Col>
                    <Table_Col>2 Job-Types</Table_Col>
                </Table_Row>
            </Table_Foot>
        </Table>
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Stuck -->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->
    <Example title = "Stuck" code = {Code.stuck}>

        <div class="ui short scrolling container">
            <Table ui first last head foot stuck unstackable celled>
                <Table_Head>
                    <Table_Row>
                        <Table_Col head>Name</Table_Col>
                        <Table_Col head>Age</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Job</Table_Col>
                        <Table_Col head>Summary</Table_Col>
                    </Table_Row>
                </Table_Head>
                <Table_Body>
                    <Table_Row>
                        <Table_Col>James</Table_Col>
                        <Table_Col>24</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Accepted</Table_Col>
                    </Table_Row>
                    <Table_Row>
                        <Table_Col>Jill</Table_Col>
                        <Table_Col>26</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Accepted</Table_Col>
                    </Table_Row>
                    <Table_Row>
                        <Table_Col>Elyse</Table_Col>
                        <Table_Col>24</Table_Col>
                        <Table_Col>Designer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Pending</Table_Col>
                    </Table_Row>
                    <Table_Row>
                        <Table_Col>Daphne</Table_Col>
                        <Table_Col>24</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Accepted</Table_Col>
                    </Table_Row>
                    <Table_Row>
                        <Table_Col>Zoe</Table_Col>
                        <Table_Col>26</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Accepted</Table_Col>
                    </Table_Row>
                    <Table_Row>
                        <Table_Col>Kirk</Table_Col>
                        <Table_Col>24</Table_Col>
                        <Table_Col>Designer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Engineer</Table_Col>
                        <Table_Col>Pending</Table_Col>
                    </Table_Row>
                </Table_Body>
                <Table_Foot>
                    <Table_Row>
                        <Table_Col>Names:6</Table_Col>
                        <Table_Col>av.25</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>Jobs : 2</Table_Col>
                        <Table_Col>2 Pending</Table_Col>
                    </Table_Row>
                </Table_Foot>
            </Table>
        </div>
        
    </Example>
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------->


</Examples>