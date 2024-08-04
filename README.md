# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Download Nodes Modules before running app using `npm install` or `yarn add`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## File Structure

Following this file structure for better maintainability

```
/src
    App.tsx
    index.tsx
    /components
        components or reusable components
    /hooks
        all custom hooks
    /store
        redux store or any other state management related logic or business logic
    /types
        store all types
    /utils
        store custom functions or reusable functions for business logic
    /contants
        hardcoded values or reusable constants
```
