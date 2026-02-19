/** Demo config: DLL Undo/Redo. From README sample output and UndoRedoManager. */
CLI_DEMOS['dll-undo-redo'] = {
    id: 'dll-undo-redo',
    title: 'DLL Undo/Redo Demo',
    modalTitle: 'Doubly Linked List Undo/Redo',
    description: 'Undo and redo using a doubly linked list. Each state is a node; navigate backwards (undo) and forwards (redo). Run UndoRedoManager from the repo.',
    repoUrl: 'https://github.com/SearchingSteve/DLL-undo-redo',
    steps: [
        { type: 'command', text: 'javac UndoRedoManager.java', delay: 800 },
        { type: 'command', text: 'java UndoRedoManager', delay: 800 },
        { type: 'output', text: `
Added new state: State 1
Added new state: State 2
Added new state: State 3
Added new state: State 4

Current state: State 4
Undo: State 3
Undo: State 2
Redo: State 3
Redo: State 4
Redo: Cannot redo. Currently at latest state.
`, delay: 600 }
    ]
};
