<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Form, Field, Fields, Input, Label, Checkbox, Button, Header, Select, Option, Menu, Item, Flag, Dropdown, Icon, Text, Image, Segment, Message, Textarea, Radio, Calendar, List } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Form';
    import countries from './Countries';
    import states from './USStates';

    let form1 = {
        firstname: "",
        lastname: "",
        t_and_c: false
    }
    let form2 = {
        shipping: {
            firstname: "",
            lastname: "",
        },
        billing: {
            address: "",
            address2: "",
            state: "",
            country: ""
        },
        information: {
            cardtype: "",
            number: "",
            cvc: "",
            expiration: {
                month: "",
                year: ""
            }
        },
        receipt: {
            sendto: [],
            noreceipt: false
        }
    }

    let radio_ex1 = "";
    let radio_ex2 = "";
    let fruit = "";
    let fruit2 = "";
</script>


<Examples
    title = "Form examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https:/fomantic-ui.com/collections/form.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Form -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Form" code = {Code.form}>

        <Form ui popup={{content: "Please fill in this form", position: "top center", variation: "basic"}}>
            <Field>
                <Label input>First Name</Label>
                <Input text name="first-name" placeholder="First Name" bind:value={form1.firstname}/>
            </Field>
            <Field>
                <Label input>Last Name</Label>
                <Input text name="last-name" placeholder="Last Name" bind:value={form1.lastname}/>
            </Field>
            <Field>
                <Checkbox ui bind:checked={form1.t_and_c}>
                    <Label checkbox>I agree to the Terms and Conditions</Label>
                </Checkbox>
            </Field>
            <Button ui type="submit">Submit</Button>
        </Form>
        <Message ui><Text h4 ui>Form Values: </Text>{JSON.stringify(form1, null, '\t')}</Message>

        <Form ui>
            <Header h4 ui dividing>Shipping Information</Header>
            <Field>
                <Label input>Name</Label>
                <Fields two>
                    <Field>
                        <Input text name="shipping[first-name]" placeholder="First Name" bind:value={form2.shipping.firstname}/>
                    </Field>
                    <Field>
                        <Input text name="shipping[last-name]" placeholder="Last Name" bind:value={form2.shipping.lastname}/>
                    </Field>
                </Fields>
            </Field>
            <Field>
                <Label input>Billing Address</Label>
                <Fields>
                    <Field twelve wide>
                        <Input text name="shipping[address]" placeholder="Street Address" bind:value={form2.billing.address}/>
                    </Field>
                    <Field four wide>
                        <Input text name="shipping[address-2]" placeholder="Apt #" bind:value={form2.billing.address2}/>
                    </Field>
                </Fields>
            </Field>
            <Fields two>
                <Field>
                    <Label input>State</Label>
                    <Select ui fluid dropdown bind:value={form2.billing.state}>
                        <Option value="">State</Option>
                        {#each Object.keys(states) as key}
                            <Option value={key}>{states[key]}</Option>
                        {/each}
                    </Select>
                </Field>
                <Field>
                    <Label input>Country</Label>
                    <Dropdown ui fluid search selection bind:selected={form2.billing.country}>
                        <Input hidden name="country"/>
                        <Icon dropdown/>
                        <Text default>Select Country</Text>
                        <Menu>
                            {#each Object.keys(countries) as key}
                                <Item value={key}><Flag _={key}/>{countries[key]}</Item>
                            {/each}
                        </Menu>
                    </Dropdown>
                </Field>
            </Fields>
            <Header ui h4 dividing>Billing Information</Header>
            <Field>
                <Label input>Card Type</Label>
                <Dropdown ui selection bind:selected={form2.information.cardtype}>
                    <Input hidden name="card[type]"/>
                    <Text default>Type</Text>
                    <Icon dropdown/>
                    <Menu>
                        <Item data-value="visa">
                            <Icon visa/>
                            Visa
                        </Item>
                        <Item data-value="amex">
                            <Icon amex/>
                            American Express
                        </Item>
                        <Item data-value="discover">
                            <Icon discover/>
                            Discover
                        </Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Fields>
                <Field seven wide>
                    <Label input>Card Number</Label>
                    <Input text name="card[number]" maxlength="16" placeholder="Card #" bind:value={form2.information.number}/>
                </Field>
                <Field three wide>
                    <Label input>CVC</Label>
                    <Input text name="card[cvc]" maxlength="3" placeholder="CVC" bind:value={form2.information.cvc}/>
                </Field>
                <Field six wide>
                    <Label input>Expiration</Label>
                    <Fields>
                        <Field eight wide>
                            <Select ui fluid search dropdown name="card[expire-month]" bind:selected={form2.information.expiration}>
                                <Option value="">Month</Option>
                                <Option value="1">January</Option>
                                <Option value="2">February</Option>
                                <Option value="3">March</Option>
                                <Option value="4">April</Option>
                                <Option value="5">May</Option>
                                <Option value="6">June</Option>
                                <Option value="7">July</Option>
                                <Option value="8">August</Option>
                                <Option value="9">September</Option>
                                <Option value="10">October</Option>
                                <Option value="11">November</Option>
                                <Option value="12">December</Option>
                            </Select>
                        </Field>
                        <Field>
                            <Input text name="card[expire-year]" maxlength="4" placeholder="Year"/>
                        </Field>
                    </Fields>
                </Field>
            </Fields>
            <Header h4 ui dividing>Receipt</Header>
            <Field>
                <Label input>Send Receipt To:</Label>
                <Dropdown ui fluid multiple search selection bind:selected={form2.receipt.sendto}>
                    <Input hidden name="receipt"/>
                    <Icon dropdown/>
                    <Text default>Saved Contacts</Text>
                    <Menu>
                        <Item data-value="jenny" data-text="Jenny">
                            <Image ui mini avatar src="/images/jenny.jpg"/>
                            Jenny Hess
                        </Item>
                        <Item data-value="elliot" data-text="Elliot">
                            <Image ui mini avatar src="/images/elliot.jpg"/>
                            Elliot Fu
                        </Item>
                        <Item data-value="stevie" data-text="Stevie">
                            <Image ui mini avatar src="/images/stevie.jpg"/>
                            Stevie Feliciano
                        </Item>
                        <Item data-value="christian" data-text="Christian">
                            <Image ui mini avatar src="/images/christian.jpg"/>
                            Christian
                        </Item>
                        <Item data-value="matt" data-text="Matt">
                            <Image ui mini avatar src="/images/matt.jpg"/>
                            Matt
                        </Item>
                        <Item data-value="justen" data-text="Justen">
                            <Image ui mini avatar src="/images/justen.jpg"/>
                            Justen Kitsune
                        </Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Segment ui>
                <Field>
                    <Checkbox ui toggle name="gift" tabindex="0" bind:checked={form2.receipt.noreceipt}>
                        <Label>Do not include a receipt in the package</Label>
                    </Checkbox>
                </Field>
            </Segment>
            <Button ui tabindex="0">Submit Order</Button>
        </Form>
        <Message ui><Text h4 ui>Form Values: </Text>{JSON.stringify(form2, null, '\t')}</Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- FIeld -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Field" code = {Code.field}>

        <Form ui>
            <Field>
              <Label>User Input</Label>
              <Input text/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fields -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fields" code = {Code.fields}>

        <Form ui>
            <Fields>
                <Field>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Middle name</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

        <Form ui>
            <Fields three>
                <Field>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Middle name</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

        <Form ui>
            <Fields inline>
                <Field eight wide>
                    <Label>Name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field three wide>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field five wide>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text area -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text area" code = {Code.text_area}>

        <Form ui>
            <Field>
                <Label>Text</Label>
                <Textarea/>
            </Field>
            <Field>
                <Label>Short Text</Label>
                <Textarea rows="2"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Checkbox -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Checkbox" code = {Code.checkbox}>

        <Form ui>
            <Field inline>
                <Checkbox ui label="Checkbox"/>
            </Field>
            <Field inline>
                <Checkbox ui slider label="Slider"/>
            </Field>
            <Field inline>
                <Checkbox ui toggle label="Toggle"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Radio checkbox -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Radio checkbox" code = {Code.radio_checkbox}>

        <Form ui>
            <Fields inline>
                <Field> <Radio ui value="1" bind:group={radio_ex1} label="Apples"/> </Field>
                <Field> <Radio ui value="2" bind:group={radio_ex1} label="Oranges"/> </Field>
                <Field> <Radio ui value="3" bind:group={radio_ex1} label="Pears"/> </Field>
                <Field> <Radio ui value="4" bind:group={radio_ex1} label="Grapefruit"/> </Field>
            </Fields>
        </Form>

        <Form ui>
            <Fields grouped>
                <Field> <Radio ui value="1" bind:group={radio_ex2} label="Apples"/> </Field>
                <Field> <Radio ui value="2" bind:group={radio_ex2} label="Oranges"/> </Field>
                <Field> <Radio ui value="3" bind:group={radio_ex2} label="Pears"/> </Field>
                <Field> <Radio ui value="4" bind:group={radio_ex2} label="Grapefruit"/> </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dropdown" code = {Code.dropdown}>

        <Form ui>
            <Field>
                <Label>Gender</Label>
                <Dropdown ui selection>
                    <Icon dropdown/>
                    <Text default>Gender</Text>
                    <Menu>
                        <Item data-value="1">Male</Item>
                        <Item data-value="0">Female</Item>
                    </Menu>
                </Dropdown>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Multiple select -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Multiple select" code = {Code.multiple_select}>

        <Form ui>
            <Field>
                <Select ui multiple dropdown>
                    <Label>Country</Label>
                    {#each Object.keys(countries) as key}
                        <Option value={key}><Flag _={key}/>{countries[key]}</Option>
                    {/each}
                </Select>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- HTML select -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Html select" code = {Code.html_select}>

        <Form ui>
            <Field>
                <Select>
                    <Option value="">Gender</Option>
                    <Option value="1">Male</Option>
                    <Option value="0">Female</Option>
                </Select>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Calendar -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Calendar" code = {Code.calendar}>

        <Form ui>
            <Field>
                <Label>Date</Label>
                <Calendar ui>
                    <Input ui icon left>
                        <Icon calendar/>
                        <Input text placeholder="Pick a date" name="date"/>
                    </Input>
                </Calendar>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Message -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Message" code = {Code.message}>

        <Form ui>
            <Message ui>
                <Header>We had some issues</Header>
                <List>
                    <Item>Please enter your first name</Item>
                    <Item>Please enter your last name</Item>
                </List>
            </Message>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Loading -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Loading" code = {Code.loading}>

        <Form ui loading>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Button ui submit>Submit</Button>
        </Form>
        <Form ui blue double loading>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Button ui submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Success -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Success" code = {Code.success}>

        <Form ui success>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Message ui success>
                <Header>Form Completed</Header>
                <p>You're all signed up for the newsletter.</p>
            </Message>
            <Button ui submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Error -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Error" code = {Code.error}>

        <Form ui error>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Message ui error>
                <Header>Action Forbidden</Header>
                <p>You can only sign up for an account once with a given e-mail address.</p>
            </Message>
            <Button ui submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Warning -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Warning" code = {Code.warning}>

        <Form ui warning>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Message ui warning>
                <Header>Could you check something!</Header>
                <List>
                    <Item>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.</Item>
                </List>
            </Message>
            <Button ui submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Info -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Info" code = {Code.info}>

        <Form ui info>
            <Field>
                <Label>E-mail</Label>
                <Input email placeholder="joe@schmoe.com"/>
            </Field>
            <Message ui info>
                <Header>Requirements</Header>
                <List>
                    <Item>Password must contain at least 8 characters</Item>
                </List>
            </Message>
            <Button ui submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Field error -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Field error" code = {Code.field_error}>

        <Form ui>
            <Fields two>
                <Field error>
                    <Label>First Name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
            <Field error>
                <Label>Gender</Label>
                <Dropdown ui selection>
                    <Text default>Select</Text>
                    <Icon dropdown/>
                    <Input hidden name="gender"/>
                    <Menu>
                        <Item data-value="male">Male</Item>
                        <Item class="item" data-value="female">Female</Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Field inline error>
                <Checkbox ui label="I agree to the Terms and Conditions"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Field warning -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Field warning" code = {Code.field_warning}>

        <Form ui>
            <Fields two>
                <Field warning>
                    <Label>First Name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
            <Field warning>
                <Label>Gender</Label>
                <Dropdown ui selection>
                    <Text default>Select</Text>
                    <Icon dropdown/>
                    <Input hidden name="gender"/>
                    <Menu>
                        <Item data-value="male">Male</Item>
                        <Item class="item" data-value="female">Female</Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Field inline warning>
                <Checkbox ui label="I agree to the Terms and Conditions"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Field success -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Field success" code = {Code.field_success}>

        <Form ui>
            <Fields two>
                <Field success>
                    <Label>First Name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
            <Field success>
                <Label>Gender</Label>
                <Dropdown ui selection>
                    <Text default>Select</Text>
                    <Icon dropdown/>
                    <Input hidden name="gender"/>
                    <Menu>
                        <Item data-value="male">Male</Item>
                        <Item class="item" data-value="female">Female</Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Field inline success>
                <Checkbox ui label="I agree to the Terms and Conditions"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Field info -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Field info" code = {Code.field_info}>

        <Form ui>
            <Fields two>
                <Field info>
                    <Label>First Name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Last Name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
            <Field info>
                <Label>Gender</Label>
                <Dropdown ui selection>
                    <Text default>Select</Text>
                    <Icon dropdown/>
                    <Input hidden name="gender"/>
                    <Menu>
                        <Item data-value="male">Male</Item>
                        <Item class="item" data-value="female">Female</Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Field inline info>
                <Checkbox ui label="I agree to the Terms and Conditions"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled field -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled field" code = {Code.disabled_field}>

        <Form ui>
            <Fields two>
                <Field disabled>
                    <Label>First Name</Label>
                    <Input text disabled placeholder="First name" tabindex="-1"/>
                </Field>
                <Field disabled>
                    <Label>Last Name</Label>
                    <Input text disabled placeholder="Last name" tabindex="-1"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Readonly field -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Readonly field" code = {Code.readonly_field}>

        <Form ui>
            <Fields two>
                <Field readonly>
                    <Label>First Name</Label>
                    <Input text readonly placeholder="First name" tabindex="-1"/>
                </Field>
                <Field readonly>
                    <Label>Last Name</Label>
                    <Input text readonly placeholder="Last name" tabindex="-1"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size}
            <Form ui _={size}>
                <Fields two>
                    <Field>
                        <Label>First Name</Label>
                        <Input text placeholder="First name" tabindex="-1"/>
                    </Field>
                    <Field>
                        <Label>Last Name</Label>
                        <Input text placeholder="Last name" tabindex="-1"/>
                    </Field>
                </Fields>
            </Form>
            <Button ui submit>Submit</Button>
            <br/><br/>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Equal width -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Equal width" code = {Code.equal_width}>

        <Form ui equal width>
            <Fields>
                <Field>
                    <Label>Username</Label>
                    <Input text placeholder="Username"/>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input password/>
                </Field>
            </Fields>
            <Fields>
                <Field>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Middle name</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Form ui inverted>
                <Fields two>
                    <Field>
                        <Label>First Name</Label>
                        <Input text placeholder="First name" tabindex="-1"/>
                    </Field>
                    <Field>
                        <Label>Last Name</Label>
                        <Input text placeholder="Last name" tabindex="-1"/>
                    </Field>
                </Fields>
            </Form>
            <Button ui submit>Submit</Button>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline field -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline field" code = {Code.inline_field}>

        <Form ui>
            <Field inline>
              <Label>Last name</Label>
              <Input text placeholder="Full Name"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Width -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Width" code = {Code.width}>

        <Form ui>
            <Fields>
                <Field six wide>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field four wide>
                    <Label>Middle</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field six wide>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
            <Fields>
                <Field two wide>
                    <Input text placeholder="2 Wide"/>
                </Field>
                <Field twelve wide>
                    <Input text placeholder="12 Wide"/>
                </Field>
                <Field two wide>
                    <Input text placeholder="2 Wide"/>
                </Field>
            </Fields>
            <Fields>
                <Field eight wide>
                    <Input text placeholder="8 Wide"/>
                </Field>
                <Field six wide>
                    <Input text placeholder="6 Wide"/>
                </Field>
                <Field two wide>
                    <Input text placeholder="2 Wide"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Required -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Required" code = {Code.required}>

        <Form ui>
            <Field required>
                <Label input>Full name</Label>
                <Input text placeholder="Full Name"/>
            </Field>
            <Field inline required>
                <Checkbox ui required>
                    <Label checkbox>
                        I agree to the terms and conditions
                    </Label>
                </Checkbox>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Transparent textarea -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Transparent textarea" code = {Code.transparent_textarea}>

        <Form ui>
            <Field>
                <Label>Description</Label>
                <Textarea transparent placeholder="Transparent textarea" cols="30" rows="3"/>
            </Field>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Evenly divided -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Evenly divided" code = {Code.evenly_divided}>

        <Form ui>
            <Fields three>
                <Field>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Middle name</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Grouped fields -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Grouped fields" code = {Code.grouped_fields}>

        <Form ui>
            <Fields grouped>
                <Field> <Radio ui value="1" bind:group={fruit} label="Apples"/> </Field>
                <Field> <Radio ui value="2" bind:group={fruit} label="Oranges"/> </Field>
                <Field> <Radio ui value="3" bind:group={fruit} label="Pears"/> </Field>
                <Field> <Radio ui value="4" bind:group={fruit} label="Grapefruit"/> </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Equal width fields -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Equal width fields" code = {Code.equal_width_fields}>

        <Form ui>
            <Fields>
                <Field>
                    <Label>Username</Label>
                    <Input text placeholder="Username"/>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input password/>
                </Field>
            </Fields>
            <Fields equal width>
                <Field>
                    <Label>First name</Label>
                    <Input text placeholder="First Name"/>
                </Field>
                <Field>
                    <Label>Middle name</Label>
                    <Input text placeholder="Middle Name"/>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <Input text placeholder="Last Name"/>
                </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline fields -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline fields" code = {Code.inline_fields}>

        <Form ui>
            <Fields inline>
                <Label>Phone Number&nbsp;&nbsp;</Label>
                <Field>
                    <Input text placeholder="(xxx)"/>
                </Field>
                <Field>
                    <Input text placeholder="xxx"/>
                </Field>
                <Field>
                    <Input text placeholder="xxxx"/>
                </Field>
            </Fields>
        </Form>

        <Form ui>
            <Fields inline>
                <Label>What's your favorite fruit?&nbsp;&nbsp;</Label>
                <Field> <Radio ui value="1" bind:group={fruit2} label="Apples"/> </Field>
                <Field> <Radio ui value="2" bind:group={fruit2} label="Oranges"/> </Field>
                <Field> <Radio ui value="3" bind:group={fruit2} label="Pears"/> </Field>
                <Field> <Radio ui value="4" bind:group={fruit2} label="Grapefruit"/> </Field>
            </Fields>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>