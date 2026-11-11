// Auto-generated Framer color updater
// Song: "Love Sensation" by Madonna
// Generated: 11/11/2026, 4:41:07 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#987fbb",
  "secondary": "#170917",
  "accent": "#73246b",
  "muted": "#3a2065"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#987fbb');
    root.style.setProperty('--color-secondary', '#170917');
    root.style.setProperty('--color-accent', '#73246b');
    root.style.setProperty('--color-muted', '#3a2065');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}