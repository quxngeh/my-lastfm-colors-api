// Auto-generated Framer color updater
// Song: "Drama" by aespa
// Generated: 5/19/2026, 10:13:43 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e10615",
  "secondary": "#301c22",
  "accent": "#d2a2aa",
  "muted": "#c48c84"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e10615');
    root.style.setProperty('--color-secondary', '#301c22');
    root.style.setProperty('--color-accent', '#d2a2aa');
    root.style.setProperty('--color-muted', '#c48c84');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}