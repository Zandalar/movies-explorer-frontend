import { useCallback, useState } from 'react';

function useValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }, [values,errors])

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [])
  return {
    values, errors, isValid, handleChange, resetForm,
  };
}

export default useValidator;
