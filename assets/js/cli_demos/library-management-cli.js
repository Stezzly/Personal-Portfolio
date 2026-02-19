/** Demo config: Library Management. Java CLI (Keyin College Semester 3 - Midterm Sprint).
 * See User Doc: https://github.com/SearchingSteve/Library-Management-CLI/blob/main/docs/UserDocumentation.md
 * Run: javac main/library/LibraryMenu.java then java main.library.LibraryMenu. Menu 1-15, option 15 exit. */
CLI_DEMOS['library-management-cli'] = {
    id: 'library-management-cli',
    title: 'Library Management Demo',
    modalTitle: 'Library Management',
    description: 'Java Library Management System: add/edit/remove library items (books & periodicals), authors, and patrons; borrow and return items; display by ID or blank for all. Option 15 exits. See the repo User Documentation for full menu and run instructions.',
    repoUrl: 'https://github.com/SearchingSteve/Library-Management-CLI',
    steps: [
        { type: 'command', text: 'javac main/library/LibraryMenu.java', delay: 1500 },
        { type: 'command', text: 'java main.library.LibraryMenu', delay: 800 },
        { type: 'output', text: `
----------------------------------------
Welcome to the Library Management System
----------------------------------------
 1. Library Item - Add
 2. Library Item - Edit
 3. Library Item - Delete
 4. Library Item - Borrow
 5. Library Item - Return
 6. Author - Add
 7. Author - Edit
 8. Author - Delete
 9. Patron - Add
10. Patron - Edit
11. Patron - Delete
12. Display - Library Items
13. Display - Patrons
14. Display - Authors
15. Exit
----------------------------------------
Enter your choice (1-15): `, delay: 500 },
        { type: 'input', text: '12', delay: 700 },
        { type: 'output', text: `
----------------------------------------
Displaying library items...
Enter itemIDs to display followed by a comma between each itemID or blank to display all items: `, delay: 500 },
        { type: 'input', text: '', delay: 600 },
        { type: 'output', text: `
[Mock data: sample library items listed]
Item ID: B001 | Title: Clean Code | Author: Robert Martin | Available
Item ID: P001 | Title: Java Monthly | Author: Jane Doe | Available
----------------------------------------
Welcome to the Library Management System
----------------------------------------
 1. Library Item - Add
 2. Library Item - Edit
 3. Library Item - Delete
 4. Library Item - Borrow
 5. Library Item - Return
 6. Author - Add
 7. Author - Edit
 8. Author - Delete
 9. Patron - Add
10. Patron - Edit
11. Patron - Delete
12. Display - Library Items
13. Display - Patrons
14. Display - Authors
15. Exit
----------------------------------------
Enter your choice (1-15): `, delay: 500 },
        { type: 'input', text: '14', delay: 700 },
        { type: 'output', text: `
Displaying authors...
Enter author names to display followed by a comma between each author name or blank to display all authors: `, delay: 500 },
        { type: 'input', text: '', delay: 600 },
        { type: 'output', text: `
[Mock data: authors and their works listed]
----------------------------------------
Welcome to the Library Management System
----------------------------------------
 1. Library Item - Add
 2. Library Item - Edit
 3. Library Item - Delete
 4. Library Item - Borrow
 5. Library Item - Return
 6. Author - Add
 7. Author - Edit
 8. Author - Delete
 9. Patron - Add
10. Patron - Edit
11. Patron - Delete
12. Display - Library Items
13. Display - Patrons
14. Display - Authors
15. Exit
----------------------------------------
Enter your choice (1-15): `, delay: 500 },
        { type: 'input', text: '15', delay: 700 },
        { type: 'output', text: `
Exiting the system. Goodbye!
----------------------------------------
`, delay: 500 }
    ]
};
