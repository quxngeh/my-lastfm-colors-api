// Auto-generated Framer color updater
// Song: "Can't Help Myself" by aespa
// Generated: 8/6/2026, 11:09:32 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b5d017",
  "secondary": "#e3ef9e",
  "accent": "#4c7e05",
  "muted": "#6a7a05"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b5d017');
    root.style.setProperty('--color-secondary', '#e3ef9e');
    root.style.setProperty('--color-accent', '#4c7e05');
    root.style.setProperty('--color-muted', '#6a7a05');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}