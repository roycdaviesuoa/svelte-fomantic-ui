// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.dropdown').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).dropdown) $(element).dropdown(settings?settings:{});
    })
};

export default onReady;