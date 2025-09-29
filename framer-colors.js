// Auto-generated Framer color updater
// Song: "AGASSY" by SOOJIN
// Generated: 9/29/2025, 9:01:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c4292c",
  "secondary": "#f59361",
  "accent": "#371f14",
  "muted": "#7c3229"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c4292c');
    root.style.setProperty('--color-secondary', '#f59361');
    root.style.setProperty('--color-accent', '#371f14');
    root.style.setProperty('--color-muted', '#7c3229');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}