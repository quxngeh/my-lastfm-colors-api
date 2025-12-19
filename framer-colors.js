// Auto-generated Framer color updater
// Song: "Sports car" by Tate McRae
// Generated: 12/19/2025, 9:02:14 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3a322a",
  "secondary": "#9b775b",
  "accent": "#b2a69c",
  "muted": "#84847e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3a322a');
    root.style.setProperty('--color-secondary', '#9b775b');
    root.style.setProperty('--color-accent', '#b2a69c');
    root.style.setProperty('--color-muted', '#84847e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}