// Auto-generated Framer color updater
// Song: "I might say something stupid featuring the 1975 & jon hopkins" by Charli xcx, The 1975 & Jon Hopkins
// Generated: 9/23/2025, 9:01:10 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8ac808",
  "secondary": "#162a05",
  "accent": "#557910",
  "muted": "#3b6607"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8ac808');
    root.style.setProperty('--color-secondary', '#162a05');
    root.style.setProperty('--color-accent', '#557910');
    root.style.setProperty('--color-muted', '#3b6607');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}