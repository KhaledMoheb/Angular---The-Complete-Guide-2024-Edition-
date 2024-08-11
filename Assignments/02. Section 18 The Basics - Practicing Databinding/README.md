# Angular Course Assignment #02: Practicing Databinding

## Overview
This assignment is focused on practicing databinding in Angular, particularly Two-Way Binding and String Interpolation. You will create an input field, bind it to a property, and control the interaction through a button.

## Objectives
- Learn how to use Two-Way Binding in Angular to bind an input field to a property.
- Understand how to use String Interpolation to display dynamic data in the template.
- Implement conditional logic to enable/disable a button based on input.
- Reset property values through event handling.

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
   - **Input Field with Two-Way Binding:**
     - Add an input field in your component template.
     - Bind this input field to a property called `username` using Angular's Two-Way Binding (`[(ngModel)]`).
   
   - **String Interpolation:**
     - Output the `username` property value below the input field using String Interpolation (e.g., `{{ username }}`).

   - **Conditional Button:**
     - Add a button that is only enabled if the `username` property is not an empty string. Use Angular’s property binding (`[disabled]`) to achieve this.
   
   - **Reset Username:**
     - When the button is clicked, the `username` property should be reset to an empty string. Implement this using an event binding (`(click)`).

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Make sure to import the `FormsModule` in your `AppModule` (`app.module.ts`) to enable Two-Way Binding with `[(ngModel)]`.
- Experiment with different input types or additional logic to further explore databinding in Angular.

## Resources
- [Angular Databinding Documentation](https://angular.io/guide/binding-syntax)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)