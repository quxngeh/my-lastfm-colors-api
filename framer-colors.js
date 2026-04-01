// Auto-generated Framer color updater
// Song: "New Person, Same Old Mistakes" by Tame Impala
// Generated: 4/1/2026, 9:21:44 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#49394e",
  "secondary": "#c3a4b6",
  "accent": "#a391ac",
  "muted": "#a19ea1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#49394e');
    root.style.setProperty('--color-secondary', '#c3a4b6');
    root.style.setProperty('--color-accent', '#a391ac');
    root.style.setProperty('--color-muted', '#a19ea1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}