/** Demo config: Password Generator CLI. Node.js, npx, options: -l, -n, -c, -s. */
CLI_DEMOS['password-generator-cli'] = {
    id: 'password-generator-cli',
    title: 'Password Generator Demo',
    modalTitle: 'Password Generator',
    description: 'Node.js CLI to generate customizable passwords: length, numbers, capitals, symbols. Run with npx from the repo.',
    repoUrl: 'https://github.com/SearchingSteve/Password-Generator-CLI',
    steps: [
        { type: 'command', text: 'npx password-generator --length 12 --numbers --capitals', delay: 1200 },
        { type: 'output', text: '\nGenerated password: xK9mP2vLqR4n', delay: 600 },
        { type: 'command', text: 'npx password-generator --help', delay: 800 },
        { type: 'output', text: `
Password Generator CLI

Options:
  -h, --help       Display help
  -l, --length     Password length (default: 8)
  -n, --numbers    Include numbers
  -c, --capitals   Include capital letters
  -s, --symbols    Include symbols

Examples:
  npx password-generator
  npx password-generator -l 16 -n -c -s
`, delay: 500 }
    ]
};
