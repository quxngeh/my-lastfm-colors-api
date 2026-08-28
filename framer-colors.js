// Auto-generated Framer color updater
// Song: "Feel Special" by TWICE
// Generated: 8/28/2026, 8:26:43 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cbad86",
  "secondary": "#362811",
  "accent": "#6b4623",
  "muted": "#815c2f"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cbad86');
    root.style.setProperty('--color-secondary', '#362811');
    root.style.setProperty('--color-accent', '#6b4623');
    root.style.setProperty('--color-muted', '#815c2f');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}