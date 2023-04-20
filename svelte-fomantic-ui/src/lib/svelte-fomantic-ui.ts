// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Convert the props that are sent into an svelte tag that are not named directly into a string that can be used as class attributes.
// Also, if there is an underscore property, add the words in that to the class attributes.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function classString (ui: boolean, restProps:{}, mainClass: string):string {
    // Start with 'ui' if appropriate
    let the_class = (ui?"ui ":"");

    Object.keys(restProps).forEach((key, i) => {
        // Properties that are boolean are used for the class details for Fomantic-UI.
        // The class is only included if the property is true - this makes it possible to switch on and off a class programmatically.
        // This works fine until you actually want to send a boolean data prop that you don't want to be used as a class name.
        // So far, this hasn't been a problem...
        if ((typeof(restProps[key]) === "boolean") && restProps[key]) {
            the_class = the_class + ((i>0?" ":"") + key);
        }
    });

    // Sometimes class details are sent in via the underscore property as text.
    if (restProps.hasOwnProperty("_"))
    {
        the_class = the_class + " " + restProps["_"]
    }

    // Add the main class
    the_class += " " + mainClass;

    // Trim any leading or trailing spaces and return

    let return_class = the_class.trim();
    return((return_class==="")?undefined:return_class);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Return an object with any props that are not booleans to be included in the remaining props for the Fomantic UI tag.
// If a prop is required that is a boolean, name it and include it specifically in the svelte tag definition as an exported prop.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function otherProps (restProps:{}):{} {
    let other_props = {};
    Object.keys(restProps).forEach((key) => {
        if (key === "data") {
            // Syntactic sugar for collecting data- properties into one JSON object.  Here we unwrap that back into data- properties.
            Object.keys(restProps[key]).forEach((data_key) => {
                other_props["data-"+data_key] = restProps[key][data_key];
            })
        }
        else {
            // Find all the non-boolean properties.
            if ((typeof(restProps[key]) !== "boolean") && (key != "_")) {
                other_props[key] = restProps[key];
            }
        }
    });
    return(other_props);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function serialize(...parameters:any[])
{
    let obj: object = {};

    if (parameters.length >= 3)
    {
        if (!parameters[0]) { return undefined; }
        else { obj = {type: parameters[0], settings: parameters[1], activate: parameters[2]}; }
    }
    else if (parameters.length >= 2)
    {
        if (!parameters[0]) { return undefined; }
        else { obj = {type: parameters[0], settings: parameters[1]};}
    }
    else if (parameters.length >= 1)
    {
        if (!parameters[0]) { return undefined; }
        else { obj = {type: parameters[0], settings: {}}; }
    }
    else
    {
        return undefined;
    }
    
    // Create a new object to hold the serialized version
    const serialized = {};

    // Iterate over the object's properties
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) 
        {
            const val = obj[key];
            if ((val !== undefined) && (val !== null))
            {
                if (key === "settings")
                {
                    serialized[key] = {};
                    for (const key2 in obj[key]) {
                        if (obj[key].hasOwnProperty(key2)) 
                        {
                            const val2 = obj[key][key2];
                            if ((val2 !== undefined) && (val2 !== null))
                            {
                                if (typeof val2 === 'function') {
                                    // If the property is a function, convert it to a string
                                    serialized[key][key2] = val2.toString();
                                } else {
                                    // Otherwise, add the property to the serialized object
                                    serialized[key][key2] = val2;
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (typeof val === 'function') {
                        // If the property is a function, convert it to a string
                        serialized[key] = val.toString();
                    } else {
                        // Otherwise, add the property to the serialized object
                        serialized[key] = val;
                    }
                } 
            }
        }
    }

    // Return the serialized object
    return JSON.stringify(serialized);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Go through the array of serialized data and remove any entries that are null or undefined, and then stringify it
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function rationalize(anArray:any[])
{
    let aNewArray = anArray.filter(item => ((item !== undefined) && (item !== null)));
    if (aNewArray.length === 0) { return undefined; }
    else { return (JSON.stringify(aNewArray)); }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
