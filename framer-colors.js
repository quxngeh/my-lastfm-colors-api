// Auto-generated Framer color updater
// Song: "Armageddon" by aespa
// Generated: 4/26/2026, 9:16:46 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#37464c",
  "secondary": "#d4d7d4",
  "accent": "#92a7a7",
  "muted": "#7f99a5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#37464c');
    root.style.setProperty('--color-secondary', '#d4d7d4');
    root.style.setProperty('--color-accent', '#92a7a7');
    root.style.setProperty('--color-muted', '#7f99a5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}