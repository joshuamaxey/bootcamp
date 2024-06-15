class ValidationError extends Error {
  constructor(message = "Invalid input", name = "ValidationError") {
    super(message, name)
    this.message = message;
    this.name = name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError)
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
