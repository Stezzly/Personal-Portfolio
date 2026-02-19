/** Demo config: Fitness Tracker CLI. From repo README (menu + add workout flow). */
CLI_DEMOS['fitness-tracker-cli'] = {
    id: 'fitness-tracker-cli',
    title: 'Fitness Tracker Demo',
    modalTitle: 'Fitness Tracker',
    description: 'A Java console app to manage workouts and fitness goals: add workouts, set goals, check status, view totals. Run FitnessTrackerApp from the repo.',
    repoUrl: 'https://github.com/SearchingSteve/fitness-tracker-CLI',
    steps: [
        { type: 'command', text: 'javac FitnessTrackerApp.java', delay: 800 },
        { type: 'command', text: 'java FitnessTrackerApp', delay: 1000 },
        { type: 'output', text: `

Fitness Tracker Menu:
1. Add Workout
2. Add Goal
3. Check Goal Status
4. Display Workouts
5. Display Goals
6. Get Total Calories Burned
7. Get Total Workout Minutes
8. Exit
Please choose an option (1-8): `, delay: 500 },
        { type: 'input', text: '1', delay: 700 },
        { type: 'output', text: '\nEnter workout name: ', delay: 400 },
        { type: 'input', text: 'Running', delay: 600 },
        { type: 'output', text: 'Enter workout duration in minutes: ', delay: 400 },
        { type: 'input', text: '30', delay: 500 },
        { type: 'output', text: 'Enter calories burned: ', delay: 400 },
        { type: 'input', text: '300', delay: 600 },
        { type: 'output', text: '\nWorkout added: Running, Duration: 30 minutes, Calories: 300', delay: 500 },
        { type: 'output', text: `

Fitness Tracker Menu:
1. Add Workout
2. Add Goal
3. Check Goal Status
4. Display Workouts
5. Display Goals
6. Get Total Calories Burned
7. Get Total Workout Minutes
8. Exit
Please choose an option (1-8): `, delay: 500 },
        { type: 'input', text: '6', delay: 700 },
        { type: 'output', text: '\nTotal calories burned: 300', delay: 500 },
        { type: 'output', text: `

Fitness Tracker Menu:
1. Add Workout
2. Add Goal
3. Check Goal Status
4. Display Workouts
5. Display Goals
6. Get Total Calories Burned
7. Get Total Workout Minutes
8. Exit
Please choose an option (1-8): `, delay: 500 },
        { type: 'input', text: '8', delay: 700 },
        { type: 'output', text: '\nGoodbye!', delay: 500 }
    ]
};
