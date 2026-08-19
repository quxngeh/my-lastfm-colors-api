// Auto-generated Framer color updater
// Song: "Mr.Mr." by Girls' Generation
// Generated: 8/19/2026, 9:19:30 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#aa6362",
  "secondary": "#18253b",
  "accent": "#e1c7a5",
  "muted": "#bfa1c5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#aa6362');
    root.style.setProperty('--color-secondary', '#18253b');
    root.style.setProperty('--color-accent', '#e1c7a5');
    root.style.setProperty('--color-muted', '#bfa1c5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}