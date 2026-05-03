// Auto-generated Framer color updater
// Song: "Breakin' Dishes" by Rihanna
// Generated: 5/3/2026, 9:27:05 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#388a8b",
  "secondary": "#d3a1a3",
  "accent": "#1e1f1e",
  "muted": "#314542"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#388a8b');
    root.style.setProperty('--color-secondary', '#d3a1a3');
    root.style.setProperty('--color-accent', '#1e1f1e');
    root.style.setProperty('--color-muted', '#314542');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}