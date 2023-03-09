// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    external : `
<Steps ui>
    <Step>
        Shipping
    </Step>
</Steps>
    `,
    steps : `
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
    `,
    ordered : `
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
    `,
    vertical : `
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
    `,
    description : `
<Steps ui>
    <Step>
        <Content>
            <Title>Shipping</Title>
            <Description>Choose your shipping options</Description>
        </Content>
    </Step>
</Steps>
    `,
    icon : `
<Steps ui>
    <Step>
        <Icon truck/>
        <Content>
            <Title>Shipping</Title>
            <Description>Choose your shipping options</Description>
        </Content>
    </Step>
</Steps>
    `,
    link : `
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
    `,
    active : `
<Steps ui>
    <Step active>
        <Icon payment/>
        <Content>
            <Title>Billing</Title>
            <Description>Enter billing information</Description>
        </Content>
    </Step>
</Steps>
    `,
    completed : `
<Steps ui>
    <Step completed>
        <Icon payment/>
        <Content>
            <Title>Billing</Title>
            <Description>Enter billing information</Description>
        </Content>
    </Step>
</Steps>
    `,
    disabled : `
<Steps ui>
    <Step disabled>
        Billing
    </Step>
</Steps>
    `,
    stackable : `
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
    `,
    fluid : `
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
    `,
    unstackable : `
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
    `,
    attached : `
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
    `,
    evenly_distributed : `
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
    `,
    size : `
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
    `,
    inverted : `
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
    `
}

export default code;