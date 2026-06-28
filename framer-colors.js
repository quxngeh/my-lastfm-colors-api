// Auto-generated Framer color updater
// Song: "Knock Knock" by KickFlip
// Generated: 6/28/2026, 9:57:56 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#483d39",
  "secondary": "#d9c0bc",
  "accent": "#7b8da7",
  "muted": "#a0a8aa"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#483d39');
    root.style.setProperty('--color-secondary', '#d9c0bc');
    root.style.setProperty('--color-accent', '#7b8da7');
    root.style.setProperty('--color-muted', '#a0a8aa');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}