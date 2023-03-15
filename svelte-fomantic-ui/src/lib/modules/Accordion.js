// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    // Find Accordian elements and run the .accordian() function on them
    $('.ui.accordion').each((i, element) => {
        let settings = $(element).data('settings');
        if ($(element).accordion) $(element).accordion(settings?settings:{});
    })
};

export default onReady;