// Auto-generated Framer color updater
// Song: "OLD TECHNOLOGY" by Slayyyter
// Generated: 9/13/2026, 1:29:15 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#619bb7",
  "secondary": "#1d1d17",
  "accent": "#c9696a",
  "muted": "#054460"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#619bb7');
    root.style.setProperty('--color-secondary', '#1d1d17');
    root.style.setProperty('--color-accent', '#c9696a');
    root.style.setProperty('--color-muted', '#054460');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}