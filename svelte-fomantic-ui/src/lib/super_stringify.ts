// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
// * The goal of this function is to produce a string that looks exactly like the javascript object input, just as a string.  This is needed, for example
// * when converting an object into a string for putting into a command for jquery.
// ******************************************************************************************************************************************************

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Function Registry
// Instead of serializing function bodies to strings (which requires eval to deserialize), we store functions in a registry
// and serialize only the reference ID. This eliminates the need for eval and makes the library CSP-compliant.
// ------------------------------------------------------------------------------------------------------------------------------------------------------
const functionRegistry = new Map<string, Function>();
let functionIdCounter = 0;

function generateFunctionId(): string {
    return `__fn_${++functionIdCounter}_${Date.now()}`;
}

/**
 * Look up a function by its registry ID.
 * Used by deserialize to retrieve functions without eval.
 */
export function lookupFunction(id: string): Function | undefined {
    return functionRegistry.get(id);
}

/**
 * Clear the function registry.
 * Useful for testing or when reinitializing the application.
 */
export function clearFunctionRegistry(): void {
    functionRegistry.clear();
    functionIdCounter = 0;
}

/**
 * Get the current size of the function registry.
 * Useful for debugging and testing.
 */
export function getFunctionRegistrySize(): number {
    return functionRegistry.size;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------

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
        // Register the function and return a reference ID instead of the function body.
        // This eliminates the need for eval() when deserializing.
        const fnId = generateFunctionId();
        functionRegistry.set(fnId, item);
        answer += "\"" + fnId + "\"";
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
