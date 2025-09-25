// Auto-generated Framer color updater
// Song: "Supersonic" by fromis_9
// Generated: 9/25/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d29f99",
  "secondary": "#475352",
  "accent": "#903643",
  "muted": "#dab531"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d29f99');
    root.style.setProperty('--color-secondary', '#475352');
    root.style.setProperty('--color-accent', '#903643');
    root.style.setProperty('--color-muted', '#dab531');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}