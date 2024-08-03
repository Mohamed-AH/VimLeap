const vimCommands = [
    { name: 'dd', description: 'Delete current line', category: 'Editing' },
    { name: 'yy', description: 'Yank (copy) current line', category: 'Editing' },
    { name: 'p', description: 'Paste after cursor', category: 'Editing' },
    { name: 'gg', description: 'Go to the first line of the document', category: 'Navigation' },
    { name: 'G', description: 'Go to the last line of the document', category: 'Navigation' },
    { name: '/pattern', description: 'Search forward for pattern', category: 'Searching' },
    { name: '?pattern', description: 'Search backward for pattern', category: 'Searching' },
    { name: 'n', description: 'Repeat search in same direction', category: 'Searching' },
    { name: 'N', description: 'Repeat search in opposite direction', category: 'Searching' },
    { name: ':w', description: 'Save the file', category: 'File Operations' },
    { name: ':q', description: 'Quit (close window)', category: 'File Operations' },
    { name: ':wq', description: 'Save and quit', category: 'File Operations' },
];

const categories = [...new Set(vimCommands.map(cmd => cmd.category))];

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCommands = vimCommands.filter(cmd => 
        cmd.name.toLowerCase().includes(searchTerm) || 
        cmd.description.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(filteredCommands);
});

function displaySearchResults(commands) {
    searchResults.innerHTML = commands.map(cmd => 
        `<p><strong>${cmd.name}</strong>: ${cmd.description}</p>`
    ).join('');
}

// Categories
const categoryList = document.getElementById('categoryList');
categories.forEach(category => {
    const li = document.createElement('li');
    li.textContent = category;
    categoryList.appendChild(li);
});

// Daily challenge
const challengeDescription = document.getElementById('challengeDescription');
const challengeSolution = document.getElementById('challengeSolution');
const revealSolution = document.getElementById('revealSolution');

function loadDailyChallenge() {
    // In a real app, this would be fetched from a server
    const challenge = {
        description: "Delete the first 3 lines of a file",
        solution: "3dd"
    };
    challengeDescription.textContent = challenge.description;
    challengeSolution.textContent = `Solution: ${challenge.solution}`;
}

revealSolution.addEventListener('click', () => {
    challengeSolution.hidden = !challengeSolution.hidden;
    revealSolution.textContent = challengeSolution.hidden ? 'Reveal Solution' : 'Hide Solution';
});

loadDailyChallenge();

// Command tester
const testArea = document.getElementById('testArea');
const testCommand = document.getElementById('testCommand');
const testResult = document.getElementById('testResult');

testCommand.addEventListener('click', () => {
    const command = testArea.value.trim();
    const knownCommand = vimCommands.find(cmd => cmd.name === command);
    if (knownCommand) {
        testResult.textContent = `Command '${command}': ${knownCommand.description}`;
    } else {
        testResult.textContent = `Simulated result of '${command}': Command executed`;
    }
});

// Language selection (simplified)
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', (event) => {
    const lang = event.target.value;
    // In a real app, this would change the language of the entire site
    console.log(`Language changed to ${lang}`);
    // You would typically load new language strings here
});

// Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}
