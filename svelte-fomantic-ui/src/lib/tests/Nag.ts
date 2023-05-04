// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    nag : `
<Button ui red on:click={() => {behavior({id: 'nag1', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
<Divider ui/>
<Nag ui id="nag1" settings={{samesite: true, storageMethod: "localstorage", key: "nag1"}}>
    Look, I am a nag!
    <Icon close/>
</Nag>
    `,
    title : `
<Button ui red on:click={() => {behavior({id: 'nag2', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
<Divider ui/>
<Nag ui id="nag2" settings={{samesite: true, storageMethod: "localstorage", key: "nag2"}}>
    <Title>Welcome to the nag module</Title>
    <Text>Look, I am a nag!</Text>
    <Icon close/>
</Nag>
    `,
    fixed : `
<Button ui red on:click={() => {behavior({id: 'fixednag', commands: ['clear']}); reload(); }}>Reset Nag to appear again.</Button>
<Divider ui/>
<Nag ui id="fixednag" fixed settings={{samesite: true, storageMethod: "localstorage", key: "fixednag", detachable: true}} style="z-index:2000;" >
    <Text>Look, I am a fixed nag!</Text>
    <Icon close/>
</Nag>
    `
}

export default code;