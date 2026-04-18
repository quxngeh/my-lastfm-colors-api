// Auto-generated Framer color updater
// Song: "♥beats" by IVE
// Generated: 4/18/2026, 9:13:24 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8abaeb",
  "secondary": "#edecfa",
  "accent": "#9b70dc",
  "muted": "#c1e5fa"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8abaeb');
    root.style.setProperty('--color-secondary', '#edecfa');
    root.style.setProperty('--color-accent', '#9b70dc');
    root.style.setProperty('--color-muted', '#c1e5fa');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}