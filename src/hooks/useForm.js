// src/hooks/useForm.js
import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback((fieldName, value) => {
    if (!validationRules[fieldName]) return '';
    
    const rules = validationRules[fieldName];
    
    // Required validation
    if (rules.required && (!value || value.toString().trim() === '')) {
      return rules.required;
    }
    
    // Email validation
    if (rules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return rules.email;
      }
    }
    
    // Phone validation
    if (rules.phone && value) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        return rules.phone;
      }
    }
    
    // Min length validation
    if (rules.minLength && value && value.length < rules.minLength.value) {
      return rules.minLength.message;
    }
    
    // Max length validation
    if (rules.maxLength && value && value.length > rules.maxLength.value) {
      return rules.maxLength.message;
    }
    
    return '';
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field on change
    const error = validate(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validate]);

  const handleSubmit = useCallback(async (submitFunction) => {
    return async (e) => {
      e.preventDefault();
      
      // Validate all fields
      const newErrors = {};
      Object.keys(validationRules).forEach(fieldName => {
        const error = validate(fieldName, values[fieldName]);
        if (error) {
          newErrors[fieldName] = error;
        }
      });
      
      setErrors(newErrors);
      
      // If there are errors, don't submit
      if (Object.keys(newErrors).length > 0) {
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        await submitFunction(values);
      } catch (error) {
        console.error('Form submission error:', error);
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validationRules, validate]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((fieldName, value) => {
    setValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    const error = validate(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, [validate]);

  const getFieldProps = useCallback((fieldName) => ({
    name: fieldName,
    value: values[fieldName] || '',
    onChange: handleChange,
    error: errors[fieldName]
  }), [values, errors, handleChange]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setFieldValue,
    getFieldProps,
    isValid: Object.keys(errors).length === 0
  };
};

// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Remove item from localStorage
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};