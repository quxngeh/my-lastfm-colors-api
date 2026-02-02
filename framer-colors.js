// Auto-generated Framer color updater
// Song: "LOOP (feat. Lil Cherry)" by Yves
// Generated: 2/2/2026, 9:11:51 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e4dcd9",
  "secondary": "#282b3a",
  "accent": "#9e6861",
  "muted": "#ac7078"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e4dcd9');
    root.style.setProperty('--color-secondary', '#282b3a');
    root.style.setProperty('--color-accent', '#9e6861');
    root.style.setProperty('--color-muted', '#ac7078');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}