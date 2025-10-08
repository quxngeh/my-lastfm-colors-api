// Auto-generated Framer color updater
// Song: "Girls Will Be Girls" by ITZY
// Generated: 10/8/2025, 9:01:40 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0f1212",
  "secondary": "#a4babb",
  "accent": "#768484",
  "muted": "#80948c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0f1212');
    root.style.setProperty('--color-secondary', '#a4babb');
    root.style.setProperty('--color-accent', '#768484');
    root.style.setProperty('--color-muted', '#80948c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}