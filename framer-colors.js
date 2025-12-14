// Auto-generated Framer color updater
// Song: "-18" by TRI.BE
// Generated: 12/14/2025, 9:01:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d4d5e5",
  "secondary": "#3f5f75",
  "accent": "#b77552",
  "muted": "#757598"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d4d5e5');
    root.style.setProperty('--color-secondary', '#3f5f75');
    root.style.setProperty('--color-accent', '#b77552');
    root.style.setProperty('--color-muted', '#757598');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}