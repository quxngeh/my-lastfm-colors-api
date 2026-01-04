// Auto-generated Framer color updater
// Song: "Talk talk featuring troye sivan" by Charli XCX & Troye Sivan
// Generated: 1/4/2026, 9:00:54 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8ac809",
  "secondary": "#162a05",
  "accent": "#567913",
  "muted": "#3c6508"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8ac809');
    root.style.setProperty('--color-secondary', '#162a05');
    root.style.setProperty('--color-accent', '#567913');
    root.style.setProperty('--color-muted', '#3c6508');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}