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

function CookieText() {
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
            Cookie Policy
          </Heading>
          <Text mb={4} color="fg.muted">
            <strong>Effective Date:</strong> 19 June 2025
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            1. Introduction
          </Heading>
          <Text mb={4} color="fg.muted">
            At <strong>FitLineHealth</strong>, we use cookies and similar
            tracking technologies to enhance your experience on our website{" "}
            <Link
              color="purple.600"
              href="https://www.fitlinehealth.fit"
              _hover={{ color: "purple.700" }}
              isExternal
            >
              https://www.fitlinehealth.fit
            </Link>
            , to analyze usage, and to deliver personalized content.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            2. What Are Cookies?
          </Heading>
          <Text mb={4} color="fg.muted">
            Cookies are small text files stored on your device by your browser.
            They help websites remember your preferences, login status, and
            other information to improve functionality and user experience.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            3. Types of Cookies We Use
          </Heading>
          <List.Root mb={4} pl={6} styleType="disc" color="fg.muted">
            <List.Item>
              <strong>Essential Cookies</strong>: Necessary for website
              operation and cannot be switched off.
            </List.Item>
            <List.Item>
              <strong>Performance Cookies</strong>: Collect information on how
              visitors use our site to improve performance.
            </List.Item>
            <List.Item>
              <strong>Functional Cookies</strong>: Remember your preferences to
              personalize your experience.
            </List.Item>
            <List.Item>
              <strong>Advertising Cookies</strong>: Used to deliver relevant
              advertisements tailored to your interests.
            </List.Item>
          </List.Root>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            4. How We Use Cookies
          </Heading>
          <Text mb={4} color="fg.muted">
            We use cookies to:
          </Text>
          <List.Root mb={4} pl={6} styleType="disc" color="fg.muted">
            <List.Item>Ensure website functionality</List.Item>
            <List.Item>Analyze site usage and improve performance</List.Item>
            <List.Item>Remember your preferences and settings</List.Item>
            <List.Item>Deliver personalized content and advertising</List.Item>
          </List.Root>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            5. Your Cookie Choices
          </Heading>
          <Text mb={4} color="fg.muted">
            When you first visit our website, you will see a cookie consent
            banner allowing you to accept, reject, or customize your cookie
            preferences.
          </Text>
          <Text mb={4} color="fg.muted">
            You can change or withdraw your consent at any time by adjusting
            your browser settings or through the cookie management options on
            our site.
          </Text>
          <Text mb={8} color="fg.muted">
            For more details, please visit our{" "}
            <Link
              color="purple.solid"
              href="https://www.fitlinehealth.fit/cookies"
              _hover={{ color: "purple.fg" }}
              isExternal
            >
              Cookie Settings
            </Link>{" "}
            page.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            6. Third-Party Cookies
          </Heading>
          <Text mb={4} color="fg.muted">
            We may allow third-party services, such as analytics and advertising
            partners, to place cookies on your device. These third parties use
            cookies to collect information about your online activities across
            different websites to provide targeted ads and measure campaign
            effectiveness.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            7. Updates to This Cookie Policy
          </Heading>
          <Text mb={4} color="fg.muted">
            We may update this Cookie Policy occasionally to reflect changes in
            laws, technology, or our practices.
          </Text>
          <Text mb={8} color="fg.muted">
            Significant changes will be communicated via updates on this page or
            through other communication channels.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            8. Contact Us
          </Heading>
          <Text mb={4} color="fg.muted">
            If you have questions or concerns about our use of cookies, please
            contact:
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

export default CookieText;
