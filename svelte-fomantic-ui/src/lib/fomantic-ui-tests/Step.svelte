<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Step, Steps, Icon, Content, Title, Description } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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

        <Prism language="html" source={`
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
                <Icon payement/>
                <Content>
                    <Title>Billing</Title>
                    <Description>Enter billing information</Description>
                </Content>
            </Step>
        </steps>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Completed</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Disabled</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Stackable</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fluid</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Unstackable</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Attached</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Evenly distributed</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>

        <Prism language="html" source={`

    `}/>
    </div>
    
</div>
