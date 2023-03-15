// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.rating').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).rating) $(element).rating(settings?settings:{});
    })
};

export default onReady;