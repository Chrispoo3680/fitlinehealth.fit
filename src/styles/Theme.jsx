import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false, // Set to true if you want it to match OS preference
  },
  tokens: {
    colors: {
      brand: {
        600: { value: "#8E24AA" },
      },
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        DEFAULT: { base: "white", _dark: "gray.900" },
        subtle: { base: "gray.50", _dark: "gray.800" },
      },
      text: {
        heading: { base: "gray.900", _dark: "gray.100" },
        body: { base: "gray.600", _dark: "gray.400" },
      },
      accent: {
        DEFAULT: { base: "purple.600", _dark: "purple.600" },
        hover: { base: "purple.700", _dark: "purple.500" },
      },
      border: {
        DEFAULT: { base: "gray.300", _dark: "gray.700" },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg",
        color: "text.body",
      },
    },
  },
});

export default system;
