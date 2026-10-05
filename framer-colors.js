// Auto-generated Framer color updater
// Song: "Mirage (SANA)" by MISAMO
// Generated: 10/5/2026, 5:29:04 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c7c5ba",
  "secondary": "#4c4c41",
  "accent": "#4d869b",
  "muted": "#776960"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c7c5ba');
    root.style.setProperty('--color-secondary', '#4c4c41');
    root.style.setProperty('--color-accent', '#4d869b');
    root.style.setProperty('--color-muted', '#776960');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}