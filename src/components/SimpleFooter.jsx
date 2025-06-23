import { Box, Flex, Link, HStack, Text } from "@chakra-ui/react";

function SimpleFooter() {
  return (
    <Box
      as="footer"
      w="full"
      bg={{ base: "gray.900", _dark: "gray.800" }}
      borderBottom="1px"
      borderColor="border"
    >
      <Box maxW="container.xl" mx="auto" px={8} py={4}>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Text color="gray.300">
              © 2025 FitLineHealth. All rights reserved.
            </Text>
          </Flex>
          <Flex gap="4" as="nav" align="center" position="relative">
            <Link
              href="/fitlinehealth.fit/privacy"
              color="gray.300"
              _hover={{ color: "purple.400" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/fitlinehealth.fit/terms"
              color="gray.300"
              _hover={{ color: "purple.400" }}
            >
              Terms of Service
            </Link>
            <Link
              href="/fitlinehealth.fit/cookies"
              color="gray.300"
              _hover={{ color: "purple.400" }}
            >
              Cookie Policy
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default SimpleFooter;
