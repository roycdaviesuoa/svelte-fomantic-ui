<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Grid, Column, Row, Button, Segment, Container } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Box from "./Example_Box.svelte";
    import Code from './Grid';
</script>


<Examples
    title = "Grid examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/grid.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Grids -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Grids" code = {Code.grids}>

        <Grid ui>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Columns -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Columns" code = {Code.columns}>

        <Grid ui>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column two wide><Box/></Column>
            <Column eight wide><Box/></Column>
            <Column six wide><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Rows -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Rows" code = {Code.rows}>

        <Grid ui four column>
            <Row>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Gutters -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Gutters" code = {Code.gutters}>

        <Grid ui>
            <Row three column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
            <Row eight column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
        </Grid>
        <Grid ui relaxed>
            <Row three column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
            <Row eight column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Negative margins -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Negative margins" code = {Code.negative_margins}>

        <Button ui top attached>Button before grid</Button>
        <Grid ui>
            <Column sixteen wide><Box/></Column>
            <Column ten wide><Box/></Column>
            <Column six wide><Box/></Column>
        </Grid>
        <Grid ui>
            <Column sixteen wide><Box/></Column>
        </Grid>
        <Button ui bottom attached>Button after grid</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Automatic flow -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Automatic flow" code = {Code.automatic_flow}>

        <Grid ui>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Column content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Column content" code = {Code.column_content}>

        <Grid ui three column>
            <Column>
                <Segment ui>
                    <Box image/>
                </Segment>
            </Column>
            <Column>
                <Segment ui>
                    <Box image/>
                </Segment>
            </Column>
            <Column>
                <Segment ui>
                    <Box image/>
                </Segment>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Column widths -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Column widths" code = {Code.column_widths}>

        <Grid ui>
            <Column eight wide><Box/></Column>
            <Column eight wide><Box/></Column>
            <Column ten wide><Box/></Column>
            <Column six wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column twelve wide><Box/></Column>
            <Column two wide><Box/></Column>
            <Column fourteen wide><Box/></Column>
            <Column sixteen wide><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Left / Right attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached}>

        <Grid ui two column>
            <Column left attached><Box/></Column>
            <Column right attached><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Row grouping -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Grouping" code = {Code.grouping}>

        <Grid ui four column>
            <Row two column>
                <Column><Box/></Column>
            </Row>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Clearing floated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Clearing floated" code = {Code.clearing_floated}>

        <Grid ui>
            <Row four column>
                <Column left floated><Box/></Column>
                <Column right floated><Box/></Column>
            </Row>
            <Row>
                <Column three wide><Box/></Column>
                <Column eight wide><Box/></Column>
                <Column five wide><Box/></Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Special grids -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Special grids" code = {Code.special_grids}>

        <Grid ui internally celled>
            <Row>
                <Column three wide>
                    <Box image/>
                </Column>
                <Column ten wide>
                    <Box/>
                </Column>
                <Column three wide>
                    <Box image/>
                </Column>
            </Row>
            <Row>
                <Column three wide>
                    <Box image/>
                </Column>
                <Column ten wide>
                    <Box/>
                </Column>
                <Column three wide>
                    <Box image/>
                </Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Nesting grids -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Nesting grids" code = {Code.nesting_grids}>

        <Grid ui two column>
            <Column>
                <Grid ui three column>
                    <Column><Box/></Column>
                    <Column><Box/></Column>
                    <Column><Box/></Column>
                </Grid>
            </Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column>
                <Grid ui>
                    <Column ten wide><Box/></Column>
                    <Column six wide><Box/></Column>
                </Grid>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Grid ui equal width center aligned padded>
            <Row style="min-height: 50px;">
                <Column olive>
                    <Box simple>Olive</Box>
                </Column>
                <Column black>
                    <Box simple>Black</Box>
                </Column>
            </Row>
            <Row style="background-color: #869D05; color: #FFFFFF; min-height: 100px;">
                <Column><Box simple double_height>Custom Row</Box></Column>
            </Row>
            <Row>
                <Column black>
                    <Box simple>Black</Box>
                </Column>
                <Column olive>
                    <Box simple>Olive</Box>
                </Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Automatic column count -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Automatic column count" code = {Code.automatic_column_count}>

        <Grid ui equal width>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Row equal width>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Centering content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Centering content" code = {Code.centering_content}>

        <Grid ui two column centered>
            <Column><Box/></Column>
            <Row four column centered>
              <Column><Box/></Column>
              <Column><Box/></Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Significant word order -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Significant word order" code = {Code.significant_word_order}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Containers -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Containers" code = {Code.containers}>

        <Container ui grid>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
            <Column four wide><Box/></Column>
        </Container>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable" code = {Code.stackable}>

        <Grid ui stackable four column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
            <Column><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Reverse order -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Reverse order" code = {Code.reverse_order}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Doubling -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Doubling" code = {Code.doubling}>

        <Grid ui>
            <Row doubling eight column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
            <Row doubling six column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
            <Row doubling four column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
                <Column><Box/></Column>
            </Row>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Manual tweaks -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Manual tweaks" code = {Code.manual_tweaks}>
        <p>Note the underscore for the second 'wide' as you can't have two props with the same name.  If you were to want to add a third 'wide', say for a mobile device, you would need to include a whole section in quotes with the underscore prop.  For example _="wide computer two wide mobile".</p>

        <Grid ui centered>
            <Row computer only>
                <Column><Box/></Column>
            </Row>
            <Column six wide tablet eight _="wide" computer><Box/></Column>
            <Column six wide tablet eight _="wide" computer><Box/></Column>
            <Column six wide tablet eight _="wide" computer><Box/></Column>
            <Column six wide tablet eight _="wide" computer><Box/></Column>
            <Column six wide tablet eight _="wide" computer><Box/></Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



</Examples>