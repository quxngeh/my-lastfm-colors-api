// Auto-generated Framer color updater
// Song: "Talk that Talk" by TWICE
// Generated: 11/27/2026, 6:30:59 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ebd1c1",
  "secondary": "#8b3446",
  "accent": "#43949e",
  "muted": "#da6e4b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ebd1c1');
    root.style.setProperty('--color-secondary', '#8b3446');
    root.style.setProperty('--color-accent', '#43949e');
    root.style.setProperty('--color-muted', '#da6e4b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}