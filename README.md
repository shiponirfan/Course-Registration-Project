# Course Registration Project

## [ Live Website link](https://course-registration-shipon.netlify.app/)

Click here for the Live Website URL: [https://course-registration-shipon.netlify.app/](https://course-registration-shipon.netlify.app/)

##  Project Features

- Adding a credit limit to a course
- Showing a toast when there is a duplicate course and the credit limit is exceeded
- Displaying remaining credit hours and total price

##  How I managed the state in this project.
- **Local Component State**: Use `useState` hook for simple, component-specific state.
- **Prop Drilling**: Pass state down through props, suitable for smaller apps.
- **Effectively Use `useEffect`**: Manage side effects and async operations.
- **Immutability**: Update state immutably to avoid unexpected side effects.
- **Organized Component Structure**: Follow best practices, separate logic from UI.
- **Testing**: Write tests for state management code to ensure reliability.
- **Error Handling**: Implement mechanisms to gracefully handle errors.
