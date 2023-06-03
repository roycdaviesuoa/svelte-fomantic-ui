<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, June 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Form, Field, Fields, Input, Label, Checkbox, Button, Select, Option, Message } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Validation';
</script>


<Examples
    title = "Form Validation examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https:/fomantic-ui.com/behaviors/form.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Validation rules -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Validation rules" code = {Code.validation_rules}>

        <Form ui segment settings={{
            fields: {
              name: {
                identifier: 'name',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your name'
                  }
                ]
              },
              skills: {
                identifier: 'skills',
                rules: [
                  {
                    type   : 'minCount[2]',
                    prompt : 'Please select at least two skills'
                  }
                ]
              },
              gender: {
                identifier: 'gender',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please select a gender'
                  }
                ]
              },
              username: {
                identifier: 'username',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter a username'
                  }
                ]
              },
              password: {
                identifier: 'password',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter a password'
                  },
                  {
                    type   : 'minLength[6]',
                    prompt : 'Your password must be at least {ruleValue} characters'
                  }
                ]
              },
              terms: {
                identifier: 'terms',
                rules: [
                  {
                    type   : 'checked',
                    prompt : 'You must agree to the terms and conditions'
                  }
                ]
              }
            }
          }}>
            <p>Tell Us About Yourself</p>
            <Fields two>
                <Field>
                    <Label input>Name</Label>
                    <Input text placeholder="First Name" name="name"/>
                </Field>
                <Field>
                    <Label input>Gender</Label>
                    <Select ui dropdown name="gender">
                        <Option value="">Gender</Option>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Field>
            </Fields>
            <Fields two>
                <Field>
                    <Label input>Username</Label>
                    <Input text placeholder="Username" name="username"/>
                </Field>
                <Field>
                    <Label input>Password</Label>
                    <Input password name="password"/>
                </Field>
            </Fields>
            <Field>
                <Label input>Skills</Label>
                <Select ui dropdown name="skills" multiple>
                    <Option value="">Select Skills</Option>
                    <Option value="css">CSS</Option>
                    <Option value="html">HTML</Option>
                    <Option value="javascript">Javascript</Option>
                    <Option value="design">Graphic Design</Option>
                    <Option value="plumbing">Plumbing</Option>
                    <Option value="mech">Mechanical Engineering</Option>
                    <Option value="repair">Kitchen Repair</Option>
                </Select>
            </Field>
            <Field inline>
                <Checkbox ui>
                    <Input checkbox name="terms"/>
                    <Label input>I agree to the terms and conditions</Label>
                </Checkbox>
            </Field>
            <Button ui primary submit>Submit</Button>
            <Button ui error message></Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Validation passing parameters -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Validation passing parameters" code = {Code.validation_passing_parameters}>

        <Form ui segment settings={{
            fields: {
              color: {
                identifier: 'color',
                rules: [{
                    type: "regExp[/rgb\\\\((\\\\d{1,3}), (\\\\d{1,3}), (\\\\d{1,3})\\\\)/i]",
                    prompt: "Invalid color",
                }]
              }
            }
          }}>
            <Field>
                <Label input>Color</Label>
                <Input text placeholder="Enter rgb" name="color" value="rgb(255, 255, 255)"/>
            </Field>
            <Message ui error/>
            <Button ui primary submit>Submit</Button>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>

        <Form ui segment settings={{
            fields: {
                field1: {
                    rules: [
                        {
                            type   : 'empty'
                        }
                    ]
                },
                field2: {
                    rules: [
                        {
                            type   : 'isExactly[dog]',
                            prompt : '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
                        }
                    ]
                },
                field3: {
                    rules: [
                        {
                            type   : 'isExactly[cat]',
                            prompt : (value) => {
                                if (value == 'dog') {
                                    return 'I told you to put cat, not dog!';
                                }
                                return 'That is not cat';
                            }
                        }
                    ]
                },
            }
          }}>
            <Fields two>
                <Field>
                    <Label input>Field 1</Label>
                    <Input text name="field1"/>
                </Field>
                <Field>
                    <Label input>Field 2</Label>
                    <Input text name="field2"/>
                </Field>
                <Field>
                    <Label input>Field 3</Label>
                    <Input text name="field3"/>
                </Field>
            </Fields>
            <Button ui primary submit>Submit</Button>
            <Message ui error/>
        </Form>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
</Examples>