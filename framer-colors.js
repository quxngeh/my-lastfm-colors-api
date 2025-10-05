// Auto-generated Framer color updater
// Song: "Drama" by aespa
// Generated: 10/5/2025, 9:01:03 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e30414",
  "secondary": "#202c32",
  "accent": "#bec6cd",
  "muted": "#b87884"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e30414');
    root.style.setProperty('--color-secondary', '#202c32');
    root.style.setProperty('--color-accent', '#bec6cd');
    root.style.setProperty('--color-muted', '#b87884');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}