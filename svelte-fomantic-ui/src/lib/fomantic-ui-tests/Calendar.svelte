<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Calendar, Input, Input_Wrapper, Icon, Form, Fields, Field, Label } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
</script>

<div class="example-document">
  <h3 class="document-header">Calendar examples and tests</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/calendar.html">here</a></div>
  <div class="document-description"><i>This is very much still a work-in-progress.</i></div>

    <div class="example">
        <h4 class="example-header">Testing interactive calendar</h4>
        <Calendar ui type="date">
            <Input_Wrapper ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input_Wrapper>
        </Calendar>
    </div>

    <div class="example">
        <h4 class="example-header">Testing range calendar</h4>
        <Form ui>
            <Fields two>
                <Field>
                    <Label>Start date</Label>
                    <Calendar ui rangestart id="first">
                        <Input_Wrapper ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="Start"/>
                        </Input_Wrapper>
                    </Calendar>
                </Field>
                <Field>
                    <Label>End date</Label>
                    <Calendar ui rangeend id="first">
                        <Input_Wrapper ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="End"/>
                        </Input_Wrapper>
                    </Calendar>
                </Field>
            </Fields>
        </Form>
    </div>

    <div class="example">
        <h4 class="example-header">Testing a range calendar with type</h4>
        <Form ui>
            <Fields two>
                <Field>
                    <Label>Start date</Label>
                    <Calendar ui rangestart id="second" type="date">
                        <Input_Wrapper ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="Start"/>
                        </Input_Wrapper>
                    </Calendar>
                </Field>
                <Field>
                    <Label>End date</Label>
                    <Calendar ui rangeend id="second" type="datetime">
                        <Input_Wrapper ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="End"/>
                        </Input_Wrapper>
                    </Calendar>
                </Field>
            </Fields>
        </Form>
    </div>
</div>