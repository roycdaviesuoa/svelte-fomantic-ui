// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    large : `
<Flag ae large/>
<Flag france large />
<Flag myanmar large/>
    `,
    size : `
<Flag nz tiny/>tiny
<Flag uk small/>small
<Flag se medium/>medum
<Flag us large/>large
<Flag ci big/>big
<Flag greece huge/>huge
<Flag ukraine massive/>massive
    `,
    autosizing : `
<Segment ui basic>
    <Header ui small>Within a header <Flag us/></Header>
    <Button ui large>Within a button <Flag eu/></Button>
    <Label ui massive>Within a label <Flag pirate/></Label>
    <Text ui small orange>Within a text <Flag rainbow/></Text>
</Segment>
    `
};

export default code;