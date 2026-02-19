/** Demo config: Animal Shelter Manager. Queue-based shelter (dogs/cats, FIFO, adopt any/dog/cat). */
CLI_DEMOS['animal-shelter-manager'] = {
    id: 'animal-shelter-manager',
    title: 'Animal Shelter Manager Demo',
    modalTitle: 'Animal Shelter Queue System',
    description: 'Queue-based animal shelter: enqueue dogs and cats, adopt the oldest (any) or by type (dog/cat). FIFO with dequeueAny, dequeueDog, dequeueCat. See repo for full code.',
    repoUrl: 'https://github.com/SearchingSteve/animal-shelter-manager',
    steps: [
        { type: 'command', text: 'java -cp . QueueDemo', delay: 800 },
        { type: 'output', text: `

Animal Shelter Queue
1. Enqueue (add animal)
2. Dequeue Any (adopt oldest)
3. Dequeue Dog
4. Dequeue Cat
5. Print Queue
6. Exit
Choice: `, delay: 500 },
        { type: 'input', text: '1', delay: 600 },
        { type: 'output', text: 'Animal type (dog/cat): ', delay: 400 },
        { type: 'input', text: 'dog', delay: 500 },
        { type: 'output', text: 'Animal added. ID: 1 (Dog)\nChoice: ', delay: 500 },
        { type: 'input', text: '1', delay: 600 },
        { type: 'output', text: 'Animal type (dog/cat): ', delay: 400 },
        { type: 'input', text: 'cat', delay: 500 },
        { type: 'output', text: 'Animal added. ID: 2 (Cat)\nChoice: ', delay: 500 },
        { type: 'input', text: '5', delay: 600 },
        { type: 'output', text: '\nQueue: 1(Dog) 2(Cat)\nChoice: ', delay: 500 },
        { type: 'input', text: '2', delay: 600 },
        { type: 'output', text: '\nAdopted: 1 (Dog)\nChoice: ', delay: 500 },
        { type: 'input', text: '6', delay: 600 },
        { type: 'output', text: '\nBye.', delay: 400 }
    ]
};
