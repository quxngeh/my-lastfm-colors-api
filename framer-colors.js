// Auto-generated Framer color updater
// Song: "Cheshire" by ITZY
// Generated: 1/28/2026, 9:05:43 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d0c2c9",
  "secondary": "#181b26",
  "accent": "#704b67",
  "muted": "#84695e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d0c2c9');
    root.style.setProperty('--color-secondary', '#181b26');
    root.style.setProperty('--color-accent', '#704b67');
    root.style.setProperty('--color-muted', '#84695e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}