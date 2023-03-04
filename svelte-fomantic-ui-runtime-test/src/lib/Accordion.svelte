<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Accordion, Title, Icon, Content, Segment, Form, Fields, Field, Input, Label, Button, Radio, Item, Checkbox } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
    <h3 class="document-header">Accordion examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/accordion.html">here</a></div>
    <div class="document-disclaimer">This is very much still a work-in-progress.</div>

    <div class="example">
        <h4 class="example-header">A standard accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">A styled accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">A basic styled accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">A fluid styled accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">A compact accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">A very compact accordion</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Nested accordions, with style, and fluid</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Form fields</h4>
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

        <Prism language="svelte" source={`
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
        `}/>
    </div>
</div>