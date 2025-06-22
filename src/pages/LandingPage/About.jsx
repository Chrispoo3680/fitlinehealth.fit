import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box as="section" id="about" py={20} bg="bg.subtle">
      <Box maxW="container.xl" mx="auto" px={6}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading as="h2" size={{ base: "xl", lg: "2xl" }} color="fg" mb={8}>
            About FitLineHealth
          </Heading>
          <VStack spacing={8}>
            <Text fontSize="lg" color="fg.muted" lineHeight="relaxed">
              At FitLineHealth, our mission is to empower fitness enthusiasts
              with the tools they need to make sense of their fitness data. We
              believe that understanding your body's patterns and progress is
              key to achieving lasting health and wellness goals.
            </Text>
            <Text fontSize="lg" color="fg.muted" lineHeight="relaxed">
              Our platform combines cutting-edge technology with intuitive
              design to transform complex fitness data into actionable insights.
              Whether you're a weekend warrior or a dedicated athlete,
              FitLineHealth helps you stay motivated, track progress, and
              optimize your training for better results.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
