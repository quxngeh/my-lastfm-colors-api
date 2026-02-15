// Auto-generated Framer color updater
// Song: "Run For Roses" by NMIXX
// Generated: 2/15/2026, 9:05:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#304057",
  "secondary": "#82a8d3",
  "accent": "#6d92c2",
  "muted": "#bac4d4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#304057');
    root.style.setProperty('--color-secondary', '#82a8d3');
    root.style.setProperty('--color-accent', '#6d92c2');
    root.style.setProperty('--color-muted', '#bac4d4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}