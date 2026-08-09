// Auto-generated Framer color updater
// Song: "White Trash V.H.S." by Coma Cinema
// Generated: 8/9/2026, 9:25:29 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#db942e",
  "secondary": "#22120b",
  "accent": "#752a15",
  "muted": "#854920"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#db942e');
    root.style.setProperty('--color-secondary', '#22120b');
    root.style.setProperty('--color-accent', '#752a15');
    root.style.setProperty('--color-muted', '#854920');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}