/** Demo config: Linked List Task Manager. Steps match the Java CLI flow. */
CLI_DEMOS['linked-list-task-manager'] = {
    id: 'linked-list-task-manager',
    title: 'Task Manager CLI Demo',
    modalTitle: 'Linked List Task Manager - Interactive Demo',
    description: 'Experience the Task Manager CLI application in action! This interactive demo showcases the Java-based task management system that uses a custom singly linked list implementation. Watch as users are created, tasks are added and managed, and the system demonstrates its full functionality through a realistic workflow.',
    repoUrl: 'https://github.com/SearchingSteve/linked-list-task-manager',
    steps: [
        { type: 'command', text: 'javac edu/keyin/stephencrocker/*.java', delay: 1000 },
        { type: 'output', text: 'Compilation successful!', delay: 500 },
        { type: 'command', text: 'java edu.keyin.stephencrocker.Main', delay: 1000 },
        { type: 'output', text: `\n=== Task Manager Application ===
A Java-based task management system using custom linked list implementation

1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '1', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: 'User created: John', delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '2', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: 'Enter task description: ', delay: 500 },
        { type: 'input', text: 'Complete project documentation', delay: 800 },
        { type: 'output', text: 'Task added successfully!', delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '2', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: 'Enter task description: ', delay: 500 },
        { type: 'input', text: 'Review code for bugs', delay: 800 },
        { type: 'output', text: 'Task added successfully!', delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '5', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: `\n=== John's Tasks ===
1. Complete project documentation [Pending]
2. Review code for bugs [Pending]

Total tasks: 2`, delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '4', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: 'Enter task number to mark as completed: ', delay: 500 },
        { type: 'input', text: '1', delay: 800 },
        { type: 'output', text: 'Task marked as completed!', delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '5', delay: 800 },
        { type: 'output', text: 'Enter user name: ', delay: 500 },
        { type: 'input', text: 'John', delay: 800 },
        { type: 'output', text: `\n=== John's Tasks ===
1. Complete project documentation [Completed]
2. Review code for bugs [Pending]

Total tasks: 2`, delay: 500 },
        { type: 'output', text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `, delay: 500 },
        { type: 'input', text: '8', delay: 800 },
        { type: 'output', text: 'Thank you for using Task Manager!', delay: 500 }
    ]
};
