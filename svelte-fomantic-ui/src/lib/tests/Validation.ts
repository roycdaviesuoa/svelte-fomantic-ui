// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    validation_rules : `
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
    `
}

export default code;