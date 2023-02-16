<script lang="ts">
    import { Container, Column, Placeholder, Line, Paragraph, Image } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/container.html">here</a></h3>

<h4>A text container</h4>
<br/>
<Container ui style="text">
    This is some text
</Container>

<h4>Container with grids</h4>
<br/>
<Container ui style="four column doubling stackable grid">
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
