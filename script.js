// Toggle Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Redirect to Instagram
function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/exct_gum';
}

// Update Real-time Clock
function updateTime() {
    const now = new Date();
    const clockElement = document.querySelector('#realtime-clock');
    clockElement.textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime(); // Update immediately on page load
