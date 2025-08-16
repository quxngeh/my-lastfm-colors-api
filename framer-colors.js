// Auto-generated Framer color updater
// Song: "Kiss Your Lips" by WJSN THE BLACK
// Generated: 8/16/2025, 9:00:50 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#060607",
  "secondary": "#dadada",
  "accent": "#7c7c7c",
  "muted": "#747474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#060607');
    root.style.setProperty('--color-secondary', '#dadada');
    root.style.setProperty('--color-accent', '#7c7c7c');
    root.style.setProperty('--color-muted', '#747474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}