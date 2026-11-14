// Auto-generated Framer color updater
// Song: "WE ARE YOUNG" by TRI.BE
// Generated: 11/14/2026, 3:22:51 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#baa2b4",
  "secondary": "#3b78a6",
  "accent": "#c3a83b",
  "muted": "#764073"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#baa2b4');
    root.style.setProperty('--color-secondary', '#3b78a6');
    root.style.setProperty('--color-accent', '#c3a83b');
    root.style.setProperty('--color-muted', '#764073');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}