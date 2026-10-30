// Auto-generated Framer color updater
// Song: "KNOW ABOUT ME" by NMIXX
// Generated: 10/30/2026, 3:22:38 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4c4d64",
  "secondary": "#d9d1dc",
  "accent": "#adb1c6",
  "muted": "#868ac3"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4c4d64');
    root.style.setProperty('--color-secondary', '#d9d1dc');
    root.style.setProperty('--color-accent', '#adb1c6');
    root.style.setProperty('--color-muted', '#868ac3');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}