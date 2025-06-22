import {
  Box,
  Heading,
  Text,
  List,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";

function TermsOfUseText() {
  return (
    <Box bg="bg.subtle" w="full" minH="100vh">
      <Box p={6} maxW="4xl" mx="auto">
        <Box
          p={12}
          bg="bg"
          borderWidth="1px"
          borderColor="border.emphasized"
          borderRadius="lg"
        >
          <Heading as="h1" size="4xl" mb={6} color="fg">
            Terms of Use
          </Heading>
          <Text mb={4} color="fg.muted">
            <strong>Effective Date:</strong> 22 June 2025
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            1. Acceptance of Terms
          </Heading>
          <Text mb={4} color="fg.muted">
            By accessing or using the FitLineHealth platform, you agree to be
            bound by these Terms of Use and all applicable laws and regulations.
            If you do not agree with any part of these terms, you must not use
            our services.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            2. Description of Service
          </Heading>
          <Text mb={4} color="fg.muted">
            FitLineHealth provides tools for analyzing health and fitness data,
            syncing with platforms like Garmin Connect, and planning workouts.
            The services are provided "as is" without warranties of any kind.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            3. User Responsibilities
          </Heading>
          <List.Root mb={4} pl={6} styleType="disc" color="fg.muted">
            <List.Item>
              You must be at least 13 years old to use our services.
            </List.Item>
            <List.Item>
              You agree not to misuse the service or access it using
              unauthorized methods.
            </List.Item>
            <List.Item>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </List.Item>
          </List.Root>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            4. Intellectual Property
          </Heading>
          <Text mb={4} color="fg.muted">
            All content and materials provided by FitLineHealth, including
            logos, text, software, and design, are the property of FitLineHealth
            or its licensors and are protected by copyright and trademark laws.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            5. Termination
          </Heading>
          <Text mb={4} color="fg.muted">
            We may suspend or terminate your access to the service at any time,
            with or without cause or notice, including if you violate these
            Terms of Use.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            6. Limitation of Liability
          </Heading>
          <Text mb={4} color="fg.muted">
            FitLineHealth will not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of
            the service, even if we have been advised of the possibility of such
            damages.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            7. Changes to Terms
          </Heading>
          <Text mb={4} color="fg.muted">
            We reserve the right to update or modify these Terms of Use at any
            time. Changes will be effective immediately upon posting. Continued
            use of the service constitutes acceptance of the new terms.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            8. Governing Law
          </Heading>
          <Text mb={4} color="fg.muted">
            These Terms of Use are governed by and construed in accordance with
            the laws of Norway, without regard to its conflict of law
            principles.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            9. Contact Us
          </Heading>
          <Text mb={4} color="fg.muted">
            If you have any questions about these Terms of Use, please contact:
          </Text>
          <Text color="fg">
            <strong>FitLineHealth</strong>
          </Text>
          <VStack spacing={4} align="start">
            <HStack spacing={3}>
              <Text color="purple.solid">
                <LuMail />
              </Text>
              <Link
                href="mailto:support@fitlinehealth.fit"
                color="purple.solid"
                _hover={{ color: "purple.fg" }}
              >
                support@fitlinehealth.fit
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default TermsOfUseText;
