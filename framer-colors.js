// Auto-generated Framer color updater
// Song: "Pantomime" by WJSN
// Generated: 5/12/2026, 9:50:32 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c7cab5",
  "secondary": "#2c2958",
  "accent": "#7d565b",
  "muted": "#797f4b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c7cab5');
    root.style.setProperty('--color-secondary', '#2c2958');
    root.style.setProperty('--color-accent', '#7d565b');
    root.style.setProperty('--color-muted', '#797f4b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}