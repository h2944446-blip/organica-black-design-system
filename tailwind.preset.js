/**
 * Organica Black — Tailwind CSS preset
 *
 * Usage (tailwind.config.js):
 *   module.exports = {
 *     presets: [require('./organica-black-design-system/tailwind.preset')],
 *     content: [...],
 *   }
 *
 * Then: bg-brand, text-brand-dark, font-heading, etc.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7045af", // primary purple
          light: "#8b65c2",
          dark: "#59378a",
          black: "#111111",
          gray: "#2a2a2a",
          white: "#ffffff",
        },
      },
      fontFamily: {
        heading: ["Alata", "sans-serif"],
        body: ["'Roboto Slab'", "serif"],
      },
      letterSpacing: {
        caps: "0.3em", // NATURE & MORE tagline tracking
      },
    },
  },
};
