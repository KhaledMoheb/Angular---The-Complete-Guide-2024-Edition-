# Angular Course Assignment #04: Practicing Property & Event Binding and View Encapsulation

## Overview
This assignment focuses on property and event binding in Angular, as well as exploring view encapsulation. You will create multiple components that interact through event emission and handle dynamic content based on emitted events.

## Objectives
- Understand how to use property binding and event binding to enable communication between components.
- Learn how to emit and listen to custom events in Angular.
- Practice using `setInterval()` and `clearInterval()` to manage timed events.
- Explore Angular’s view encapsulation to apply component-specific styles.

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
   - **Create Components:**
     - Create three new components: `GameControl`, `Odd`, and `Even`.

   - **GameControl Component:**
     - Add buttons to start and stop the game.
     - When the game starts, emit an event every second containing an incrementing number using `setInterval()`.
     - Ensure the event is emitted from the component so that it can be listened to from outside.

   - **Stop Game:**
     - When the stop button is clicked, stop emitting events by clearing the interval using `clearInterval()`.

   - **Odd and Even Components:**
     - Listen for the emitted number from the `GameControl` component.
     - For each emitted number, create a new `Odd` component if the number is odd, or a new `Even` component if the number is even.
     - Each component should display "Odd - NUMBER" or "Even - NUMBER" respectively, where `NUMBER` is the emitted number.
   
   - **Styling:**
     - Apply different styles to the paragraphs or elements within the `Odd` and `Even` components.
     - Use Angular’s view encapsulation to ensure styles are scoped to their respective components.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Use Angular’s `@Output` decorator and `EventEmitter` to emit events from the `GameControl` component.
- The `Odd` and `Even` components should be dynamically created and displayed in response to the emitted events.
- Experiment with view encapsulation options (`Emulated`, `None`, `ShadowDom`) in the `Odd` and `Even` components to understand their effects on styling.

## Resources
- [Angular Event Binding Documentation](https://angular.io/guide/event-binding)
- [Angular View Encapsulation Documentation](https://angular.io/guide/view-encapsulation)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

