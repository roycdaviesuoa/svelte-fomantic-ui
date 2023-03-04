<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Step, Steps, Icon, Content, Title, Description, Grid, Column, Segment, Placeholder, Header, Line, Paragraph } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';

    let sizes = ["mini", "tiny", "small", "large", "big", "huge", "massive"];
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/step.html">here</a></div>

    <div class="example">
        <h4 class="example-header">External</h4>

        <Steps ui>
            <Step>
              Shipping
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step>
        Shipping
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Steps</h4>

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
                <Icon info/>>
                <Content>
                    <Title>Confirm Order</Title>
                </Content>
            </Step>
        </Steps>

        <Prism language="svelte" source={`
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
        <Icon info/>>
        <Content>
            <Title>Confirm Order</Title>
        </Content>
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Ordered</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Vertical</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Description</h4>

        <Steps ui>
            <Step>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step>
        <Content>
            <Title>Shipping</Title>
            <Description>Choose your shipping options</Description>
        </Content>
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icon</h4>

        <Steps ui>
            <Step>
                <Icon truck/>
                <Content>
                    <Title>Shipping</Title>
                    <Description>Choose your shipping options</Description>
                </Content>
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step>
        <Icon truck/>
        <Content>
            <Title>Shipping</Title>
            <Description>Choose your shipping options</Description>
        </Content>
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Link</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Active</h4>

        <Steps ui>
            <Step active>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step active>
        <Icon payment/>
        <Content>
            <Title>Billing</Title>
            <Description>Enter billing information</Description>
        </Content>
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Completed</h4>

        <Steps ui>
            <Step completed>
                <Icon payment/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step completed>
        <Icon payment/>
        <Content>
            <Title>Billing</Title>
            <Description>Enter billing information</Description>
        </Content>
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Disabled</h4>

        <Steps ui>
            <Step disabled>
              Billing
            </Step>
        </Steps>

        <Prism language="svelte" source={`
<Steps ui>
    <Step disabled>
        Billing
    </Step>
</Steps>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Stackable</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fluid</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Unstackable</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Attached</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Evenly distributed</h4>
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
        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

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
        
        <Prism language="svelte" source={`
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
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>

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

        <Prism language="svelte" source={`
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
    `}/>
    </div>
    
</div>
