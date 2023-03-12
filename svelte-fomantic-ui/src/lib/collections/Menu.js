// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.menu').each((i, element) => {
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        if ($(element).menu) $(element).menu(settings);
    })
};

export default onReady;