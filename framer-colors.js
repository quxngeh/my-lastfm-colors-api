// Auto-generated Framer color updater
// Song: "CALL BACK" by Don Toliver
// Generated: 11/3/2026, 4:39:24 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#090808",
  "secondary": "#b3a59a",
  "accent": "#746c63",
  "muted": "#6e635c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#090808');
    root.style.setProperty('--color-secondary', '#b3a59a');
    root.style.setProperty('--color-accent', '#746c63');
    root.style.setProperty('--color-muted', '#6e635c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}