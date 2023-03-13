// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    interactive : `
<Calendar ui>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `,
    range : `
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
    `,
    range_settings : `
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
    `,
    inline : `
<Calendar ui settings={{inline: true}}/>
    `,
    three_month : `
<Calendar ui settings={{type: 'date', multiMonth: 3, monthOffset: -1}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `,
    inverted : `
<Calendar ui inverted settings={{type: 'date'}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date/Time"/>
    </Input>
</Calendar>
    `,
    time : `
<Calendar ui settings={{type: 'time'}}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Time"/>
    </Input>
</Calendar>
    `,
    html : `
<Calendar ui data-type="date" data-date={Date()}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
    `,
    year_first : `
<Calendar ui settings={{startMode:"year"}}>
    <Input ui fluid left icon>
        <Icon calendar/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
    `,
    twenty_four_hour : `
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
    `,
    month_and_year : `
<Calendar ui settings={{ type: 'month' }}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
    `,
    year : `
<Calendar ui settings={{ type: 'year' }}>
    <Input ui fluid left icon>
        <Icon time/>
        <Input placeholder="Date"/>
    </Input>
</Calendar>
    `
}

export default code;