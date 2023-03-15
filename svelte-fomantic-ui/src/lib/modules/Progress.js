// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.progress').each((i, element) => {
        let settings = $(element).data('settings');
        let activate = element.attributes.activate?JSON.parse(element.attributes.activate.value):false;      
        if (activate)
        {
            if ($(element).progress) $(element).progress(settings?settings:{});
        }
    })
};

export default onReady;