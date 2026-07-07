/**
 * Organica Black — Design System tokens (ESM)
 * Source of truth: tokens/tokens.json
 */

export const colors = {
  purple: {
    400: "#8b65c2", // light purple
    500: "#7045af", // primary brand purple
    600: "#59378a", // dark purple
  },
  black: "#111111",
  gray900: "#2a2a2a",
  white: "#ffffff",
};

export const semantic = {
  primary: colors.purple[500],
  primaryHover: colors.purple[600],
  primarySubtle: colors.purple[400],
  text: colors.black,
  textSecondary: colors.gray900,
  textOnPrimary: colors.white,
  background: colors.white,
  backgroundInverse: colors.purple[500],
};

export const typography = {
  fontHeading: "'Alata', sans-serif",
  fontBody: "'Roboto Slab', serif",
  weightRegular: 400,
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    display: "4.5rem",
  },
  trackingCaps: "0.3em",
};

export default { colors, semantic, typography };
