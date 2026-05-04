// Auto-generated Framer color updater
// Song: "Kill This Love" by BLACKPINK
// Generated: 5/4/2026, 9:39:39 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#dfafb8",
  "secondary": "#493536",
  "accent": "#74545c",
  "muted": "#745454"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#dfafb8');
    root.style.setProperty('--color-secondary', '#493536');
    root.style.setProperty('--color-accent', '#74545c');
    root.style.setProperty('--color-muted', '#745454');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}