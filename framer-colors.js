// Auto-generated Framer color updater
// Song: "the Aerialist (Wonderboy)" by GWSN
// Generated: 9/20/2025, 9:01:14 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#bebcbc",
  "secondary": "#373521",
  "accent": "#68654c",
  "muted": "#5c543e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#bebcbc');
    root.style.setProperty('--color-secondary', '#373521');
    root.style.setProperty('--color-accent', '#68654c');
    root.style.setProperty('--color-muted', '#5c543e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}