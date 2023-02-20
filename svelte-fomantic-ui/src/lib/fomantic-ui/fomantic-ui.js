import $ from 'jquery';
import { onReady as Init_Calendars } from './modules/Calendar';

export function dummy () {
    
}

$(document).ready(function()
{
    Init_Calendars();
    // Calendars
    // console.log($('.ui.calendar'));
    // $('.ui.calendar').each((i, element) => {
    //     if (element.className.includes('rangestart'))
    //     {
    //         if (element.attributes.id)
    //         {
    //             let start_calendar_type = element.attributes.type?element.attributes.type.value:"datetime";
    //             let end_calendar_type = $('.ui.rangeend.calendar#' + element.id)[0].attributes.type?$('.ui.rangeend.calendar#' + element.id)[0].attributes.type.value:"datetime";
    //             $("#"+element.id).calendar({ type: start_calendar_type, endCalendar: $('.ui.rangeend.calendar#' + element.id) });
    //             $('.ui.rangeend.calendar#' + element.id).calendar({ type: end_calendar_type, startCalendar: $("#"+element.id) });
    //         } else {
    //             let calendar_type = element.attributes.type?element.attributes.type.value:"datetime";
    //             $('.ui.calendar').eq(i).calendar({type: calendar_type});
    //         }
    //     } else {
    //         if (!element.className.includes('rangeend'))
    //         {
    //             let calendar_type = element.attributes.type?element.attributes.type.value:"datetime";
    //             $('.ui.calendar').eq(i).calendar({type: calendar_type});
    //         }
    //     }
    // })
});