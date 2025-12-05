// Auto-generated Framer color updater
// Song: "Never Call Me (feat. Kurupt)" by Jhené Aiko
// Generated: 12/5/2025, 9:01:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c29949",
  "secondary": "#2fb858",
  "accent": "#e15444",
  "muted": "#d48f87"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c29949');
    root.style.setProperty('--color-secondary', '#2fb858');
    root.style.setProperty('--color-accent', '#e15444');
    root.style.setProperty('--color-muted', '#d48f87');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}