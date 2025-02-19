<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, reload, Nag, Nags, Icon, Button, Divider, Title, Text, Segment, Placeholder, Header, Line, Paragraph } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Nag';
</script>


<Examples
    title = "Nag examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/nag.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Nag -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Nag" code = {Code.nag}>

        <Button ui blue on:click={() => {behavior({id: 'nag1', commands: ['clear']}); reload(); }}>Reset nag to appear again after being closed</Button>
        <Divider ui/>
        <Nag ui id="nag1" settings={{samesite: true, storageMethod: "localstorage", key: "nag1"}}>
            Look, I am a nag!
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Title -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Title" code = {Code.title}>

        <Button ui orange on:click={() => {behavior({id: 'nag2', commands: ['clear']}); reload(); }}>Reset nag to appear again after being closed</Button>
        <Divider ui/>
        <Nag ui id="nag2" settings={{samesite: true, storageMethod: "localstorage", key: "nag2"}}>
            <Title>Welcome to the nag module</Title>
            <Text>Look, I am a nag!</Text>
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fixed -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fixed" code = {Code.fixed}>

        <p>Look at the top and bottom of the page for the nags...</p>

        <Button ui green on:click={() => {behavior({id: 'fixednag', commands: ['clear']}); reload(); }}>Reset top nag to appear again after being closed</Button>
        <Divider ui/>
        <Nag ui id="fixednag" fixed settings={{samesite: true, storageMethod: "localstorage", key: "fixednag", detachable: true}} style="z-index:2000;" >
            <Text>Look, I am a fixed nag!</Text>
            <Icon close/>
        </Nag>

        <Button ui green on:click={() => {behavior({id: 'fixednagbottom', commands: ['clear']}); reload(); }}>Reset bottom nag to appear again after being closed</Button>
        <Divider ui/>
        <Nag ui id="fixednagbottom" bottom fixed settings={{samesite: true, storageMethod: "localstorage", key: "fixednagbottom", detachable: true}} style="z-index:2000;" >
            <Text>Look, I am a bottom-fixed nag!</Text>
            <Icon close/>
        </Nag>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Overlay -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Overlay" code = {Code.overlay}>

        <Button ui teal on:click={() => {behavior({id: 'overlaynag', commands: ['clear']}); behavior({id: 'overlaynagbottom', commands: ['clear']}); reload(); }}>Reset overlay nags to appear again after being closed</Button>
        <Divider ui/>
        <Segment ui>
            <Nag ui overlay id="overlaynag" settings={{samesite: true, storageMethod: "localstorage", key: "overlaynag"}} style="display: block;">
                <Title>Welcome to the nag module</Title>
                <Text>Look, I am a top overlay nag!</Text>
                <Icon close/>
            </Nag>
            <Nag ui bottom overlay id="overlaynagbottom" settings={{samesite: true, storageMethod: "localstorage", key: "overlaynagbottom"}} style="display: block;">
                <Title>Welcome to the nag module</Title>
                <Text>Look, I am a bottom overlay nag!</Text>
                <Icon close/>
            </Nag>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Group -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Group" code = {Code.group}>

        <Button ui purple on:click={() => {behavior({id: 'groupnags', commands: ['clear']}); reload(); }}>Reset group nags to appear again after being closed</Button>
        <Divider ui/>
        <Nags ui>
            <Nag ui id="groupnags" style="display: none;"><Title>First nag</Title><Icon close/></Nag>
            <Nag ui id="groupnags" style="display: none;"><Title>Second nag</Title><Icon close/></Nag>
            <Nag ui id="groupnags" style="display: none;"><Title>Third nag</Title><Icon close/></Nag>
        </Nags>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Button ui grey on:click={() => {behavior({id: 'colorednags', commands: ['clear']}); reload(); }}>Reset colored nags to appear again after being closed</Button>
        <Divider ui/>
        {#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "black"] as color}
            <Nag ui _={color} id="colorednags"><Title>{color.charAt(0).toUpperCase() + color.slice(1)}</Title><Icon close/></Nag>
            <p></p><p></p>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Button ui grey on:click={() => {behavior({id: 'invertednags', commands: ['clear']}); reload(); }}>Reset inverted nags to appear again after being closed</Button>
        <Divider ui/>
        {#each ["", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "black"] as color}
            <Nag ui inverted _={color} id="invertednags"><Title>{color===""?"no color":color.charAt(0).toUpperCase() + color.slice(1)}</Title><Icon close/></Nag>
            <p></p><p></p>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        <Button ui olive on:click={() => {behavior({id: 'sizenags', commands: ['clear']}); reload(); }}>Reset size nags to appear again after being closed</Button>
        <Divider ui/>
        {#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size}
            <Nag ui _={size} id="sizenags"><Title>{size.charAt(0).toUpperCase() + size.slice(1)}</Title><Icon close/></Nag>
            <p></p><p></p>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Cookie -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Cookie" code = {Code.cookie}>

        <Button ui purple on:click={() => {behavior({id: 'accepts-cookies', commands: ['show']}); reload(); }}>Press to see cookie nag, and close whilst visible - won't reappear unless cleared</Button>
        <Button ui violet on:click={() => {behavior({id: 'accepts-cookies', commands: ['clear']}); reload(); }}>Clears cookie so nag shows again</Button>
        <Divider ui/>
        <Nag ui id="accepts-cookies" settings={{displayTime: 10000, samesite: true, storageMethod: "localstorage", key: "accepts-cookies", value: true}}>
            <Title>
                We use cookies to ensure you get the best experience on our website
            </Title>
            <Icon close/>
        </Nag>
        <p></p><p></p>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>