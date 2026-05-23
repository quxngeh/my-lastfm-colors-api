// Auto-generated Framer color updater
// Song: "RADIO" by Frost Children & Kim Petras
// Generated: 5/23/2026, 9:30:47 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#917570",
  "secondary": "#d7d8dc",
  "accent": "#361113",
  "muted": "#ceb8be"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#917570');
    root.style.setProperty('--color-secondary', '#d7d8dc');
    root.style.setProperty('--color-accent', '#361113');
    root.style.setProperty('--color-muted', '#ceb8be');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}