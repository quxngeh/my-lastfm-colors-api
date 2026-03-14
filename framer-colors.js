// Auto-generated Framer color updater
// Song: "Phresh Out the Runway" by Rihanna
// Generated: 3/14/2026, 9:05:43 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a96d3a",
  "secondary": "#130e0c",
  "accent": "#e9e3db",
  "muted": "#c4b3a6"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a96d3a');
    root.style.setProperty('--color-secondary', '#130e0c');
    root.style.setProperty('--color-accent', '#e9e3db');
    root.style.setProperty('--color-muted', '#c4b3a6');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}