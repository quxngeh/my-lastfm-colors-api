// Auto-generated Framer color updater
// Song: "Rico" by NMIXX
// Generated: 4/9/2026, 9:23:36 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#506a92",
  "secondary": "#bfc4d2",
  "accent": "#19232d",
  "muted": "#a0b5cc"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#506a92');
    root.style.setProperty('--color-secondary', '#bfc4d2');
    root.style.setProperty('--color-accent', '#19232d');
    root.style.setProperty('--color-muted', '#a0b5cc');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}