# Angular Course Assignment #06: Practicing Template-Driven Forms

## Overview
This assignment focuses on practicing template-driven forms in Angular. You will create a form with various input fields, apply validation, and handle form submission.

## Objectives
- Learn how to create and manage forms using Angular’s template-driven approach.
- Implement form validation for different input types.
- Display appropriate validation messages and manage form states.
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
   - **Form Creation:**
     - Create a form with the following input fields:
       1. **Mail Address:** A text input that should not be empty and must be a valid email address.
       2. **Subscription Dropdown:** A dropdown that allows the user to select from three different subscription options: "Basic", "Advanced", and "Pro". Set "Advanced" as the default option.
       3. **Password Field:** A password input field that should not be empty.
       4. **Submit Button:** A button to submit the form.

   - **Form Validation:**
     - Implement validation for each input field:
       - Ensure the mail address is not empty and follows a valid email format.
       - Ensure the password field is not empty.
     - Display a warning message if the form is invalid and has been touched.
     - Display a warning message below each input if it is invalid.

   - **Form Submission:**
     - Upon submitting the form, print the value of the form to the console.
     - Optionally, display the form data within your template.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Use Angular’s built-in validators like `required`, `email`, etc., to enforce validation rules.
- Utilize `ngIf` to conditionally display validation messages only when an input is invalid and has been touched.
- Use the `[(ngModel)]` directive to bind form inputs to component properties and access the form data.

## Resources
- [Angular Template-Driven Forms Documentation](https://angular.io/guide/forms)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)