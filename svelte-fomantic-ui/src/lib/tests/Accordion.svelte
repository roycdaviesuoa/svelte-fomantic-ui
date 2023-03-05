<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Accordion, Title, Icon, Content, Segment, Form, Fields, Field, Input, Label, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Accordion'
</script>

<Examples
    title = "Accordion examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/accordion.html'>here</a>"
    disclaimer = "The basic functionality is working, but the advanced controls are yet to be implemented.">
    

    
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- A standard accordion -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A standard accordion" code = {Code.standard}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Styled -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A styled accordion" code = {Code.styled}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Basic styled -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A basic styled accordion" code = {Code.basic_styled}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Fluid styled -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A fluid styled accordion" code = {Code.fluid_styled}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Compact -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A compact accordion" code = {Code.compact}>
 
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
 
</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Very compact -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "A very compact accordion" code = {Code.very_compact}>
 
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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Nested, styled and fluid -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "Nested accordions, with style, and fluid" code = {Code.nested_styled_fluid}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Form fields -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<Example title = "Form fields" code = {Code.form_fields}>

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

</Example>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
</Examples>