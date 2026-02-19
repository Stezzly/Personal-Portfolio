/** Demo config: E-Commerce Management (collab with sarwoodford). Console ecommerce, users/products, PostgreSQL. */
CLI_DEMOS['eccommerce-management'] = {
    id: 'eccommerce-management',
    title: 'E-Commerce Management Demo',
    modalTitle: 'E-Commerce Management',
    description: 'Console e-commerce system: manage users and products (add, update, delete, list). Data stored in PostgreSQL. Collaborative project—see repo for setup.',
    repoUrl: 'https://github.com/sarwoodford/eccommerce-management',
    steps: [
        { type: 'command', text: 'java -jar ecommerce-management.jar', delay: 1000 },
        { type: 'output', text: `

E-Commerce Management System
1. List users
2. List products
3. Add user
4. Add product
5. Exit
Choice: `, delay: 500 },
        { type: 'input', text: '2', delay: 700 },
        { type: 'output', text: '\nProducts:\n  ID  Name              Price\n  1   Wireless Mouse    29.99\n  2   USB-C Hub         49.99\nChoice: ', delay: 600 },
        { type: 'input', text: '1', delay: 700 },
        { type: 'output', text: '\nUsers:\n  ID  Username    Email\n  1   admin       admin@example.com\nChoice: ', delay: 600 },
        { type: 'input', text: '5', delay: 700 },
        { type: 'output', text: '\nGoodbye.', delay: 400 }
    ]
};
