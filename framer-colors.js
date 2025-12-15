// Auto-generated Framer color updater
// Song: "DROP TOP" by SOOJIN
// Generated: 12/15/2025, 9:04:09 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e66c4a",
  "secondary": "#622522",
  "accent": "#f8c8a0",
  "muted": "#f0a98d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e66c4a');
    root.style.setProperty('--color-secondary', '#622522');
    root.style.setProperty('--color-accent', '#f8c8a0');
    root.style.setProperty('--color-muted', '#f0a98d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}