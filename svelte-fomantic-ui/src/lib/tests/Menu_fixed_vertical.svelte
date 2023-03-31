<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Menu, Item, Image, Icon, Link, Dropdown, Grid, Column, Header, List, Text, Placeholder, Line, Paragraph, Segment, Divider, Input, Label, Popup, Button, Results } from "../svelte-fomantic-ui.svelte";
</script>

<Menu ui left fixed vertical>
    <Item>
        <Image ui mini src="/images/logo.png"/>
    </Item>
    <Link item>Features</Link>
    <Link item>Testimonials</Link>
    <Link item>Sign-in</Link>
</Menu>
<Segment>
    <Placeholder ui>
        <Header image>
            <Line/>
            <Line/>
        </Header>
        <Paragraph>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
        </Paragraph>
    </Placeholder>            
</Segment>
<Menu ui right fixed vertical>
    <Item>
        <Image ui mini src="/images/logo.png"/>
    </Item>
    <Link item>Features</Link>
    <Link item>Testimonials</Link>
    <Link item>Sign-in</Link>
</Menu>