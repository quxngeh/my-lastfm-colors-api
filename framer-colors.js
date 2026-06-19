// Auto-generated Framer color updater
// Song: "BYULHARANG (160504 + 170607)" by CHUNG HA
// Generated: 6/19/2026, 10:28:29 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#9ca4a6",
  "secondary": "#124167",
  "accent": "#7d5d3d",
  "muted": "#59372d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#9ca4a6');
    root.style.setProperty('--color-secondary', '#124167');
    root.style.setProperty('--color-accent', '#7d5d3d');
    root.style.setProperty('--color-muted', '#59372d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}