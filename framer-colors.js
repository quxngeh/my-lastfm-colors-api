// Auto-generated Framer color updater
// Song: "305tilidie" by Camila Cabello
// Generated: 10/7/2026, 3:50:38 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#123e67",
  "secondary": "#a16c4c",
  "accent": "#b9cfe5",
  "muted": "#7498c4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#123e67');
    root.style.setProperty('--color-secondary', '#a16c4c');
    root.style.setProperty('--color-accent', '#b9cfe5');
    root.style.setProperty('--color-muted', '#7498c4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}