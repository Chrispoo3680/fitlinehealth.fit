import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={{ base: "gray.900", _dark: "gray.800" }}
      color="white"
      py={12}
    >
      <Box maxW="container.xl" mx="auto" px={6}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Box gridColumn={{ base: "1", md: "1 / 3" }}>
            <Heading as="h3" size="lg" color="purple.400" mb={4}>
              FitLineHealth
            </Heading>
            <Text color="gray.300" mb={4} maxW="md">
              Empowering your fitness journey with smart data analysis and
              intuitive tools for better health outcomes.
            </Text>
          </Box>

          <VStack align="start" spacing={4}>
            <Heading as="h4" size="md" mb={4}>
              Navigation
            </Heading>
            <VStack spacing={2} align="start">
              <Link
                href="#home"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Home
              </Link>
              <Link
                href="#features"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Features
              </Link>
              <Link
                href="#about"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                About
              </Link>
              <Link
                href="#privacy"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Privacy
              </Link>
              <Link
                href="#contact"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Contact
              </Link>
            </VStack>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h4" size="md" mb={4}>
              Legal
            </Heading>
            <VStack spacing={2} align="start">
              <Link
                href="/privacy"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Terms of Use
              </Link>
              <Link
                href="/cookies"
                color="gray.300"
                _hover={{ color: "purple.400" }}
              >
                Cookie Policy
              </Link>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Box
          borderTop="1px"
          borderColor="gray.700"
          mt={8}
          pt={8}
          textAlign="center"
        >
          <Text color="gray.400">
            © 2025 FitLineHealth. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
