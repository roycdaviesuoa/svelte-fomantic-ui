// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    dropdown: `
<Dropdown ui popup={{content: "Do something..."}} on:change={(e) => { if(e.detail.value) ex1value = e.detail.value; }}>
    <Text default>File</Text>
    <Icon dropdown/>
    <Menu>
        <Item value="new" popup={{content: "Create new file", position: "right center"}}>New</Item>
        <Item value="open" popup={{content: "Open file", position: "right center"}}>
            <span class="description">ctrl + o</span>
            Open...
        </Item>
        <Item value="save as" popup={{content: "Save file as", position: "right center"}}> 
            <span class="description">ctrl + s</span>
            Save as...
        </Item>
        <Item value="rename" popup={{content: "Rename file", position: "right center"}}>
            <span class="description">ctrl + r</span>
            Rename
        </Item>
        <Item value="copy" popup={{content: "Copy file", position: "right center"}}>Make a copy</Item>
        <Item value="move to folder">
            <Icon folder/>
            Move to folder
        </Item>
        <Item value="move to trash" popup={{content: "Move to trash", position: "right center"}}>
            <Icon trash/>
            Move to trash
        </Item>
        <Divider/>
        <Item value="download as" popup={{content: "Download file", position: "right center"}}>Download As...</Item>
        <Item>
            <Icon dropdown/>
            Publish To Web
            <Menu>
                <Item value="publish to google docs" popup={{content: "Publish to google docs", position: "right center"}}>Google Docs</Item>
                <Item value="publish to google drive" popup={{content: "Publish to google drive", position: "right center"}}>Google Drive</Item>
                <Item value="publish to dropbox" popup={{content: "Publish to dropbox", position: "right center"}}>Dropbox</Item>
                <Item value="publish to adobe creative cloud" popup={{content: "Publish to adobe creative cloud", position: "right center"}}>Adobe Creative Cloud</Item>
                <Item value="publish to private ftp" popup={{content: "Publish to private ftp", position: "right center"}}>Private FTP</Item>
                <Item value="publish to another service" popup={{content: "Publish to another service", position: "right center"}}>Another Service...</Item>
            </Menu>
        </Item>
        <Item value="email collaborators" popup={{content: "Send by email", position: "right center"}}>E-mail Collaborators</Item>
    </Menu>
</Dropdown>
<Segment ui basic>
    Menu option chosen: {ex1value}
</Segment>
    `,
    selection: `
<Dropdown ui selection bind:selected={ex2value}>
    <Icon dropdown/>
    <Text default>Pet</Text>
    <Menu scrollhint>
        {#each animals as animal, i}
            <Item value={i}>{animal}</Item>
        {/each}
    </Menu>
</Dropdown>
<Segment ui basic>
    Menu option chosen: {ex2value===""?"":animals[ex2value]}
</Segment>

<Select ui selection dropdown bind:value={ex3value}>
    <Option value="">Pet</Option>
    {#each animals as animal, i}
        <Option value={i}>{animal}</Option>
    {/each}
</Select>
<Segment ui basic>
    Menu option chosen: {ex3value===""?"":animals[ex3value]}
</Segment>
    `,
    search_selection: `
<Dropdown ui fluid search selection bind:selected={ex4value}>
    <Icon dropdown/>
    <Text default>Select Country</Text>
    <Menu>
        {#each Object.keys(countries) as key}
            <Item value={key}><Flag _={key}/>{countries[key]}</Item>
        {/each}
    </Menu>
</Dropdown>
<Segment ui basic>
    Menu option chosen: {ex4value===""?"":ex4value.toUpperCase()} : {ex4value===""?"":countries[ex4value]}
</Segment>

<Select ui search dropdown bind:value={ex6value}>
    <Option value="">State</Option>
    {#each Object.keys(states) as key}
        <Option value={key}>{states[key]}</Option>
    {/each}
</Select>
<Segment ui basic>
    Menu option chosen: {ex6value===""?"":ex6value} : {ex6value===""?"":states[ex6value]}
</Segment>

Where countries = {"af": "Afghanistan", ... "zw": "Zimbabwe"} and
states = {"AL": "Alabama", ... "WY": "Wyoming"}
    `,
    ignore_diacritics: `
<Dropdown ui search selection id="diacriticsexample" settings={{ignoreDiacritics: true, sortSelect: true, fullTextSearch:'exact'}}>
    <Icon dropdown/>
    <Text default>Search diacritics by only typing usual vowels</Text>
    <Menu>
        <Item>André</Item>
        <Item>Bokmål</Item>
        <Item>café</Item>
        <Item>cafetería</Item>
        <Item>château</Item>
        <Item>décolleté</Item>
        <Item>Élysée</Item>
        <Item>Fräulein</Item>
        <Item>garçon</Item>
        <Item>háček</Item>
        <Item>inrō</Item>
        <Item>jūjutsu</Item>
        <Item>kroužek</Item>
        <Item>La Niña</Item>
        <Item>Māori</Item>
        <Item>négligée</Item>
        <Item>pączki</Item>
        <Item>Québec</Item>
        <Item>ragoût</Item>
        <Item>Škoda</Item>
        <Item>takahē</Item>
        <Item>über</Item>
        <Item>voilà</Item>
        <Item>whekī</Item>
        <Item>c Zoë</Item>
    </Menu>
</Dropdown>
    `,
    simple : `
<Dropdown ui >
    <Input type="hidden" id="gender"/>
    <Icon dropdown/>
    <Text default>Gender</Text>
    <Menu>
        <Item value="male">Male</Item>
        <Item value="female">Female</Item>
    </Menu>
</Dropdown>
    `,
    settings : `
<Dropdown ui settings={{
        values: [
            { name: 'Male', value: 'male' },
            { name     : 'Female', value    : 'female', selected : true }
        ]
    }}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
    `,
    change_after_initialisation : `
<script lang="ts">
    import { update, Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    let changed = {test:false};
    let test="male";

    function changeMenu (id:string) {
        if (changed[id]) {
            update(id, {placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]});
        }
        else {
            update(id, {placeholder:"Species", values:[{name:"Species", type:"header"}, {name:"Cat", value:"cat"}, {name:"Dog", value:"dog"}, {name:"Horse", value:"horse"}]});
        }
        changed[id]=!changed[id];
    }
</script>

<Button ui on:click={()=>changeMenu("test")}>Click to change</Button>

<Dropdown ui bind:selected={test} id="test" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
<Header>{test}</Header>
    `,
    change_with_formatting : `
<script lang="ts">
    import { update, Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    let changed = {test2:false};
    let test2="male";

    function changeMenu (id:string) {
        if (changed[id]) {
            update(id, {placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]});
        }
        else {
            update(id, {placeholder:"Species", values:[{name:"Species", type:"header"}, {name:"Cat", value:"cat"}, {name:"Dog", value:"dog"}, {name:"Horse", value:"horse"}]});
        }
        changed[id]=!changed[id];
    }
</script>

<Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

<Dropdown ui bind:selected={test2} fluid selection id="test2" settings={{placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]}}>
    <Text/>
    <Icon dropdown/>
</Dropdown>
<Header>{test2}</Header>
    `
};

export default code;