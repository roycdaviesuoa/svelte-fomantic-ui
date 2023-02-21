// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    // Find Calendar elements and run the .calendar() function on them
    $('.ui.calendar').each((i, element) => {
        // Calendar ranges
        let parameters = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if (element.className.includes('rangestart'))
        {
            // Range Calendars are joined by having the same id - so there has to be one...
            if (element.attributes.id)
            {
                // End Parameters
                let endParameters = $('.ui.rangeend.calendar#' + element.id)[0].attributes.params?JSON.parse($('.ui.rangeend.calendar#' + element.id)[0].attributes.params.value):{};
                // Check if there is a type for the start calendar, otherwise use the default
                let start_calendar_type = parameters.type?parameters.type:"datetime";
                // Get the type for the end calendar, or if there is none, use the default
                let end_calendar_type = endParameters.type?endParameters.type:"datetime";
                // Execute the calendar function with the parameters for the startcalendar
                $("#"+element.id).calendar($.extend(parameters, { type: start_calendar_type, endCalendar: $('.ui.rangeend.calendar#' + element.id) }));
                // Execute the calendar function with the parameters for the endcalendar
                $('.ui.rangeend.calendar#' + element.id).calendar($.extend(endParameters, { type: end_calendar_type, startCalendar: $("#"+element.id) }));
            } else {
                // Check if there are parameters for the calendar, otherwise use the default
                let parameters = element.attributes.params?JSON.parse(element.attributes.params.value):{};
                $('.ui.calendar').eq(i).calendar(parameters);
            }
        } 
        else
        // Ordinary Calendar
        {
            if (!element.className.includes('rangeend'))
            {
                // Check if there are parameters for the calendar, otherwise use the default
                let parameters = element.attributes.params?JSON.parse(element.attributes.params.value):{};
                $('.ui.calendar').eq(i).calendar(parameters);
            }
        }
    })
};

export default onReady;