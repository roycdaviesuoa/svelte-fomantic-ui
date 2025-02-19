<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { reload, Button, Buttons, Content, Icon, Segment, Link, Divider } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Button';
</script>


<Examples
    title = "Button examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/button.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Standard -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Standard" code = {Code.standard}>

        <Button ui>Follow</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Emphasis -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Emphasis" code = {Code.emphasis}>

        <Button ui primary>Primary</Button>
        <Button ui secondary>Secondary</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Animated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Animated" code = {Code.animated}>

        <Button ui animated>
            <Content visible>Next</Content>
            <Content hidden>
                <Icon right arrow/>
            </Content>
        </Button>
        <Button ui vertical animated>
            <Content hidden>Shop</Content>
            <Content visible>
                <Icon shop/>
            </Content>
        </Button>
        <Button ui animated fade>
            <Content visible>Sign-up for a Pro account</Content>
            <Content hidden>
                $12.99 a month
            </Content>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Labeled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Labeled" code = {Code.labeled}>

        <Button ui labeled>
        <Button ui>
            <Icon heart/> Like
        </Button>
        <Link ui basic label>
            2,048
        </Link>
        </Button>
        <Button ui left labeled>
            <Link ui basic right pointing label>
            2,048
            </Link>
            <Button ui>
            <Icon heart/> Like
            </Button>
        </Button>
        <Button ui left labeled>
            <Link ui basic label>
            1,048
            </Link>
            <Button ui icon>
            <Icon fork/>
            </Button>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        <Button ui icon>
            <Icon cloud/>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Labeled Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Labeled Icon" code = {Code.labeled_icon}>

        <Button ui labeled icon>
            <Icon pause/>
            Pause
        </Button>
        <Button ui right labeled icon>
            <Icon right arrow/>
            Next
        </Button>
        <Button ui labeled icon>
            <Icon loading spinner/>
            Loading
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Basic -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Basic" code = {Code.basic}>

        <Button ui basic>
            <Icon user/>
            Add Friend
        </Button>
        <br/><br/>
        <Button ui primary basic>Primary</Button>
        <Button ui secondary basic>Secondary</Button>
        <Button ui positive basic>Positive</Button>
        <Button ui negative basic>Negative</Button>
        <br/><br/>
        <Button ui red basic>Red</Button>
        <Button ui orange basic>Orange</Button>
        <Button ui yellow basic>Yellow</Button>
        <Button ui olive basic>Olive</Button>
        <Button ui green basic>Green</Button>
        <Button ui teal basic>Teal</Button>
        <Button ui blue basic>Blue</Button>
        <Button ui violet basic>Violet</Button>
        <Button ui purple basic>Purple</Button>
        <Button ui pink basic>Pink</Button>
        <Button ui brown basic>Brown</Button>
        <Button ui grey basic>Grey</Button>
        <Button ui black basic>Black</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Tertiary -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Tertiary" code = {Code.tertiary}>

        <Button ui tertiary>
            Cancel Action
        </Button>
        <br/><br/>
        <Button ui primary tertiary>Primary</Button>
        <Button ui secondary tertiary>Secondary</Button>
        <Button ui red tertiary>Red</Button>
        <Button ui orange tertiary>Orange</Button>
        <Button ui yellow tertiary>Yellow</Button>
        <Button ui olive tertiary>Olive</Button>
        <Button ui green tertiary>Green</Button>
        <Button ui teal tertiary>Teal</Button>
        <Button ui blue tertiary>Blue</Button>
        <Button ui violet tertiary>Violet</Button>
        <Button ui purple tertiary>Purple</Button>
        <Button ui pink tertiary>Pink</Button>
        <Button ui brown tertiary>Brown</Button>
        <Button ui grey tertiary>Grey</Button>
        <Button ui black tertiary>Black</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Button ui inverted>Standard</Button>
            <Button ui inverted primary>Primary</Button>
            <Button ui inverted secondary>Secondary</Button>
            <Button ui inverted red>Red</Button>
            <Button ui inverted orange>Orange</Button>
            <Button ui inverted yellow>Yellow</Button>
            <Button ui inverted olive>Olive</Button>
            <Button ui inverted green>Green</Button>
            <Button ui inverted teal>Teal</Button>
            <Button ui inverted blue>Blue</Button>
            <Button ui inverted violet>Violet</Button>
            <Button ui inverted purple>Purple</Button>
            <Button ui inverted pink>Pink</Button>
            <Button ui inverted brown>Brown</Button>
            <Button ui inverted grey>Grey</Button>
            <Button ui inverted black>Black</Button>
        </Segment>
        <br/><br/>
        <Segment ui inverted>
            <Button ui inverted basic>Basic</Button>
            <Button ui inverted primary basic>Primary</Button>
            <Button ui inverted secondary basic>Secondary</Button>
            <Button ui inverted red basic>Basic Red</Button>
            <Button ui inverted orange basic>Basic Orange</Button>
            <Button ui inverted yellow basic>Basic Yellow</Button>
            <Button ui inverted olive basic>Basic Olive</Button>
            <Button ui inverted green basic>Basic Green</Button>
            <Button ui inverted teal basic>Basic Teal</Button>
            <Button ui inverted blue basic>Basic Blue</Button>
            <Button ui inverted violet basic>Basic Violet</Button>
            <Button ui inverted purple basic>Basic Purple</Button>
            <Button ui inverted pink basic>Basic Pink</Button>
            <Button ui inverted brown basic>Basic Brown</Button>
            <Button ui inverted grey basic>Basic Grey</Button>
            <Button ui inverted black basic>Basic Black</Button>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Groups -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Groups" code = {Code.groups}>

        <Buttons ui>
        <Button ui>One</Button>
        <Button ui>Two</Button>
        <Button ui>Three</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon Buttons" code = {Code.icon_buttons}>

        <Buttons ui icon>
            <Button ui><Icon align left/></Button>
            <Button ui><Icon align center/></Button>
            <Button ui><Icon align right/></Button>
            <Button ui><Icon align justify/></Button>
        </Buttons>
        <Buttons ui icon>
            <Button ui><Icon bold/></Button>
            <Button ui><Icon underline/></Button>
            <Button ui><Icon text width/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Conditionals -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Conditionals" code = {Code.conditionals}>

        <Buttons ui>
            <Button ui>Cancel</Button>
            <div class="or"></div>
            <Button ui positive>Save</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active state-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active state" code = {Code.active_state}>

        <Button ui active>
            <Icon user/>
            Follow
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Button ui disabled>
            <Icon user/>
            Followed
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Loading -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Loading" code = {Code.loading}>

        <Button ui loading>Loading</Button>
        <Button ui basic loading>Loading</Button>
        <Button ui primary loading>Loading</Button>
        <Button ui secondary loading>Loading</Button>
        <br/><br/>
        <Button ui double loading>Loading</Button>
        <Button ui basic double loading>Loading</Button>
        <Button ui primary double loading>Loading</Button>
        <Button ui secondary double loading>Loading</Button>
        <br/><br/>
        <Button ui elastic loading>Loading</Button>
        <Button ui basic elastic loading>Loading</Button>
        <Button ui primary elastic loading>Loading</Button>
        <Button ui secondary elastic loading>Loading</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Social -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Social" code = {Code.social}>

        <Button ui facebook>
            <Icon facebook/>
            Facebook
        </Button>
        <Button ui twitter>
            <Icon twitter/>
            Twitter
        </Button>
        <Button ui google plus>
            <Icon google plus/>
            Google Plus
        </Button>
        <Button ui vk>
            <Icon vk/>
            VK
        </Button>
        <Button ui linkedin>
            <Icon linkedin/>
            LinkedIn
        </Button>
        <Button ui instagram>
            <Icon instagram/>
            Instagram
        </Button>
        <Button ui youtube>
            <Icon youtube/>
            YouTube
        </Button>
        <Button ui whatsapp>
            <Icon whatsapp/>
            WhatsApp
        </Button>
        <Button ui telegram>
            <Icon telegram/>
            Telegram
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        <Button ui mini>
            Mini
        </Button>
        <Button ui tiny>
            Tiny
        </Button>
        <Button ui small>
            Small
        </Button>
        <Button ui medium>
            Medium
        </Button>
        <Button ui large>
            Large
        </Button>
        <Button ui big>
            Big
        </Button>
        <Button ui huge>
            Huge
        </Button>
        <Button ui massive>
            Massive
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floated" code = {Code.floated}>

        <Button ui right floated>Right Floated</Button>
        <Button ui left floated>Left Floated</Button>
        <br/><br/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Button ui red>Red</Button>
        <Button ui orange>Orange</Button>
        <Button ui yellow>Yellow</Button>
        <Button ui olive>Olive</Button>
        <Button ui green>Green</Button>
        <Button ui teal>Teal</Button>
        <Button ui blue>Blue</Button>
        <Button ui violet>Violet</Button>
        <Button ui purple>Purple</Button>
        <Button ui pink>Pink</Button>
        <Button ui brown>Brown</Button>
        <Button ui grey>Grey</Button>
        <Button ui black>Black</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Compact -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Compact" code = {Code.compact}>

        <Button ui compact>
            Hold
        </Button>
        <Button ui compact icon>
            <Icon pause icon/>
        </Button>
        <Button ui compact labeled icon>
            <Icon pause icon/>
            Pause
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Toggle -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Toggle" code = {Code.toggle}>

        <Button ui toggle active={false} on_style="green" off_style="grey">
            <Content slot="on">Voted</Content>
            <Content slot="off">Vote</Content>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Positive -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Positive" code = {Code.positive}>

        <Button ui positive>Positive Button</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Negative -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Negative" code = {Code.negative}>

        <Button ui negative>Negative Button</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Button ui fluid>Fits container</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Circular -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Circular" code = {Code.circular}>

        <Button ui circular icon>
            <Icon settings/>
        </Button>
        <Button ui circular facebook icon>
            <Icon facebook/>
        </Button>
        <Button ui circular twitter icon>
            <Icon twitter/>
        </Button>
        <Button ui circular linkedin icon>
            <Icon linkedin/>
        </Button>
        <Button ui circular google plus icon>
            <Icon google plus/>
        </Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vertically aligned -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vertically aligned" code = {Code.vertically_aligned}>

        <Button ui top attached>Top</Button>
        <Segment ui attached>
            <p>blah blah blah</p>
        </Segment>
        <Button ui bottom attached>Bottom</Button>
        <br/>
        <Buttons ui two top attached>
            <Button ui>One</Button>
            <Button ui>Two</Button>
        </Buttons>
        <Segment ui attached>
            <p>Hello World</p>
        </Segment>
        <Buttons ui two bottom attached>
            <Button ui>One</Button>
            <Button ui>Two</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Horizontally attached -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Horizontally attached" code = {Code.horizontally_attached}>

        <Button ui left attached>Left</Button>
        <Button ui right attached>Right</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Vertical buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Vertical buttons" code = {Code.vertical_buttons}>

        <Buttons ui vertical>
            <Button ui>Feed</Button>
            <Button ui>Messages</Button>
            <Button ui>Events</Button>
            <Button ui>Photos</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable" code = {Code.stackable}>

        <Buttons ui stackable>
            <Button ui>Feed</Button>
            <Button ui>Messages</Button>
            <Button ui>Events</Button>
            <Button ui>Photos</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Labeled icon buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Labeled icon buttons" code = {Code.labeled_icon_buttons}>

        <Buttons ui vertical labeled icon>
            <Button ui>
                <Icon pause/>
                Pause
            </Button>
            <Button ui>
                <Icon play/>
                Play
            </Button>
            <Button ui>
                <Icon shuffle/>
                Shuffle
            </Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Mixed group -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Mixed group" code = {Code.mixed_group}>

        <Buttons ui>
            <Button ui labeled icon>
                <Icon left chevron/>
                Back
            </Button>
            <Button ui>
                <Icon stop/>
                Stop
            </Button>
            <Button ui right labeled icon>
                Forward
                <Icon right chevron/>
            </Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Equal width -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Equal width" code = {Code.equal_width}>

        <Buttons ui five>
            <Button ui>Overview</Button>
            <Button ui>Specs</Button>
            <Button ui>Warranty</Button>
            <Button ui>Reviews</Button>
            <Button ui>Support</Button>
        </Buttons>
        <Buttons ui three>
            <Button ui>Overview</Button>
            <Button ui>Specs</Button>
            <Button ui>Support</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored buttons" code = {Code.colored_buttons}>

        <Buttons ui blue>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Basic buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Basic buttons" code = {Code.basic_buttons}>
        
        <Buttons ui basic>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
        </Buttons>
        <Divider ui/>
        <Buttons ui vertical basic>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
        </Buttons>
        <Divider ui/>
        <Buttons ui>
            <Button ui red basic>One</Button>
            <Button ui blue basic>Two</Button>
            <Button ui green basic>Three</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Group sizes -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Group sizes" code = {Code.group_sizes}>

        <Buttons ui large>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
        </Buttons>
        <br/><br/>
        <Buttons ui small basic icon>
            <Button ui><Icon file/></Button>
            <Button ui><Icon save/></Button>
            <Button ui><Icon upload/></Button>
            <Button ui><Icon download/></Button>
        </Buttons>
        <br/><br/>
        <Buttons ui>
            <Button ui>One</Button>
            <div class="or"></div>
            <Button ui>Two</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Wrapping buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Wrapping buttons" code = {Code.wrapping_buttons}>

        <Buttons ui wrapped wrapping>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
            <Button ui>Four</Button>
            <Button ui>Five</Button>
            <Button ui>Six</Button>
            <Button ui>Seven</Button>
            <Button ui>Eight</Button>
            <Button ui>Nine</Button>
            <Button ui>Ten</Button>
            <Button ui>Eleven</Button>
            <Button ui>Twelve</Button>
            <Button ui>Thirteen</Button>
            <Button ui>Fourteen</Button>
            <Button ui>Fifteen</Button>
            <Button ui>Sixteen</Button>
            <Button ui>Seventeen</Button>
            <Button ui>Eighteen</Button>
            <Button ui>Nineteen</Button>
            <Button ui>Twenty</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Spaced buttons -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Spaced buttons" code = {Code.spaced_buttons}>

        <Buttons ui spaced wrapping>
            <Button ui>One</Button>
            <Button ui>Two</Button>
            <Button ui>Three</Button>
            <Button ui>Four</Button>
            <Button ui>Five</Button>
            <Button ui>Six</Button>
            <Button ui>Seven</Button>
            <Button ui>Eight</Button>
            <Button ui>Nine</Button>
            <Button ui>Ten</Button>
            <Button ui>Eleven</Button>
            <Button ui>Twelve</Button>
            <Button ui>Thirteen</Button>
            <Button ui>Fourteen</Button>
            <Button ui>Fifteen</Button>
            <Button ui>Sixteen</Button>
            <Button ui>Seventeen</Button>
            <Button ui>Eighteen</Button>
            <Button ui>Nineteen</Button>
            <Button ui>Twenty</Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>