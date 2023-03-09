<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Step, Steps, Icon, Content, Title, Description, Grid, Column, Segment, Placeholder, Header, Line, Paragraph } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Step';

    let sizes = ["mini", "tiny", "small", "large", "big", "huge", "massive"];
</script>

<Examples
    title = "Step examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/step.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- External -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "External" code = {Code.external}>

        <Steps ui>
            <Step>
              Shipping
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Steps -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Steps" code = {Code.steps}>

        <Steps ui>
            <Step>
                <Icon truck/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info/>
                <Content>
                    <Title>Confirm Order</Title>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Ordered -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Ordered" code = {Code.ordered}>

        <Steps ui ordered>
            <Step completed>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step completed>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step active>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vertical -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vertical" code = {Code.vertical}>

        <Steps ui vertical ordered>
            <Step completed>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step completed>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step active>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Description -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Description" code = {Code.description}>

        <Steps ui>
            <Step>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        <Steps ui>
            <Step>
                <Icon truck/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Link -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Link" code = {Code.link}>

        <Steps ui>
            <Step active link>
                <Icon truck/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step link>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

        <Steps ui>
            <Step link>
                <Icon truck/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step link>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active" code = {Code.active}>

        <Steps ui>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Completed -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Completed" code = {Code.completed}>

        <Steps ui>
            <Step completed>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Steps ui>
            <Step disabled>
              Billing
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable" code = {Code.stackable}>

        <Steps ui tablet stackable>
            <Step>
                <Icon plane/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon dollar/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info circle/>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Grid ui two column>
            <Column>
                <Steps ui fluid vertical>
                    <Step completed>
                        <Icon truck/>
                        <Content>
                            <Title>Shipping</Title>
                            <Description>Choose your shipping options</Description>
                        </Content>
                    </Step>
                    <Step active>
                        <Icon dollar/>
                        <Content>
                            <Title>Billing</Title>
                            <Description>Enter billing information</Description>
                        </Content>
                    </Step>
                </Steps>
            </Column>
            <Column>
                <p>The steps take up the entire column width</p>
            </Column>
        </Grid>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Unstackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Unstackable" code = {Code.unstackable}>

        <Steps ui tablet unstackable>
            <Step>
                <Icon plane/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon dollar/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info circle/>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Attached" code = {Code.attached}>

        <Steps ui three top attached>
            <Step>
                <Icon plane/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info circle/>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>
        <Segment ui attached>
            <Placeholder ui fluid> <Header image> <Line/> <Line/> </Header> <Paragraph> <Line/> <Line/> <Line/> <Line/> <Line/> </Paragraph> </Placeholder>
        </Segment>
        <Steps ui three bottom attached>
            <Step>
                <Icon plane/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info circle/>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Evenly distributed -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Evenly distributed" code = {Code.evenly_distributed}>
        
        <Steps ui three>
            <Step>
                <Icon plane/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
            <Step disabled>
                <Icon info circle/>
                <Content>
                    <Title>Confirm Order</Title>
                    <Description>Verify order details</Description>
                </Content>
            </Step>
        </Steps>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each sizes as size, i}
            {#if i > 0}
                <br/><br/>
            {/if}
            <Steps ui _={size}>
                <Step>
                    <Icon plane/>
                    <Content>
                        <Title>Shipping</Title>
                        <Description>Choose your shipping options</Description>
                    </Content>
                </Step>
                <Step active>
                    <Icon payment/>
                    <Content>
                        <Title>Billing</Title>
                        <Description>Enter billing information</Description>
                    </Content>
                </Step>
                <Step disabled>
                    <Icon info circle/>
                    <Content>
                        <Title>Confirm Order</Title>
                        <Description>Verify order details</Description>
                    </Content>
                </Step>
            </Steps>
        {/each}
        
    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Steps ui three inverted>
                <Step>
                    <Icon plane/>
                    <Content>
                        <Title>Shipping</Title>
                        <Description>Choose your shipping options</Description>
                    </Content>
                </Step>
                <Step active>
                    <Icon payment/>
                    <Content>
                        <Title>Billing</Title>
                        <Description>Enter billing information</Description>
                    </Content>
                </Step>
                <Step disabled>
                    <Icon info circle/>
                    <Content>
                        <Title>Confirm Order</Title>
                        <Description>Verify order details</Description>
                    </Content>
                </Step>
            </Steps>
        </Segment>
        <Segment ui inverted>
            <Steps ui three inverted ordered>
                <Step completed>
                    <Content>
                        <Title>Shipping</Title>
                        <Description>Choose your shipping options</Description>
                    </Content>
                </Step>
                <Step completed>
                    <Content>
                        <Title>Billing</Title>
                        <Description>Enter billing information</Description>
                    </Content>
                </Step>
                <Step active>
                    <Content>
                        <Title>Confirm Order</Title>
                        <Description>Verify order details</Description>
                    </Content>
                </Step>
            </Steps>
        </Segment>
        <Segment ui inverted>
            <Steps ui inverted vertical ordered>
                <Step completed>
                    <Content>
                        <Title>Shipping</Title>
                        <Description>Choose your shipping options</Description>
                    </Content>
                </Step>
                <Step completed>
                    <Content>
                        <Title>Billing</Title>
                        <Description>Enter billing information</Description>
                    </Content>
                </Step>
                <Step active>
                    <Content>
                        <Title>Confirm Order</Title>
                        <Description>Verify order details</Description>
                    </Content>
                </Step>
            </Steps>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    
</Examples>
