// Auto-generated Framer color updater
// Song: "Bound2U" by Frost Children
// Generated: 3/21/2026, 9:04:52 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#917570",
  "secondary": "#d6d8dc",
  "accent": "#361113",
  "muted": "#ceb8be"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#917570');
    root.style.setProperty('--color-secondary', '#d6d8dc');
    root.style.setProperty('--color-accent', '#361113');
    root.style.setProperty('--color-muted', '#ceb8be');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}