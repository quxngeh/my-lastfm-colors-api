// Auto-generated Framer color updater
// Song: "More More More" by Kylie Minogue
// Generated: 7/30/2026, 10:55:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e3e4e2",
  "secondary": "#37393d",
  "accent": "#ac7e69",
  "muted": "#866559"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e3e4e2');
    root.style.setProperty('--color-secondary', '#37393d');
    root.style.setProperty('--color-accent', '#ac7e69');
    root.style.setProperty('--color-muted', '#866559');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}