// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
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
<script>
    import { Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    import { update } from "svelte-fomantic-ui/src/lib/modules/Dropdown.js"

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
<script>
    import { Dropdown, Input, Text, Menu, Icon, Item, Button } from "svelte-fomantic-ui";

    import { update } from "svelte-fomantic-ui/src/lib/modules/Dropdown.js"

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