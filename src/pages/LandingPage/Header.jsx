import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  IconButton,
  Image,
  Show,
  Button,
  Center,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeButton, useColorMode } from "@components/ui/color-mode";
import { FiMenu } from "react-icons/fi";
import logo from "@assets/fitline_logo.png";
import invertedLogo from "@assets/fitline_logo_inverted.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      w="full"
      bg="bg/70"
      backdropFilter="blur(8px)"
      borderBottom="1px"
      borderColor="border"
      position="sticky"
      top="0"
      zIndex="50"
    >
      <Box
        maxW="container.xl"
        mx="auto"
        px={6}
        py={4}
        marginLeft={80}
        marginRight={80}
      >
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Link href="/fitlinehealth.fit" click>
              <Image
                height="50px"
                src={colorMode === "light" ? logo : invertedLogo}
              />
            </Link>
          </Flex>

          <Flex gap="4" as="nav" align="center" position="relative">
            <Center>
              <ColorModeButton />
            </Center>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
