// Auto-generated Framer color updater
// Song: "Magic (feat. JULIE)" by NAYEON
// Generated: 6/6/2026, 9:37:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#efbead",
  "secondary": "#c36c6a",
  "accent": "#d38168",
  "muted": "#9f7c7c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#efbead');
    root.style.setProperty('--color-secondary', '#c36c6a');
    root.style.setProperty('--color-accent', '#d38168');
    root.style.setProperty('--color-muted', '#9f7c7c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}