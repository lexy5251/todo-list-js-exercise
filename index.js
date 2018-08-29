// Arrays to keep track of each task's state (has been cleaned)
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete (has been cleaned)
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }


// to use an object to keep track of the state instead of arrays
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${this.complete ? " ": " not"}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way (has been cleaned)
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }


//print out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? " ": " not"}been completed`);
// }

//marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box");
const task2 = newTask("Do Laundry", "sad");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

//for now, let's just make sure we see our tasks
// console.log(tasks);


// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
