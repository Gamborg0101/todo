Single Responsibility
Brug classes og objekter

When starting with OOP in your to-do list project, here are the most important things to focus on:
1 Define Objects and Classes: Begin by thinking of the entities in your app as objects. For example, a "Task" could be an object with properties like title, description, and status. Create a Task class and include methods like markComplete() to change the task's status.

2 Encapsulation: Keep task details (like title and status) inside the Task class, so you don’t need to access them directly. Use methods to interact with the properties.

3 Separation of Concerns: Have different classes or modules for different functionality. For instance, a TaskManager class could be responsible for adding and removing tasks, and a UI class for updating the UI.

4 Use Methods for Behavior: In OOP, behaviors are encapsulated inside methods. Instead of modifying properties directly, create methods to modify the task. For example, instead of task.status = "completed", have task.markComplete().

5 Constructor for Initialization: Use the constructor in your Task class to initialize the properties when a new task is created.

6 Focus on Small Steps: Break down the tasks. Start with a basic class structure, and then slowly add functionality like task completion or deletion. Don't try to implement everything at once.
