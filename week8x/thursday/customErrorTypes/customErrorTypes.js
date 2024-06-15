//! Custom Errors in JavaScript

class MissingRequiredFieldError extends Error {
    constructor(fieldName = 'field', ...params) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MissingRequiredFieldError)
        }

        this.name = 'MissingRequiredFieldError';

        this.fieldName = fieldName;
        this.message = `Missing required field ${this.fieldname}`
        this.date = new Date();
    }
}

throw new MissingRequiredFieldError('email')
