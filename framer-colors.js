// Auto-generated Framer color updater
// Song: "LIKE THAT" by BABYMONSTER
// Generated: 9/10/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f0dfe0",
  "secondary": "#b33238",
  "accent": "#bb7471",
  "muted": "#908686"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f0dfe0');
    root.style.setProperty('--color-secondary', '#b33238');
    root.style.setProperty('--color-accent', '#bb7471');
    root.style.setProperty('--color-muted', '#908686');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}