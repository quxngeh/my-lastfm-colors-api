// Auto-generated Framer color updater
// Song: "Kiss The Sky" by Sigrid
// Generated: 8/2/2026, 10:22:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3a3231",
  "secondary": "#deb8b7",
  "accent": "#6cb8b3",
  "muted": "#82979e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3a3231');
    root.style.setProperty('--color-secondary', '#deb8b7');
    root.style.setProperty('--color-accent', '#6cb8b3');
    root.style.setProperty('--color-muted', '#82979e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}