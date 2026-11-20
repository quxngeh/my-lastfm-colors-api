// Auto-generated Framer color updater
// Song: "Spring Fever (feat. DINDIN & Jung Hyung Don)" by Yena
// Generated: 11/20/2026, 5:22:15 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d99557",
  "secondary": "#861f0c",
  "accent": "#fbe2c2",
  "muted": "#74543c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d99557');
    root.style.setProperty('--color-secondary', '#861f0c');
    root.style.setProperty('--color-accent', '#fbe2c2');
    root.style.setProperty('--color-muted', '#74543c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}