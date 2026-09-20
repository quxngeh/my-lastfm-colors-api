// Auto-generated Framer color updater
// Song: "The 7's" by American Football
// Generated: 9/20/2026, 1:14:52 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#545d36",
  "secondary": "#e7cea7",
  "accent": "#a4ac91",
  "muted": "#988c9c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#545d36');
    root.style.setProperty('--color-secondary', '#e7cea7');
    root.style.setProperty('--color-accent', '#a4ac91');
    root.style.setProperty('--color-muted', '#988c9c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}