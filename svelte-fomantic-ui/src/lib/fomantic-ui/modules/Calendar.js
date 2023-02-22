// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************
export const onReady = function () {
    $('.ui.calendar').each((i, element) => {

        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if (settings.hasOwnProperty("startCalendar")) {
            settings.startCalendar = $("#"+settings.startCalendar);
        }
        if (settings.hasOwnProperty("endCalendar")) {
            settings.endCalendar = $("#"+settings.endCalendar);
        }

        $(element).calendar(settings);
    })
};

export const update = function (id, settings) {
    $("#"+id).dropdown(settings);
}

export default onReady;