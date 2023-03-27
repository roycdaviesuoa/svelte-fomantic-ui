// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************
import do_serialize from 'serialize-javascript';

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Convert the props that are sent into an svelte tag that are not named directly into a string that can be used as class attributes.
// Also, if there is an underscore property, add the words in that to the class attributes.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function uiProps (restProps:{}):string {
    let the_class = "";
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
    return(the_class);
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
            if (typeof(restProps[key]) !== "boolean") {
                other_props[key] = restProps[key];
            }
        }
    });
    return(other_props);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function serialize(obj:any)
{
    return do_serialize(obj);

    // // Create a new object to hold the serialized version
    // const serialized = {};

    // // Iterate over the object's properties
    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) 
    //     {
    //         const val = obj[key];
    //         if (typeof val === 'function') {
    //             // If the property is a function, convert it to a string
    //             serialized[key] = val.toString();
    //             console.log(serialized[key]);
    //             // serialized[key] = val.bind(obj).toString();
    //         } else {
    //             // Otherwise, add the property to the serialized object
    //             serialized[key] = val;
    //         }
    //     }
    // }

    // console.log(serialized);

    // // Return the serialized object
    // return JSON.stringify(serialized);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
