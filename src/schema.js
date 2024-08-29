import * as yup from 'yup';

// Checks for at least
// 1 uppercase letter
// 1 lowercase letter
// 1 number
// 1 special character
// in the text
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  // Define a field name and the conditions required for that field to be valid
  email: yup
    .string()
    .email('The email is not in a valid format')
    .required('Email is a required field'),

  // Conditions required for the age field to be valid
  age: yup
    .number()
    .min(18, "Age cannot be less than 18")
    .max(100, "Age cannot be greater than 100")
    .integer('Please enter an integer value')
    .required('Age is a required field'),

  // Conditions for the password field
  password: yup
    .string()
    .min(5, 'Your password must be at least 5 characters long')
    .matches(regex, 'Your password is not strong enough')
    .required('Password is a required field'),

  // Conditions for the password confirmation field
  passwordConfirm: yup
    .string()
    // oneOf() checks that the value of the input matches one of the specified values
    .oneOf([yup.ref('password')], 'Your confirmation password does not match the original password')
    .required('Please confirm your password.'),

});
