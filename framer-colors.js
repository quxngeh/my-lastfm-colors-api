// Auto-generated Framer color updater
// Song: "C'mon (feat. amine)" by Jini
// Generated: 9/12/2026, 12:26:45 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0a0b0b",
  "secondary": "#d5d5d6",
  "accent": "#79858b",
  "muted": "#6f7884"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0a0b0b');
    root.style.setProperty('--color-secondary', '#d5d5d6');
    root.style.setProperty('--color-accent', '#79858b');
    root.style.setProperty('--color-muted', '#6f7884');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}