// Auto-generated Framer color updater
// Song: "One & Only" by GWSN
// Generated: 10/20/2025, 9:08:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a3cfdd",
  "secondary": "#115a76",
  "accent": "#9d3738",
  "muted": "#9d7060"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a3cfdd');
    root.style.setProperty('--color-secondary', '#115a76');
    root.style.setProperty('--color-accent', '#9d3738');
    root.style.setProperty('--color-muted', '#9d7060');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}