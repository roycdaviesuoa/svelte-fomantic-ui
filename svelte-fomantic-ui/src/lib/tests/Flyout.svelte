<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Flyout, Icon, Header, Content, Actions, Button, Segment, Menu, Link, Placeholder, Paragraph, Line } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Flyout';

    const flyoutSettings = {
        onHide: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['show']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['show']})}, 
        onShow: () => { behavior({id: 'mainmenu', type: 'sidebar', commands: ['hide']}); behavior({id: 'mainmenu_mobile', type: 'sidebar', commands: ['hide']})}
    }

    const tempFlyout = {
        debug: true,
        verbose: true,
        autoShow: true,
        title: 'Important Notice',
        closeIcon: true,
        content: 'You will be logged out in 5 Minutes',
        actions: [{
                text: 'Alright, got it',
                class: 'green',
                icon: 'save'
            }]
        }
</script>


<Examples
    title = "Flyout examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/flyout.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Flyout -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Flyout" code = {Code.flyout}>

        <Flyout ui id="flyout1" settings={flyoutSettings}>
            <Icon close/>
            <Header ui>
                <Icon question/>
                <Content>
                    Archive Old Messages
                </Content>
            </Header>
            <Content>
                <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
            </Content>
            <Actions>
                <Button ui red cancel>
                    <Icon remove/>
                    No
                </Button>
                <Button ui green ok>
                    <Icon checkmark/>
                    Yes
                </Button>
            </Actions>
        </Flyout>

        <Button ui primary on:click={() => behavior({id: 'flyout1', type: 'flyout', commands: ['toggle']}) }>Toggle Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Width -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Width" code = {Code.width}>

        <Segment ui basic>
            <Button ui red on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'very thin'}, ...flyoutSettings}})}>Toggle Very Thin Flyout</Button>
            <Button ui orange on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'thin'}, ...flyoutSettings}})}>Toggle Thin Flyout</Button>
            <Button ui yellow on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:''}, ...flyoutSettings}})}>Toggle Normal Flyout</Button>
            <Button ui green on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'wide'}, ...flyoutSettings}})}>Toggle Wide Flyout</Button>
            <Button ui blue on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'very wide'}, ...flyoutSettings}})}>Toggle Very Wide Flyout</Button>    
        </Segment>

        <Segment ui basic>
            <Button ui red on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'two wide'}, ...flyoutSettings}})}>Toggle Two Wide Flyout</Button>
            <Button ui orange on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'five wide'}, ...flyoutSettings}})}>Toggle Five Wide Flyout</Button>
            <Button ui yellow on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'eight wide'}, ...flyoutSettings}})}>Toggle Eight Wide Flyout</Button>
            <Button ui green on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'twelve wide'}, ...flyoutSettings}})}>Toggle Twelve Wide Flyout</Button>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Position -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Position" code = {Code.position}>

        <Button ui red on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'left'}, ...flyoutSettings}})}>Toggle Left Flyout</Button>
        <Button ui orange on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'right'}, ...flyoutSettings}})}>Toggle Right Flyout</Button>
        <Button ui yellow on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'top'}, ...flyoutSettings}})}>Toggle Top Flyout</Button>
        <Button ui green on:click={() => behavior({type: 'flyout', commands: ['toggle'], settings: {...tempFlyout, ...{class:'bottom'}, ...flyoutSettings}})}>Toggle Bottom Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fullscreen -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fullscreen" code = {Code.fullscreen}>

        <Flyout ui fullscreen id="flyout2" settings={flyoutSettings}>
            <Icon close/>
            <Header ui>
                <Content>
                    Fullscreen !
                </Content>
            </Header>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lorem nec purus tempus cursus. Ut consequat suscipit felis ac accumsan. Donec consequat venenatis ex nec fringilla. Vestibulum ac lectus non orci convallis efficitur eget non sem. Nunc tempus risus mi. Duis finibus, nunc ut dictum pretium, leo sapien luctus arcu, ac commodo augue leo et sem. Ut ut metus in turpis aliquam vestibulum. Aenean in tincidunt purus, ac consequat lacus. Nam iaculis enim eu arcu cursus, eu venenatis lacus posuere. Vivamus mattis pulvinar mi, sit amet lacinia purus ornare non. Fusce mattis magna libero. Curabitur a efficitur mauris. Morbi tempor at lectus nec gravida. Duis fermentum risus vel fringilla rhoncus. Maecenas consequat neque nibh, viverra tempor dolor semper quis.
                <br/><br/>
                Ut efficitur lectus ac venenatis congue. Morbi sagittis massa sed arcu fringilla, sed consectetur purus pellentesque. Ut sed metus quam. Cras sit amet feugiat ipsum. Vestibulum sed diam porta, bibendum quam ac, pretium dui. Quisque iaculis gravida lorem, vitae maximus nunc bibendum in. Quisque eleifend purus mauris, non rhoncus lorem euismod eget. Suspendisse vehicula ante at ipsum posuere, id elementum leo finibus. Quisque sed mattis ipsum. Donec tincidunt, ex ac suscipit dignissim, massa justo efficitur nunc, at maximus sem lacus vel arcu. Fusce laoreet at erat eu tempus. Fusce condimentum ac purus a lacinia. Cras rhoncus accumsan diam, id tempus quam egestas quis. Praesent eget feugiat arcu. Proin mattis dignissim mi in feugiat.
                <br/><br/>
                Vivamus hendrerit eleifend pharetra. Pellentesque nec maximus risus. In hac habitasse platea dictumst. Nulla sit amet ex sed risus imperdiet porta at ac odio. Suspendisse in fringilla risus, ac dapibus turpis. Cras pulvinar lorem in convallis mattis. Sed velit nisi, efficitur id hendrerit nec, imperdiet sit amet ante. Praesent est dui, finibus vel egestas dictum, dignissim quis nibh. Aliquam nisi ipsum, tempus vitae nulla non, posuere vulputate mi. Sed lobortis risus in neque vehicula, non tempor nulla lacinia. Cras non euismod ipsum.
                <br/><br/>
                Duis sodales lobortis hendrerit. Fusce id nisi maximus lorem dapibus dignissim. Etiam sollicitudin maximus dapibus. Fusce aliquet massa dui, quis cursus tortor mattis sit amet. Morbi eu sagittis metus. Nunc et mi facilisis, venenatis urna a, euismod elit. Vivamus pulvinar nunc risus, sit amet sollicitudin diam elementum id. Cras ut ultrices lacus.
                <br/><br/>
                Vestibulum et mi quis dolor ultrices maximus tincidunt ac nulla. Duis ex turpis, finibus ut volutpat ac, posuere nec mauris. Fusce vitae mollis orci. Suspendisse vitae vulputate nulla. In eu enim quis tortor euismod placerat. Nulla imperdiet tempor arcu, at molestie neque iaculis vitae. Phasellus sit amet interdum tellus. Duis ultrices rutrum felis, ac aliquet ante aliquam non. Mauris placerat tellus eu dolor tristique sodales.
            </Content>
            <Actions>
                <Button ui red ok icon>
                    <Icon checkmark/>
                    Done !
                </Button>
            </Actions>
        </Flyout>
        
        <Button ui purple on:click={() => behavior('flyout2', 'toggle')}>Toggle Fullscreen Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Center aligned -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Center aligned" code = {Code.center_aligned}>

        <Flyout ui id="flyout3" settings={flyoutSettings}>
            <Header ui center aligned>Header is centered</Header>
            <Content center aligned>
                <p>Content is centered</p>
            </Content>
            <Actions center aligned>
                <Button ui negative>Cancel</Button>
                <Button ui positive>OK</Button>
            </Actions>
        </Flyout>

        <Button ui teal on:click={() => behavior('flyout3', 'toggle')}>Toggle Centered Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Left actions -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Left actions" code = {Code.left_actions}>

        <Flyout ui id="flyout4" settings={flyoutSettings}>
            <Header ui>Look at the Actions</Header>
            <Content>
                <p>They are aligned to the left</p>
            </Content>
            <Actions left>
                <Button ui negative>Cancel</Button>
                <Button ui positive>OK</Button>
            </Actions>
        </Flyout>

        <Button ui pink on:click={() => behavior('flyout4', 'toggle')}>Toggle Left Actions Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Basic header and actions -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Basic header and actions" code = {Code.basic_header_and_actions}>

        <Flyout ui id="flyout5" settings={flyoutSettings}>
            <Header ui basic>Basic Header</Header>
            <Content>
                <p>Basic Actions below</p>
            </Content>
            <Actions basic>
                <Button ui negative>Cancel</Button>
                <Button ui positive>OK</Button>
            </Actions>
        </Flyout>

        <Button ui violet on:click={() => behavior('flyout5', 'toggle')}>Toggle Basic Flyout</Button>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Custom context -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Custom context" code = {Code.custom_context}>

        <Menu ui top attached>
            <Link item on:click={() => behavior('flyout6', 'toggle')}>
                <Icon sidebar/>
                Toggle flyout
            </Link>
        </Menu>
        <Segment ui bottom attached>
            <Flyout ui left id="flyout6" settings={{"context":"#flyout6_content"}}>
                <Icon close/>
                <Header ui>
                    <Icon question/>
                    <Content>
                        Archive Old Messages
                    </Content>
                </Header>
                <Content>
                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </Content>
                <Actions>
                    <Button ui red cancel>
                        <Icon remove/>
                        No
                    </Button>
                    <Button ui green ok>
                        <Icon checkmark/>
                        Yes
                    </Button>
                </Actions>
            </Flyout>
            <Segment ui basic id="flyout6_content">
                <Header h3 ui>Application Content</Header>
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
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                        <Line/>
                    </Paragraph>
                </Placeholder>
            </Segment>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>