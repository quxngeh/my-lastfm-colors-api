// Auto-generated Framer color updater
// Song: "Kream (feat. Tyga)" by Iggy Azalea
// Generated: 9/26/2026, 1:25:25 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#953630",
  "secondary": "#130e0d",
  "accent": "#64644c",
  "muted": "#5c5444"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#953630');
    root.style.setProperty('--color-secondary', '#130e0d');
    root.style.setProperty('--color-accent', '#64644c');
    root.style.setProperty('--color-muted', '#5c5444');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}