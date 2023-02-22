// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    $('.ui.calendar').each((i, element) => {

        let parameters = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if (parameters.hasOwnProperty("startCalendar")) {
            parameters.startCalendar = $("#"+parameters.startCalendar);
        }
        if (parameters.hasOwnProperty("endCalendar")) {
            parameters.endCalendar = $("#"+parameters.endCalendar);
        }

        $(element).calendar(parameters);
    })
};

export default onReady;