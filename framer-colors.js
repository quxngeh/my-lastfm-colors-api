// Auto-generated Framer color updater
// Song: "The Outside" by Twenty One Pilots
// Generated: 4/4/2026, 9:09:50 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a3b1b6",
  "secondary": "#585a39",
  "accent": "#3b585c",
  "muted": "#595a5f"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a3b1b6');
    root.style.setProperty('--color-secondary', '#585a39');
    root.style.setProperty('--color-accent', '#3b585c');
    root.style.setProperty('--color-muted', '#595a5f');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}