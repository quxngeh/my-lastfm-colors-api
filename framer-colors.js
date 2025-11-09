// Auto-generated Framer color updater
// Song: "KNOW ABOUT ME" by NMIXX
// Generated: 11/9/2025, 9:00:59 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4c4c63",
  "secondary": "#d9d1dc",
  "accent": "#aeb1c6",
  "muted": "#8589c4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4c4c63');
    root.style.setProperty('--color-secondary', '#d9d1dc');
    root.style.setProperty('--color-accent', '#aeb1c6');
    root.style.setProperty('--color-muted', '#8589c4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}