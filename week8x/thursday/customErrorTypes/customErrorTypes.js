//! Custom Errors in JavaScript

class MissingRequiredFieldError extends Error {
    constructor(fieldName = 'field', ...params) {
        super(...params)
    }
}
