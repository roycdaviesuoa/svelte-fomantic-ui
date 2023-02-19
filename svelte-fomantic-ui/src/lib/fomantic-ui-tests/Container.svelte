<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Container, Column, Placeholder, Line, Paragraph, Image } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
</script>

<div class="example-document">
    <h3 class="document-header">Container Examples</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/container.html">here</a></div>
  
    <div class="example">
      <h4 class="example-header">A Text Container</h4>

        <Container ui text>
            This is some text
        </Container>
    </div>

    <div class="example">
        <h4 class="example-header">Container with grids</h4><br/>
        <Container ui four column doubling stackable grid>
            <Column>
                <Placeholder ui>
                    <Image header>
                        <Line/>
                        <Line/>
                    </Image>
                    <Paragraph>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                    </Paragraph>
                </Placeholder>
            </Column>
            <Column>
                <Placeholder ui>
                    <Image header>
                        <Line/>
                        <Line/>
                    </Image>
                    <Paragraph>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                    </Paragraph>
                </Placeholder>
            </Column>
            <Column>
                <Placeholder ui>
                    <Image header>
                        <Line/>
                        <Line/>
                    </Image>
                    <Paragraph>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                    </Paragraph>
                </Placeholder>
            </Column>
            <Column>
                <Placeholder ui>
                    <Image header>
                        <Line/>
                        <Line/>
                    </Image>
                    <Paragraph>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                    </Paragraph>
                </Placeholder>
            </Column>
        </Container>
    </div>
</div>
