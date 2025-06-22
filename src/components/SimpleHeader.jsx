import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { useColorMode } from "@components/ui/color-mode";
import logo from "@assets/fitline_logo.png";
import invertedLogo from "@assets/fitline_logo_inverted.png";

function SimpleHeader() {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      w="full"
      bg={{ base: "purple.200", _dark: "gray.800" }}
      borderBottom="1px"
      borderColor="border"
      position="sticky"
      top="0"
      zIndex="50"
    >
      <Box maxW="container.xl" mx="auto" px={8} py={4}>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Link href="/" click>
              <Image
                height="50px"
                src={colorMode === "light" ? logo : invertedLogo}
              />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default SimpleHeader;
