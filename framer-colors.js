// Auto-generated Framer color updater
// Song: "Sky Restaurant" by Hi-Fi Set
// Generated: 12/29/2025, 9:03:36 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#605b52",
  "secondary": "#d9a692",
  "accent": "#8aa5ae",
  "muted": "#9fb9ba"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#605b52');
    root.style.setProperty('--color-secondary', '#d9a692');
    root.style.setProperty('--color-accent', '#8aa5ae');
    root.style.setProperty('--color-muted', '#9fb9ba');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}