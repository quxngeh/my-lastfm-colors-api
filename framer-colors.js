// Auto-generated Framer color updater
// Song: "IN & OUT (with RuRu)" by Park Moonchi
// Generated: 6/14/2026, 10:07:31 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e0588a",
  "secondary": "#3b6c6b",
  "accent": "#eabc6b",
  "muted": "#ac4423"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e0588a');
    root.style.setProperty('--color-secondary', '#3b6c6b');
    root.style.setProperty('--color-accent', '#eabc6b');
    root.style.setProperty('--color-muted', '#ac4423');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}