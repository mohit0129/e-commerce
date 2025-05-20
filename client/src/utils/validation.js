// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// Password validation (min 8 chars, at least one number, one uppercase, one lowercase)
export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

// Username validation (3-20 chars, letters, numbers, underscores)
export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

// Phone number validation (10 digits)
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

// Pincode validation (6 digits)
export const validatePincode = (pincode) => {
  const pincodeRegex = /^\d{6}$/;
  return pincodeRegex.test(pincode);
};

// Price validation (positive number with up to 2 decimal places)
export const validatePrice = (price) => {
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  return priceRegex.test(price) && parseFloat(price) >= 0;
};

// Stock validation (positive integer)
export const validateStock = (stock) => {
  const stockRegex = /^\d+$/;
  return stockRegex.test(stock) && parseInt(stock) >= 0;
};

// Required field validation
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.trim() !== '';
};

// Get validation error message
export const getValidationError = (name, value) => {
  if (!value && value !== 0) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
  }

  switch (name) {
    case 'email':
      if (!validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      break;

    case 'password':
      if (!validatePassword(value)) {
        return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
      }
      break;

    case 'userName':
      if (!validateUsername(value)) {
        return 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores';
      }
      break;

    case 'phone':
      if (!validatePhone(value)) {
        return 'Please enter a valid 10-digit phone number';
      }
      break;

    case 'pincode':
      if (!validatePincode(value)) {
        return 'Please enter a valid 6-digit pincode';
      }
      break;

    case 'price':
      if (!validatePrice(value)) {
        return 'Please enter a valid price (positive number with up to 2 decimal places)';
      }
      break;

    case 'stock':
      if (!validateStock(value)) {
        return 'Please enter a valid stock quantity (positive whole number)';
      }
      break;

    case 'title':
      if (!validateLength(value, 3, 100)) {
        return 'Title must be between 3 and 100 characters';
      }
      break;

    case 'description':
      if (!validateLength(value, 10, 500)) {
        return 'Description must be between 10 and 500 characters';
      }
      break;

    case 'fullName':
      if (!validateLength(value, 3, 50)) {
        return 'Full name must be between 3 and 50 characters';
      }
      break;

    case 'address':
      if (!validateLength(value, 10, 200)) {
        return 'Address must be between 10 and 200 characters';
      }
      break;

    case 'city':
    case 'state':
      if (!validateLength(value, 2, 50)) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be between 2 and 50 characters`;
      }
      break;

    default:
      if (!validateRequired(value)) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      }
  }

  return null;
};

export const validateLength = (value, min, max) => {
  if (!value) return false;
  const length = value.trim().length;
  return length >= min && length <= max;
}; 