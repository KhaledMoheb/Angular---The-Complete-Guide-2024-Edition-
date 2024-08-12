# Angular Course Assignment #05: Practicing Services and Dependency Injection

## Overview
This assignment focuses on using services and dependency injection in Angular. You will refactor an application to optimize the management of user states (active/inactive) using services and track state changes with a counter service.

## Objectives
- Understand how to create and use Angular services for managing shared data and logic.
- Learn how to use dependency injection to provide services to components.
- Implement a counter service to track and log specific actions within the application.

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
   - **Refactor with UsersService:**
     - Create a `UsersService` to manage the active and inactive users.
     - Move the logic for switching users between active and inactive states into the `UsersService`.
     - Inject the `UsersService` into the components (`AppActiveUsersComponent` and `AppInactiveUsersComponent`) using Angular's dependency injection.

   - **Add a CounterService:**
     - Create a `CounterService` to count and log the number of times users are switched between active and inactive states.
     - Track the `active -> inactive` and `inactive -> active` actions separately.
     - Inject the `CounterService` into the `UsersService` to manage counting logic centrally.

   - **Update Components:**
     - Modify the `AppActiveUsersComponent` and `AppInactiveUsersComponent` to interact with the `UsersService` instead of directly managing users.
     - Ensure that the services work correctly to update the UI when users are moved between states.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection to install packages via NPM and run the Angular application.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to `http://localhost:4200` (or the provided local server address) to view your Angular application.

## Notes
- Remember to register the `UsersService` and `CounterService` in your `AppModule` (`app.module.ts`) or use the `providedIn` option in the `@Injectable` decorator to make them available across the application.
- Consider using Angular’s `@Injectable` decorator to configure the services for dependency injection.
- Test the services to ensure that the counter accurately reflects the number of state changes.

## Resources
- [Angular Services Documentation](https://angular.io/guide/architecture-services)
- [Angular Dependency Injection Documentation](https://angular.io/guide/dependency-injection)
- [Udemy Course: Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)