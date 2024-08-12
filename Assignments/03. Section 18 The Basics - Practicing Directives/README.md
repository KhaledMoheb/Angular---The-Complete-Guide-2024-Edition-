# Angular Course Assignment #03: Practicing Directives

## Overview
This assignment focuses on practicing Angular directives, including event binding, structural directives, and attribute directives. You will create a button to toggle content visibility, log button clicks, and apply conditional styling.

## Objectives
- Understand how to use Angular structural directives like `*ngIf` to conditionally display elements.
- Learn how to use attribute directives like `ngStyle` and `ngClass` to apply dynamic styles and classes.
- Practice event binding and handling within Angular components.
- Log user interactions and dynamically update the UI based on those interactions.

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
   - **Display Details Button:**
     - Add a button that says "Display Details". This button will control the visibility of a paragraph.
   
   - **Secret Paragraph:**
     - Add a paragraph below the button with any content of your choice (e.g., "Secret Password = tuna").
   
   - **Toggle Visibility:**
     - Use the button to toggle the visibility of the secret paragraph. Implement this using the `*ngIf` directive.
   
   - **Log Button Clicks:**
     - Each time the button is clicked, log the event in an array. The log can include a timestamp or a simple incrementing number.
     - Display the log below the secret paragraph.

   - **Conditional Styling:**
     - Starting from the 5th log entry, apply a blue background and white text color to all future log items.
     - Use `ngStyle` to dynamically set the background color and `ngClass` to conditionally apply the text color.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Use the `*ngIf` directive to toggle the display of the paragraph based on a boolean property in your component.
- Use the `ngStyle` and `ngClass` directives to apply conditional styles and classes to the log entries.
- Experiment with different content and styles to enhance your understanding of Angular directives.

## Resources
- [Angular Directives Documentation](https://angular.io/guide/attribute-directives)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
