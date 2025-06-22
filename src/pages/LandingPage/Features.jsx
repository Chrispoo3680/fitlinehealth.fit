import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Center,
} from "@chakra-ui/react";

const Features = () => {
  const features = [
    {
      title: "Garmin Connect Integration",
      description:
        "Seamlessly sync your Garmin device data for comprehensive fitness tracking and analysis.",
      icon: "🔗",
    },
    {
      title: "Workout Planning Tools",
      description:
        "Create custom workout plans tailored to your fitness goals and schedule.",
      icon: "📋",
    },
    {
      title: "Data Visualization",
      description:
        "Transform your fitness data into clear, actionable insights with beautiful charts and graphs.",
      icon: "📊",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your fitness journey with detailed progress tracking and milestone celebrations.",
      icon: "📈",
    },
    {
      title: "Export & Reports",
      description:
        "Generate detailed reports and export your data in multiple formats for further analysis.",
      icon: "📄",
    },
    {
      title: "Privacy & Security",
      description:
        "Your data is protected with enterprise-grade security and privacy measures.",
      icon: "🔒",
    },
  ];

  return (
    <Box as="section" id="features" py={20} bg="bg">
      <Box maxW="container.xl" mx="auto" px={6}>
        <VStack textAlign="center" mb={16} spacing={4}>
          <Heading as="h2" size={{ base: "xl", lg: "2xl" }} color="fg">
            Powerful Features for Your Fitness Journey
          </Heading>
          <Text fontSize="xl" color="fg.muted" maxW="3xl">
            Everything you need to take control of your fitness data and achieve
            your goals.
          </Text>
        </VStack>

        <Center>
          <SimpleGrid columns={2} columnGap="2" rowGap="4" maxW="7xl">
            {features.map((feature, index) => (
              <Box
                key={index}
                p={6}
                borderWidth="1px"
                borderColor="border.emphasized"
                borderRadius="lg"
                _hover={{
                  borderColor: "purple.emphasized",
                  shadow: "lg",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s",
                }}
                transition="all 0.2s"
              >
                <VStack align="start" spacing={4}>
                  <Text fontSize="4xl">{feature.icon}</Text>
                  <Heading as="h3" size="lg" color="fg">
                    {feature.title}
                  </Heading>
                  <Text color="fg.muted" lineHeight="relaxed">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
};

export default Features;
