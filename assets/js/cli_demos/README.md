# CLI demos

Scripted terminal demos for the portfolio. One **runner** (template) + one **config file per CLI**.

## Structure

- **`terminal-demo-runner.js`** – UI and playback only. Accepts `(containerId, config)`.
- **`registry.js`** – Declares `CLI_DEMOS = {}`. Each demo script adds its config here.
- **`<name>.js`** – Per-CLI config: `CLI_DEMOS['demo-id'] = { id, title, modalTitle, description, repoUrl, steps }`.

## Step format

Each `steps` array entry: `{ type: 'command' | 'output' | 'input', text: string, delay: number }`.

- **command** – Shell command (e.g. `java Main`).
- **output** – Program output (menus, messages).
- **input** – User input (choices, names).

## Demo IDs (kebab-case)

Used in `openTerminalModal('demo-id')` and as registry keys:

- `linked-list-task-manager`
- `fitness-tracker-cli`
- `sll-delete-methods`
- `dll-undo-redo`
- `animal-shelter-manager`
- `theater-seating-system`
- `temp-above-avg`
- `library-management-cli`
- `password-generator-cli`
- `eccommerce-management`

## Adding a new CLI

1. Add `cli_demos/<project-name>.js` that sets `CLI_DEMOS['project-name'] = { ... }` with `title`, `modalTitle`, `description`, `repoUrl`, `steps`.
2. In `index.html`, add a `<script src="./assets/js/cli_demos/<project-name>.js"></script>` after the other demo scripts.
3. In `index.html`, add a portfolio card in the CLI section with `onclick="openTerminalModal('project-name'); return false;"` and the GitHub link.

## Filling in steps

Run the CLI locally (clone the repo, build, run) and copy the exact prompts and output into the `steps` array. Or share the repo URL so the runner can be updated from the project’s README/usage.
