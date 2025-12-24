// Auto-generated Framer color updater
// Song: "Sour Grapes" by LE SSERAFIM
// Generated: 12/24/2025, 9:03:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#040404",
  "secondary": "#cecece",
  "accent": "#7c7c7c",
  "muted": "#747474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#040404');
    root.style.setProperty('--color-secondary', '#cecece');
    root.style.setProperty('--color-accent', '#7c7c7c');
    root.style.setProperty('--color-muted', '#747474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}