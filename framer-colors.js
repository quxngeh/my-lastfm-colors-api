// Auto-generated Framer color updater
// Song: "Damn Right" by JENNIE, Childish Gambino & Kali Uchis
// Generated: 12/11/2025, 9:02:39 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0c0d10",
  "secondary": "#c2453b",
  "accent": "#7e746e",
  "muted": "#7c6c64"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0c0d10');
    root.style.setProperty('--color-secondary', '#c2453b');
    root.style.setProperty('--color-accent', '#7e746e');
    root.style.setProperty('--color-muted', '#7c6c64');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}