// Auto-generated Framer color updater
// Song: "Set The Tone" by aespa
// Generated: 11/29/2025, 9:00:58 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#38502a",
  "secondary": "#adc59a",
  "accent": "#8ca37a",
  "muted": "#849f7c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#38502a');
    root.style.setProperty('--color-secondary', '#adc59a');
    root.style.setProperty('--color-accent', '#8ca37a');
    root.style.setProperty('--color-muted', '#849f7c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}