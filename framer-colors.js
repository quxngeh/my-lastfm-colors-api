// Auto-generated Framer color updater
// Song: "FAITHFUL SERVANT FRIEND OF CHRIST" by Lingua Ignota
// Generated: 10/24/2026, 12:57:37 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b0ad9e",
  "secondary": "#373228",
  "accent": "#6a4832",
  "muted": "#806345"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b0ad9e');
    root.style.setProperty('--color-secondary', '#373228');
    root.style.setProperty('--color-accent', '#6a4832');
    root.style.setProperty('--color-muted', '#806345');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}