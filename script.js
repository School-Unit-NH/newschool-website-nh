tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#900723",
        "secondary-fixed-dim": "#ecc06c",
        error: "#ba1a1a",
        "surface-variant": "#f6dddc",
        "primary-fixed-dim": "#ffb3b3",
        "on-tertiary-fixed": "#002020",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        surface: "#fff8f7",
        "surface-bright": "#fff8f7",
        "surface-container-low": "#fff0f0",
        "surface-container-highest": "#f6dddc",
        "institutional-blue": "#1A237E",
        "inverse-primary": "#ffb3b3",
        "surface-container-high": "#fce2e2",
        "tertiary-container": "#005f5f",
        "on-secondary-fixed-variant": "#5d4200",
        "on-primary-fixed": "#40000a",
        tertiary: "#004545",
        "on-tertiary-container": "#8ed6d6",
        "secondary-fixed": "#ffdea5",
        "on-surface-variant": "#594141",
        "on-secondary-fixed": "#271900",
        secondary: "#7a590c",
        primary: "#81001d",
        "surface-container": "#ffe9e8",
        "heritage-red": "#A51C30",
        "on-primary-container": "#ffb8b8",
        "on-secondary-container": "#78580b",
        "bright-accent": "#D4AF37",
        "on-tertiary": "#ffffff",
        outline: "#8d7070",
        "on-error-container": "#93000a",
        "primary-container": "#a51c30",
        "primary-fixed": "#ffdad9",
        "on-error": "#ffffff",
        background: "#fff8f7",
        "on-surface": "#261818",
        "surface-dim": "#eed4d4",
        "inverse-surface": "#3c2d2c",
        "on-background": "#261818",
        "secondary-container": "#fed17b",
        "tertiary-fixed": "#a6efef",
        "inverse-on-surface": "#ffedec",
        "outline-variant": "#e1bebe",
        "tertiary-fixed-dim": "#8ad3d2",
        "on-tertiary-fixed-variant": "#004f4f",
        "error-container": "#ffdad6",
        "academic-gold": "#C9A050",
        "surface-tint": "#b22738",
        "surface-cream": "#FAF9F6",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        unit: "8px",
        "margin-desktop": "64px",
        "section-padding": "80px",
        gutter: "24px",
        "margin-mobile": "16px",
      },
      fontFamily: {
        "label-md": ["Hanken Grotesk"],
        "display-lg": ['"Source Serif 4"'],
        "body-lg": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "headline-lg": ['"Source Serif 4"'],
        "headline-xl": ['"Source Serif 4"'],
        "display-lg-mobile": ['"Source Serif 4"'],
      },
      fontSize: {
        "label-md": [
          "14px",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "display-lg": [
          "56px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-xl": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
};

// Simple header background shift on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("py-2", "shadow-md");
    header.classList.remove("py-4", "shadow-sm");
  } else {
    header.classList.add("py-4", "shadow-sm");
    header.classList.remove("py-2", "shadow-md");
  }
});
