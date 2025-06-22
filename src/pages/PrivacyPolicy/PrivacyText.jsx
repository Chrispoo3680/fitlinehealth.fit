import {
  Box,
  Heading,
  Text,
  List,
  Link,
  Flex,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";

function PolicyText() {
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
            Privacy Policy
          </Heading>
          <Text mb={4} color="fg.muted">
            <strong>Effective Date:</strong> 19 June 2025
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            1. Introduction
          </Heading>
          <Text mb={4} color="fg.muted">
            At <strong>FitLineHealth</strong>, we are committed to protecting
            the privacy and security of your personal information. This policy
            explains how we collect, use, store, and protect data gathered
            through our website,{" "}
            <Link
              color="purple.solid"
              href="https://www.fitlinehealth.fit"
              _hover={{ color: "purple.fg" }}
              isExternal
            >
              https://www.fitlinehealth.fit
            </Link>
            , and related services.
          </Text>
          <Text mb={4} color="fg.muted">
            We process personal data to:
          </Text>
          <List.Root mb={4} pl={6} color="fg.muted">
            <List.Item>
              Enhance your experience and tailor our services to your
              preferences
            </List.Item>
            <List.Item>
              Provide timely support and respond to inquiries
            </List.Item>
            <List.Item>Improve our products and user interfaces</List.Item>
            <List.Item>
              Conduct essential business operations, such as billing and account
              management
            </List.Item>
          </List.Root>
          <Text mb={4} color="fg.muted">
            We handle all personal information in accordance with the{" "}
            <strong>General Data Protection Regulation (GDPR)</strong> and other
            applicable laws.
          </Text>
          <Text mb={4} color="fg.muted">
            If you have questions or concerns, please contact us at:
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
          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            2. Scope of This Policy
          </Heading>
          <Text mb={4} color="fg.muted">
            This policy applies to:
          </Text>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>Website visitors</List.Item>
            <List.Item>Registered users</List.Item>
            <List.Item>Customers and business contacts</List.Item>
          </List.Root>
          <Text mb={8} color="fg.muted">
            Whether you're browsing, subscribing to services, or communicating
            with us, your data is handled with the highest standards of
            confidentiality and security.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            3. Data Collection and Use
          </Heading>
          <Heading as="h3" size="md" mb={2} color="fg">
            Types of Data We Collect:
          </Heading>
          <List.Root mb={4} pl={6} color="fg.muted">
            <List.Item>
              <strong>Personal identifiers</strong> (e.g., name, email address,
              phone number)
            </List.Item>
            <List.Item>
              <strong>Account and usage data</strong> (e.g., login information,
              preferences, usage patterns)
            </List.Item>
            <List.Item>
              <strong>Transaction data</strong> (e.g., purchase history, billing
              info)
            </List.Item>
            <List.Item>
              <strong>Technical data</strong> (e.g., IP address, browser type,
              cookies)
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2} color="fg">
            How We Use Your Data:
          </Heading>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>
              To deliver services and maintain functionality
            </List.Item>
            <List.Item>To respond to your requests and support needs</List.Item>
            <List.Item>To personalize your user experience</List.Item>
            <List.Item>To improve site performance and security</List.Item>
            <List.Item>To send service-related communications</List.Item>
          </List.Root>
          <Text mb={8} color="fg.muted">
            We do <strong>not sell or rent</strong> your personal information.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            4. Legal Basis for Processing
          </Heading>
          <Text mb={8} color="fg.muted">
            We only process your personal data when we have a legal basis under
            GDPR, such as:
          </Text>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>
              Your <strong>consent</strong>
            </List.Item>
            <List.Item>
              The <strong>performance of a contract</strong>
            </List.Item>
            <List.Item>
              <strong>Legal obligations</strong> we are bound to
            </List.Item>
            <List.Item>
              Our <strong>legitimate interests</strong>, where these are not
              overridden by your rights
            </List.Item>
          </List.Root>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            5. Data Storage and Security
          </Heading>
          <Heading as="h3" size="md" mb={2} color="fg">
            Storage Locations
          </Heading>
          <Text mb={4} color="fg.muted">
            Your data is stored securely on servers managed by reputable hosting
            providers in the <strong>European Economic Area (EEA)</strong>. If
            data is transferred outside the EEA, we ensure adequate safeguards
            are in place (e.g., Standard Contractual Clauses or equivalent
            mechanisms).
          </Text>

          <Heading as="h3" size="md" mb={2} color="fg">
            Security Measures
          </Heading>
          <List.Root mb={4} pl={6} color="fg.muted">
            <List.Item>
              <strong>Encryption</strong>: Applied to data in transit and at
              rest
            </List.Item>
            <List.Item>
              <strong>Access Controls</strong>: Limited to authorized personnel
              only
            </List.Item>
            <List.Item>
              <strong>Monitoring</strong>: Regular reviews of systems and access
              logs
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2} color="fg">
            Third-Party Processors
          </Heading>
          <Text mb={8} color="fg.muted">
            Where third parties process data on our behalf (e.g., for invoicing
            or analytics), we ensure compliance through{" "}
            <strong>Data Processing Agreements (DPAs)</strong>. These partners
            are required to implement GDPR-compliant safeguards.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            6. Your Rights Under GDPR
          </Heading>
          <Text mb={4} color="fg.muted">
            You have the following rights regarding your personal information:
          </Text>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>
              <strong>Access</strong>: Request a copy of the personal data we
              hold about you
            </List.Item>
            <List.Item>
              <strong>Rectification</strong>: Correct inaccurate or incomplete
              information
            </List.Item>
            <List.Item>
              <strong>Erasure</strong>: Request deletion of your data (“right to
              be forgotten”)
            </List.Item>
            <List.Item>
              <strong>Restriction</strong>: Limit how we process your data under
              certain conditions
            </List.Item>
            <List.Item>
              <strong>Portability</strong>: Receive your data in a structured,
              machine-readable format
            </List.Item>
            <List.Item>
              <strong>Objection</strong>: Object to certain processing
              activities
            </List.Item>
            <List.Item>
              <strong>Withdraw Consent</strong>: Withdraw consent at any time
              for consent-based processing
            </List.Item>
            <List.Item>
              <strong>Lodge Complaint</strong>: File a complaint with your data
              protection authority
            </List.Item>
          </List.Root>
          <Text mb={8} color="fg.muted">
            To exercise your rights, contact us at{" "}
            <Link
              color="purple.solid"
              href="mailto:support@fitlinehealth.fit"
              _hover={{ color: "purple.fg" }}
            >
              support@fitlinehealth.fit
            </Link>
            . We will respond within applicable legal timeframes and may request
            verification of your identity.
          </Text>

          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            7. Cookies and Tracking Technologies
          </Heading>
          <Text mb={4} color="fg.muted">
            We use cookies and tracking tools to:
          </Text>
          <List.Root mb={4} pl={6} color="fg.muted">
            <List.Item>Ensure website functionality</List.Item>
            <List.Item>Analyze performance and usage</List.Item>
            <List.Item>Remember your preferences</List.Item>
            <List.Item>Deliver personalized content</List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2} color="fg">
            Cookie Categories:
          </Heading>
          <List.Root mb={4} pl={6} color="fg.muted">
            <List.Item>
              <strong>Essential cookies</strong>: Required for site operation
            </List.Item>
            <List.Item>
              <strong>Performance cookies</strong>: Help us understand site
              usage
            </List.Item>
            <List.Item>
              <strong>Functional cookies</strong>: Personalize your experience
            </List.Item>
            <List.Item>
              <strong>Advertising cookies</strong>: Deliver targeted advertising
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2} color="fg">
            Your Choices:
          </Heading>
          <Text mb={8} color="fg.muted">
            On your first visit, you will see a{" "}
            <strong>cookie consent banner</strong> allowing you to:
          </Text>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>Accept all cookies</List.Item>
            <List.Item>Reject non-essential cookies</List.Item>
            <List.Item>Customize your cookie preferences</List.Item>
          </List.Root>
          <Text mb={8} color="fg.muted">
            You can modify your cookie settings anytime via your browser or our{" "}
            <Link
              color="purple.solid"
              href="/cookies"
              _hover={{ color: "purple.fg" }}
              isExternal
            >
              Cookie Policy
            </Link>
            .
          </Text>
          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            8. Policy Updates
          </Heading>
          <Text mb={8} color="fg.muted">
            We may update this Privacy Policy to reflect changes in laws,
            services, or internal practices.
          </Text>
          <List.Root mb={8} pl={6} color="fg.muted">
            <List.Item>
              Significant changes will be communicated via email or website
              notices
            </List.Item>
            <List.Item>
              We will always include an effective date at the top of the policy
            </List.Item>
            <List.Item>
              Where required, we will obtain your explicit consent before
              applying material changes
            </List.Item>
          </List.Root>
          <Text mb={8} color="fg.muted">
            We encourage you to review this policy periodically to stay
            informed.
          </Text>
          <Heading as="h2" size="lg" mt={8} mb={4} color="fg">
            9. Contact Us
          </Heading>
          <Text mb={8} color="fg.muted">
            For questions, requests, or concerns regarding this Privacy Policy,
            please contact:
          </Text>
          <Text color="fg">
            <strong>FitLineHealth</strong>
          </Text>
          <List.Root pl={6} mb={16}>
            <List.Item>
              <List.Indicator asChild color="purple.solid">
                <LuMail />
              </List.Indicator>
              <Link
                href="mailto:support@fitlinehealth.fit"
                color="purple.solid"
                _hover={{ color: "purple.fg" }}
              >
                support@fitlinehealth.fit
              </Link>
            </List.Item>
          </List.Root>
        </Box>
      </Box>
    </Box>
  );
}

export default PolicyText;
