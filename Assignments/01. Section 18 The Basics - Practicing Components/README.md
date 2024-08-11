# Angular Course Assignment #01: Practicing Components

## Overview
This assignment focuses on practicing the basics of Angular components. You will create and style new components, and learn how to integrate them into your Angular application.

## Objectives
- Understand how to create Angular components using CLI or manually.
- Learn how to integrate and display components within an Angular application.
- Style components and manage component-specific styles.

## Instructions

1. **Clone the Repository**
   - Clone the provided repository to your local machine using the following command:
     ```bash
     git clone [repository-url]
     ```

2. **Navigate to the Project Directory**
   - Change into the project directory:
     ```bash
     cd [project-directory]
     ```

3. **Install Dependencies**
   - Install the project dependencies using NPM:
     ```bash
     npm install
     ```

4. **Start the Development Server**
   - Start the development server to see your application in action:
     ```bash
     npm start
     ```

5. **File Structure**
   - Familiarize yourself with the project file structure. Key directories and files include:
     - `src/app/` - Contains your Angular components and modules.
     - `src/app/app.component.ts` - The root component of your Angular application.
     - `src/app/app.module.ts` - The root module that declares and imports components.

6. **Features to Implement**
   - Create two new components named `WarningAlert` and `SuccessAlert`.
   - Display these components beneath each other in the `AppComponent`.
   - Implement a warning message in the `WarningAlert` component and a success message in the `SuccessAlert` component.
   - Style the components with appropriate styles (e.g., red text for warnings and green text for success).

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application with the newly created components.

## Notes
- You can use either external or internal templates and styles for your components.
- Feel free to create additional components or experiment with different types of selectors to enhance your understanding of Angular components.

## Resources
- [Angular.js Documentation](https://docs.angularjs.org/guide/introduction)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)