const vimCommands = [
    // Essential commands for beginners
    { name: ':q', description: 'Quit (close window)', category: 'Essential' },
    { name: ':q!', description: 'Quit and throw away unsaved changes', category: 'Essential' },
    { name: ':w', description: 'Save (write) the file, but don\'t exit', category: 'Essential' },
    { name: ':wq', description: 'Save and quit', category: 'Essential' },
    { name: 'i', description: 'Switch to insert mode', category: 'Essential' },
    { name: 'Esc', description: 'Switch to command mode', category: 'Essential' },

    // Navigation
    { name: 'h', description: 'Move cursor left', category: 'Navigation' },
    { name: 'j', description: 'Move cursor down', category: 'Navigation' },
    { name: 'k', description: 'Move cursor up', category: 'Navigation' },
    { name: 'l', description: 'Move cursor right', category: 'Navigation' },
    { name: 'w', description: 'Jump forwards to the start of a word', category: 'Navigation' },
    { name: 'b', description: 'Jump backwards to the start of a word', category: 'Navigation' },
    { name: 'e', description: 'Jump forwards to the end of a word', category: 'Navigation' },
    { name: '0', description: 'Jump to the start of the line', category: 'Navigation' },
    { name: '$', description: 'Jump to the end of the line', category: 'Navigation' },
    { name: 'gg', description: 'Go to the first line of the document', category: 'Navigation' },
    { name: 'G', description: 'Go to the last line of the document', category: 'Navigation' },
    { name: '{', description: 'Jump to previous paragraph', category: 'Navigation' },
    { name: '}', description: 'Jump to next paragraph', category: 'Navigation' },
    { name: 'Ctrl+u', description: 'Move up half a screen', category: 'Navigation' },
    { name: 'Ctrl+d', description: 'Move down half a screen', category: 'Navigation' },

    // Editing
    { name: 'x', description: 'Delete character at cursor', category: 'Editing' },
    { name: 'dw', description: 'Delete word', category: 'Editing' },
    { name: 'dd', description: 'Delete line', category: 'Editing' },
    { name: 'D', description: 'Delete from cursor to end of line', category: 'Editing' },
    { name: 'yy', description: 'Yank (copy) a line', category: 'Editing' },
    { name: 'yw', description: 'Yank (copy) word', category: 'Editing' },
    { name: 'p', description: 'Paste after cursor', category: 'Editing' },
    { name: 'P', description: 'Paste before cursor', category: 'Editing' },
    { name: 'u', description: 'Undo', category: 'Editing' },
    { name: 'Ctrl + r', description: 'Redo', category: 'Editing' },
    { name: 'r', description: 'Replace a single character', category: 'Editing' },
    { name: 'cw', description: 'Change (replace) to the end of the word', category: 'Editing' },
    { name: 'cc', description: 'Change (replace) entire line', category: 'Editing' },
    { name: 'c$', description: 'Change (replace) to the end of the line', category: 'Editing' },
    { name: '~', description: 'Switch case of the character under the cursor', category: 'Editing' },

    // Searching
    { name: '/pattern', description: 'Search forward for pattern', category: 'Searching' },
    { name: '?pattern', description: 'Search backward for pattern', category: 'Searching' },
    { name: 'n', description: 'Repeat search in same direction', category: 'Searching' },
    { name: 'N', description: 'Repeat search in opposite direction', category: 'Searching' },
    { name: '*', description: 'Search forward for word under cursor', category: 'Searching' },
    { name: '#', description: 'Search backward for word under cursor', category: 'Searching' },
    { name: ':%s/old/new/g', description: 'Replace all old with new throughout file', category: 'Searching' },
    { name: ':%s/old/new/gc', description: 'Replace all old with new throughout file with confirmations', category: 'Searching' },

    // Visual Mode
    { name: 'v', description: 'Start visual mode, mark lines, then do a command (like y-yank)', category: 'Visual Mode' },
    { name: 'V', description: 'Start linewise visual mode', category: 'Visual Mode' },
    { name: 'Ctrl+v', description: 'Start visual block mode', category: 'Visual Mode' },
    { name: 'o', description: 'Move to other end of marked area', category: 'Visual Mode' },
    { name: 'O', description: 'Move to other corner of block', category: 'Visual Mode' },
    { name: 'aw', description: 'Mark a word', category: 'Visual Mode' },
    { name: 'ab', description: 'A block with ()', category: 'Visual Mode' },
    { name: 'aB', description: 'A block with {}', category: 'Visual Mode' },
    { name: 'ib', description: 'Inner block with ()', category: 'Visual Mode' },
    { name: 'iB', description: 'Inner block with {}', category: 'Visual Mode' },

    // File Operations
    { name: ':e filename', description: 'Edit a file in a new buffer', category: 'File Operations' },
    { name: ':bnext', description: 'Go to the next buffer', category: 'File Operations' },
    { name: ':bprev', description: 'Go to the previous buffer', category: 'File Operations' },
    { name: ':bd', description: 'Delete a buffer (close a file)', category: 'File Operations' },
    { name: ':sp filename', description: 'Open a file in a new buffer and split window', category: 'File Operations' },
    { name: ':vsp filename', description: 'Open a file in a new buffer and vertically split window', category: 'File Operations' },
    { name: 'Ctrl+ws', description: 'Split window', category: 'File Operations' },
    { name: 'Ctrl+ww', description: 'Switch windows', category: 'File Operations' },
    { name: 'Ctrl+wq', description: 'Quit a window', category: 'File Operations' },
    { name: 'Ctrl+wv', description: 'Split window vertically', category: 'File Operations' },
];

function groupCommandsByCategory(commands) {
    return commands.reduce((acc, cmd) => {
        (acc[cmd.category] = acc[cmd.category] || []).push(cmd);
        return acc;
    }, {});
}

function displayGridView(commands) {
    const groupedCommands = groupCommandsByCategory(commands);
    return Object.entries(groupedCommands).map(([category, cmds]) => `
        <div class="category-group">
            <h3 class="category-title">${category}</h3>
            <div class="command-grid">
                ${cmds.map(cmd => `
                    <div class="command-card">
                        <div class="command-name">${cmd.name}</div>
                        <div class="command-description">${cmd.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function displayListView(commands) {
    const groupedCommands = groupCommandsByCategory(commands);
    return Object.entries(groupedCommands).map(([category, cmds]) => `
        <div class="category-group">
            <h3 class="category-title">${category}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${cmds.map(cmd => `
                        <tr>
                            <td data-label="Command">${cmd.name}</td>
                            <td data-label="Description">${cmd.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `).join('');
}

function displayCommands(commands, isListView) {
    const commandResults = document.getElementById('commandResults');
    commandResults.innerHTML = isListView ? displayListView(commands) : displayGridView(commands);
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const viewToggle = document.getElementById('viewToggle');
    const searchInput = document.getElementById('searchInput');
    const commandResults = document.getElementById('commandResults');

    let isListView = localStorage.getItem('listView') === 'true';

    function updateView() {
        commandResults.classList.toggle('list-view', isListView);
        viewToggle.textContent = isListView ? 'Grid View' : 'List View';
        displayCommands(vimCommands, isListView);
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    viewToggle.addEventListener('click', () => {
        isListView = !isListView;
        localStorage.setItem('listView', isListView);
        updateView();
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    updateView();

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCommands = vimCommands.filter(cmd => 
            cmd.name.toLowerCase().includes(searchTerm) || 
            cmd.description.toLowerCase().includes(searchTerm) ||
            cmd.category.toLowerCase().includes(searchTerm)
        );
        displayCommands(filteredCommands, isListView);
    });
});

// Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}
