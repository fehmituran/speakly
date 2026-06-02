/**
 * Design tokens for use in StyleSheet (SafeAreaView, animations, platform-specific).
 * For NativeWind styling, use the CSS utilities in global.css instead.
 */

export const colors = {
  /* Primary Brand */
  primary: "#6c4ef5",       // Lingua Purple
  primaryDeep: "#5b3bf6",   // Lingua Deep Purple
  linguaBlue: "#4d8bff",    // Lingua Blue
  linguaGreen: "#21c16b",   // Lingua Green

  /* Semantic */
  success: "#21c16b",
  warning: "#ffc800",
  streak: "#ff8a00",
  error: "#ff4d4f",
  info: "#4d8bff",

  /* Neutrals */
  ink: "#0d132b",           // Text / Primary
  muted: "#6b7280",         // Text / Secondary
  border: "#e5e7eb",
  surface: "#f6f7fb",
  background: "#ffffff",
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 31 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22 },
  bodyLg: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 26 },
  bodyMd: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 22 },
  bodySm: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 21 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15 },
} as const;

export type ColorKey = keyof typeof colors;
export type FontKey = keyof typeof fonts;
export type TypographyKey = keyof typeof typography;
