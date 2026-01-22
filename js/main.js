// ===================================
// Portfolio Website - Main JavaScript
// ===================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTabNavigation();
    loadProjects();
    handleHashNavigation();
});

// ===================================
// Tab Navigation
// ===================================

function initTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');

    // Remove active class from all tabs and sections
    tabs.forEach(tab => tab.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active class to clicked tab and corresponding section
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activeSection = document.getElementById(tabName);

    if (activeTab && activeSection) {
        activeTab.classList.add('active');
        activeSection.classList.add('active');

        // Update URL hash
        window.location.hash = tabName;
    }
}

// Handle direct navigation via URL hash
function handleHashNavigation() {
    const hash = window.location.hash.substring(1); // Remove # symbol

    if (hash && ['about', 'resume', 'projects'].includes(hash)) {
        switchTab(hash);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.substring(1);
        if (newHash && ['about', 'resume', 'projects'].includes(newHash)) {
            switchTab(newHash);
        }
    });
}

// ===================================
// Projects Loading and Rendering
// ===================================

async function loadProjects() {
    try {
        const response = await fetch('data/projects.json?v=' + Date.now());
        const data = await response.json();

        if (data && data.projects) {
            renderProjects(data.projects);
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        displayProjectsError();
    }
}

function renderProjects(projects) {
    const gameProjects = projects.filter(p => p.category === 'game');
    const vrProjects = projects.filter(p => p.category === 'vr');

    const gameGrid = document.getElementById('game-projects-grid');
    const vrGrid = document.getElementById('vr-projects-grid');

    if (gameGrid) {
        gameGrid.innerHTML = gameProjects.map(project => createProjectCard(project)).join('');
    }

    if (vrGrid) {
        vrGrid.innerHTML = vrProjects.map(project => createProjectCard(project)).join('');
    }

    // Add click handlers to all project cards
    addProjectClickHandlers();
}

function createProjectCard(project) {
    return `
        <div class="project-card" data-detail-page="${project.detailPage}">
            <img src="${project.thumbnail}"
                 alt="${project.title}"
                 class="project-thumbnail"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="placeholder-gif" style="display: none;">
                ${project.category.toUpperCase()} Project GIF
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
            </div>
        </div>
    `;
}

function addProjectClickHandlers() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const detailPage = card.getAttribute('data-detail-page');
            if (detailPage) {
                window.location.href = detailPage;
            }
        });
    });
}

function displayProjectsError() {
    const gameGrid = document.getElementById('game-projects-grid');
    const vrGrid = document.getElementById('vr-projects-grid');

    const errorMessage = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
            <p>Unable to load projects. Please check that projects.json exists in the data folder.</p>
        </div>
    `;

    if (gameGrid) gameGrid.innerHTML = errorMessage;
    if (vrGrid) vrGrid.innerHTML = errorMessage;
}

// ===================================
// Utility Functions
// ===================================

// Smooth scroll to top when switching tabs (optional enhancement)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'instant' // Using instant per design spec (no smooth animations)
    });
}
