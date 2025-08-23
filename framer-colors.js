// Auto-generated Framer color updater
// Song: "run for the hills" by Tate McRae
// Generated: 8/23/2025, 9:00:56 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#201f1e",
  "secondary": "#bd9b98",
  "accent": "#73779e",
  "muted": "#8c8d8a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#201f1e');
    root.style.setProperty('--color-secondary', '#bd9b98');
    root.style.setProperty('--color-accent', '#73779e');
    root.style.setProperty('--color-muted', '#8c8d8a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}