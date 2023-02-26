// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

const onReady = function () {
    $('.ui.dropdown').each((i, element) => {
        let parameters = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        $(element).dropdown(parameters);
    })
};

export const update = function (id, parameters) {
    console.log(parameters);
    $("#"+id).dropdown(parameters);
    return("");
}

export default onReady;