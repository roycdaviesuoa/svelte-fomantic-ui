// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.modal').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).modal) $(element).modal(settings?settings:{});
    })
};

export default onReady;