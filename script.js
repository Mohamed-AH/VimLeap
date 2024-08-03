const vimCommands = [
    // Navigation
    { name: 'h', description: 'Move cursor left', category: 'Navigation' },
    { name: 'j', description: 'Move cursor down', category: 'Navigation' },
    { name: 'k', description: 'Move cursor up', category: 'Navigation' },
    { name: 'l', description: 'Move cursor right', category: 'Navigation' },
    { name: 'w', description: 'Jump forwards to the start of a word', category: 'Navigation' },
    { name: 'e', description: 'Jump forwards to the end of a word', category: 'Navigation' },
    { name: 'b', description: 'Jump backwards to the start of a word', category: 'Navigation' },
    { name: '0', description: 'Jump to the start of the line', category: 'Navigation' },
    { name: '^', description: 'Jump to the first non-blank character of the line', category: 'Navigation' },
    { name: '$', description: 'Jump to the end of the line', category: 'Navigation' },
    { name: 'gg', description: 'Go to the first line of the document', category: 'Navigation' },
    { name: 'G', description: 'Go to the last line of the document', category: 'Navigation' },
    { name: '5G', description: 'Go to line 5', category: 'Navigation' },

    // Editing
    { name: 'i', description: 'Insert before the cursor', category: 'Editing' },
    { name: 'I', description: 'Insert at the beginning of the line', category: 'Editing' },
    { name: 'a', description: 'Insert (append) after the cursor', category: 'Editing' },
    { name: 'A', description: 'Insert (append) at the end of the line', category: 'Editing' },
    { name: 'o', description: 'Append (open) a new line below the current line', category: 'Editing' },
    { name: 'O', description: 'Append (open) a new line above the current line', category: 'Editing' },
    { name: 'ea', description: 'Insert (append) at the end of the word', category: 'Editing' },
    { name: 'Esc', description: 'Exit insert mode', category: 'Editing' },

    // Editing - Deleting
    { name: 'x', description: 'Delete character', category: 'Editing' },
    { name: 'dw', description: 'Delete word', category: 'Editing' },
    { name: 'dd', description: 'Delete line', category: 'Editing' },
    { name: 'd$', description: 'Delete to the end of the line', category: 'Editing' },
    { name: 'D', description: 'Delete to the end of the line', category: 'Editing' },

    // Editing - Copying and Pasting
    { name: 'yy', description: 'Yank (copy) a line', category: 'Editing' },
    { name: 'yw', description: 'Yank (copy) the characters of the word from the cursor position to the start of the next word', category: 'Editing' },
    { name: 'y$', description: 'Yank (copy) to end of line', category: 'Editing' },
    { name: 'p', description: 'Put (paste) the clipboard after cursor', category: 'Editing' },
    { name: 'P', description: 'Put (paste) before cursor', category: 'Editing' },

    // Editing - Undo and Redo
    { name: 'u', description: 'Undo', category: 'Editing' },
    { name: 'Ctrl + r', description: 'Redo', category: 'Editing' },

    // Visual mode
    { name: 'v', description: 'Start visual mode, mark lines, then do a command (like y-yank)', category: 'Visual Mode' },
    { name: 'V', description: 'Start linewise visual mode', category: 'Visual Mode' },
    { name: 'Ctrl + v', description: 'Start visual block mode', category: 'Visual Mode' },

    // Searching
    { name: '/pattern', description: 'Search forward for pattern', category: 'Searching' },
    { name: '?pattern', description: 'Search backward for pattern', category: 'Searching' },
    { name: 'n', description: 'Repeat search in same direction', category: 'Searching' },
    { name: 'N', description: 'Repeat search in opposite direction', category: 'Searching' },

    // Search and Replace
    { name: ':%s/old/new/g', description: 'Replace all old with new throughout file', category: 'Search and Replace' },
    { name: ':%s/old/new/gc', description: 'Replace all old with new throughout file with confirmations', category: 'Search and Replace' },

    // Working with multiple files
    { name: ':e filename', description: 'Edit a file in a new buffer', category: 'Multiple Files' },
    { name: ':bnext or :bn', description: 'Go to the next buffer', category: 'Multiple Files' },
    { name: ':bprev or :bp', description: 'Go to the previous buffer', category: 'Multiple Files' },
    { name: ':bd', description: 'Delete a buffer (close a file)', category: 'Multiple Files' },
    { name: ':sp filename', description: 'Open a file in a new buffer and split window', category: 'Multiple Files' },
    { name: ':vsp filename', description: 'Open a file in a new buffer and vertically split window', category: 'Multiple Files' },
    { name: 'Ctrl + ws', description: 'Split window', category: 'Multiple Files' },
    { name: 'Ctrl + ww', description: 'Switch windows', category: 'Multiple Files' },
    { name: 'Ctrl + wq', description: 'Quit a window', category: 'Multiple Files' },
    { name: 'Ctrl + wv', description: 'Split window vertically', category: 'Multiple Files' },

    // Tabs
    { name: ':tabnew filename', description: 'Open a file in a new tab', category: 'Tabs' },
    { name: 'Ctrl + wT', description: 'Move the current split window into its own tab', category: 'Tabs' },
    { name: 'gt or :tabnext', description: 'Move to the next tab', category: 'Tabs' },
    { name: 'gT or :tabprev', description: 'Move to the previous tab', category: 'Tabs' },

    // File operations
    { name: ':w', description: 'Write (save) the file, but do not exit', category: 'File Operations' },
    { name: ':w !sudo tee %', description: 'Write out the current file using sudo', category: 'File Operations' },
    { name: ':wq or :x or ZZ', description: 'Write (save) and quit', category: 'File Operations' },
    { name: ':q', description: 'Quit (fails if there are unsaved changes)', category: 'File Operations' },
    { name: ':q! or ZQ', description: 'Quit and throw away unsaved changes', category: 'File Operations' },

    // Miscellaneous
    { name: '.', description: 'Repeat last command', category: 'Miscellaneous' },
    { name: '>>', description: 'Indent line one shift-width', category: 'Miscellaneous' },
    { name: '<<', description: 'De-indent line one shift-width', category: 'Miscellaneous' },
    { name: '==', description: 'Auto-indent current line', category: 'Miscellaneous' },
];

function displayCommands(commands) {
    const commandResults = document.getElementById('commandResults');
    commandResults.innerHTML = commands.map(cmd => `
        <div class="command-card">
            <div class="command-name">${cmd.name}</div>
            <div class="command-description">${cmd.description}</div>
            <div class="command-category">${cmd.category}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayCommands(vimCommands);

    const darkModeToggle = document.getElementById('darkModeToggle');
    const searchInput = document.getElementById('searchInput');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCommands = vimCommands.filter(cmd => 
            cmd.name.toLowerCase().includes(searchTerm) || 
            cmd.description.toLowerCase().includes(searchTerm) ||
            cmd.category.toLowerCase().includes(searchTerm)
        );
        displayCommands(filteredCommands);
    });
});

// Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}
