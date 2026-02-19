/**
 * Terminal Demo Runner (template).
 * UI and playback logic only. Demo data is provided via config from per-CLI scripts.
 * Config: { title, steps } where steps = [{ type: 'command'|'output'|'input', text, delay }].
 */
class TerminalDemo {
    constructor(containerId, config) {
        this.container = document.getElementById(containerId);
        this.config = config || {};
        this.terminal = null;
        this.demoSteps = this.config.steps || [];
    }

    init() {
        this.createTerminal();
        this.startDemo();
    }

    createTerminal() {
        const title = this.config.title || 'CLI Demo';
        this.terminal = document.createElement('div');
        this.terminal.className = 'terminal-demo';
        this.terminal.innerHTML = `
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="terminal-button close"></span>
                    <span class="terminal-button minimize"></span>
                    <span class="terminal-button maximize"></span>
                </div>
                <div class="terminal-title">${title}</div>
            </div>
            <div class="terminal-content">
                <div class="terminal-output"></div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">$ </span>
                    <span class="terminal-cursor">█</span>
                </div>
            </div>
        `;
        this.container.appendChild(this.terminal);
    }

    async startDemo() {
        await this.delay(1000);

        for (let i = 0; i < this.demoSteps.length; i++) {
            const step = this.demoSteps[i];
            await this.executeStep(step);
            await this.delay(step.delay);
        }

        setTimeout(() => {
            this.restartDemo();
        }, 3000);
    }

    async executeStep(step) {
        const outputDiv = this.terminal.querySelector('.terminal-output');

        if (step.type === 'command') {
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">$ </span><span class="command-text"></span>`;
            outputDiv.appendChild(commandLine);
            const commandText = commandLine.querySelector('.command-text');
            await this.typeText(commandText, step.text);
        } else if (step.type === 'input') {
            const inputLine = document.createElement('div');
            inputLine.className = 'terminal-line';
            inputLine.innerHTML = `<span class="input-text"></span>`;
            outputDiv.appendChild(inputLine);
            const inputText = inputLine.querySelector('.input-text');
            await this.typeText(inputText, step.text);
        } else if (step.type === 'output') {
            const outputLine = document.createElement('div');
            outputLine.className = 'terminal-line';
            outputLine.innerHTML = `<span class="output-text"></span>`;
            outputDiv.appendChild(outputLine);
            const outputText = outputLine.querySelector('.output-text');
            await this.typeText(outputText, step.text);
        }

        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    async typeText(element, text) {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.delay(50);
        }
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    restartDemo() {
        const outputDiv = this.terminal.querySelector('.terminal-output');
        outputDiv.innerHTML = '';
        this.startDemo();
    }
}
