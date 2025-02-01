// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    nag : `
<Button ui blue on:click={() => {behavior({id: 'nag1', commands: ['clear']}); reload(); }}>Reset Nag to appear again after being closed</Button>
<Divider ui/>
<Nag ui id="nag1" settings={{samesite: true, storageMethod: "localstorage", key: "nag1"}}>
    Look, I am a nag!
    <Icon close/>
</Nag>
    `,
    title : `
<Button ui orange on:click={() => {behavior({id: 'nag2', commands: ['clear']}); reload(); }}>Reset Nag to appear again after being closed</Button>
<Divider ui/>
<Nag ui id="nag2" settings={{samesite: true, storageMethod: "localstorage", key: "nag2"}}>
    <Title>Welcome to the nag module</Title>
    <Text>Look, I am a nag!</Text>
    <Icon close/>
</Nag>
    `,
    fixed : `
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
    `,
    overlay : `
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
    `,
    group : `
<Button ui purple on:click={() => {behavior({id: 'groupnags', commands: ['clear']}); reload(); }}>Reset group nags to appear again after being closed</Button>
<Divider ui/>
<Nags ui>
    <Nag ui id="groupnags" style="display: none;"><Title>First nag</Title><Icon close/></Nag>
    <Nag ui id="groupnags" style="display: none;"><Title>Second nag</Title><Icon close/></Nag>
    <Nag ui id="groupnags" style="display: none;"><Title>Third nag</Title><Icon close/></Nag>
</Nags>
    `,
    colored : `
<Button ui grey on:click={() => {behavior({id: 'colorednags', commands: ['clear']}); reload(); }}>Reset colored nags to appear again after being closed</Button>
<Divider ui/>
{#each ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "black"] as color}
    <Nag ui _={color} id="colorednags"><Title>{color.charAt(0).toUpperCase() + color.slice(1)}</Title><Icon close/></Nag>
    <p></p><p></p>
{/each}
    `,
    inverted : `
<Button ui grey on:click={() => {behavior({id: 'invertednags', commands: ['clear']}); reload(); }}>Reset inverted nags to appear again after being closed</Button>
<Divider ui/>
{#each ["", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "black"] as color}
    <Nag ui inverted _={color} id="invertednags"><Title>{color===""?"no color":color.charAt(0).toUpperCase() + color.slice(1)}</Title><Icon close/></Nag>
    <p></p><p></p>
{/each}
    `,
    size : `
<Button ui olive on:click={() => {behavior({id: 'sizenags', commands: ['clear']}); reload(); }}>Reset size nags to appear again after being closed</Button>
<Divider ui/>
{#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size}
    <Nag ui _={size} id="sizenags"><Title>{size.charAt(0).toUpperCase() + size.slice(1)}</Title><Icon close/></Nag>
    <p></p><p></p>
{/each}
    `,
    cookie : `
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
    `
}

export default code;