<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Calendar, Input, Icon, Form, Fields, Field, Label } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
</script>

<div class="example-document">
  <h3 class="document-header">Calendar examples and tests</h3>
  <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/modules/calendar.html">here</a></div>
  <div class="document-disclaimer">This is very much still a work-in-progress.</div>

    <div class="example">
        <h4 class="example-header">Interactive calendar with settings (3 month)</h4>
        <Calendar ui>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Range calendar</h4>
        <Form ui>
            <Fields two>
                <Field>
                    <Label>Start date</Label>
                    <Calendar ui id="firstStart" settings={{type: 'date', endCalendar: "firstEnd"}}>
                        <Input ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="Start"/>
                        </Input>
                    </Calendar>
                </Field>
                <Field>
                    <Label>End date</Label>
                    <Calendar ui id="firstEnd" settings={{type: 'date', startCalendar: "firstStart"}}>
                        <Input ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="End"/>
                        </Input>
                    </Calendar>
                </Field>
            </Fields>
        </Form>
        <Prism language="svelte" source={`
<Form ui>
    <Fields two>
        <Field>
            <Label>Start date</Label>
            <Calendar ui id="firstStart" settings={{type: 'date', endCalendar: "firstEnd"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="Start"/>
                </Input>
            </Calendar>
        </Field>
        <Field>
            <Label>End date</Label>
            <Calendar ui id="firstEnd" settings={{type: 'date', startCalendar: "firstStart"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="End"/>
                </Input>
            </Calendar>
        </Field>
    </Fields>
</Form>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Range calendar with settings</h4>
        <Form ui>
            <Fields two>
                <Field>
                    <Label>Start date</Label>
                    <Calendar ui id="secondStart" settings={{type: "date", endCalendar: "secondEnd"}}>
                        <Input ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="Start"/>
                        </Input>
                    </Calendar>
                </Field>
                <Field>
                    <Label>End date</Label>
                    <Calendar ui id="secondEnd" settings={{type: "datetime", startCalendar: "secondStart"}}>
                        <Input ui input left icon>
                            <Icon calendar/>
                            <Input placeholder="End"/>
                        </Input>
                    </Calendar>
                </Field>
            </Fields>
        </Form>
        <Prism language="svelte" source={`
<Form ui>
    <Fields two>
        <Field>
            <Label>Start date</Label>
            <Calendar ui id="secondStart" settings={{type: "date", endCalendar: "secondEnd"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="Start"/>
                </Input>
            </Calendar>
        </Field>
        <Field>
            <Label>End date</Label>
            <Calendar ui id="secondEnd" settings={{type: "datetime", startCalendar: "secondStart"}}>
                <Input ui input left icon>
                    <Icon calendar/>
                    <Input placeholder="End"/>
                </Input>
            </Calendar>
        </Field>
    </Fields>
</Form>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inline calendar</h4>
        <Calendar ui settings={{inline: true}}/>
        <Prism language="svelte" source={`
<Calendar ui settings={{inline: true}}/>
    `}/>
    </div>

   <div class="example">
        <h4 class="example-header">Interactive calendar with settings (3 month)</h4>
        <Calendar ui settings={{type: 'date', multiMonth: 3, monthOffset: -1}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{type: 'date', multiMonth: 3, monthOffset: -1}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Inverted calendar</h4>
        <Calendar ui inverted settings={{type: 'date'}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui inverted settings={{type: 'date'}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `}/>
    </div>


    <div class="example">
        <h4 class="example-header">Time calendar</h4>
        <Calendar ui settings={{type: 'time'}}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Time"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{type: 'time'}}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Time"/>
    </Input>
</Calendar>
        `}/>
    </div>


    <div class="example">
        <h4 class="example-header">Parameters using html</h4>
        <Calendar ui data-type="date" data-date="2019-12-24">
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui data-type="date" data-date="2019-12-24">
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
        `}/>
    </div>


    <div class="example">
        <h4 class="example-header">Year first calendar</h4>
        <Calendar ui settings={{startMode:"year"}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{startMode:"year"}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
        `}/>        
    </div>


    <div class="example">
        <h4 class="example-header">24 hour format</h4>
        <Calendar ui settings={{
            type: 'time',
            formatter: {
              time: 'H:mm',
              cellTime: 'H:mm'
            }
          }}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{
    type: 'time',
    formatter: {
        time: 'H:mm',
        cellTime: 'H:mm'
    }
    }}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
        `}/>        
    </div>



    <div class="example">
        <h4 class="example-header">Month and year calendar</h4>
        <Calendar ui settings={{ type: 'month' }}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{ type: 'month' }}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
        `}/>        
    </div>


    <div class="example">
        <h4 class="example-header">Year calendar</h4>
        <Calendar ui settings={{ type: 'year' }}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>
        <Prism language="svelte" source={`
<Calendar ui settings={{ type: 'year' }}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
        `}/>        
    </div>
</div>