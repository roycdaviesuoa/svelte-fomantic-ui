// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    // Find Accordian elements and run the .accordian() function on them
    $('.ui.accordion').each((i, element) => {
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if ($(element).accordion) $(element).accordion(settings);
    })
};

export const update = function (id, settings) {
    if ($("#"+id).accordion) $("#"+id).accordion(settings);
}

export default onReady;