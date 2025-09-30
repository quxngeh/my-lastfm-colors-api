// Auto-generated Framer color updater
// Song: "Running" by PRISTIN
// Generated: 9/30/2025, 9:01:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d2bbaa",
  "secondary": "#2e3538",
  "accent": "#caa12e",
  "muted": "#85493a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d2bbaa');
    root.style.setProperty('--color-secondary', '#2e3538');
    root.style.setProperty('--color-accent', '#caa12e');
    root.style.setProperty('--color-muted', '#85493a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}