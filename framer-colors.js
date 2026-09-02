// Auto-generated Framer color updater
// Song: "UhUh" by RESCENE
// Generated: 9/2/2026, 1:00:39 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d82628",
  "secondary": "#ae989c",
  "accent": "#6f6d73",
  "muted": "#b28682"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d82628');
    root.style.setProperty('--color-secondary', '#ae989c');
    root.style.setProperty('--color-accent', '#6f6d73');
    root.style.setProperty('--color-muted', '#b28682');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}