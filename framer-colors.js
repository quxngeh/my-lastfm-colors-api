// Auto-generated Framer color updater
// Song: "1-800-F*****F (feat. underscores & umru)" by Kimj
// Generated: 9/30/2026, 3:25:02 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#131f30",
  "secondary": "#edeaec",
  "accent": "#cf2c40",
  "muted": "#a14c5c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#131f30');
    root.style.setProperty('--color-secondary', '#edeaec');
    root.style.setProperty('--color-accent', '#cf2c40');
    root.style.setProperty('--color-muted', '#a14c5c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}