// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    // Find Accordian elements and run the .accordian() function on them
    $('.ui.accordion').each((i, element) => {
        $('.ui.accordion').eq(i).accordion();
    })
};

export default onReady;