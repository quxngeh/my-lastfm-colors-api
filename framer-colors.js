// Auto-generated Framer color updater
// Song: "러시안 룰렛 Russian Roulette" by Red Velvet
// Generated: 7/7/2026, 11:34:46 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d09c71",
  "secondary": "#83350e",
  "accent": "#ebd7d0",
  "muted": "#685848"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d09c71');
    root.style.setProperty('--color-secondary', '#83350e');
    root.style.setProperty('--color-accent', '#ebd7d0');
    root.style.setProperty('--color-muted', '#685848');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}