// Auto-generated Framer color updater
// Song: "ZEN" by Jennie
// Generated: 10/28/2025, 9:01:04 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0a0e0d",
  "secondary": "#c54339",
  "accent": "#805c60",
  "muted": "#6c4454"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0a0e0d');
    root.style.setProperty('--color-secondary', '#c54339');
    root.style.setProperty('--color-accent', '#805c60');
    root.style.setProperty('--color-muted', '#6c4454');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}