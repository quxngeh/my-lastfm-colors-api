// Auto-generated Framer color updater
// Song: "Girls' Capitalism" by tripleS
// Generated: 9/5/2025, 9:01:08 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#24211b",
  "secondary": "#e5dcd5",
  "accent": "#825d40",
  "muted": "#9f805d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#24211b');
    root.style.setProperty('--color-secondary', '#e5dcd5');
    root.style.setProperty('--color-accent', '#825d40');
    root.style.setProperty('--color-muted', '#9f805d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}