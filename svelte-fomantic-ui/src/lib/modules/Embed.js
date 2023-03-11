// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

export const onReady = function () {
    $('.ui.embed').each((i, element) => {
        let settings = element.attributes.params?JSON.parse(element.attributes.params.value):{};
        let activate = element.attributes.activate?JSON.parse(element.attributes.activate.value):false;
        if (activate)
        {
            if ($(element).embed) $(element).embed(settings);
        }
    })
};

export const update = function (id, settings=null) {
    if ($("#"+id).embed) {$("#"+id).embed(settings);}
}

export const behavior = function(id, param1="", param2="", param3="") {
    console.log(id, param1, param2, param3);
    if ($("#"+id).embed) {$("#"+id).embed().play();}
}

export default onReady;