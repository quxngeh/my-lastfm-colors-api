// Auto-generated Framer color updater
// Song: "Tightrope" by Tinashe
// Generated: 2/8/2026, 9:05:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a98768",
  "secondary": "#482a1b",
  "accent": "#e1d6dc",
  "muted": "#54443c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a98768');
    root.style.setProperty('--color-secondary', '#482a1b');
    root.style.setProperty('--color-accent', '#e1d6dc');
    root.style.setProperty('--color-muted', '#54443c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}