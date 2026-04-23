// Auto-generated Framer color updater
// Song: "XOXZ" by IVE
// Generated: 4/23/2026, 9:29:04 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8abaeb",
  "secondary": "#edecfa",
  "accent": "#9a71da",
  "muted": "#bfe5fa"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8abaeb');
    root.style.setProperty('--color-secondary', '#edecfa');
    root.style.setProperty('--color-accent', '#9a71da');
    root.style.setProperty('--color-muted', '#bfe5fa');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}