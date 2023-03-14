// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.modal').each((i, element) => {
        console.log(element);
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        console.log(settings);
        if ($(element).modal) $(element).modal(settings);
    })
};

export default onReady;