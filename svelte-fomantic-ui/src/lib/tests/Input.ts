// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    input : `
<Input ui>
    <Input type="text" placeholder="Search..."/>
</Input>
    `,
    file_input : `
<Input ui file>
    <Input type="file"/>
</Input>
    `,
    invisible_file_input : `
<Input ui file invisible>
    <Input type="file" id="invisibleupload1" on:change={(e) => {filename1 = e.target.files[0].name; } }/>
</Input>
<Label ui red icon button _for="invisibleupload1">
    <Icon file/>
    Open any file
</Label>       
<Header h4>File name chosen is: {filename1}</Header>

<Input ui file invisible>
    <Input type="file" id="invisibleupload2" on:change={(e) => {filename2 = e.target.files[0].name; } }/>
</Input>
<Label ui placeholder segment _for="invisibleupload2">
    <Header ui icon>
        <Icon upload/>
        Click here to upload
    </Header>
</Label>
<Header h4>File name chosen is: {filename2}</Header>
    `,
    focus : `
<Input ui focus>
    <Input type="text" placeholder="Search..."/>
</Input>
    `,
    loading : `
<Input ui left icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>

<Input ui icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>

<Input ui icon purple double loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>

<Input ui icon red fast elastic loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>
    `,
    disabled : `
<Input ui disabled>
    <Input type="text" placeholder="Search..."/>
</Input>

<Input ui disabled icon>
    <Icon search/>
    <Input type="text" placeholder="Search..."/>
</Input>
    `,
    error : `
<Input ui error>
    <Input type="text" placeholder="Search..."/>
</Input>
    `,
    types : `
<Input ui>
    <Input type="date" bind:value={date}/>
</Input>
<Input ui>
    <Input required type="email" placeholder="E-Mail Address" bind:value={email}/>
</Input>
<Input ui>
    <Input type="password" placeholder="Password" bind:value={password}/>
</Input>
<Input ui>
    <Input type="tel" placeholder="Telephone Number" bind:value={phone}/>
</Input>
<Header h4>Date: {date} <br/> Email: {email} <br/> Password: {password} <br/> Phone: {phone}</Header>
    `,
    icon : `
<Input ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>

<Input ui left icon fluid>
    <Input type="text" placeholder="Search users..."/>
    <Icon users/>
</Input>

<Input ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon circular search link/>
</Input>

<Input ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon inverted circular search link/>
</Input>
    `,
    labeled : `
<Input ui labeled fluid>
    <Label ui>
    https://
    </Label>
    <Input type="text" placeholder="mysite.com"/>
</Input>

<Input ui right labeled fluid>
    <Input type="text" placeholder="Find domain" bind:value={domain_prefix}/>
    <Dropdown ui label bind:selected={domain_suffix}>
        <Text>.com</Text>
        <Icon dropdown/>
        <Menu>
            <Item data-value=".com">.com</Item>
            <Item data-value=".net">.net</Item>
            <Item data-value=".org">.org</Item>
        </Menu>
    </Dropdown>
</Input>
<Header h4>Domain: {domain_prefix}{domain_suffix} </Header>

<Input ui right labeled fluid>
    <Input type="text" placeholder="Enter weight..."/>
    <Label ui basic>
    kg
    </Label>
</Input>

<Input ui right labeled fluid>
    <Label ui _for="amount">$</Label>
    <Input type="text" placeholder="Amount" id="amount"/>
    <Label ui basic >.00</Label>
</Input>

<Input ui right labeled left icon fluid>
    <Icon tags/>
    <Input type="text" placeholder="Enter tags"/>
    <Link ui tag label>
        Add Tag
    </Link>
</Input>

<Input ui left corner labeled fluid>
    <Input type="text" placeholder="Search..."/>
    <Label ui left corner>
        <Icon asterisk/>
    </Label>
</Input>

<Input ui corner labeled fluid>
    <Input type="text" placeholder="Search..."/>
    <Label ui right corner>
        <Icon asterisk/>
    </Label>
</Input>

<Input ui fluid labeled>
    <Label ui>I am a</Label>
    <Select ui selection dropdown input fluid bind:value={occupation}>
        <Option value="developer">Developer</Option>
        <Option value="software-engineer">Software engineer</Option>
        <Option value="system-admin">System admin</Option>
        <Option value="database-admin">Database admin</Option>
    </Select>
</Input>
<Header h4>Occupation: {occupation} </Header>

<Input ui fluid right labeled>
    <Select ui selection dropdown fluid bind:value={persons}>
        <Option value="1">1-5</Option>
        <Option value="6">6-10</Option>
        <Option value="11">11-20</Option>
        <Option value="21">21-50</Option>
        <Option value="51">51-100</Option>
    </Select>
    <Label ui basic>Persons</Label>
</Input>
<Header h4>Persons: {persons} </Header>
    `,
    action : `
<Input ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Button ui>Search</Button>
</Input>

<Input ui left action fluid>
    <Button ui teal labeled icon>
    <Icon cart/>
    Checkout
    </Button>
    <Input type="text" value="$52.03"/>
</Input>

<Input ui right action left icon fluid>
    <Icon search/>
    <Input type="text" placeholder="Search"/>
    <Dropdown ui basic floating button>
        <Text>This Page</Text>
        <Icon dropdown/>
        <Menu>
            <Item>This Organization</Item>
            <Item>Entire Site</Item>
        </Menu>
    </Dropdown>
</Input>

<Input ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Select dropdown ui compact selection>
        <Option value="all">All</Option>
        <Option selected value="articles">Articles</Option>
        <Option value="products">Products</Option>
    </Select>
    <Button ui>Search</Button>
</Input>

<Input ui action fluid>
    <Input type="text" value="https://ww.short.url/c0opq"/>
    <Button ui teal right labeled icon>
        <Icon copy/>
        Copy
    </Button>
</Input>

<Input ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Button ui icon>
        <Icon search/>
    </Button>
</Input>
    `,
    file_action : `
<Input ui file action>
    <Input id="actionfileinput" type="file"/>
    <Label ui blue button _for="actionfileinput">
        <Icon wizard/>
        Choose wisely
    </Label>
</Input>
    `,
    transparent : `
<Input ui transparent fluid>
    <Input type="text" placeholder="Search..."/>
</Input>

<Input ui transparent icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>

<Input ui transparent left icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input>
        `,
    inverted : `
<Segment ui inverted>
    <Input ui inverted>
        <Input type="text" placeholder="Search..."/>
    </Input>

    <Input ui icon inverted>
        <Input type="text" placeholder="Search..."/>
        <Icon search/>
    </Input>

    <Input ui left icon inverted>
        <Input type="text" placeholder="Search..."/>
        <Icon search/>
    </Input>
</Segment>
        `,
    fluid : `
<Input ui fluid icon>
    <Input type="text" placeholder="Search a very wide input..."/>
    <Icon search/>
</Input>

<Input ui fluid action>
    <Input type="text" placeholder="Search..."/>
    <Button ui>Search</Button>
</Input>
    `,
    size : `
{#each sizes as size, i}
    {#if i > 0}
        <br/><br/>
    {/if}
    <Input ui _={size} icon>
        <Input type="text" placeholder="Search {size}..."/>
        <Icon search/>
    </Input>
{/each}
    `,
    textarea : `
<Form ui>
    <Input ui left corner labeled>
        <Label ui left corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a left corner label" />
    </Input>
    <Input ui corner labeled>
        <Label ui corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a right corner label" />
    </Input>
    <Input ui left icon>
        <Textarea value="I have a left icon" />
        <Icon search/>
    </Input>
    <Input ui icon>
        <Textarea value="I have a right icon" />
        <Icon search/>
    </Input>
    <Input ui left corner labeled _={"left icon"}>
        <Label ui left corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a left icon and left corner label" />
        <Icon search/>
    </Input>
    <Input ui corner labeled icon>
        <Label ui corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a right icon and right corner label" />
        <Icon search/>
    </Input>
</Form>
    `
}

export default code;