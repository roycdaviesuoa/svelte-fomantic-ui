// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************
export const onReady = function () {
    $('.ui.calendar').each((i, element) => {
        let settings = $(element).data('settings');

        if (settings.hasOwnProperty("startCalendar")) {
            settings.startCalendar = $("#"+settings.startCalendar);
        }
        if (settings.hasOwnProperty("endCalendar")) {
            settings.endCalendar = $("#"+settings.endCalendar);
        }

        if ($(element).calendar) $(element).calendar(settings?settings:{});
    })
};

export default onReady;