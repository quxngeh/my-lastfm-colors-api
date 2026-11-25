// Auto-generated Framer color updater
// Song: "If This Is Love (feat. Yahzarah)" by The Foreign Exchange
// Generated: 11/25/2026, 6:51:59 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1e1e1e",
  "secondary": "#cdcdcd",
  "accent": "#8c8c8c",
  "muted": "#848484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1e1e1e');
    root.style.setProperty('--color-secondary', '#cdcdcd');
    root.style.setProperty('--color-accent', '#8c8c8c');
    root.style.setProperty('--color-muted', '#848484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}