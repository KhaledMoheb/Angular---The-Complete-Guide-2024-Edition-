# Angular Course Assignment #07: Practicing Reactive Forms

## Overview
This assignment focuses on practicing reactive forms in Angular. You will create a form with various controls and validators, including both synchronous and asynchronous validators.

## Objectives
- Learn how to create and manage forms using Angular’s reactive forms approach.
- Implement form controls and validators, including custom and asynchronous validators.
- Handle form submission and retrieve form data.

## Instructions

1. **Clone the Repository**
   - Start by cloning the provided repository to your local machine using the following command:
     ```bash
     git clone [repository-url]
     ```

2. **Navigate to the Project Directory**
   - Once the repository is cloned, navigate into the project directory using the following command:
     ```bash
     cd [project-directory]
     ```

3. **Install Dependencies**
   - Install all the required dependencies for the project using NPM:
     ```bash
     npm install
     ```

4. **Start the Development Server**
   - Start the development server to see your application in action:
     ```bash
     npm start
     ```

5. **Features to Implement**
   - **Create Reactive Form:**
     - Create a form with the following controls:
       1. **Project Name:** A text input that should not be empty.
       2. **Mail:** A text input that should not be empty and must be a valid email address.
       3. **Project Status Dropdown:** A dropdown that allows selection from three values: 'Stable', 'Critical', 'Finished'.
       4. **Submit Button:** A button to submit the form.

   - **Custom Validator:**
     - Implement a custom synchronous validator for the "Project Name" control that does not allow the value "Test".
   
   - **Asynchronous Validator:**
     - Implement the custom validator as an asynchronous validator (replace the synchronous one).
     - Ensure the form reflects the validation state correctly when using the async validator.

   - **Form Submission:**
     - Upon submitting the form, print the form values to the console.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Use Angular’s `FormBuilder` to create the form controls and validators.
- Implement custom validators by creating functions that return either an object or null based on validation criteria.
- For async validators, return an observable that emits validation results.

## Resources
- [Angular Reactive Forms Documentation](https://angular.io/guide/reactive-forms)
- [Angular Custom Validators Documentation](https://angular.io/guide/form-validation)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)