export function uiProps (restProps:{}):string {
    let the_class = "";
    Object.keys(restProps).forEach((key, i) => {
        if ((typeof(restProps[key]) === "boolean") && restProps[key]) {
            the_class = the_class + ((i>0?" ":"") + key);
        }
    });
    if (restProps.hasOwnProperty("_"))
    {
        the_class = the_class + " " + restProps["_"]
    }
    return(the_class);
}

export function otherProps (restProps:{}):{} {
    let other_props = {};
    Object.keys(restProps).forEach((key) => {
        if (typeof(restProps[key]) !== "boolean") {
            other_props[key] = restProps[key];
        }
    });
    return other_props;
}