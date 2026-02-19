/** Demo config: Temp Above Avg. From README example run (5 days, temps, average, count above). */
CLI_DEMOS['temp-above-avg'] = {
    id: 'temp-above-avg',
    title: 'Temp Above Avg Demo',
    modalTitle: 'Temperature Above Average',
    description: 'Enter daily temperatures; the program computes the average and how many days were above average. Java fundamentals: input, arithmetic, control flow.',
    repoUrl: 'https://github.com/SearchingSteve/Temp-Above-Avg',
    steps: [
        { type: 'command', text: 'java -cp src/main/java edu.keyin.stephencrocker.TempAboveAvg', delay: 900 },
        { type: 'output', text: '\nEnter the number of days: ', delay: 500 },
        { type: 'input', text: '5', delay: 600 },
        { type: 'output', text: 'Enter temperature for day 1: ', delay: 400 },
        { type: 'input', text: '22.5', delay: 500 },
        { type: 'output', text: 'Enter temperature for day 2: ', delay: 400 },
        { type: 'input', text: '18.0', delay: 500 },
        { type: 'output', text: 'Enter temperature for day 3: ', delay: 400 },
        { type: 'input', text: '20.0', delay: 500 },
        { type: 'output', text: 'Enter temperature for day 4: ', delay: 400 },
        { type: 'input', text: '25.0', delay: 500 },
        { type: 'output', text: 'Enter temperature for day 5: ', delay: 400 },
        { type: 'input', text: '21.0', delay: 600 },
        { type: 'output', text: '\nAverage Temperature: 21.1\nNumber of days above average temperature: 2', delay: 600 }
    ]
};
