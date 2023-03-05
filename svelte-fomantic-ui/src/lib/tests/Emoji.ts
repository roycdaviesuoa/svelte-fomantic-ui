// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    disabled : `
<Segment ui basic>
    <Emoji anguished disabled/>
</Segment>
    `,
    loading : `
<Segment ui basic massive>
    <Emoji angel loading/>
    <Emoji blush loading/>
    <Emoji grin loading/>
</Segment>
    `,
    size : `
<Segment ui basic massive>
    <Emoji relaxed small/>Small
    <Emoji relaxed medium/>Medium
    <Emoji relaxed large/>Large
    <Emoji relaxed big/>Big
</Segment>
    `,
    autosizing : `
<Segment ui basic>
    <Header ui small>Within a header <Emoji relaxed/></Header>
    <Button ui large>Within a button <Emoji relaxed/></Button>

    <Label ui massive>Within a label <Emoji relaxed/></Label>

    <Text ui small orange>Within a text <Emoji relaxed/></Text>
</Segment>
    `,
    link : `
<Segment ui basic massive>
    <Emoji slight_smile link/>
</Segment>
    `
};

export default code;