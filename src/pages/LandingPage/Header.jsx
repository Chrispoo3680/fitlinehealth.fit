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
            <Link href="/" click>
              <Image
                height="50px"
                src={colorMode === "light" ? logo : invertedLogo}
              />
            </Link>
          </Flex>

          <Flex gap="4" as="nav" align="center" position="relative">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{
                    transformOrigin: "center right", // expand leftward from icon
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <Link
                    href="#home"
                    color="gray.fg"
                    _hover={{ color: "purple.focusRing" }}
                  >
                    Home
                  </Link>
                  <Link
                    href="#features"
                    color="gray.fg"
                    _hover={{ color: "purple.focusRing" }}
                  >
                    Features
                  </Link>
                  <Link
                    href="#about"
                    color="gray.fg"
                    _hover={{ color: "purple.focusRing" }}
                  >
                    About
                  </Link>
                  <Link
                    href="#privacy"
                    color="gray.fg"
                    _hover={{ color: "purple.focusRing" }}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#contact"
                    color="gray.fg"
                    _hover={{ color: "purple.focusRing" }}
                  >
                    Contact
                  </Link>
                  <Center>
                    <ColorModeButton />
                  </Center>
                  <Link href="/login">
                    <Button
                      fontSize="sm"
                      size="sm"
                      bg="purple.solid"
                      _hover={{ bg: "purple.fg" }}
                      px={4}
                      py={2}
                    >
                      Log In
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <IconButton
              aria-label="Open menu"
              variant="ghost"
              size="xl"
              onClick={() => setIsOpen((open) => !open)}
            >
              <FiMenu />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
