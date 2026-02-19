/** Demo config: SLL Delete Methods. From LinkedList.java main() output. */
CLI_DEMOS['sll-delete-methods'] = {
    id: 'sll-delete-methods',
    title: 'SLL Delete Methods Demo',
    modalTitle: 'Singly Linked List Delete Methods',
    description: 'Java implementation of a generic singly linked list with delete-at-head, delete-at-tail, and delete-at-index. Demonstrates the operations from the repo.',
    repoUrl: 'https://github.com/SearchingSteve/SLL-delete-methods',
    steps: [
        { type: 'command', text: 'javac LinkedList.java', delay: 900 },
        { type: 'command', text: 'java LinkedList', delay: 800 },
        { type: 'output', text: `

Initial list:
1 2 3 4 5

After deleting node at the beginning:
2 3 4 5

After deleting node at the end:
Node deleted at the end of the list.
2 3 4

After deleting at index 1:
Node deleted at index 1
2 4
`, delay: 600 }
    ]
};
