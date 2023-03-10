// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    grids : `
<Grid ui>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
</Grid>
    `,
    columns : `
<Grid ui>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column two wide> </Column>
    <Column eight wide> </Column>
    <Column six wide> </Column>
</Grid>
    `,
    rows : `
<Grid ui four column>
    <Row>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
</Grid>
    `,
    gutters : `
<Grid ui>
    <Row three column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
    <Row eight column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
</Grid>
<Grid ui relaxed>
    <Row three column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
    <Row eight column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
</Grid>
    `,
    negative_margins : `
<Button ui top attached>Button before grid</Button>
<Grid ui>
    <Column sixteen wide> </Column>
    <Column ten wide> </Column>
    <Column six wide> </Column>
</Grid>
<Grid ui>
    <Column sixteen wide> </Column>
</Grid>
<Button ui bottom attached>Button after grid</Button>
    `,
    automatic_flow : `
<Grid ui>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
</Grid>
    `,
    column_content : `
<Grid ui three column>
    <Column>
        <Segment ui>
            <Image />
        </Segment>
    </Column>
    <Column>
        <Segment ui>
            <Image />
        </Segment>
    </Column>
    <Column>
        <Segment ui>
            <Image />
        </Segment>
    </Column>
</Grid>
    `,
    column_widths : `
<Grid ui>
    <Column eight wide> </Column>
    <Column eight wide> </Column>
    <Column ten wide> </Column>
    <Column six wide> </Column>
    <Column four wide> </Column>
    <Column twelve wide> </Column>
    <Column two wide> </Column>
    <Column fourteen wide> </Column>
    <Column sixteen wide> </Column>
</Grid>
    `,
    attached : `
<Grid ui two column>
    <Column left attached> </Column>
    <Column right attached> </Column>
</Grid>
    `,
    grouping : `
<Grid ui four column>
    <Row two column>
        <Column> </Column>
    </Row>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
</Grid>
    `,
    clearing_floated : `
<Grid ui>
    <Row four column>
        <Column left floated> </Column>
        <Column right floated> </Column>
    </Row>
    <Row>
        <Column three wide> </Column>
        <Column eight wide> </Column>
        <Column five wide> </Column>
    </Row>
</Grid>
    `,
    special_grids : `
<Grid ui internally celled>
    <Row>
        <Column three wide>
             
        </Column>
        <Column ten wide>
             
        </Column>
        <Column three wide>
             
        </Column>
    </Row>
    <Row>
        <Column three wide>
             
        </Column>
        <Column ten wide>
             
        </Column>
        <Column three wide>
             
        </Column>
    </Row>
</Grid>
    `,
    nesting_grids : `
<Grid ui two column>
    <Column>
        <Grid ui three column>
            <Column> </Column>
            <Column> </Column>
            <Column> </Column>
        </Grid>
    </Column>
    <Column> </Column>
    <Column> </Column>
    <Column>
        <Grid ui>
            <Column ten wide> </Column>
            <Column six wide> </Column>
        </Grid>
    </Column>
</Grid>
    `,
    colored : `
<Grid ui equal width center aligned padded>
    <Row>
        <Column olive>
            <Box>Olive</Box>
        </Column>
        <Column black>
            <Box>Black</Box>
        </Column>
    </Row>
    <Row style="background-color: #869D05; color: #FFFFFF;">
        <Column>Custom Row</Column>
    </Row>
    <Row>
        <Column black>
            <Box>Black</Box>
        </Column>
        <Column olive>
            <Box>Olive</Box>
        </Column>
    </Row>
</Grid>
    `,
    automatic_column_count : `
<Grid ui equal width>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
    <Row equal width>
        <Column> </Column>
        <Column> </Column>
    </Row>
</Grid>
    `,
    centering_content : `
<Grid ui two column centered>
    <Column> </Column>
    <Row four column centered>
      <Column> </Column>
      <Column> </Column>
    </Row>
</Grid>
    `,
    significant_word_order : `
<Grid ui aligned>
    <Column left floated right aligned six wide>
        <Segment ui>
            Left floated right aligned column
        </Segment>
    </Column>
    <Column right floated left aligned six wide>
        <Segment ui>
            Right floated left aligned column
        </Segment>
    </Column>
    <Row center aligned two column>
        <Column>
            <Segment ui>
                Center aligned row
            </Segment>
        </Column>
        <Column>
            <Segment ui>
                Center aligned row
            </Segment>
        </Column>
    </Row>
    <Column right aligned sixteen wide>
        <Segment ui>
            Right Aligned Column
        </Segment>
    </Column>
</Grid>
    `,
    containers : `
<Container ui grid>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
    <Column four wide> </Column>
</Container>
    `,
    stackable : `
<Grid ui stackable four column>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
    <Column> </Column>
</Grid>
    `,
    reverse_order : `
<Grid ui mobile reversed equal width>
    <Column>
        First
    </Column>
    <Column>
        Second
    </Column>
    <Column>
        Third
    </Column>
</Grid>
    `,
    doubling : `
<Grid ui>
    <Row doubling eight column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
    <Row doubling six column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
    <Row doubling four column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
        <Column> </Column>
    </Row>
</Grid>
    `,
    manual_tweaks : `
<Grid ui centered>
    <Row computer only>
        <Column> </Column>
    </Row>
    <Column six wide tablet eight _="wide" computer> </Column>
    <Column six wide tablet eight _="wide" computer> </Column>
    <Column six wide tablet eight _="wide" computer> </Column>
    <Column six wide tablet eight _="wide" computer> </Column>
    <Column six wide tablet eight _="wide" computer> </Column>
</Grid>
    `

}

export default code;