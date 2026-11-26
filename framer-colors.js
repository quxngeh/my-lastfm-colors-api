// Auto-generated Framer color updater
// Song: "연애의 기초" by Fin.K.L
// Generated: 11/26/2026, 6:40:50 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#070605",
  "secondary": "#d1ac8e",
  "accent": "#7c7c7c",
  "muted": "#747474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#070605');
    root.style.setProperty('--color-secondary', '#d1ac8e');
    root.style.setProperty('--color-accent', '#7c7c7c');
    root.style.setProperty('--color-muted', '#747474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}