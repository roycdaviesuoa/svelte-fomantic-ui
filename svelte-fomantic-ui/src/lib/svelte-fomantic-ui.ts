// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************
import { super_stringify } from "./super_stringify";

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
    // // Create a new object to hold the serialized version
    // let serialized = {};

    // // Iterate over the object's properties
    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) 
    //     {
    //         const val = obj[key];
    //         if ((val !== undefined) && (val !== null))
    //         {
    //             if (key === "settings")
    //             {
    //                 serialized[key] = {};
    //                 for (const key2 in obj[key]) {
    //                     if (obj[key].hasOwnProperty(key2)) 
    //                     {
    //                         const val2 = obj[key][key2];
    //                         if ((val2 !== undefined) && (val2 !== null))
    //                         {
    //                             if (typeof val2 === 'function') {
    //                                 // If the property is a function, convert it to a string
    //                                 serialized[key][key2] = val2.toString();
    //                             } else {
    //                                 // Otherwise, add the property to the serialized object
    //                                 serialized[key][key2] = val2;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //             else
    //             {
    //                 if (typeof val === 'function') {
    //                     // If the property is a function, convert it to a string
    //                     serialized[key] = val.toString();
    //                 } else {
    //                     // Otherwise, add the property to the serialized object
    //                     serialized[key] = val;
    //                 }
    //             } 
    //         }
    //     }
    // }

    let serialized = super_stringify(obj, true);
    // console.log(super_stringify(obj, true));
    // console.log(JSON.stringify(serialized));
    // Return the serialized object
    // return JSON.stringify(serialized);

    return (serialized);
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



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Contextual Functions
// ------------------------------------------------------------------------------------------------------------------------------------------------------
function contextualFunction (ID: string, id: string, funcName: string, names: string[], parameters: string[]) {
    let newParameters = "{";
    names.forEach((name, index) => {
        newParameters += name + ":" + ((index >= (names.length - parameters.length)) ? parameters[index - (names.length - parameters.length)] : name) + ",";
    });
    newParameters = newParameters.replace(/,\s*$/, '') + "}";

    let functionString = `document.dispatchEvent( new CustomEvent("` + ID+id+funcName + `", { detail: {`+ funcName + ":" + newParameters + `} } ) )`;

    // console.log(functionString);
    return new Function(...names, functionString);
}

// Set up an event channel for each function on the main document and return a unique ID to be used in the other functions.
// When an event is received, the given function is called with the parameters from the function call.
// id is the unique id of the DOM element
// functions is an object where the keys are the names of the Fomantic UI functions, and each value is an object where the keys/value pairs represent the
// parameters to the function - the values for each of these should be null.
// Optionally, additional key/value pairs may contain other data, in particular to functions or data that are in the setup code's context.
// Finally, there has to be a key named "_" which is called once the Fomantic UI function has executed.  It has one parameter, which is an object with the
// keys as specified in this data structure.  Here is an example below.
// functions={{
//     onRate: {
//         rating: __,
//         name: setting.color + "_" + setting.icon,

//         _: (data) => {
//             rating2values[data.name] = data.rating;
//         },
//     }
// }}

// Set up the event listeners, and return the unique ID.
export function initialise(id: string = "", functions: {} ) {
    // Create a fairly unique ID.  We use this just in case the id is blank or null.
    let ID = [...Array(12)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    // console.log(functions);
    
    // For each function named, set up an event listener, after removing one if one existed from before - highly unlikely, but just in case.
    if (functions !== undefined) {
        Object.keys(functions).forEach ((funcName) => {
            document.removeEventListener(ID+id+funcName, ()=>{}); 
            document.addEventListener(ID+id+funcName, (v) => {
                let returnValue = functions[funcName]._(v["detail"][funcName]);
            });
        });
    }

    // Return the ID
    return ID;
}

// Set up the code to send results from running the given function in the correct context back to the module
export function functionize(ID: string, id: string = "", functions: {}) {
    let functionSettings = [];

    // Create the function that will send the event
    if (functions !== undefined) {
        Object.keys(functions).forEach ((funcName) => {
            let params = Object.keys(functions[funcName]).filter(key2 => key2.charAt(0) !== '_');
            let values = Object.keys(functions[funcName]).filter(key2 => ((key2.charAt(0) !== '_') && functions[funcName][key2])).map(key2 => "\"" + functions[funcName][key2].toString() + "\"");
            functionSettings[funcName] = contextualFunction(ID, id, funcName, params, values);
        });
    }

    // console.log(functionSettings);
    return functionSettings;
}

// Remove the event listeners - should be called in the onDestroy function of the svelte module
export function decommission(ID:string, id:string, functions: {}) {
    // Remove the event listeners.  This should be called in the onDestroy function of the svelte module
    if (functions !== undefined) {
        Object.keys(functions).forEach ((key) => {
            document.removeEventListener(ID+id+key, ()=>{});
        });
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------
export function jquery(val) {
    return eval('('+val+')');
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
