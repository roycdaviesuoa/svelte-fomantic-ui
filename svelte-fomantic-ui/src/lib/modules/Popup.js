// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.popup').each((i, element) => {
        let settings = $(element).data('settings');
        console.log("onReady", element, settings);
        if ($(element).popup) $(element).popup(settings);
    })
};

export default onReady;