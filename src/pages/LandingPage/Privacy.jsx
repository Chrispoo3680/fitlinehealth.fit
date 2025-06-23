import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Privacy = () => {
  return (
    <Box as="section" id="privacy" py={20} bg="bg">
      <Box maxW="container.xl" mx="auto" px={6}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading as="h2" size={{ base: "xl", lg: "2xl" }} color="fg" mb={8}>
            Privacy & Security
          </Heading>
          <Box
            bg="purple.subtle"
            borderRadius="lg"
            p={8}
            border="1px"
            borderColor="purple.muted"
          >
            <VStack spacing={6}>
              <Text fontSize="6xl">🔒</Text>
              <Heading as="h3" size="xl" color="fg">
                Your Data, Your Control
              </Heading>
              <Text fontSize="lg" color="fg.muted" lineHeight="relaxed">
                We take your privacy seriously. FitLineHealth employs
                enterprise-grade security measures to protect your personal
                fitness data. Your information is encrypted both in transit and
                at rest, and we never share your data with third parties without
                your explicit consent.
              </Text>
              <Text fontSize="lg" color="fg.muted" lineHeight="relaxed">
                We follow industry best practices for data protection and are
                committed to transparency in how we collect, use, and store your
                information. You maintain full control over your data and can
                export or delete it at any time.
              </Text>
              <Text fontSize="lg" color="fg.muted" lineHeight="relaxed">
                Read our{" "}
                <Link
                  href="#privacy"
                  color="purple.focusRing"
                  _hover={{ color: "purple.fg" }}
                >
                  Privacy Policy
                </Link>
                .
              </Text>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Privacy;
