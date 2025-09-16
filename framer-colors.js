// Auto-generated Framer color updater
// Song: "Scars" by YOUNG POSSE
// Generated: 9/16/2025, 9:01:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#312b2c",
  "secondary": "#e29396",
  "accent": "#9aa2a4",
  "muted": "#5777a4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#312b2c');
    root.style.setProperty('--color-secondary', '#e29396');
    root.style.setProperty('--color-accent', '#9aa2a4');
    root.style.setProperty('--color-muted', '#5777a4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}