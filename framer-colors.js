// Auto-generated Framer color updater
// Song: "Hot & Sexy" by Zara Larsson
// Generated: 8/25/2026, 9:21:43 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3b3a27",
  "secondary": "#d0ac8e",
  "accent": "#2678ab",
  "muted": "#87afb8"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3b3a27');
    root.style.setProperty('--color-secondary', '#d0ac8e');
    root.style.setProperty('--color-accent', '#2678ab');
    root.style.setProperty('--color-muted', '#87afb8');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}