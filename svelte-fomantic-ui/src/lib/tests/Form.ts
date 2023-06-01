// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    form : `
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
                <Label input>Do not include a receipt in the package</Label>
            </Checkbox>
        </Field>
    </Segment>
    <Button ui tabindex="0">Submit Order</Button>
</Form>
<Message ui><Text h4 ui>Form Values: </Text>{JSON.stringify(form2, null, '\t')}</Message>
    `,
    field : `
<Form ui>
    <Field>
      <Label input>User Input</Label>
      <Input text/>
    </Field>
</Form>
    `,
    fields : `
<Form ui>
    <Fields>
        <Field>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Middle name</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field>
            <Label input>Last name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
</Form>

<Form ui>
    <Fields three>
        <Field>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Middle name</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field>
            <Label input>Last name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
</Form>

<Form ui>
    <Fields inline>
        <Field eight wide>
            <Label input>Name</Label>
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
    `,
    text_area : `
<Form ui>
    <Field>
        <Label input>Text</Label>
        <Textarea/>
    </Field>
    <Field>
        <Label input>Short Text</Label>
        <Textarea rows="2"/>
    </Field>
</Form>
    `,
    checkbox : `
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
    `,
    radio_checkbox : `
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
    `,
    dropdown : `
<Form ui>
    <Field>
        <Label input>Gender</Label>
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
    `,
    multiple_select : `
<Form ui>
    <Field>
        <Select ui multiple dropdown>
            <Label input>Country</Label>
            {#each Object.keys(countries) as key}
                <Option value={key}><Flag _={key}/>{countries[key]}</Option>
            {/each}
        </Select>
    </Field>
</Form>
    `,
    html_select : `
<Form ui>
    <Field>
        <Select>
            <Option value="">Gender</Option>
            <Option value="1">Male</Option>
            <Option value="0">Female</Option>
        </Select>
    </Field>
</Form>
    `,
    calendar : `
<Form ui>
    <Field>
        <Label input>Date</Label>
        <Calendar ui settings={{type:"date"}}>
            <Input ui icon left>
                <Icon calendar/>
                <Input text placeholder="Pick a date" name="date"/>
            </Input>
        </Calendar>
    </Field>
</Form>
    `,
    message : `
<Form ui>
    <Message ui>
        <Header>We had some issues</Header>
        <List>
            <Item>Please enter your first name</Item>
            <Item>Please enter your last name</Item>
        </List>
    </Message>
</Form>
    `,
    loading : `
<Form ui loading>
    <Field>
        <Label input>E-mail</Label>
        <Input email placeholder="joe@schmoe.com"/>
    </Field>
    <Button ui submit>Submit</Button>
</Form>
<Form ui blue double loading>
    <Field>
        <Label input>E-mail</Label>
        <Input email placeholder="joe@schmoe.com"/>
    </Field>
    <Button ui submit>Submit</Button>
</Form>
    `,
    success : `
<Form ui success>
    <Field>
        <Label input>E-mail</Label>
        <Input email placeholder="joe@schmoe.com"/>
    </Field>
    <Message ui success>
        <Header>Form Completed</Header>
        <p>You're all signed up for the newsletter.</p>
    </Message>
    <Button ui submit>Submit</Button>
</Form>
    `,
    error : `
<Form ui error>
    <Field>
        <Label input>E-mail</Label>
        <Input email placeholder="joe@schmoe.com"/>
    </Field>
    <Message ui error>
        <Header>Action Forbidden</Header>
        <p>You can only sign up for an account once with a given e-mail address.</p>
    </Message>
    <Button ui submit>Submit</Button>
</Form>
    `,
    warning : `
<Form ui warning>
    <Field>
        <Label input>E-mail</Label>
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
    `,
    info : `
<Form ui info>
    <Field>
        <Label input>E-mail</Label>
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
    `,
    field_error : `
<Form ui>
    <Fields two>
        <Field error>
            <Label input>First Name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Last Name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
    <Field error>
        <Label input>Gender</Label>
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
    `,
    field_warning : `
<Form ui>
    <Fields two>
        <Field warning>
            <Label input>First Name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Last Name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
    <Field warning>
        <Label input>Gender</Label>
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
    `,
    field_success : `
<Form ui>
    <Fields two>
        <Field success>
            <Label input>First Name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Last Name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
    <Field success>
        <Label input>Gender</Label>
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
    `,
    field_info : `
<Form ui>
    <Fields two>
        <Field info>
            <Label input>First Name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Last Name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
    <Field info>
        <Label input>Gender</Label>
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
    `,
    disabled_field : `
<Form ui>
    <Fields two>
        <Field disabled>
            <Label input>First Name</Label>
            <Input text disabled placeholder="First name" tabindex="-1"/>
        </Field>
        <Field disabled>
            <Label input>Last Name</Label>
            <Input text disabled placeholder="Last name" tabindex="-1"/>
        </Field>
    </Fields>
</Form>
    `,
    readonly_field : `
<Form ui>
    <Fields two>
        <Field readonly>
            <Label input>First Name</Label>
            <Input text readonly placeholder="First name" tabindex="-1"/>
        </Field>
        <Field readonly>
            <Label input>Last Name</Label>
            <Input text readonly placeholder="Last name" tabindex="-1"/>
        </Field>
    </Fields>
</Form>
    `,
    size : `
{#each ["mini", "tiny", "small", "large", "big", "huge", "massive"] as size}
    <Form ui _={size}>
        <Fields two>
            <Field>
                <Label input>First Name</Label>
                <Input text placeholder="First name" tabindex="-1"/>
            </Field>
            <Field>
                <Label input>Last Name</Label>
                <Input text placeholder="Last name" tabindex="-1"/>
            </Field>
        </Fields>
    </Form>
    <Button ui submit>Submit</Button>
    <br/><br/>
{/each}
    `,
    equal_width : `
<Form ui equal width>
    <Fields>
        <Field>
            <Label input>Username</Label>
            <Input text placeholder="Username"/>
        </Field>
        <Field>
            <Label input>Password</Label>
            <Input password/>
        </Field>
    </Fields>
    <Fields>
        <Field>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Middle name</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field>
            <Label input>Last name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
</Form>
    `,
    inverted : `
<Segment ui inverted>
    <Form ui inverted>
        <Fields two>
            <Field>
                <Label input>First Name</Label>
                <Input text placeholder="First name" tabindex="-1"/>
            </Field>
            <Field>
                <Label input>Last Name</Label>
                <Input text placeholder="Last name" tabindex="-1"/>
            </Field>
        </Fields>
    </Form>
    <Button ui submit>Submit</Button>
</Segment>
    `,
    inline_field : `
<Form ui>
    <Field inline>
      <Label input>Last name</Label>
      <Input text placeholder="Full Name"/>
    </Field>
</Form>
    `,
    width : `
<Form ui>
    <Fields>
        <Field six wide>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field four wide>
            <Label input>Middle</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field six wide>
            <Label input>Last name</Label>
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
    `,
    required : `
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
    `,
    transparent_textarea : `
<Form ui>
    <Field>
        <Label input>Description</Label>
        <Textarea transparent placeholder="Transparent textarea" cols="30" rows="3"/>
    </Field>
</Form>
    `,
    evenly_divided : `
<Form ui>
    <Fields three>
        <Field>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Middle name</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field>
            <Label input>Last name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
</Form>
    `,
    grouped_fields : `
<Form ui>
    <Fields grouped>
        <Field> <Radio ui value="1" bind:group={fruit} label="Apples"/> </Field>
        <Field> <Radio ui value="2" bind:group={fruit} label="Oranges"/> </Field>
        <Field> <Radio ui value="3" bind:group={fruit} label="Pears"/> </Field>
        <Field> <Radio ui value="4" bind:group={fruit} label="Grapefruit"/> </Field>
    </Fields>
</Form>
    `,
    equal_width_fields : `
<Form ui>
    <Fields>
        <Field>
            <Label input>Username</Label>
            <Input text placeholder="Username"/>
        </Field>
        <Field>
            <Label input>Password</Label>
            <Input password/>
        </Field>
    </Fields>
    <Fields equal width>
        <Field>
            <Label input>First name</Label>
            <Input text placeholder="First Name"/>
        </Field>
        <Field>
            <Label input>Middle name</Label>
            <Input text placeholder="Middle Name"/>
        </Field>
        <Field>
            <Label input>Last name</Label>
            <Input text placeholder="Last Name"/>
        </Field>
    </Fields>
</Form>
    `,
    inline_fields : `
<Form ui>
    <Fields inline>
        <Label input>Phone Number</Label>
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
        <Label input>What's your favorite fruit?</Label>
        <Field> <Radio ui value="1" bind:group={fruit2} label="Apples"/> </Field>
        <Field> <Radio ui value="2" bind:group={fruit2} label="Oranges"/> </Field>
        <Field> <Radio ui value="3" bind:group={fruit2} label="Pears"/> </Field>
        <Field> <Radio ui value="4" bind:group={fruit2} label="Grapefruit"/> </Field>
    </Fields>
</Form>
    `
}

export default code;