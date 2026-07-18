// Auto-generated Framer color updater
// Song: "METRONOME" by izna
// Generated: 7/18/2026, 10:05:42 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e091b8",
  "secondary": "#7a3058",
  "accent": "#605188",
  "muted": "#c0494e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e091b8');
    root.style.setProperty('--color-secondary', '#7a3058');
    root.style.setProperty('--color-accent', '#605188');
    root.style.setProperty('--color-muted', '#c0494e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}