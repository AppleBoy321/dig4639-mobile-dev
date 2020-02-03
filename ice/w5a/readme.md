# Understanding the Component Model in React
Working in a team of 2-3, start with the code in ice/w5a in the class repository.

## TODO App Requirements

  - Refactor (by moving) the HTML currently in the file to be rendered by the “Task” class.
### Task Component Requirements
  1. [ ] Create a “Task” class in the src/components directory should have the properties `content` and `done` set using an object passed in to constructor.
  1. [ ] When the user presses the “Add” button, the application should create a new task and add it to the container using the string in the input.
  1. [ ] Tasks marked done should be rendered in ~~strikethrough~~ by modifying the output based on props.done.

### Secondary Features:
   1. [ ] Only add a task if the user enters one. (No empty tasks)
   1. [ ] Erase the text when the user adds a new task.
   1. [ ] Register an event listener to set the props.done based on the value of the checkbox input element and display the text in strikethrough.
  
### CHALLENGE FEATURES:
  1. When a task is marked complete (input checkbox is checked), change task to have a green background using javascript & css
  1. Allow a user to delete a task
  1.  Priority
     - Add a priority property to tasks (e.g. 1, 2, 3)
     - Always display higher priority tasks first

You may work together using VS Live Share, and commit your completed progress to one group member's git repository. Submit the URL of that repository.