// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.dropdown').each((i, element) => {
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if ($(element).dropdown) $(element).dropdown(settings);
    })
};

export const update = function (id, settings) {
    if ($("#"+id).dropdown) $("#"+id).dropdown(settings);
}

export default onReady;