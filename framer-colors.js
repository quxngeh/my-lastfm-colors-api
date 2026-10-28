// Auto-generated Framer color updater
// Song: "Heart Drop" by RESCENE
// Generated: 10/28/2026, 3:32:18 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f097bc",
  "secondary": "#fbe3f4",
  "accent": "#c4557e",
  "muted": "#c46484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f097bc');
    root.style.setProperty('--color-secondary', '#fbe3f4');
    root.style.setProperty('--color-accent', '#c4557e');
    root.style.setProperty('--color-muted', '#c46484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}