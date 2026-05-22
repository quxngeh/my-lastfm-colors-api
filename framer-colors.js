// Auto-generated Framer color updater
// Song: "Skin" by Rihanna
// Generated: 5/22/2026, 10:01:49 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#dd7984",
  "secondary": "#3a2a75",
  "accent": "#ac2171",
  "muted": "#f9b69d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#dd7984');
    root.style.setProperty('--color-secondary', '#3a2a75');
    root.style.setProperty('--color-accent', '#ac2171');
    root.style.setProperty('--color-muted', '#f9b69d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}