/** Demo config: Theater Seating System. From TheaterSeatingSystem.java menu and prompts. */
CLI_DEMOS['theater-seating-system'] = {
    id: 'theater-seating-system',
    title: 'Theater Seating System Demo',
    modalTitle: 'Movie Theater Booking System',
    description: 'View seating chart, reserve seats (with suggestions if taken), and cancel reservations. Run TheaterSeatingSystem from the repo.',
    repoUrl: 'https://github.com/SearchingSteve/Theater-Seating-System',
    steps: [
        { type: 'command', text: 'javac TheaterSeatingSystem.java', delay: 900 },
        { type: 'command', text: 'java TheaterSeatingSystem', delay: 800 },
        { type: 'output', text: `

--- Movie Theater Booking System ---
1. View Seating Chart
2. Reserve a Seat
3. Cancel a Reservation
4. Exit
Enter your choice: `, delay: 500 },
        { type: 'input', text: '1', delay: 700 },
        { type: 'output', text: `

Seating Plan:
  1  2  3  4  5  6  7  8  9
A  A  A  A  A  A  A  A  A  A
B  A  A  A  A  A  A  A  A  A
C  A  A  A  A  A  A  A  A  A
D  A  A  A  A  A  A  A  A  A
E  A  A  A  A  A  A  A  A  A
F  A  A  A  A  A  A  A  A  A
G  A  A  A  A  A  A  A  A  A
H  A  A  A  A  A  A  A  A  A
I  A  A  A  A  A  A  A  A  A

--- Movie Theater Booking System ---
1. View Seating Chart
2. Reserve a Seat
3. Cancel a Reservation
4. Exit
Enter your choice: `, delay: 500 },
        { type: 'input', text: '2', delay: 700 },
        { type: 'output', text: '\nEnter seat number (e.g., A1): ', delay: 400 },
        { type: 'input', text: 'A1', delay: 600 },
        { type: 'output', text: 'Seat A1 has been successfully reserved.', delay: 500 },
        { type: 'output', text: `

--- Movie Theater Booking System ---
1. View Seating Chart
2. Reserve a Seat
3. Cancel a Reservation
4. Exit
Enter your choice: `, delay: 500 },
        { type: 'input', text: '4', delay: 700 },
        { type: 'output', text: 'Thank you for using the Movie Theater Booking System!', delay: 500 }
    ]
};
