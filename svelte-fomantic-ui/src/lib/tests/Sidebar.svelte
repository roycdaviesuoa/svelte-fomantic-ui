<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, update, Menu, Sidebar, Item, Checkbox, Button, Icon, Buttons, Header, Segment, Pusher, Placeholder, Paragraph, Line, Link } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Sidebar';

    let dimPage = true;
    let direction = "left";

    function sidebar13_transition(direction, dimPage, animation) {
        behavior({id: "sidebar13"+direction, type: "sidebar", settings: {dimPage: dimPage, transition: animation, }})
        behavior("sidebar13"+direction, "toggle");
    }
</script>


<Examples
    title = "Sidebar examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/sidebar.html'>here</a>"
    disclaimer = "Note that here the page is embedded inside an iFrame, so is not including the Menu."
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Sidebar -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Sidebar" code = {Code.sidebar}>

        <Sidebar ui inverted vertical menu id="sidebar1">
            <Item link> 1 </Item>
            <Item link> 2 </Item>
            <Item link> 3 </Item>
            <Item link> 4 </Item>
        </Sidebar>

        <Sidebar ui inverted vertical menu id="sidebar2">
            <Item link><Icon home/> Home </Item>
            <Item link><Icon block layout/> Topics</Item>
            <Item link><Icon smile/> Friends</Item>
        </Sidebar>

        <Sidebar ui top inverted menu id="sidebar4"><Item>Top</Item></Sidebar>
        <Sidebar ui bottom inverted menu id="sidebar5"><Item>Bottom</Item></Sidebar>
        <Sidebar ui left inverted menu id="sidebar6"><Item>Left</Item></Sidebar>
        <Sidebar ui right inverted menu id="sidebar7"><Item>Right</Item></Sidebar>

        {#each ["very thin", "thin", "", "wide", "very wide"] as width, i}
            <Sidebar ui inverted menu _={width} id={"sidebar"+(8+i)}><Item>{width}</Item></Sidebar>
        {/each}

        <Buttons ui spaced wrapping>
            <Button ui on:click={()=>{behavior("sidebar1", "toggle")}}>Link menu items</Button>
            <Button ui on:click={()=>{behavior("sidebar2", "toggle")}}>Link icons</Button>
            <Button ui on:click={()=>{behavior("sidebar4", "toggle"); behavior("sidebar5", "toggle"); behavior("sidebar6", "toggle"); behavior("sidebar7", "toggle")}}>Toggle directional sidebars</Button>
            {#each ["very thin", "thin", "", "wide", "very wide"] as width, i}
                <Button ui on:click={()=>{behavior("sidebar"+(8+i), "toggle")}}>Toggle {width}</Button>
            {/each}
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Transitions -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Transitions" code = {Code.transitions}>

        <Sidebar ui top inverted menu id="sidebar13top"><Item>Top</Item></Sidebar>
        <Sidebar ui bottom inverted menu id="sidebar13bottom"><Item>Bottom</Item></Sidebar>
        <Sidebar ui left inverted menu id="sidebar13left"><Item>Left</Item></Sidebar>
        <Sidebar ui right inverted menu id="sidebar13right"><Item>Right</Item></Sidebar>
        <p></p>

        <Checkbox ui toggle label={"Dim Page"} bind:checked={dimPage}></Checkbox>
        <p></p>
        <Header ui h4>Direction</Header>
        <Buttons ui>
            <Button ui _={direction==="left"?"blue":"grey"} on:click={()=>direction="left"}>Left</Button>
            <Button ui _={direction==="right"?"blue":"grey"} on:click={()=>direction="right"}>Right</Button>
            <Button ui _={direction==="top"?"blue":"grey"} on:click={()=>direction="top"}>Top</Button>
            <Button ui _={direction==="bottom"?"blue":"grey"} on:click={()=>direction="bottom"}>Bottom</Button>
        </Buttons>
        <p></p>
        <Header ui h4>All Direction Animations</Header>
        <Button ui on:click={() => sidebar13_transition(direction, dimPage, "overlay")}>Overlay</Button>
        <Button ui on:click={() => sidebar13_transition(direction, dimPage, "push")}>Push</Button>
        <Button ui on:click={() => sidebar13_transition(direction, dimPage, "scale down")}>Scale Down</Button>
        <p></p>
        <Header ui h4>Vertical-only Animations</Header>
        <Button ui disabled={direction === "top" || direction === "bottom"} on:click={() => sidebar13_transition(direction, dimPage, "uncover")}>Uncover</Button>
        <Button ui disabled={direction === "top" || direction === "bottom"} on:click={() => sidebar13_transition(direction, dimPage, "slide along")}>Slide along</Button>
        <Button ui disabled={direction === "top" || direction === "bottom"} on:click={() => sidebar13_transition(direction, dimPage, "slide out")}>Slide out</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Custom context -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Custom context" code = {Code.custom_context}>

        <Menu ui top attached demo>
            <Link item on:click={() => behavior('sidebar14', 'toggle')}>
              <Icon sidebar/>
              Menu
            </Link>
        </Menu>
        <Segment ui bottom attached pushable id="sidebar14content">
            <Sidebar ui inverted labeled icon left inline vertical menu id="sidebar14" settings={{"context":"#sidebar14content"}}>
                <Item link><Icon home/> Home </Item>
                <Item link><Icon block layout/> Topics</Item>
                <Item link><Icon smile/> Friends</Item>
            </Sidebar>
            <Pusher>
                <Segment ui basic>
                    <Placeholder ui fluid>
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
                            <Line/>
                            <Line/>
                            <Line/>
                            <Line/>
                        </Paragraph>
                    </Placeholder>
                </Segment>
            </Pusher>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



   <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Starting visible -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Starting visible" code = {Code.starting_visible}>

        <Menu ui top attached demo>
            <Link item on:click={() => behavior('sidebar15', 'toggle')}>
              <Icon sidebar/>
              Menu
            </Link>
        </Menu>
        <Segment ui bottom attached pushable id="sidebar15content">
            <Sidebar ui visible inverted left vertical menu id="sidebar15" settings={{"context":"#sidebar15content"}}>
                <Item link><Icon home/> Home </Item>
                <Item link><Icon block layout/> Topics</Item>
                <Item link><Icon smile/> Friends</Item>
                <Item link><Icon calendar/>History</Item>
            </Sidebar>
            <Pusher>
                <Segment ui basic>
                    <Placeholder ui fluid>
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
                            <Line/>
                            <Line/>
                            <Line/>
                            <Line/>
                        </Paragraph>
                    </Placeholder>
                </Segment>
            </Pusher>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>