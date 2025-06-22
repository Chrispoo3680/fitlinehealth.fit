import { ColorModeProvider } from "@components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { system } from "@styles/Theme";

function Provider({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}

export default Provider;
