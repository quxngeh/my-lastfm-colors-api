// Auto-generated Framer color updater
// Song: "마지막처럼(AS IF IT'S YOUR LAST)" by BLACKPINK
// Generated: 10/17/2026, 12:30:42 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#dc53a8",
  "secondary": "#f68ec4",
  "accent": "#c2345c",
  "muted": "#fab8f1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#dc53a8');
    root.style.setProperty('--color-secondary', '#f68ec4');
    root.style.setProperty('--color-accent', '#c2345c');
    root.style.setProperty('--color-muted', '#fab8f1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}