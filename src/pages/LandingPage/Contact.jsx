import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Link
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { LuMail } from "react-icons/lu"

const Contact = () => {
  return (
    <Box as="section" id="contact" py={20} bg="bg.subtle">
      <Box maxW="container.xl" mx="auto" px={6}>
        <Box maxW="4xl" mx="auto">
          <VStack textAlign="center" mb={16} spacing={4}>
            <Heading as="h2" size={{ base: "xl", lg: "2xl" }} color="fg">
              Get in Touch
            </Heading>
            <Text fontSize="xl" color="fg.muted">
              Have questions? We'd love to hear from you.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} columnGap="10" alignItems="start">
            <Box
              p={6}
              bg="bg"
              borderWidth="1px"
              borderColor="border.emphasized"
              borderRadius="lg"
            >
              <VStack spacing={4} align="stretch">
                <Heading as="h3" size="lg" color="fg" mb={4}>
                  Send us a message
                </Heading>
                <FormControl>
                  <FormLabel color="fg.muted">Name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                <FormControl>
                  <FormLabel color="fg.muted">Email</FormLabel>
                  <Input type="email" placeholder="your@email.com" />
                </FormControl>
                <FormControl>
                  <FormLabel color="fg.muted">Message</FormLabel>
                  <Textarea rows={4} placeholder="How can we help you?" />
                </FormControl>
                <Button
                  bg="purple.solid"
                  _hover={{ bg: "purple.fg" }}
                  w="full"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>

            <VStack spacing={8} align="stretch">
              <Box mb={4}>
                <Heading as="h3" size="lg" color="fg" mb={4}>
                  Contact Information
                </Heading>
                <VStack spacing={4} align="start">
                  <HStack spacing={3}>
                    <Text color="purple.solid"><LuMail /></Text>
                    <Link href="mailto:support@fitlinehealth.fit" color="purple.solid" _hover={{ color: "purple.fg" }}>
                      support@fitlinehealth.fit
                    </Link>
                  </HStack>
                </VStack>
              </Box>

              <Box>
                <Heading as="h3" size="lg" color="fg" mb={4}>
                  Quick Links
                </Heading>
                <VStack spacing={2} align="start">
                  <Link
                    href="#"
                    color="purple.solid"
                    _hover={{ color: "purple.fg" }}
                  >
                    FAQ & Support
                  </Link>
                  <Link
                    href="#"
                    color="purple.solid"
                    _hover={{ color: "purple.fg" }}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="#"
                    color="purple.solid"
                    _hover={{ color: "purple.fg" }}
                  >
                    Feature Requests
                  </Link>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;