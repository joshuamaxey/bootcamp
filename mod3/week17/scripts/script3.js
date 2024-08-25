import addition from "./script2.js"

addition(2, 3); // prints "5"

//! Here, we can see that this import works even though the function is called 'add' in the export and 'addition' in the import. This is because it was exported using 'export default,' leaving the export 'unnamed' so that we can call it whatever we want in the import.

//* Note that I have no fucking idea WHY the greetings functions from script2 are also running when I run 'node script3.js' here.

//& Apparently all of this import/export syntax also works with our HTML files, though I'm not sure how yet. 
