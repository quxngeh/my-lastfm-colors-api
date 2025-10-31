// Auto-generated Framer color updater
// Song: "Butterfly Effect" by ARTMS
// Generated: 10/31/2025, 9:01:05 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cf9ab8",
  "secondary": "#324f7b",
  "accent": "#905a62",
  "muted": "#804367"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cf9ab8');
    root.style.setProperty('--color-secondary', '#324f7b');
    root.style.setProperty('--color-accent', '#905a62');
    root.style.setProperty('--color-muted', '#804367');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}