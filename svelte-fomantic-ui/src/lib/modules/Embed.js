// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.embed').each((i, element) => {
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        let activate = element.attributes.activate?JSON.parse(element.attributes.activate.value):false;
        if (activate)
        {
            if ($(element).embed) $(element).embed(settings);
        }
    })
};

export default onReady;