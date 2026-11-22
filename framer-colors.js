// Auto-generated Framer color updater
// Song: "LEMONADE (feat. Becky G)" by aespa, Becky G
// Generated: 11/22/2026, 4:44:06 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b5d017",
  "secondary": "#e3ef9e",
  "accent": "#558104",
  "muted": "#737a0b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b5d017');
    root.style.setProperty('--color-secondary', '#e3ef9e');
    root.style.setProperty('--color-accent', '#558104');
    root.style.setProperty('--color-muted', '#737a0b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}