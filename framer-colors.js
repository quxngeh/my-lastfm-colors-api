// Auto-generated Framer color updater
// Song: "BEBE" by STAYC
// Generated: 4/25/2026, 9:15:05 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#679070",
  "secondary": "#494a49",
  "accent": "#d6d8d6",
  "muted": "#acd0bc"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#679070');
    root.style.setProperty('--color-secondary', '#494a49');
    root.style.setProperty('--color-accent', '#d6d8d6');
    root.style.setProperty('--color-muted', '#acd0bc');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}