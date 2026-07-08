// Auto-generated Framer color updater
// Song: "O.O Pt. 1 (Baila)" by NMIXX
// Generated: 7/8/2026, 10:52:01 AM

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