// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.sidebar').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).sidebar) $(element).sidebar(settings?settings:{});
    })
};

export default onReady;