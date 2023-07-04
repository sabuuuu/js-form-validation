

# JS Form Validation

A JavaScript library for form validation. This project provides a lightweight and easy-to-use solution for validating user input in web forms, ensuring that the submitted data meets the specified requirements.

## Features
- Validate form fields for various criteria such as required fields, email addresses, passwords, and more.
- Display error messages for invalid input.
- Customize validation rules and error messages to fit your specific form requirements.

## Live Demo
Check out the live demo of Js validating form : [Form](https://sabuuuu.github.io/js-form-validation/)

## Usage
- Clone the repository.
- Include the `form-validation.js` file in your HTML document:
````bash
<script src="path/to/form-validation.js"></script>
````
- Add `data-validation` attributes to your form fields to define the validation rules. For example:
````bash
<input type="text" name="username" data-validation="required" />
<input type="email" name="email" data-validation="required, email" />
<input type="password" name="password" data-validation="required, min:8" />
````
- Initialize the form validation by calling the `initializeFormValidation` function. For example
````bash
const form = document.querySelector('form');
initializeFormValidation(form);
````
- Customize the validation rules and error messages as needed by modifying the `formValidationRules` and `formValidationMessages` objects in the `form-validation.js` file.

## Acknowledgments 
This project is part of The Odin Project curriculum.
You can learn more about this here : [The Odin Project](https://www.theodinproject.com/)
