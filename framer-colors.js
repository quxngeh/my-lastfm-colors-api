// Auto-generated Framer color updater
// Song: "Gas Me Up" by ITZY
// Generated: 1/18/2026, 9:00:56 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b5b4bc",
  "secondary": "#222023",
  "accent": "#c82e2c",
  "muted": "#927a4d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b5b4bc');
    root.style.setProperty('--color-secondary', '#222023');
    root.style.setProperty('--color-accent', '#c82e2c');
    root.style.setProperty('--color-muted', '#927a4d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}