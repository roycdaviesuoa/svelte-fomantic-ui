// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
// * The goal of this function is to produce a string that looks exactly like the javascript object input, just as a string.  This is needed, for example
// * when converting an object into a string for putting into a command for jquery.
// ******************************************************************************************************************************************************
export function super_stringify (item:any, validJSON: boolean = false) : string {
    let answer = "";

    if (typeof item === 'string') {
        // Convert a string, but watch out for quotes inside the string.
        answer += "\"" + item.replace(/"/g, '\\"').replace(/'/g, "\\'") + "\"";
    }
    else if (Array.isArray(item)) {
        // Recursively convert elements of an array.
        answer += "[";
        item.forEach ((element, index) => {
            if ((element != undefined) && (element != null)) {
                answer += super_stringify(element, validJSON) + ",";
            }
        })
        answer = answer.replace(/,+$/, '') + "]";
    }
    else if (typeof item === "function") {
        // Convert a function, and remove extraneous tabs, newlines and linefeeds.
        let theFunction = item.toString().replace(/[\n\t\r](?=(?:(?:[^"]*"){2})*[^"]*$)/g, "");

        if(validJSON) theFunction = theFunction.replace(/"/g, '\\"').replace(/'/g, "\\'");
        answer += (validJSON?"\"":"") + theFunction + (validJSON?"\"":"");
    }
    else if (typeof item === "object") {
        // Recursively convert an object
        answer += "{";
        let keys = Object.keys(item);
        keys.forEach((key, index) => {
            if ((item[key] !== undefined) && (item[key] !== null)) {
                answer += "\"" + key.toString() + "\":" + super_stringify(item[key], validJSON) + ",";
            }
        });
        answer = answer.replace(/,+$/, '') + "}";
    }
    else {
        // Otherwise, if nothing else, just convert it to a string.
        answer += item.toString();
    }

    return answer;
}