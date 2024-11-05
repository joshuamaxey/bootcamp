import { useState } from "react";
import { textInputValidators } from '../utils/validations';

export const useTextInput = ({ validations = [], defaultValue = '' }) => {

    const { value, setValue } = useState(defaultValue);

    const validatorResults = textInputValidators.map((validator) => validator(value));
    const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
    const errors = failedValidators.map((validationObj) => validationObj.msg);

    return [value, setValue, errors];
};
