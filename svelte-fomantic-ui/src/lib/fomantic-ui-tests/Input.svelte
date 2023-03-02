<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Input, Input_Wrapper, Label, Icon, Header, Text, Menu, Item, Dropdown, Link, Select, Option, Button, Segment, Form, Textarea } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
    let sizes = ["mini", "tiny", "small", "large", "big", "huge", "massive"];


    let filename1: string = "";
    let filename2: string = "";
    let date: string = "";
    let email: string = "";
    let password: string = "";
    let phone: string = "";
    let domain_prefix: string = "";
    let domain_suffix: string = "";
    let occupation: string = "developer";
    let persons: string = "1";
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/input.html">here</a></div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Input_Wrapper ui>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">File input</h4>

        <Input_Wrapper ui file>
            <Input type="file"/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui file>
    <Input type="file"/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Invisible file input</h4>
        <p>Note the underscore before the 'for' in the label.  This is due to not being able to use the reserved word 'for' as a variable in typescript.</p>

        <Input ui invisible file type="file" id="invisibleupload1" on:change={(e) => {filename1 = e.target.files[0].name; } }/>
        <Label ui red icon button _for="invisibleupload1">
            <Icon file/>
            Open any file
        </Label>
        <Header h4>File name chosen is: {filename1}</Header>
        
        <Input ui invisible file type="file" id="invisibleupload2" on:change={(e) => {filename2 = e.target.files[0].name; } }/>
        <Label ui placeholder segment _for="invisibleupload2">
            <Header ui icon>
                <Icon upload/>
                Click here to upload
            </Header>
        </Label>
        <Header h4>File name chosen is: {filename2}</Header>

        <Prism language="svelte" source={`
<Input ui invisible file type="file" id="invisibleupload1" on:change={(e) => {filename1 = e.target.files[0].name; } }/>
<Label ui red icon button _for="invisibleupload1">
    <Icon file/>
    Open any file
</Label>
<Header h4>File name chosen is: {filename1}</Header>

<Input ui invisible file type="file" id="invisibleupload2" on:change={(e) => {filename2 = e.target.files[0].name; } }/>
<Label ui placeholder segment _for="invisibleupload2">
    <Header ui icon>
        <Icon upload/>
        Click here to upload
    </Header>
</Label>
<Header h4>File name chosen is: {filename2}</Header>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Focus</h4>

        <Input_Wrapper ui focus>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui focus>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Loading</h4>

        <Input_Wrapper ui left icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon purple double loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon red fast elastic loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui left icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon purple double loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon red fast elastic loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Disabled</h4>

        <Input_Wrapper ui disabled>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui disabled icon>
            <Icon search/>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui disabled>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>

<Input_Wrapper ui disabled icon>
    <Icon search/>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Error</h4>

        <Input_Wrapper ui error>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui error>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input types</h4>

        <Input_Wrapper ui>
            <Input type="date" bind:value={date}/>
        </Input_Wrapper>
        <Input_Wrapper ui>
            <Input required type="email" placeholder="E-Mail Address" bind:value={email}/>
        </Input_Wrapper>
        <Input_Wrapper ui>
            <Input type="password" placeholder="Password" bind:value={password}/>
        </Input_Wrapper>
        <Input_Wrapper ui>
            <Input type="tel" placeholder="Telephone Number" bind:value={phone}/>
        </Input_Wrapper>
        <Header h4>Date: {date} <br/> Email: {email} <br/> Password: {password} <br/> Phone: {phone}</Header>

        <Prism language="svelte" source={`
<Input_Wrapper ui>
    <Input type="date" bind:value={date}/>
</Input_Wrapper>
<Input_Wrapper ui>
    <Input required type="email" placeholder="E-Mail Address" bind:value={email}/>
</Input_Wrapper>
<Input_Wrapper ui>
    <Input type="password" placeholder="Password" bind:value={password}/>
</Input_Wrapper>
<Input_Wrapper ui>
    <Input type="tel" placeholder="Telephone Number" bind:value={phone}/>
</Input_Wrapper>
<Header h4>Date: {date} <br/> Email: {email} <br/> Password: {password} <br/> Phone: {phone}</Header>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icon</h4>

        <div class="centered">
            <div class="narrow">
                <Input_Wrapper ui icon fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Icon search/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui left icon fluid>
                    <Input type="text" placeholder="Search users..."/>
                    <Icon users/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui icon fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Icon circular search link/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui icon fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Icon inverted circular search link/>
                </Input_Wrapper>
            </div>
        </div>

        <Prism language="svelte" source={`
<Input_Wrapper ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui left icon fluid>
    <Input type="text" placeholder="Search users..."/>
    <Icon users/>
</Input_Wrapper>

<Input_Wrapper ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon circular search link/>
</Input_Wrapper>

<Input_Wrapper ui icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon inverted circular search link/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Labeled</h4>

        <div class="centered">
            <div class="narrow">
                <Input_Wrapper ui labeled fluid>
                    <Label ui>
                    https://
                    </Label>
                    <Input type="text" placeholder="mysite.com"/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui right labeled fluid>
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
                </Input_Wrapper>
                <Header h4>Domain: {domain_prefix}{domain_suffix} </Header>
                <br/>
                <Input_Wrapper ui right labeled fluid>
                    <Input type="text" placeholder="Enter weight..."/>
                    <Label ui basic>
                    kg
                    </Label>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui right labeled fluid>
                    <Label ui _for="amount">$</Label>
                    <Input type="text" placeholder="Amount" id="amount"/>
                    <Label ui basic >.00</Label>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui right labeled left icon fluid>
                    <Icon tags/>
                    <Input type="text" placeholder="Enter tags"/>
                    <Link ui tag label>
                      Add Tag
                    </Link>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui left corner labeled fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Label ui left corner>
                      <Icon asterisk/>
                    </Label>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui corner labeled fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Label ui right corner>
                      <Icon asterisk/>
                    </Label>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui fluid labeled>
                    <Label ui>I am a</Label>
                    <Select ui selection dropdown input fluid bind:value={occupation}>
                        <Option value="developer">Developer</Option>
                        <Option value="software-engineer">Software engineer</Option>
                        <Option value="system-admin">System admin</Option>
                        <Option value="database-admin">Database admin</Option>
                    </Select>
                </Input_Wrapper>
                <Header h4>Occupation: {occupation} </Header>
                <br/>
                <Input_Wrapper ui fluid right labeled>
                    <Select ui selection dropdown fluid bind:value={persons}>
                        <Option value="1">1-5</Option>
                        <Option value="6">6-10</Option>
                        <Option value="11">11-20</Option>
                        <Option value="21">21-50</Option>
                        <Option value="51">51-100</Option>
                    </Select>
                    <Label ui basic>Persons</Label>
                </Input_Wrapper>
                <Header h4>Persons: {persons} </Header>
            </div>
        </div>

        <Prism language="svelte" source={`
<Input_Wrapper ui labeled fluid>
    <Label ui>
    https://
    </Label>
    <Input type="text" placeholder="mysite.com"/>
</Input_Wrapper>

<Input_Wrapper ui right labeled fluid>
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
</Input_Wrapper>
<Header h4>Domain: {domain_prefix}{domain_suffix} </Header>

<Input_Wrapper ui right labeled fluid>
    <Input type="text" placeholder="Enter weight..."/>
    <Label ui basic>
    kg
    </Label>
</Input_Wrapper>

<Input_Wrapper ui right labeled fluid>
    <Label ui _for="amount">$</Label>
    <Input type="text" placeholder="Amount" id="amount"/>
    <Label ui basic >.00</Label>
</Input_Wrapper>

<Input_Wrapper ui right labeled left icon fluid>
    <Icon tags/>
    <Input type="text" placeholder="Enter tags"/>
    <Link ui tag label>
        Add Tag
    </Link>
</Input_Wrapper>

<Input_Wrapper ui left corner labeled fluid>
    <Input type="text" placeholder="Search..."/>
    <Label ui left corner>
        <Icon asterisk/>
    </Label>
</Input_Wrapper>

<Input_Wrapper ui corner labeled fluid>
    <Input type="text" placeholder="Search..."/>
    <Label ui right corner>
        <Icon asterisk/>
    </Label>
</Input_Wrapper>

<Input_Wrapper ui fluid labeled>
    <Label ui>I am a</Label>
    <Select ui selection dropdown input fluid bind:value={occupation}>
        <Option value="developer">Developer</Option>
        <Option value="software-engineer">Software engineer</Option>
        <Option value="system-admin">System admin</Option>
        <Option value="database-admin">Database admin</Option>
    </Select>
</Input_Wrapper>
<Header h4>Occupation: {occupation} </Header>

<Input_Wrapper ui fluid right labeled>
    <Select ui selection dropdown fluid bind:value={persons}>
        <Option value="1">1-5</Option>
        <Option value="6">6-10</Option>
        <Option value="11">11-20</Option>
        <Option value="21">21-50</Option>
        <Option value="51">51-100</Option>
    </Select>
    <Label ui basic>Persons</Label>
</Input_Wrapper>
<Header h4>Persons: {persons} </Header>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Action</h4>

        <div class="centered">
            <div class="narrow">
                <Input_Wrapper ui action fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Button ui>Search</Button>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui left action fluid>
                    <Button ui teal labeled icon>
                    <Icon cart/>
                    Checkout
                    </Button>
                    <Input type="text" value="$52.03"/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui right action left icon fluid>
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
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui action fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Select dropdown ui compact selection>
                        <Option value="all">All</Option>
                        <Option selected value="articles">Articles</Option>
                        <Option value="products">Products</Option>
                    </Select>
                    <Button ui>Search</Button>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui action fluid>
                    <Input type="text" value="https://ww.short.url/c0opq"/>
                    <Button ui teal right labeled icon>
                        <Icon copy/>
                        Copy
                    </Button>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui action fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Button ui icon>
                        <Icon search/>
                    </Button>
                </Input_Wrapper>
            </div>
        </div>

        <Prism language="svelte" source={`
<Input_Wrapper ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Button ui>Search</Button>
</Input_Wrapper>

<Input_Wrapper ui left action fluid>
    <Button ui teal labeled icon>
    <Icon cart/>
    Checkout
    </Button>
    <Input type="text" value="$52.03"/>
</Input_Wrapper>

<Input_Wrapper ui right action left icon fluid>
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
</Input_Wrapper>

<Input_Wrapper ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Select dropdown ui compact selection>
        <Option value="all">All</Option>
        <Option selected value="articles">Articles</Option>
        <Option value="products">Products</Option>
    </Select>
    <Button ui>Search</Button>
</Input_Wrapper>

<Input_Wrapper ui action fluid>
    <Input type="text" value="https://ww.short.url/c0opq"/>
    <Button ui teal right labeled icon>
        <Icon copy/>
        Copy
    </Button>
</Input_Wrapper>

<Input_Wrapper ui action fluid>
    <Input type="text" placeholder="Search..."/>
    <Button ui icon>
        <Icon search/>
    </Button>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">File action</h4>

        <Input_Wrapper ui file action>
            <Input id="actionfileinput" type="file"/>
            <Label ui blue button _for="actionfileinput">
               <Icon wizard/>
                Choose wisely
            </Label>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui file action>
    <Input id="actionfileinput" type="file"/>
    <Label ui blue button _for="actionfileinput">
        <Icon wizard/>
        Choose wisely
    </Label>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Transparent</h4>


        <div class="centered">
            <div class="narrow">
                <Input_Wrapper ui transparent fluid>
                    <Input type="text" placeholder="Search..."/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui transparent icon fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Icon search/>
                </Input_Wrapper>
                <br/>
                <Input_Wrapper ui transparent left icon fluid>
                    <Input type="text" placeholder="Search..."/>
                    <Icon search/>
                </Input_Wrapper>
            </div>
        </div>

        <Prism language="svelte" source={`
<Input_Wrapper ui transparent fluid>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>

<Input_Wrapper ui transparent icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui transparent left icon fluid>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted</h4>

        <Segment ui inverted>
            <Input_Wrapper ui inverted>
                <Input type="text" placeholder="Search..."/>
            </Input_Wrapper>
            <br/><br/>
            <Input_Wrapper ui icon inverted>
                <Input type="text" placeholder="Search..."/>
                <Icon search/>
            </Input_Wrapper>
            <br/><br/>
            <Input_Wrapper ui left icon inverted>
                <Input type="text" placeholder="Search..."/>
                <Icon search/>
            </Input_Wrapper>
        </Segment>

        <Prism language="svelte" source={`
<Segment ui inverted>
    <Input_Wrapper ui inverted>
        <Input type="text" placeholder="Search..."/>
    </Input_Wrapper>
    <br/><br/>
    <Input_Wrapper ui icon inverted>
        <Input type="text" placeholder="Search..."/>
        <Icon search/>
    </Input_Wrapper>
    <br/><br/>
    <Input_Wrapper ui left icon inverted>
        <Input type="text" placeholder="Search..."/>
        <Icon search/>
    </Input_Wrapper>
</Segment>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Fluid</h4>

        <Input_Wrapper ui fluid icon>
            <Input type="text" placeholder="Search a very wide input..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/>
        <Input_Wrapper ui fluid action>
            <Input type="text" placeholder="Search..."/>
            <Button ui>Search</Button>
        </Input_Wrapper>

        <Prism language="svelte" source={`
<Input_Wrapper ui fluid icon>
    <Input type="text" placeholder="Search a very wide input..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui fluid action>
    <Input type="text" placeholder="Search..."/>
    <Button ui>Search</Button>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Size</h4>

        {#each sizes as size, i}
            {#if i > 0}
                <br/><br/>
            {/if}
            <Input_Wrapper ui _={size} icon>
                <Input type="text" placeholder="Search {size}..."/>
                <Icon search/>
            </Input_Wrapper>
        {/each}

        <Prism language="svelte" source={`
{#each sizes as size, i}
    {#if i > 0}
        <br/><br/>
    {/if}
    <Input_Wrapper ui _={size} icon>
        <Input type="text" placeholder="Search {size}..."/>
        <Icon search/>
    </Input_Wrapper>
{/each}
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Textarea</h4>

        <p>Note here the example with left corner and left label has to use the underscore option as you can't have two props with the same name.</p>

        <Form ui>
            <Input_Wrapper ui left corner labeled>
                <Label ui left corner>
                    <Icon asterisk/>
                </Label>
                <Textarea value="I have a left corner label" />
            </Input_Wrapper>
            <Input_Wrapper ui corner labeled>
                <Label ui corner>
                    <Icon asterisk/>
                </Label>
                <Textarea value="I have a right corner label" />
            </Input_Wrapper>
            <Input_Wrapper ui left icon>
                <Textarea value="I have a left icon" />
                <Icon search/>
            </Input_Wrapper>
            <Input_Wrapper ui icon>
                <Textarea value="I have a right icon" />
                <Icon search/>
            </Input_Wrapper>
            <Input_Wrapper ui left corner labeled _={"left icon"}>
                <Label ui left corner>
                    <Icon asterisk/>
                </Label>
                <Textarea value="I have a left icon and left corner label" />
                <Icon search/>
            </Input_Wrapper>
            <Input_Wrapper ui corner labeled icon>
                <Label ui corner>
                    <Icon asterisk/>
                </Label>
                <Textarea value="I have a right icon and right corner label" />
                <Icon search/>
            </Input_Wrapper>
        </Form>

        <Prism language="svelte" source={`
<Form ui>
    <Input_Wrapper ui left corner labeled>
        <Label ui left corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a left corner label" />
    </Input_Wrapper>
    <Input_Wrapper ui corner labeled>
        <Label ui corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a right corner label" />
    </Input_Wrapper>
    <Input_Wrapper ui left icon>
        <Textarea value="I have a left icon" />
        <Icon search/>
    </Input_Wrapper>
    <Input_Wrapper ui icon>
        <Textarea value="I have a right icon" />
        <Icon search/>
    </Input_Wrapper>
    <Input_Wrapper ui left corner labeled _={"left icon"}>
        <Label ui left corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a left icon and left corner label" />
        <Icon search/>
    </Input_Wrapper>
    <Input_Wrapper ui corner labeled icon>
        <Label ui corner>
            <Icon asterisk/>
        </Label>
        <Textarea value="I have a right icon and right corner label" />
        <Icon search/>
    </Input_Wrapper>
</Form>
    `}/>
    </div>
</div>
