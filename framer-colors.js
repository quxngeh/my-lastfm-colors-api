// Auto-generated Framer color updater
// Song: "Diva" by After School
// Generated: 9/19/2026, 12:43:17 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#dac1be",
  "secondary": "#2a1a1e",
  "accent": "#8f4253",
  "muted": "#a87255"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#dac1be');
    root.style.setProperty('--color-secondary', '#2a1a1e');
    root.style.setProperty('--color-accent', '#8f4253');
    root.style.setProperty('--color-muted', '#a87255');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}