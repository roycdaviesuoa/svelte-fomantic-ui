const code = {
    standard : `
<Accordion ui>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    styled : `
<Accordion ui styled>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    basic_styled : `
<Accordion ui basic styled>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    fluid_styled : `
<Accordion ui fluid styled>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    compact : `
<Accordion ui compact>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    very_compact : `
<Accordion ui very compact>
    <Title active>
        <Icon dropdown/>
        What is a dog?
    </Title>
    <Content active>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        What kinds of dogs are there?
    </Title>
    <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Content>
    <Title>
        <Icon dropdown/>
        How do you acquire a dog?
    </Title>
    <Content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Content>
</Accordion>
    `,
    nested_styled_fluid : `
<Accordion ui styled fluid>
    <Title active>
        <Icon dropdown/>
        Level 1
    </Title>
    <Content active>
        Welcome to level 1
        <Accordion>
            <Title active>
                <Icon dropdown/>
                Level 1A
            </Title>
            <Content active>
                <p>Level 1A Contents</p>
                <Accordion>
                    <Title>
                        <Icon dropdown/>
                        Level 1A-A
                    </Title>
                    <Content>
                        Level 1A-A Contents
                    </Content>
                    <Title>
                        <Icon dropdown/>
                        Level 1A-B
                    </Title>
                    <Content>
                        Level 1A-B Contents
                    </Content>
                </Accordion>
            </Content>
            <Title>
                <Icon dropdown/>
                Level 1B
            </Title>
            <Content>
                Level 1B Contents
            </Content>
            <Title>
                <Icon dropdown/>
                Level 1C
            </Title>
            <Content>
                Level 1C Contents
            </Content>
        </Accordion>
    </Content>
    <Title>
        <Icon dropdown/>
        Level 2
    </Title>
    <Content>
        <p>Welcome to level 2</p>
        <Accordion>
            <Title active>
            <Icon dropdown/>
            Level 2A
            </Title>
            <Content active>
            <p>Level 2A Contents</p>
                <Accordion>
                    <Title>
                        <Icon dropdown/>
                        Level 2A-A
                    </Title>
                    <Content>
                        Level 2A-A Contents
                    </Content>
                    <Title>
                        <Icon dropdown/>
                        Level 2A-B
                    </Title>
                    <Content>
                        Level 2A-B Contents
                    </Content>
                </Accordion>
            </Content>
            <Title>
                <Icon dropdown/>
                Level 2B
            </Title>
            <Content>
                Level 2B Contents
            </Content>
            <Title>
                <Icon dropdown/>
                Level 2C
            </Title>
            <Content>
                Level 2C Contents
            </Content>
        </Accordion>
    </Content>
</Accordion>
    `,
form_fields : `
<Segment ui>
    <Form ui fluid>
        <Fields two>
            <Field>
                <Label>First Name</Label>
                <Input placeholder="First Name"/>
            </Field>
            <Field>
                <Label>Last Name</Label>
                <Input placeholder="Last Name"/>
            </Field>
        </Fields>
        <Field ui accordion>
            <Title>
            <Icon dropdown/>
                Optional Details
            </Title>
            <Field content>
                <Label>Maiden Name</Label>
                <Input placeholder="Maiden Name"/>
            </Field>
        </Field>
        <Button ui secondary submit>Sign Up</Button>
    </Form>
</Segment>
    `
}

export default code;