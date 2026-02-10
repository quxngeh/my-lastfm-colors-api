// Auto-generated Framer color updater
// Song: "The Worst" by Jhené Aiko
// Generated: 2/10/2026, 9:15:55 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#5b6465",
  "secondary": "#d3d7d2",
  "accent": "#afc0c4",
  "muted": "#9bb1bd"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#5b6465');
    root.style.setProperty('--color-secondary', '#d3d7d2');
    root.style.setProperty('--color-accent', '#afc0c4');
    root.style.setProperty('--color-muted', '#9bb1bd');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}