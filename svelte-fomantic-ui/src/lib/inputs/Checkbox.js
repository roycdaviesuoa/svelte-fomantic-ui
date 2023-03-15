// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.checkbox').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).checkbox) $(element).checkbox(settings);
    })
};

export default onReady;