// Auto-generated Framer color updater
// Song: "KNOW ABOUT ME" by NMIXX
// Generated: 5/27/2026, 10:20:59 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4c4d63",
  "secondary": "#d9d1dc",
  "accent": "#adb0c5",
  "muted": "#8489c4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4c4d63');
    root.style.setProperty('--color-secondary', '#d9d1dc');
    root.style.setProperty('--color-accent', '#adb0c5');
    root.style.setProperty('--color-muted', '#8489c4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}