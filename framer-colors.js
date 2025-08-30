// Auto-generated Framer color updater
// Song: "Cherish (My Love)" by ILLIT
// Generated: 8/30/2025, 9:01:00 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#bbb998",
  "secondary": "#2e4125",
  "accent": "#726f33",
  "muted": "#5b4628"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#bbb998');
    root.style.setProperty('--color-secondary', '#2e4125');
    root.style.setProperty('--color-accent', '#726f33');
    root.style.setProperty('--color-muted', '#5b4628');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}