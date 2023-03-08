<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Input, Label, Icon, Header, Text, Menu, Item, Dropdown, Link, Select, Option, Button, Segment, Form, Textarea } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Input';

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
    let persons: string = "1";</script>

<Examples
    title = "Input examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/elements/input.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Input -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Input" code = {Code.input}>

        <Input ui>
            <Input type="text" placeholder="Search..."/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- File -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "File input" code = {Code.file_input}>

        <Input ui file>
            <Input type="file"/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Invisible file input -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Invisible file input" code = {Code.invisible_file_input}>

        <p>Note the underscore before the 'for' in the label.  This is due to not being able to use the reserved word 'for' as a variable in typescript.</p>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Focus -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Focus" code = {Code.focus}>

        <Input ui focus>
            <Input type="text" placeholder="Search..."/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Loading -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Loading" code = {Code.loading}>

        <Input ui left icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>
        <br/><br/>
        <Input ui icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>
        <br/><br/>
        <Input ui icon purple double loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>
        <br/><br/>
        <Input ui icon red fast elastic loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Input ui disabled>
            <Input type="text" placeholder="Search..."/>
        </Input>
        <br/><br/>
        <Input ui disabled icon>
            <Icon search/>
            <Input type="text" placeholder="Search..."/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Error -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Error" code = {Code.error}>

        <Input ui error>
            <Input type="text" placeholder="Search..."/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Input types -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Input types" code = {Code.types}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon} narrow>

        <Input ui icon fluid>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>
        <br/>
        <Input ui left icon fluid>
            <Input type="text" placeholder="Search users..."/>
            <Icon users/>
        </Input>
        <br/>
        <Input ui icon fluid>
            <Input type="text" placeholder="Search..."/>
            <Icon circular search link/>
        </Input>
        <br/>
        <Input ui icon fluid>
            <Input type="text" placeholder="Search..."/>
            <Icon inverted circular search link/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Labeled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Labeled" code = {Code.labeled} narrow>

        <Input ui labeled fluid>
            <Label ui>
            https://
            </Label>
            <Input type="text" placeholder="mysite.com"/>
        </Input>
        <br/>
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
        <br/>
        <Input ui right labeled fluid>
            <Input type="text" placeholder="Enter weight..."/>
            <Label ui basic>
            kg
            </Label>
        </Input>
        <br/>
        <Input ui right labeled fluid>
            <Label ui _for="amount">$</Label>
            <Input type="text" placeholder="Amount" id="amount"/>
            <Label ui basic >.00</Label>
        </Input>
        <br/>
        <Input ui right labeled left icon fluid>
            <Icon tags/>
            <Input type="text" placeholder="Enter tags"/>
            <Link ui tag label>
                Add Tag
            </Link>
        </Input>
        <br/>
        <Input ui left corner labeled fluid>
            <Input type="text" placeholder="Search..."/>
            <Label ui left corner>
                <Icon asterisk/>
            </Label>
        </Input>
        <br/>
        <Input ui corner labeled fluid>
            <Input type="text" placeholder="Search..."/>
            <Label ui right corner>
                <Icon asterisk/>
            </Label>
        </Input>
        <br/>
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
        <br/>
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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Action -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Action" code = {Code.action} narrow>

        <Input ui action fluid>
            <Input type="text" placeholder="Search..."/>
            <Button ui>Search</Button>
        </Input>
        <br/>
        <Input ui left action fluid>
            <Button ui teal labeled icon>
            <Icon cart/>
            Checkout
            </Button>
            <Input type="text" value="$52.03"/>
        </Input>
        <br/>
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
        <br/>
        <Input ui action fluid>
            <Input type="text" placeholder="Search..."/>
            <Select dropdown ui compact selection>
                <Option value="all">All</Option>
                <Option selected value="articles">Articles</Option>
                <Option value="products">Products</Option>
            </Select>
            <Button ui>Search</Button>
        </Input>
        <br/>
        <Input ui action fluid>
            <Input type="text" value="https://ww.short.url/c0opq"/>
            <Button ui teal right labeled icon>
                <Icon copy/>
                Copy
            </Button>
        </Input>
        <br/>
        <Input ui action fluid>
            <Input type="text" placeholder="Search..."/>
            <Button ui icon>
                <Icon search/>
            </Button>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- File action -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "File action" code = {Code.file_action}>

        <Input ui file action>
            <Input id="actionfileinput" type="file"/>
            <Label ui blue button _for="actionfileinput">
               <Icon wizard/>
                Choose wisely
            </Label>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Transparent -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Transparent" code = {Code.transparent} narrow>

        <Input ui transparent fluid>
            <Input type="text" placeholder="Search..."/>
        </Input>
        <br/>
        <Input ui transparent icon fluid>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>
        <br/>
        <Input ui transparent left icon fluid>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Input ui inverted>
                <Input type="text" placeholder="Search..."/>
            </Input>
            <br/><br/>
            <Input ui icon inverted>
                <Input type="text" placeholder="Search..."/>
                <Icon search/>
            </Input>
            <br/><br/>
            <Input ui left icon inverted>
                <Input type="text" placeholder="Search..."/>
                <Icon search/>
            </Input>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Input ui fluid icon>
            <Input type="text" placeholder="Search a very wide input..."/>
            <Icon search/>
        </Input>
        <br/>
        <Input ui fluid action>
            <Input type="text" placeholder="Search..."/>
            <Button ui>Search</Button>
        </Input>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each sizes as size, i}
            {#if i > 0}
                <br/><br/>
            {/if}
            <Input ui _={size} icon>
                <Input type="text" placeholder="Search {size}..."/>
                <Icon search/>
            </Input>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Textarea -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Textarea" code = {Code.textarea}>

        <p>Note here the example with left corner and left label has to use the underscore option as you can't have two props with the same name.</p>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>
