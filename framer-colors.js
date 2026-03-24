// Auto-generated Framer color updater
// Song: "Twinkle" by Girls' Generation-TTS
// Generated: 3/24/2026, 9:14:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e4c7c6",
  "secondary": "#4e4146",
  "accent": "#c23444",
  "muted": "#d78b43"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e4c7c6');
    root.style.setProperty('--color-secondary', '#4e4146');
    root.style.setProperty('--color-accent', '#c23444');
    root.style.setProperty('--color-muted', '#d78b43');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}