// Auto-generated Framer color updater
// Song: "Butterfly Effect" by ARTMS
// Generated: 5/21/2026, 10:11:52 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cf9bb9",
  "secondary": "#324f7a",
  "accent": "#915961",
  "muted": "#824368"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cf9bb9');
    root.style.setProperty('--color-secondary', '#324f7a');
    root.style.setProperty('--color-accent', '#915961');
    root.style.setProperty('--color-muted', '#824368');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}