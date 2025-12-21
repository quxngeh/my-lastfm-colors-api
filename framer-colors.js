// Auto-generated Framer color updater
// Song: "New Me" by WJSN
// Generated: 12/21/2025, 9:00:57 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d25d54",
  "secondary": "#f1cdc9",
  "accent": "#e7a3b7",
  "muted": "#e39e80"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d25d54');
    root.style.setProperty('--color-secondary', '#f1cdc9');
    root.style.setProperty('--color-accent', '#e7a3b7');
    root.style.setProperty('--color-muted', '#e39e80');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}