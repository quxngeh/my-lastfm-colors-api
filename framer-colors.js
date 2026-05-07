// Auto-generated Framer color updater
// Song: "Bruises" by Reneé Rapp
// Generated: 5/7/2026, 9:47:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#764536",
  "secondary": "#1c110d",
  "accent": "#bc9179",
  "muted": "#a88973"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#764536');
    root.style.setProperty('--color-secondary', '#1c110d');
    root.style.setProperty('--color-accent', '#bc9179');
    root.style.setProperty('--color-muted', '#a88973');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}