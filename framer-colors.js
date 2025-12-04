// Auto-generated Framer color updater
// Song: "Last Dance" by Youha
// Generated: 12/4/2025, 9:02:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d19183",
  "secondary": "#210b0a",
  "accent": "#878681",
  "muted": "#7c7884"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d19183');
    root.style.setProperty('--color-secondary', '#210b0a');
    root.style.setProperty('--color-accent', '#878681');
    root.style.setProperty('--color-muted', '#7c7884');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}