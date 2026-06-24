// Auto-generated Framer color updater
// Song: "Heart Drop" by RESCENE
// Generated: 6/24/2026, 10:02:14 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e2d3d6",
  "secondary": "#3e3539",
  "accent": "#b35f7b",
  "muted": "#907164"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e2d3d6');
    root.style.setProperty('--color-secondary', '#3e3539');
    root.style.setProperty('--color-accent', '#b35f7b');
    root.style.setProperty('--color-muted', '#907164');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}