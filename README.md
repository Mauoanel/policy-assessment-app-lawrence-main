# PolicyApp

Welcome to Momentum's assessment Policy application.

In this application you will be required to complete segments of the code base in order to make the application fully functional.

There are two HTTP calls that are exposed (no internet connection is required) that calls a mock back end. The back end API endpoints are:
    - www.mockbackend.co.za/auth/login (POST)
    - www.mockbackend.co.za/policy/getall (GET)

- The login endpoint is used to validate a user. It accepts a request object containing a username and password and returns a valid token.
    
- The getall endpoint is used to retrieve all policy information in raw format (i.e. agreement). It accepts a valid token in the header which is used to validate a user. If the token is not present, the user will not be able to retrieve all policy information (i.e. agreements).

- You are free to peruse through the mock-backend-interceptor.ts to view how the request and response messages, along with basic functionality, are defined.

## Pre-requisites

- You are required to have NodeJs and Angular CLI installed to run this application.
- Navigate to this project folder and execute in the command line prompt 'npm install' to install all required JS libraries.
- Once installed, please execute 'ng serve' to start up the application.
- You should now be able to access the login screen.
- You will be required to create your own branch (please see assessment administrator for details) and push your code changes to this branch.

## Instructions to candidate

1. Please complete the login functionality by sending in the username and password to the auth/login endpoint. 
I.e. { username: "yourusername", password: "yourpassword" }. You can make an HTTP POST call to this endpoint. 

Valid credentials are:
    - username: testuser
    - password: Momentum@1

You must validate that a username and password are present before attempting to call the API as we do not want to make unnecessary back end calls to prevent a server overload.

If successfully validated, you will receive a response containing a token (i.e. { token: "valid-token" } ).
You will be required to store this token using a mechanism of your choice. Once logged in, please navigate to the dashboard component (i.e. /dashboard).

If login is unsuccessful, please display an appropriate message to the user.

2. Once on the dashboard screen, you will be required to retrieve all raw policy data (i.e. agreements). You will retrieve two agreement objects containing policy information. Some attributes will be common, some not - depending on the data we receive from a specific business unit of Momentum (e.g. medical aid and life insurance policies).

In order to retrieve this data, you will need to pass in the token (returned by the auth/login endpoint) inside the headers of the HTTP GET request. 

On the left hand side of the dashboard screen, you are required to create a simple drop-down containing just the policy numbers.
On the right hand side, please display all the policy information pertaining to each type of policy. You may use any type of HTML structure you prefer to render this information (HTML lists, HTML table, etc.).

3. Your next task requires you to create a logout functionality in which the token stored will need to be removed. A link to logout should only be displayed on the dashboard screen (and NOT the login screen). By clicking on logout, the user must be directed to the login screen.

4. Once the logout functionality has been implemented, you will now need to secure your application by not allowing access to the dashboard if a valid token is not present. if the user attempts to access the dashboard screen, the user should be automatically redirected to the login screen where the user must login in order to access the dashboard.

Apart from creating a working solution, you will be assessed on design and code quality. For time purposes of this assessment, you will not be required to write any unit tests. We are more interested in your approach, use of object oriented principles and structures/mechanisms that Angular provides in order to fulfill your technical requirements. You may create any amount of objects, components and any other further structures you need in order to successfully implement this application.

Good luck!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
