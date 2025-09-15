let num = 13;
console.log(`Ejemplo de cadena multi-línea,
el valor de num es: ${num}`);

let s1 = "This is a string";
// Get the length of a string
console.log(s1.length); // Prints 16

// Get the character a position of the string (starting at 0)
console.log(s1.charAt(0)); // Prints "T"
console.log(s1[0]); // Prints "T"

// Gets the index when a substring first appears
console.log(s1.indexOf("s")); // Prints 3

// Gets the index when a substring last appears
console.log(s1.lastIndexOf("s")); // Prints 10

// Returns an arrconsole.loay with all coincidences of a regular expression
console.log(s1.match(/.s/g)); // Prints ["is", "is", " s"]

// Gets the position of the first coincidence of a regular expression
console.log(s1.search(/[aeiou]/)); // Prints 2

// Replaces a regular expression coincidence (or a string) with a string (/g option replaces all)
console.log(s1.replace(/i/g, "e")); // Prints "Thes es a streng"

// Returns a substring (start position: included, end position: not included)
console.log(s1.slice(5, 7)); // Prints "is"
console.log(s1.slice(0, -3)); // Prints "This is a str"

// Same as slice
console.log(s1.substring(5, 7)); // Prints "is"

// Transform into lowercase. toLowerCase doesn't work with special characters (ñ, á, é, ...)
console.log(s1.toLocaleLowerCase()); // Prints "this is a string"

// Transform into uppercase
console.log(s1.toLocaleUpperCase()); // Prints "THIS IS A STRING"

// Get string removing spaces, tabs and line breaks from the beginning and end
console.log("   String with spaces   ".trim()); // Prints "String with spaces"