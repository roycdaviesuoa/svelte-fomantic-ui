<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Calendar, Input, Icon, Form, Fields, Field, Label, Popup, Button, Content } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Calendar';
</script>


<Examples
    title = "Calendar examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/calendar.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Interactive -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Interactive" code = {Code.interactive}>

        <Calendar ui>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>

        <Input ui fluid left icon popup>
            <Icon calendar/>
            <Input placeholder="Date/Time"/>
        </Input>
        <Popup ui settings={{position :"bottom left", hoverable: true}}>
            <Content><Calendar ui></Calendar></Content>
        </Popup>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Range -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Range" code = {Code.range}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Range calendar with settings -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Range settings" code = {Code.range_settings}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline" code = {Code.inline}>

        <Calendar ui settings={{inline: true}}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Interactive calendar with settings (3 month)-->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Three month" code = {Code.three_month}>

        <Calendar ui settings={{type: 'date', multiMonth: 3, monthOffset: -1}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Calendar ui inverted settings={{type: 'date'}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date/Time"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Time -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Time" code = {Code.time}>

        <Calendar ui settings={{type: 'time'}}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Time"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Parameters using HTML -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Html" code = {Code.html}>

        <Calendar ui data-type="date" data-date={Date()}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Year first -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Year first" code = {Code.year_first}>

        <Calendar ui settings={{startMode:"year"}}>
            <Input ui fluid left icon>
                <Icon calendar/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- 24 hour format -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Twenty four hour" code = {Code.twenty_four_hour}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Month and year -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Month and year" code = {Code.month_and_year}>

        <Calendar ui settings={{ type: 'month' }}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Year -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Year" code = {Code.year}>

        <Calendar ui settings={{ type: 'year' }}>
            <Input ui fluid left icon>
                <Icon time/>
                <Input placeholder="Date"/>
            </Input>
        </Calendar>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>