// Auto-generated Framer color updater
// Song: "Party O'Clock" by NMIXX
// Generated: 6/23/2026, 10:12:28 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#233034",
  "secondary": "#bcc4c5",
  "accent": "#6a84a9",
  "muted": "#75a7bb"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#233034');
    root.style.setProperty('--color-secondary', '#bcc4c5');
    root.style.setProperty('--color-accent', '#6a84a9');
    root.style.setProperty('--color-muted', '#75a7bb');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}