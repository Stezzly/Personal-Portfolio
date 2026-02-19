// Terminal Demo for Linked List Task Manager
class TerminalDemo {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.terminal = null;
        this.currentLine = 0;
        this.isTyping = false;
        this.demoSteps = [
            {
                type: 'command',
                text: 'javac edu/keyin/stephencrocker/*.java',
                delay: 1000
            },
            {
                type: 'output',
                text: 'Compilation successful!',
                delay: 500
            },
            {
                type: 'command',
                text: 'java edu.keyin.stephencrocker.Main',
                delay: 1000
            },
            {
                type: 'output',
                text: `\n=== Task Manager Application ===
A Java-based task management system using custom linked list implementation

1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '1',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: 'User created: John',
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '2',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter task description: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'Complete project documentation',
                delay: 800
            },
            {
                type: 'output',
                text: 'Task added successfully!',
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '2',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter task description: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'Review code for bugs',
                delay: 800
            },
            {
                type: 'output',
                text: 'Task added successfully!',
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '5',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: `\n=== John's Tasks ===
1. Complete project documentation [Pending]
2. Review code for bugs [Pending]

Total tasks: 2`,
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '4',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter task number to mark as completed: ',
                delay: 500
            },
            {
                type: 'input',
                text: '1',
                delay: 800
            },
            {
                type: 'output',
                text: 'Task marked as completed!',
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '5',
                delay: 800
            },
            {
                type: 'output',
                text: 'Enter user name: ',
                delay: 500
            },
            {
                type: 'input',
                text: 'John',
                delay: 800
            },
            {
                type: 'output',
                text: `\n=== John's Tasks ===
1. Complete project documentation [Completed]
2. Review code for bugs [Pending]

Total tasks: 2`,
                delay: 500
            },
            {
                type: 'output',
                text: `\n1. Create User
2. Add Task
3. Delete Task
4. Mark Task as Completed
5. View a User's Tasks
6. View All Users' Tasks
7. View Users
8. Exit

Choose an option: `,
                delay: 500
            },
            {
                type: 'input',
                text: '8',
                delay: 800
            },
            {
                type: 'output',
                text: 'Thank you for using Task Manager!',
                delay: 500
            }
        ];
    }

    init() {
        this.createTerminal();
        this.startDemo();
    }

    createTerminal() {
        this.terminal = document.createElement('div');
        this.terminal.className = 'terminal-demo';
        this.terminal.innerHTML = `
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="terminal-button close"></span>
                    <span class="terminal-button minimize"></span>
                    <span class="terminal-button maximize"></span>
                </div>
                <div class="terminal-title">Task Manager CLI Demo</div>
            </div>
            <div class="terminal-content">
                <div class="terminal-output"></div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">$ </span>
                    <span class="terminal-cursor">█</span>
                </div>
            </div>
        `;
        this.container.appendChild(this.terminal);
    }

    async startDemo() {
        await this.delay(1000);

        for (let i = 0; i < this.demoSteps.length; i++) {
            const step = this.demoSteps[i];
            await this.executeStep(step);
            await this.delay(step.delay);
        }

        // Restart demo after completion
        setTimeout(() => {
            this.restartDemo();
        }, 3000);
    }

    async executeStep(step) {
        const outputDiv = this.terminal.querySelector('.terminal-output');
        const cursor = this.terminal.querySelector('.terminal-cursor');

        if (step.type === 'command') {
            // Show command being typed
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">$ </span><span class="command-text"></span>`;
            outputDiv.appendChild(commandLine);

            const commandText = commandLine.querySelector('.command-text');
            await this.typeText(commandText, step.text);

        } else if (step.type === 'input') {
            // Show user input
            const inputLine = document.createElement('div');
            inputLine.className = 'terminal-line';
            inputLine.innerHTML = `<span class="input-text"></span>`;
            outputDiv.appendChild(inputLine);

            const inputText = inputLine.querySelector('.input-text');
            await this.typeText(inputText, step.text);

        } else if (step.type === 'output') {
            // Show output
            const outputLine = document.createElement('div');
            outputLine.className = 'terminal-line';
            outputLine.innerHTML = `<span class="output-text"></span>`;
            outputDiv.appendChild(outputLine);

            const outputText = outputLine.querySelector('.output-text');
            await this.typeText(outputText, step.text);
        }

        // Scroll to bottom
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    async typeText(element, text) {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.delay(50);
        }
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    restartDemo() {
        const outputDiv = this.terminal.querySelector('.terminal-output');
        outputDiv.innerHTML = '';
        this.startDemo();
    }
}

// Terminal demo will be initialized when modal opens
