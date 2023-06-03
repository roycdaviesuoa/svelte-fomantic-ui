<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Form, Field, Label, Input, Button, Message } from "../svelte-fomantic-ui.svelte";
</script>

<Form ui segment settings={{
        shouldTrim: false,
        fields: {
            color: {
                identifier: 'color',
                rules: [{
                    type: `regExp[/rgb\\((\\d{1,3}), (\\d{1,3}), (\\d{1,3})\\)/i]`,
                    prompt: 'Incorrect format',
                }]
            }
        }
    }}>
    <Field>
        <Label input>Color</Label>
        <Input type="text" placeholder="Enter rgb" name="color" value="rgb(255, 255, 255)"/>
    </Field>
    <Button ui primary submit>Submit</Button>
    <Message ui error/>
</Form>

<Form ui segment id="ex4">
    <Field>
        <Label input>Color</Label>
        <Input text placeholder="Enter rgb" name="color4" value="rgb(255, 255, 255)"/>
    </Field>
    <Button ui primary submit on:click={() => {
        behavior({id: "ex4", type: "form", settings: {
            shouldTrim: false,
            fields: {
                regex: {
                    identifier: 'color4',
                    rules: [{
                        type: `regExp[/rgb\\\\((\\\\d{1,3}), (\\\\d{1,3}), (\\\\d{1,3})\\\\)/i]`,
                        prompt: 'Incorrect format',
                    }]
                }
            }
            }
        });
        // behavior({id: "ex4", type: "form", commands: ["validate form"]});
    }}>Submit</Button>
    <Message ui error/>
</Form>

