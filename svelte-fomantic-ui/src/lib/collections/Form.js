// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.form').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).form) $(element).form(settings);
    })
};

export default onReady;