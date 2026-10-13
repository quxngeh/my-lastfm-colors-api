// Auto-generated Framer color updater
// Song: "If God is Real, Then Heaven Is a Club" by SNOW WIFE
// Generated: 10/13/2026, 4:30:37 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#72889b",
  "secondary": "#c3a389",
  "accent": "#211613",
  "muted": "#1a3756"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#72889b');
    root.style.setProperty('--color-secondary', '#c3a389');
    root.style.setProperty('--color-accent', '#211613');
    root.style.setProperty('--color-muted', '#1a3756');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}